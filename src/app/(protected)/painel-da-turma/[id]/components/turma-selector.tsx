"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, RefreshCw } from "lucide-react";
import { Button } from "@/src/components/ui/button"; 

type TurmaSelectorProps = {
    turmaPromise: Promise<{ nome: string } | null>;
};

export function TurmaSelector({ turmaPromise }: TurmaSelectorProps) {
    const classData = use(turmaPromise);
    const currentClassName = classData?.nome || "Turma não encontrada";
    
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    function handleNavigateToSelection() {
        setIsOpen(false);
        router.push("/selecionar-turma");
    }

    return (
        <div className="relative">
            <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-4 cursor-pointer transition-colors text-lg"
                size={"lg"}
            >
                <span className="font-display font-medium">{currentClassName}</span>
                <ChevronDown
                    className={`w-7 h-7 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </Button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                    <div className="absolute right-0 mt-2 w-56 border bg-background rounded-md shadow-lg z-50 py-1 animate-in fade-in-50 slide-in-from-top-1">
                        <button
                            onClick={handleNavigateToSelection}
                            className="w-full flex items-center gap-2 px-4 py-3 text-left text-xs hover:bg-accent/30 cursor-pointer text-muted-foreground hover:text-foreground transition-colors font-sans"
                        >
                            <RefreshCw className="w-auto h-3.5" />
                            Selecionar outra turma
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}