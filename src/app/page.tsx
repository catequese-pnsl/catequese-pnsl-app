import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeRedirect />
    </Suspense>
  );
}

async function HomeRedirect() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("turma_atual")
    .eq("id", user.sub)
    .single();

  redirect(
    profile?.turma_atual
      ? `/painel-da-turma/${profile.turma_atual}`
      : "/selecionar-turma"
  );
  return null;
}