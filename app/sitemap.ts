import { MetadataRoute } from "next";

const paths = [
  "",
  "/manifesto",
  "/trust",
  "/help",
  "/help/thanks",
  "/provide",
  "/provide/thanks",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://trailervegas.com${path}`,
  }));
}
