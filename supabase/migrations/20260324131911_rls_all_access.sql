-- =====================================
-- RLS — Full Access for Authenticated Users
-- =====================================

-- Enable RLS on all tables
alter table public.sacramentos       enable row level security;
alter table public.etapas            enable row level security;
alter table public.turmas            enable row level security;
alter table public.profiles          enable row level security;
alter table public.catequizandos     enable row level security;
alter table public.matriculas        enable row level security;
alter table public.turma_catequistas enable row level security;
alter table public.encontros         enable row level security;
alter table public.presencas         enable row level security;

-- =====================================
-- Policies (one per table — simplest possible)
-- =====================================

-- Sacramentos
create policy "all_access_sacramentos"
on public.sacramentos
for all
to authenticated
using (true)
with check (true);

-- Etapas
create policy "all_access_etapas"
on public.etapas
for all
to authenticated
using (true)
with check (true);

-- Turmas
create policy "all_access_turmas"
on public.turmas
for all
to authenticated
using (true)
with check (true);

-- Profiles
create policy "all_access_profiles"
on public.profiles
for all
to authenticated
using (true)
with check (true);

-- Catequizandos
create policy "all_access_catequizandos"
on public.catequizandos
for all
to authenticated
using (true)
with check (true);

-- Matrículas
create policy "all_access_matriculas"
on public.matriculas
for all
to authenticated
using (true)
with check (true);

-- TurmaCatequistas
create policy "all_access_turma_catequistas"
on public.turma_catequistas
for all
to authenticated
using (true)
with check (true);

-- Encontros
create policy "all_access_encontros"
on public.encontros
for all
to authenticated
using (true)
with check (true);

-- Presenças
create policy "all_access_presencas"
on public.presencas
for all
to authenticated
using (true)
with check (true);