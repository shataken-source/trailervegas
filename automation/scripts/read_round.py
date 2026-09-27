#!/usr/bin/env python3
"""
Reads ROUNDS.md to determine which AI is up next and what they're assigned.
Outputs to GitHub Actions environment variables.
"""

import os
import re
import sys


def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return ""


def parse_rounds(content):
    """Extract current round info from ROUNDS.md."""
    current = re.search(
        r'## Current Round(.*?)## Round History',
        content,
        re.DOTALL
    )
    if not current:
        return None

    section = current.group(1)

    topic_match = re.search(r'\*\*Topic:\*\*\s*(.+)', section)
    topic = topic_match.group(1).strip() if topic_match else "Open brainstorm"

    assignments = {}
    table_rows = re.findall(
        r'\|\s*(\w+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|',
        section
    )
    for ai, task, status in table_rows:
        ai_clean = ai.strip().lower()
        if ai_clean in ['claude', 'grok', 'chatgpt', 'gemini', 'emergent']:
            assignments[ai_clean] = {
                'task': task.strip(),
                'status': status.strip()
            }

    return {
        'topic': topic,
        'assignments': assignments
    }


def main():
    rounds_content = read_file('ROUNDS.md')
    if not rounds_content:
        print("ERROR: ROUNDS.md not found")
        sys.exit(1)

    round_info = parse_rounds(rounds_content)
    if not round_info:
        print("ERROR: Could not parse Current Round from ROUNDS.md")
        sys.exit(1)

    github_env = os.environ.get('GITHUB_ENV')
    if github_env:
        with open(github_env, 'a') as f:
            f.write(f"ROUND_TOPIC={round_info['topic']}\n")
            for ai, info in round_info['assignments'].items():
                f.write(f"ROUND_{ai.upper()}_TASK={info['task']}\n")
                f.write(f"ROUND_{ai.upper()}_STATUS={info['status']}\n")

    print(f"Round topic: {round_info['topic']}")
    for ai, info in round_info['assignments'].items():
        print(f"  {ai}: {info['task']} [{info['status']}]")


if __name__ == '__main__':
    main()
