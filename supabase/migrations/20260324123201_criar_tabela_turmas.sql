-- ENUM: dia da semana
create type dia_semana as enum (
  'SEGUNDA',
  'TERCA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SABADO',
  'DOMINGO'
);

-- Tabela: turmas
create table if not exists public.turmas (
  id uuid primary key default gen_random_uuid(),
  etapa_id uuid not null references public.etapas(id) on delete cascade,
  nome text not null,
  ano int not null default date_part('year', now())::int,
  ativo boolean not null default true,
  imagem_url text,
  dia_semana dia_semana not null,
  unique (etapa_id, nome)
);