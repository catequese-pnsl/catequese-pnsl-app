-- Tabela: presencas
create table if not exists public.presencas (
  encontro_id uuid not null references public.encontros(id) on delete cascade,
  catequizando_id uuid not null references public.catequizandos(id) on delete cascade,
  presente boolean not null,
  primary key (encontro_id, catequizando_id)
);