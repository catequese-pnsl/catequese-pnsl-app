-- Tabela: catequizandos
create table if not exists public.catequizandos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  data_nascimento date,
  contato text,
  contato_responsavel text,
  observacao text
);