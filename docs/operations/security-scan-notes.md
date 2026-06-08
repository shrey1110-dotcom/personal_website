# Security Scan Notes

The portfolio is a static-export Next.js site deployed through Vercel.

## Current security posture

- No API routes.
- No server-side form handlers.
- No application secrets required at runtime.
- External project previews are embedded as iframes.

## Checks to run

- `npm audit --audit-level=low`
- Source scan for token patterns.
- Production build with `npm run build`.

## Primary risks

- Dependency advisories in framework packages.
- Accidental commits of local deployment metadata.
- Over-permissive iframe embeds for live project previews.
