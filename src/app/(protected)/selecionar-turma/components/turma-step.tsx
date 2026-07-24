'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { listTurmasPorEtapa } from '@/src/services/turmas/turmas.client'

type Props = {
    etapaId: string
    onConfirm: (turmaId: string) => void
    onBack: () => void
}

export function TurmaStep({ etapaId, onConfirm, onBack }: Props) {

    const [turmas, setTurmas] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        listTurmasPorEtapa(etapaId)
            .then(setTurmas)
            .finally(() => setLoading(false))
    }, [etapaId])

    if (loading) {
        return <p className="text-sm text-muted-foreground animate-pulse py-8 text-center">Carregando turmas...</p>
    }

    if (turmas.length === 0) {
        return (
            <div className="text-center py-6 w-full flex flex-col items-center">
                <p className="text-sm text-muted-foreground mb-4">Nenhuma turma encontrada para esta etapa.</p>
                <Button
                    type="button"
                    variant="link"
                    onClick={onBack}
                    className="text-xs text-muted-foreground hover:text-foreground cursor-pointer h-auto p-0"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar para Sacramentos
                </Button>
            </div>
        )
    }

    return (
        <div className="grid gap-6 w-full flex-col">
            {turmas.map((t) => (
                <Button
                    key={t.id}
                    type="button"
                    variant="outline"
                    size={'lg'}
                    className="border-border p-10 flex flex-col"
                    onClick={() => onConfirm(t.id)}
                >
                    <span className="font-gilda-display text-xl font-normal block">
                        {t.nome}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans block tracking-wide font-normal">
                        {t.dia_semana}
                    </span>
                </Button>
            ))}

            <Button
                type="button"
                variant="link"
                onClick={onBack}
                className="text-xs text-muted-foreground hover:text-foreground self-center cursor-pointer h-auto p-0 mt-2"
            >
                <ArrowLeft className="w-3.5 h-3.5" />
                Voltar para Sacramentos
            </Button>
        </div>
    )
}