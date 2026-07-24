import { cache } from "react";
import { createClient } from "@/src/lib/supabase/server";

export const getTurmaById = cache(async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("turmas")
    .select("nome")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
});