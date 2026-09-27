#!/usr/bin/env python3
"""Calls ChatGPT (OpenAI) and writes the response to BRAINSTORM.md."""

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

    task = os.environ.get('ROUND_CHATGPT_TASK', 'Contribute to the roundtable.')
    topic = os.environ.get('ROUND_TOPIC', 'Open brainstorm')

    return f"""You are ChatGPT, the Ideator for TrailerVegas.

You're participating in the AI roundtable. Read everything below, then add
your contribution to BRAINSTORM.md.

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

## Your task
Write your contribution in markdown format. It should:
1. Reference what other AIs have said (by name)
2. Add new ideas, alternatives, or copy variations
3. End with "Open questions for other AIs" if you have any
4. Be dated {date.today().isoformat()} and attributed to "ChatGPT"

Return ONLY the markdown contribution. No preamble.
"""


def call_chatgpt(prompt):
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("ERROR: OPENAI_API_KEY not set")
        sys.exit(1)

    response = requests.post(
        'https://api.openai.com/v1/chat/completions',
        headers={
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json',
        },
        json={
            'model': 'gpt-4o',
            'messages': [
                {'role': 'system', 'content': 'You are a thoughtful collaborator.'},
                {'role': 'user', 'content': prompt}
            ],
            'max_tokens': 4096,
        },
        timeout=120
    )

    if response.status_code != 200:
        print(f"ERROR: {response.status_code} — {response.text}")
        sys.exit(1)

    return response.json()['choices'][0]['message']['content']


def append_to_brainstorm(contribution):
    content = read_file('BRAINSTORM.md')
    marker = "## Message Log"
    if marker not in content:
        print("ERROR: Could not find Message Log in BRAINSTORM.md")
        sys.exit(1)

    parts = content.split(marker, 1)
    new_content = (
        parts[0]
        + marker
        + f"\n\n### {date.today().isoformat()} — ChatGPT (auto)\n\n"
        + contribution.strip()
        + "\n\n---\n"
        + parts[1]
    )

    with open('BRAINSTORM.md', 'w', encoding='utf-8') as f:
        f.write(new_content)


def main():
    prompt = build_prompt()
    contribution = call_chatgpt(prompt)
    append_to_brainstorm(contribution)


if __name__ == '__main__':
    main()
