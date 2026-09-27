#!/usr/bin/env python3
"""Calls Gemini (Google) and writes the response to BRAINSTORM.md."""

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

    task = os.environ.get('ROUND_GEMINI_TASK', 'Contribute to the roundtable.')
    topic = os.environ.get('ROUND_TOPIC', 'Open brainstorm')

    return f"""You are Gemini, the Researcher for TrailerVegas.

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
Write your contribution in markdown format. You are the researcher. Cite
sources. Pull from search, forums, reviews, and industry data. Don't guess.

Rules:
1. Reference what other AIs have said (by name)
2. Cite every factual claim with a URL
3. Flag any claim you couldn't verify
4. End with "Open questions for other AIs" if you have any
5. Be dated {date.today().isoformat()} and attributed to "Gemini"

Return ONLY the markdown contribution. No preamble.
"""


def call_gemini(prompt):
    api_key = os.environ.get('GOOGLE_API_KEY')
    if not api_key:
        print("ERROR: GOOGLE_API_KEY not set")
        sys.exit(1)

    url = (
        'https://generativelanguage.googleapis.com/v1beta/'
        f'models/gemini-1.5-pro:generateContent?key={api_key}'
    )

    response = requests.post(
        url,
        headers={'Content-Type': 'application/json'},
        json={
            'contents': [
                {'parts': [{'text': prompt}]}
            ],
            'generationConfig': {
                'maxOutputTokens': 4096,
            }
        },
        timeout=120
    )

    if response.status_code != 200:
        print(f"ERROR: {response.status_code} — {response.text}")
        sys.exit(1)

    data = response.json()
    return data['candidates'][0]['content']['parts'][0]['text']


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
        + f"\n\n### {date.today().isoformat()} — Gemini (auto)\n\n"
        + contribution.strip()
        + "\n\n---\n"
        + parts[1]
    )

    with open('BRAINSTORM.md', 'w', encoding='utf-8') as f:
        f.write(new_content)


def main():
    prompt = build_prompt()
    contribution = call_gemini(prompt)
    append_to_brainstorm(contribution)


if __name__ == '__main__':
    main()
