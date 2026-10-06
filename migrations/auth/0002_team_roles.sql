-- Team roles for server-side authorization.
-- Existing users are deliberately created as viewers until an administrator
-- explicitly grants a stronger role.

alter table "user"
  add column if not exists "role" text not null default 'viewer';

alter table "user"
  drop constraint if exists "user_role_check";

alter table "user"
  add constraint "user_role_check"
  check ("role" in ('admin', 'staff', 'viewer'));

create index if not exists "user_role_idx" on "user" ("role");
