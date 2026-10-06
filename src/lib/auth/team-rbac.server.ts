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
export async function requireTeamRole(
  userId: string,
  allowedRoles: readonly TeamRole[],
): Promise<TeamRole> {
  const sql = await getSql();
  const rows = await sql<{ role: string }[]>`
    select "role"
    from "user"
    where "id" = ${userId}
    limit 1
  `;

  const role = rows[0]?.role;
  if (!role || !TEAM_ROLES.includes(role as TeamRole)) {
    throw new ForbiddenTeamAccessError();
  }

  const typedRole = role as TeamRole;
  if (!allowedRoles.includes(typedRole)) {
    throw new ForbiddenTeamAccessError();
  }

  return typedRole;
}