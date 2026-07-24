import { ReactNode, Suspense } from "react";
import { redirect } from "next/navigation";
import { TurmaSelector } from "./components/turma-selector";
import { Settings } from "lucide-react";
import Link from "next/link";
import { getTurmaById } from "@/src/services/turmas/turmas.server";
import { getProfileAtual } from "@/src/services/profiles/profiles.server";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ id: string }>;
};

export default function TurmaLayout({ children, params }: LayoutProps) {
  return (
    <Suspense fallback={<PainelSkeleton />}>
      <TurmaGuard params={params}>{children}</TurmaGuard>
    </Suspense>
  );
}

async function TurmaGuard({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const profile = await getProfileAtual();

  if (!profile.turma_atual) {
    redirect("/selecionar-turma");
  }

  if (profile.turma_atual !== id) {
    redirect(`/painel-da-turma/${profile.turma_atual}`);
  }

  return (
    <div className="flex flex-col w-full flex-1">
      <header className="w-full h-24 border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-2xl mx-auto h-full flex items-center justify-between px-4">
          <Suspense fallback={<div className="h-11 w-44 animate-pulse rounded-md bg-muted" />}>
            <TurmaSelectorContainer params={params} />
          </Suspense>

          <Link
            href=""
            className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings className="w-6 h-6" strokeWidth={2.5} />
          </Link>
        </div>
      </header>
      <main className="flex flex-col flex-1 w-full max-w-7xl mx-auto p-6 md:p-8 justify-center">
        {children}
      </main>
    </div>
  );
}

async function TurmaSelectorContainer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const turmaPromise = getTurmaById(id);
  return <TurmaSelector turmaPromise={turmaPromise} />;
}

function PainelSkeleton() {
  return (
    <div className="flex flex-col w-full flex-1 animate-pulse">
      <div className="w-full h-24 border-b bg-background/80" />
      <div className="flex-1" />
    </div>
  );
}