import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import { Suspense } from "react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      {params?.error ? (
        <p className="text-sm text-muted-foreground">
          Erro: {params.error}
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          Ocorreu um erro inesperado.
        </p>
      )}
    </>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="border-border border-3 border-b-10 rounded-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Ops! Algo deu errado.
            </CardTitle>

            <CardDescription>
              Não foi possível concluir a operação de autenticação.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Suspense>
              <ErrorContent searchParams={searchParams} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}