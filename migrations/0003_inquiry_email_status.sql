alter table inquiries
  add column if not exists internal_email_status text not null default 'pending',
  add column if not exists client_email_status text not null default 'pending',
  add column if not exists internal_email_error text,
  add column if not exists client_email_error text,
  add column if not exists client_email_sent_at timestamptz,
  add column if not exists internal_email_sent_at timestamptz;

alter table inquiries
  drop constraint if exists inquiries_internal_email_status_check;

alter table inquiries
  add constraint inquiries_internal_email_status_check
  check (internal_email_status in ('pending', 'sent', 'failed'));

alter table inquiries
  drop constraint if exists inquiries_client_email_status_check;

alter table inquiries
  add constraint inquiries_client_email_status_check
  check (client_email_status in ('pending', 'sent', 'failed'));
