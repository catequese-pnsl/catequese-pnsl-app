-- Seeds iniciais: Etapas

with s as (
  select id, nome from public.sacramentos
)
insert into public.etapas (sacramento_id, nome, ordem)
select s.id, e.nome, e.ordem
from s
join (
  values
    -- Bom Pastor
    ('Bom Pastor', 'Nível 1', 1),
    ('Bom Pastor', 'Nível 2', 2),
    ('Bom Pastor', 'Nível 3', 3),

    -- Eucaristia
    ('Eucaristia', 'Eucaristia I', 1),
    ('Eucaristia', 'Eucaristia II', 2),

    -- Crisma
    ('Crisma', 'Crisma Adultos', 1),
    ('Crisma', 'Crisma Jovem', 2)
) as e(sac, nome, ordem)
on s.nome = e.sac;