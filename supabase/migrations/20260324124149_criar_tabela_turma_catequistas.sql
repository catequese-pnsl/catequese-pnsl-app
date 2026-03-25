-- Tabela: turma_catequistas
create table if not exists public.turma_catequistas (
  turma_id uuid not null references public.turmas(id) on delete cascade,
  catequista_id uuid not null references public.profiles(id) on delete cascade,
  primary key (turma_id, catequista_id)
);