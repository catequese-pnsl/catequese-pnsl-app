-- Tabela: sacramentos

create table if not exists public.sacramentos (
  id uuid primary key default gen_random_uuid(),
  nome text not null unique
);