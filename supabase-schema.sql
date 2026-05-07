create table if not exists public.app_profiles (
  id text primary key,
  email text not null,
  name text not null default 'Participante',
  area text not null default 'Nao informado',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.app_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references public.app_profiles(id) on delete cascade,
  mission_id text not null,
  text text,
  file_name text,
  file_path text,
  file_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, mission_id)
);

alter table public.app_profiles enable row level security;
alter table public.app_submissions enable row level security;

drop policy if exists "App can read profiles" on public.app_profiles;
drop policy if exists "App can create profiles" on public.app_profiles;
drop policy if exists "App can update profiles" on public.app_profiles;
drop policy if exists "App can read submissions" on public.app_submissions;
drop policy if exists "App can create submissions" on public.app_submissions;
drop policy if exists "App can update submissions" on public.app_submissions;
drop policy if exists "App can delete submissions" on public.app_submissions;

create policy "App can read profiles"
  on public.app_profiles for select
  using (true);

create policy "App can create profiles"
  on public.app_profiles for insert
  with check (true);

create policy "App can update profiles"
  on public.app_profiles for update
  using (true)
  with check (true);

create policy "App can read submissions"
  on public.app_submissions for select
  using (true);

create policy "App can create submissions"
  on public.app_submissions for insert
  with check (true);

create policy "App can update submissions"
  on public.app_submissions for update
  using (true)
  with check (true);

create policy "App can delete submissions"
  on public.app_submissions for delete
  using (true);

-- Crie tambem um bucket publico chamado mission-evidence no Supabase Storage.
-- Para esta acao simples, as politicas abaixo permitem upload/leitura com a chave publica do app.

drop policy if exists "App can upload evidence" on storage.objects;
drop policy if exists "App can read evidence" on storage.objects;
drop policy if exists "App can update evidence" on storage.objects;

create policy "App can upload evidence"
  on storage.objects for insert
  with check (bucket_id = 'mission-evidence');

create policy "App can read evidence"
  on storage.objects for select
  using (bucket_id = 'mission-evidence');

create policy "App can update evidence"
  on storage.objects for update
  using (bucket_id = 'mission-evidence')
  with check (bucket_id = 'mission-evidence');
