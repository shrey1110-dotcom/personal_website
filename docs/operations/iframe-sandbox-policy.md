# Iframe Sandbox Policy

Live project windows embed deployed project URLs.

## Policy

Embedded demos should use a sandbox unless a specific preview requires more access.

## Current allowances

- `allow-forms`
- `allow-popups`
- `allow-popups-to-escape-sandbox`
- `allow-same-origin`
- `allow-scripts`

## Reasoning

The preview windows need enough permission to render real app states, but they should not inherit unnecessary browser capabilities from the portfolio shell.
