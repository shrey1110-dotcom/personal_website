# Rollback Playbook

If a visual push regresses the live site, keep the rollback path simple.

## Fast path

1. identify the last known good commit on `main`
2. revert the bad commit with a normal follow-up commit
3. push `main`
4. verify the GitHub Pages workflow and live HTML

## Reasoning

The repo should avoid destructive history rewrites for normal homepage fixes.
