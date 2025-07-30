import { Building2, Calendar, FileText } from "lucide-react";
export const ProposalHeader = () => {
  return <div className="bg-gradient-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="h-10 w-10" />
          <div>
            <h1 className="text-4xl font-bold">Proposta Comercial</h1>
            <p className="text-lg opacity-90">Automação do Processo de Rescisão</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <Building2 className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Cliente</h3>
              <p className="opacity-90">Lojas TORRA</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <Calendar className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Prazo de Implementação</h3>
              <p className="opacity-90">62 dias úteis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <FileText className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Objetivo</h3>
              <p className="opacity-90">Redução de 80% do tempo</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};