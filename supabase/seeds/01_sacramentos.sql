-- Seeds iniciais: Sacramentos

insert into public.sacramentos (id, nome) values
  (gen_random_uuid(), 'Bom Pastor'),
  (gen_random_uuid(), 'Eucaristia'),
  (gen_random_uuid(), 'Crisma');