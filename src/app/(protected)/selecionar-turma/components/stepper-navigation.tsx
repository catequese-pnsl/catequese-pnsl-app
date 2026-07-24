'use client'

type Props = {
  currentStep: number
  onStepChange: (targetStep: number) => void
  sacramentoId: string | null
}

export function StepperNavigation({ currentStep, onStepChange, sacramentoId }: Props) {
  const steps = [
    { number: 1, label: 'Sacramento' },
    { number: 2, label: 'Etapa' },
    { number: 3, label: 'Turma' },
  ]

  return (
    <div className="w-full flex items-center justify-between max-w-sm mx-auto mb-10">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number
        const isCompleted = currentStep > step.number
        
        const isClickable = step.number === 1 || (step.number === 2 && sacramentoId !== null)

        return (
          <div key={step.number} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              disabled={!isClickable || isActive}
              onClick={() => onStepChange(step.number)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-base font-display transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                ${isActive 
                  ? 'bg-[#C5A059] text-white border-[#C5A059] scale-105 font-bold shadow-md' 
                  : ''
                }
                ${isCompleted 
                  ? 'bg-[#C5A059] text-white border-[#C5A059] opacity-60 cursor-pointer font-medium hover:opacity-80' 
                  : ''
                }
                ${!isActive && !isCompleted && isClickable 
                  ? 'bg-background text-foreground border-border hover:border-foreground cursor-pointer' 
                  : ''
                }
                ${!isClickable && !isActive 
                  ? 'bg-background text-muted-foreground border-muted/30 opacity-40 cursor-not-allowed' 
                  : ''
                }
              `}
              title={`Ir para ${step.label}`}
            >
              {step.number}
            </button>

            {index < steps.length - 1 && (
              <div 
                className={`h-[1px] flex-1 mx-3 transition-all duration-300
                  ${currentStep > step.number ? 'bg-[#C5A059]' : 'bg-border/40'}
                `} 
              />
            )}
          </div>
        )
      })}
    </div>
  )
} 