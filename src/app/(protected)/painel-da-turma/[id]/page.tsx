import { CalendarCheck, History, Users } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function TurmaPage() {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center flex-1 w-full">

      <div className="flex flex-col gap-6 w-full max-w-md">

        <Button
          disabled
          variant="outline"
          className="flex items-center justify-center gap-3 border-border cursor-pointer hover:border-primary-foreground transition-colors text-xl w-full py-7 px-8 h-auto"
        >
          <CalendarCheck className="w-7 h-7 text-muted-foreground" strokeWidth={2.5} />
          <span className="font-display font-medium">Realizar Chamada <i className="text-sm">(em breve)</i></span>
        </Button>

        <Button
          disabled
          variant="outline"
          className="flex items-center justify-center gap-3 border-border cursor-pointer transition-colors text-xl w-full py-7 px-8 h-auto"
        >
          <History className="w-7 h-7 text-muted-foreground" strokeWidth={2.5} />
          <span className="font-display font-medium">Histórico de Chamada <i className="text-sm">(em breve)</i></span>
        </Button>

        <Button
          disabled
          variant="outline"
          className="flex items-center justify-center gap-3 border-border cursor-pointer transition-colors text-xl w-full py-7 px-8 h-auto"
        >
          <Users className="w-7 h-7 text-muted-foreground" strokeWidth={2.5} />
          <span className="font-display font-medium">Lista de Catequizandos <i className="text-sm">(em breve)</i></span>
        </Button>

      </div>
    </div>
  );
}