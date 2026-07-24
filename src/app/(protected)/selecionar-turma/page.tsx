"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { StepperNavigation } from "@/src/app/(protected)/selecionar-turma/components/stepper-navigation"
import { EtapaStep } from "@/src/app/(protected)/selecionar-turma/components/etapa-step"
import { SacramentoStep } from "@/src/app/(protected)/selecionar-turma/components/sacramento-step"
import { TurmaStep } from "@/src/app/(protected)/selecionar-turma/components/turma-step"
import { createClient } from "@/src/lib/supabase/client"


export default function SelecionarTurmaPage() {
    const router = useRouter();
    const supabase = createClient();

    const [currentStep, setCurrentStep] = useState(1)
    const [sacramentoId, setSacramentoId] = useState<string | null>(null)
    const [etapaId, setEtapaId] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleSacramentoSelect(id: string) {
        setSacramentoId(id)
        setCurrentStep(2)
    }

    function handleEtapaSelect(id: string) {
        setEtapaId(id)
        setCurrentStep(3)
    }

    async function handleTurmaConfirm(turmaId: string) {
        try {
            setIsSubmitting(true)

            const { data: { user }, error: userError } = await supabase.auth.getUser()

            if (userError || !user) {
                throw new Error("Usuário não autenticado")
            }

            const { error: updateError } = await supabase
                .from('profiles')
                .update({ turma_atual: turmaId })
                .eq('id', user.id) 

            if (updateError) {
                throw updateError
            }

            router.push(`/painel-da-turma/${turmaId}`)

        } catch (error) {
            console.error("Erro ao selecionar turma:", error)
            alert("Houve um erro ao salvar sua turma. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    function handleStepChange(targetStep: number) {
        if (targetStep === 1) {
            setSacramentoId(null)
            setEtapaId(null)
            setCurrentStep(1)
        } else if (targetStep === 2 && sacramentoId) {
            setEtapaId(null)
            setCurrentStep(2)
        }
    }

    return (
        <div className="w-full flex flex-col">
            <StepperNavigation
                currentStep={currentStep}
                onStepChange={handleStepChange}
                sacramentoId={sacramentoId}
            />

            <div className="w-full mt-2">
                {currentStep === 1 && (
                    <SacramentoStep onSelect={handleSacramentoSelect} />
                )}

                {currentStep === 2 && sacramentoId && (
                    <EtapaStep
                        sacramentoId={sacramentoId}
                        onSelect={handleEtapaSelect}
                        onBack={() => handleStepChange(1)}
                    />
                )}

                {currentStep === 3 && etapaId && (
                    <TurmaStep
                        etapaId={etapaId}
                        onConfirm={handleTurmaConfirm}
                        onBack={() => handleStepChange(2)}
                    />
                )}
            </div>
        </div>
    )
}