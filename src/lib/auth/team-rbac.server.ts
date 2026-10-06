import { getSql } from "@/lib/db";

export const TEAM_ROLES = ["admin", "staff", "viewer"] as const;
export type TeamRole = (typeof TEAM_ROLES)[number];

export class ForbiddenTeamAccessError extends Error {
  readonly status = 403;

  constructor() {
    super("Forbidden");
    this.name = "ForbiddenTeamAccessError";
  }
}

/**
 * Authorize access to team resources on the server.
 * Never trust a role supplied by the browser: it is read from Better Auth's
 * server-side user record using the already-verified session user id.
 */
function envEmails(key: string): Set<string> {
  return new Set(
    (process.env[key] ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export async function requireTeamRole(
  userId: string,
  allowedRoles: readonly TeamRole[],
): Promise<TeamRole> {
  const sql = await getSql();
  const rows = await sql<{ role: string; email: string }[]>`
    select "role", "email"
    from "user"
    where "id" = ${userId}
    limit 1
  `;

  const user = rows[0];
  if (!user) {
    throw new ForbiddenTeamAccessError();
  }

  const adminEmails = envEmails("TEAM_ADMIN_EMAILS");
  const staffEmails = envEmails("TEAM_STAFF_EMAILS");
  const email = user.email.trim().toLowerCase();

  // Environment allowlists are the bootstrap/containment layer. They can grant
  // team access without editing the database, while the persisted role remains
  // the source of truth for users that have been explicitly provisioned.
  const role = adminEmails.has(email)
    ? "admin"
    : staffEmails.has(email)
      ? "staff"
      : user.role;

  if (!role || !TEAM_ROLES.includes(role as TeamRole)) {
    throw new ForbiddenTeamAccessError();
  }

  const typedRole = role as TeamRole;
  if (!allowedRoles.includes(typedRole)) {
    throw new ForbiddenTeamAccessError();
  }

  return typedRole;
}