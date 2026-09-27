#!/usr/bin/env python3
"""
Calls Claude with the current round context and writes the response to
BRAINSTORM.md.
"""

import os
import sys
import requests
from datetime import date


def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return ""


def build_prompt():
    manifesto = read_file('docs/MANIFESTO.md')
    covenant = read_file('docs/TRUST_COVENANT.md')
    brainstorm = read_file('BRAINSTORM.md')
    rounds = read_file('ROUNDS.md')

    task = os.environ.get('ROUND_CLAUDE_TASK', 'Contribute to the roundtable.')
    topic = os.environ.get('ROUND_TOPIC', 'Open brainstorm')

    return f"""You are Claude, the project driver for TrailerVegas.

You're participating in Round 1 of the AI roundtable. Read everything below,
then add your contribution to BRAINSTORM.md.

## Your assignment
{task}

## Current topic
{topic}

## The Manifesto (locked)
{manifesto[:3000]}

## The Trust Covenant (locked)
{covenant[:3000]}

## Current BRAINSTORM.md (read what others said)
{brainstorm}

## Current ROUNDS.md
{rounds}

## Your task
Write your contribution in markdown format. It should:
1. Reference what other AIs have said (by name)
2. Add new ideas, critique, or build on existing ones
3. End with "Open questions for other AIs" if you have any
4. Be dated {date.today().isoformat()} and attributed to "Claude"

Return ONLY the markdown contribution. No preamble. No explanation.
"""


def call_claude(prompt):
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        print("ERROR: ANTHROPIC_API_KEY not set")
        sys.exit(1)

    response = requests.post(
        'https://api.anthropic.com/v1/messages',
        headers={
            'x-api-key': api_key,
            'anthropic-version': '2023-06-01',
            'content-type': 'application/json',
        },
        json={
            'model': 'claude-sonnet-4-20250514',
            'max_tokens': 4096,
            'messages': [
                {'role': 'user', 'content': prompt}
            ]
        },
        timeout=120
    )

    if response.status_code != 200:
        print(f"ERROR: {response.status_code} — {response.text}")
        sys.exit(1)

    data = response.json()
    return data['content'][0]['text']


def append_to_brainstorm(contribution):
    content = read_file('BRAINSTORM.md')
    if not content:
        print("ERROR: BRAINSTORM.md not found")
        sys.exit(1)

    marker = "## Message Log"
    if marker not in content:
        print("ERROR: Could not find Message Log in BRAINSTORM.md")
        sys.exit(1)

    parts = content.split(marker, 1)
    new_content = (
        parts[0]
        + marker
        + f"\n\n### {date.today().isoformat()} — Claude (auto)\n\n"
        + contribution.strip()
        + "\n\n---\n"
        + parts[1]
    )

    with open('BRAINSTORM.md', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Wrote Claude's contribution to BRAINSTORM.md")


def main():
    prompt = build_prompt()
    contribution = call_claude(prompt)
    append_to_brainstorm(contribution)


if __name__ == '__main__':
    main()
