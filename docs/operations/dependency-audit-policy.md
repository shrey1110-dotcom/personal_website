# Dependency Audit Policy

Dependency health should be checked after package updates and before deployment.

## Command

```bash
npm audit --audit-level=low
```

## Current target

The expected result is `0` vulnerabilities.

## Upgrade rule

Framework upgrades should be paired with a production build because Next.js major versions can change compiler and module-format behavior.
