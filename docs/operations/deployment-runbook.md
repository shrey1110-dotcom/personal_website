# Deployment Runbook

## Local verification

1. Run `npm run build`
2. Confirm the static export finishes cleanly
3. Check key content and asset paths

## Publish flow

1. Commit on `main`
2. Push to GitHub
3. Let GitHub Pages Actions build and deploy
4. Verify the public URL after the workflow finishes

## Important note

GitHub Pages can lag behind the workflow UI by a few minutes because of edge caching.
