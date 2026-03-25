-- Tabela: etapas

create table if not exists public.etapas (
  id uuid primary key default gen_random_uuid(),
  sacramento_id uuid not null references public.sacramentos(id) on delete cascade,
  nome text not null,
  ordem int not null default 1,
  unique (sacramento_id, nome)
);