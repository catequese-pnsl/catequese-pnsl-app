'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/src/components/ui/button'
import { listSacramentos } from '@/src/services/sacramentos/sacramentos'

type Props = {
  onSelect: (id: string) => void
}

export function SacramentoStep({ onSelect }: Props) {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listSacramentos()
      .then(setData)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="text-sm text-muted-foreground animate-pulse py-8 text-center">Carregando sacramentos...</p>
  }

  return (
    <div className="grid gap-6 w-full">
      {data.map((s) => (
        <Button
          key={s.id}
          type="button"
          variant="outline"
          size={'lg'}
          className='border-border p-10'
          onClick={() => onSelect(s.id)}
        >
          <span className="font-gilda-display text-xl font-normal block">
            {s.nome}
          </span>
        </Button>
      ))}
    </div>
  )
}