# Production environment variables

Configure these values in Vercel. Never commit real secrets.

## Application

- `DATABASE_URL`: PostgreSQL connection string.
- `BETTER_AUTH_SECRET`: long random secret used to sign application sessions.
- `BETTER_AUTH_URL`: `https://somborocode.site`.
- `VITE_AUTH_ENABLED`: `true` in production.

## Team access

These comma-separated email lists are the bootstrap allowlist for the team area:

- `TEAM_ADMIN_EMAILS`
- `TEAM_STAFF_EMAILS`
- `TEAM_VIEWER_EMAILS`

Do not put untrusted or public addresses in these lists.

## Transactional email

The current implementation uses Resend's HTTP API:

- `RESEND_API_KEY`: Resend API key.
- `EMAIL_FROM`: verified sender, for example `Somboro-code <noreply@somborocode.site>`.
- `INQUIRY_NOTIFICATION_EMAIL`: internal address receiving new inquiry notifications.

Email failures do not delete or reject a successfully persisted inquiry. Delivery status is stored on the inquiry so the workflow can be retried later.
