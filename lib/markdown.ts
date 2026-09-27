import { readFileSync } from "fs";
import path from "path";

const root = process.cwd();

export function readRepoFile(relativePath: string): string {
  return readFileSync(path.join(root, relativePath), "utf8");
}

export function manifestoExcerpt(): string[] {
  const raw = readRepoFile("docs/MANIFESTO.md");
  const blocks = raw.split(/\n\n+/);
  const prose = blocks.filter((block) => {
    const line = block.trim();
    if (!line) return false;
    if (line.startsWith("#")) return false;
    if (line.startsWith("**Version")) return false;
    if (line.startsWith("**Published")) return false;
    if (line === "---") return false;
    return true;
  });
  return prose.slice(0, 3);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(value: string): string {
  let html = escapeHtml(value);
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g,
    '<a href="$2">$1</a>',
  );
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return html;
}

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i += 1;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      out.push("<hr />");
      i += 1;
      continue;
    }

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i]
          .split("|")
          .slice(1, -1)
          .map((cell) => cell.trim());
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) {
          rows.push(cells);
        }
        i += 1;
      }
      const [head, ...body] = rows;
      if (head) {
        out.push("<table><thead><tr>");
        head.forEach((cell) => out.push(`<th>${inline(cell)}</th>`));
        out.push("</tr></thead><tbody>");
        body.forEach((row) => {
          out.push("<tr>");
          row.forEach((cell) => out.push(`<td>${inline(cell)}</td>`));
          out.push("</tr>");
        });
        out.push("</tbody></table>");
      }
      continue;
    }

    if (line.startsWith("# ")) {
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
      i += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      i += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      i += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i += 1;
      }
      out.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (line.startsWith("- ")) {
      out.push("<ul>");
      while (i < lines.length && lines[i].startsWith("- ")) {
        out.push(`<li>${inline(lines[i].slice(2))}</li>`);
        i += 1;
      }
      out.push("</ul>");
      continue;
    }

    const para: string[] = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("|") &&
      !lines[i].startsWith("> ") &&
      !/^---+$/.test(lines[i].trim())
    ) {
      para.push(lines[i]);
      i += 1;
    }
    const joined = para.join(" ");
    if (/^\*\*[\s\S]+\*\*$/.test(joined.trim())) {
      out.push(`<blockquote><p>${inline(joined)}</p></blockquote>`);
    } else {
      out.push(`<p>${inline(joined)}</p>`);
    }
  }

  return out.join("\n");
}
