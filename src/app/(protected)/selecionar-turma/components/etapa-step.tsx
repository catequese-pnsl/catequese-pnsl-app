'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { listEtapasPorSacramento } from '@/src/services/etapas/etapas'

type Props = {
  sacramentoId: string
  onSelect: (id: string) => void
  onBack: () => void
}

export function EtapaStep({ sacramentoId, onSelect, onBack }: Props) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    listEtapasPorSacramento(sacramentoId)
      .then(setData)
      .finally(() => setLoading(false))
  }, [sacramentoId])

  if (loading) {
    return <p className="text-sm text-muted-foreground animate-pulse py-8 text-center">Carregando etapas...</p>
  }

  return (
    <div className="grid gap-7 w-full flex-col">
      {data.map((e) => (
        <Button
          key={e.id}
          type="button"
          variant="outline"
          size={'lg'}
          onClick={() => onSelect(e.id)}
          className='border-border p-10'
        >
          <span className="font-gilda-display text-xl font-normal block">{e.nome}</span>
        </Button>
      ))}

        <Button
            type="button"
            variant="link"
            onClick={onBack} 
            className="text-xs text-muted-foreground hover:text-foreground self-center cursor-pointer h-auto p-0 flex items-center gap-1.5"
        >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar para Sacramentos
        </Button>
    </div>
  )
}