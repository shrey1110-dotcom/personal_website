# Local Preview Notes

The dev server typically runs on `http://127.0.0.1:3001/`.

## Known issue

If `next dev` and `next build` fight over `.next`, the browser can render raw HTML with missing styles.

## Recovery steps

1. Stop the dev server.
2. Remove `.next`.
3. Restart dev clean.

This avoids stale asset paths during local review.
