import { createClient } from "@/src/lib/supabase/client";

export async function listTurmasPorEtapa(etapaId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("turmas")
    .select("id, nome, dia_semana")
    .eq("etapa_id", etapaId)
    .order("nome", { ascending: true });

  if (error) {
    console.error("Erro ao listar turmas:", error.message);
    return [];
  }

  return data ?? [];
}