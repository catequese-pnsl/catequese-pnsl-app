-- Tabela: encontros
create table if not exists public.encontros (
  id uuid primary key default gen_random_uuid(),
  turma_id uuid not null references public.turmas(id) on delete cascade,
  data timestamp with time zone not null default now(),
  tema text not null,
  created_by uuid not null references public.profiles(id) on delete set null
);