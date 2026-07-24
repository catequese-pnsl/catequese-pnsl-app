import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function SelecionarTurmaLayout({ children }: Props) {
  return (
    <div className="w-full flex-1 grid place-items-center py-6 px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <header className="text-center mb-8 max-w-sm">
          <h1 className="text-3xl font-black text-foreground mb-2">
            Selecionar Turma
          </h1>
          <p className="text-sm text-muted-foreground">
            Selecione a turma abaixo que deseja gerenciar.
          </p>
        </header>

        <main className="w-full flex flex-col items-center">
          {children}
        </main>
      </div>
    </div>
  )
}