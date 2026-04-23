# Cache Busting Notes

GitHub Pages can serve stale assets briefly after a push.

## Practical checks

- append a query param when checking the live HTML
- hard refresh when verifying CSS or JS changes
- confirm the new copy appears before assuming the deploy failed

## Example

`https://shrey1110-dotcom.github.io/personal_website/?v=commit-sha`
