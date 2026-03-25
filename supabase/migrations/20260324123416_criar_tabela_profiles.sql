-- Tabela: profiles
-- Esta tabela usa o mesmo ID do auth.users

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  email text,
  role text default 'catequista'
);