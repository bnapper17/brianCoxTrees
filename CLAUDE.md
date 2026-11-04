# B.C. Trees website

Next.js site for briancoxtrees.com. Run locally with `npm.cmd run dev` (PowerShell blocks `npm.ps1`).

## Deployment
- Hosted on Vercel, deployed from the `main` branch: a push to `main` goes live.
- Day-to-day work happens on the `preview` branch. When the client approves, merge `preview` into `main` and push both.
- Confirm with the user before merging or pushing to `main`.

Business details (phones, email, URL) live in `src/lib/site.ts`.
