-- GMK Engineering — Project Gallery schema
-- Run this in the Supabase SQL editor.
-- Admin writes (upload/delete) go through the service-role key, which bypasses
-- RLS, so storage write policies are gated to service_role only. The public
-- gallery only needs the read policies below.

-- 1) Gallery table
create extension if not exists "pgcrypto";

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Projects',
  image_url text not null,
  created_at timestamptz not null default now()
);

alter table public.gallery enable row level security;

drop policy if exists "Public can view gallery" on public.gallery;
create policy "Public can view gallery"
  on public.gallery for select
  using (true);

-- 2) Storage bucket for gallery images (public read)
insert into storage.buckets (id, name, public)
values ('gallery-images', 'gallery-images', true)
on conflict (id) do nothing;

-- 3) Storage policies on storage.objects (already applied manually; idempotent)
drop policy if exists "Public storage read for gallery" on storage.objects;
create policy "Public storage read for gallery"
  on storage.objects for select
  using (bucket_id = 'gallery-images');

drop policy if exists "Admin storage upload for gallery" on storage.objects;
create policy "Admin storage upload for gallery"
  on storage.objects for insert
  with check (
    bucket_id = 'gallery-images'
    and auth.role() = 'service_role'
  );

drop policy if exists "Admin storage delete for gallery" on storage.objects;
create policy "Admin storage delete for gallery"
  on storage.objects for delete
  using (
    bucket_id = 'gallery-images'
    and auth.role() = 'service_role'
  );