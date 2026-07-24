import { createClient } from "@/src/lib/supabase/client";

const supabase = createClient();

export async function listEtapasPorSacramento(sacramentoId: string) {
  const { data, error } = await supabase
    .from('etapas')
    .select('id, nome')
    .eq('sacramento_id', sacramentoId)
    .order('nome', { ascending: true });

  if (error) {
    console.error('Erro ao listar etapas:', error.message);
    return [];
  }

  return data || [];
}