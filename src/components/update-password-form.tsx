"use client";

import { cn } from "@/src/lib/utils";
import { createClient } from "@/src/lib/supabase/client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabase = createClient();

    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      router.push("/protected");
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : "Ocorreu um erro."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-border border-3 border-b-10 rounded-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">
            Redefinir senha
          </CardTitle>

          <CardDescription>
            Digite sua nova senha para concluir a redefinição.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleUpdatePassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">
                  Nova senha
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua nova senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-border"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="w-full border-border"
                disabled={isLoading}
              >
                {isLoading
                  ? "Salvando..."
                  : "Salvar nova senha"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}