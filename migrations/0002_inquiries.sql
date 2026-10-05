create table if not exists inquiries (
  id text primary key,
  reference text not null unique,
  kind text not null,
  status text not null default 'new',
  name text not null,
  email text not null,
  phone text,
  organization text,
  need_type text,
  description text not null,
  objective text,
  timeline text,
  budget text,
  contact_preference text,
  appointment_motif text,
  availability text,
  timezone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint inquiries_kind_chk check (kind in ('project', 'appointment')),
  constraint inquiries_status_chk check (status in ('new', 'in_review', 'replied', 'closed'))
);

create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
create index if not exists inquiries_status_idx on inquiries (status);
create index if not exists inquiries_kind_idx on inquiries (kind);

create table if not exists inquiry_notes (
  id text primary key,
  inquiry_id text not null references inquiries(id) on delete cascade,
  author_user_id text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists inquiry_notes_inquiry_id_idx on inquiry_notes (inquiry_id, created_at desc);

create table if not exists submission_rate_limits (
  key text primary key,
  window_started_at timestamptz not null,
  hit_count integer not null default 0
);
