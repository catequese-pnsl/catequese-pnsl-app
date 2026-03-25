-- Tabela: matriculas
create table if not exists public.matriculas (
  turma_id uuid not null references public.turmas(id) on delete cascade,
  catequizando_id uuid not null references public.catequizandos(id) on delete cascade,
  status text not null default 'ATIVA',
  data_matricula date not null default now(),
  primary key (turma_id, catequizando_id)
);