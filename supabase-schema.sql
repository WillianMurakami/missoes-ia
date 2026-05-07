create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  area text not null,
  email text not null,
  role text not null default 'participant',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mission_id text not null,
  text text,
  file_name text,
  file_path text,
  file_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, mission_id)
);

alter table public.profiles enable row level security;
alter table public.submissions enable row level security;

create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Users can read own submissions"
  on public.submissions for select
  using (auth.uid() = user_id);

create policy "Users can insert own submissions"
  on public.submissions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own submissions"
  on public.submissions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete own submissions"
  on public.submissions for delete
  using (auth.uid() = user_id);

-- Crie tambem um bucket chamado mission-evidence no Supabase Storage.
-- Para MVP pessoal simples, pode deixar o bucket publico para facilitar download/visualizacao das entregas.
-- Se preferir privado, troque o uso de publicUrl por signed URLs no app.

create policy "Users can upload own evidence"
  on storage.objects for insert
  with check (
    bucket_id = 'mission-evidence'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can read own evidence"
  on storage.objects for select
  using (
    bucket_id = 'mission-evidence'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Users can update own evidence"
  on storage.objects for update
  using (
    bucket_id = 'mission-evidence'
    and auth.uid()::text = (storage.foldername(name))[1]
  )
  with check (
    bucket_id = 'mission-evidence'
    and auth.uid()::text = (storage.foldername(name))[1]
  );
