import { createClient } from "@/src/lib/supabase/client";

const supabase = createClient();

export async function listSacramentos() {
  const { data, error } = await supabase
    .from('sacramentos')
    .select('id, nome')
    .order('nome', { ascending: true });

  if (error) {
    console.error('Erro ao listar sacramentos:', error.message);
    return [];
  }

  return data || [];
}