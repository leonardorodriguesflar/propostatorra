import { ArrowRight, Database, FileCheck, Mail, Upload } from "lucide-react";
export const ProcessFlow = () => {
  const steps = [{
    id: 1,
    title: "Lista Demitidos",
    subtitle: "AP Data",
    icon: Database,
    description: "Extração automática da lista de funcionários demitidos"
  }, {
    id: 2,
    title: "Validação",
    subtitle: "Múltiplos Sistemas",
    icon: FileCheck,
    description: "Consulta em Creditas, Santander, Univers, FGTS"
  }, {
    id: 3,
    title: "Lançamentos",
    subtitle: "AP Data",
    icon: Upload,
    description: "Inclusão automática dos dados processados"
  }, {
    id: 4,
    title: "Documentos",
    subtitle: "Organização",
    icon: FileCheck,
    description: "Geração de comprovantes, GRRF, GFD"
  }, {
    id: 5,
    title: "Notificação",
    subtitle: "Email + Logs",
    icon: Mail,
    description: "Envio automático com histórico completo"
  }];
  return <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Fluxo TO BE - Processo Automatizado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visualize como será o novo processo automatizado, desde a coleta de dados até a entrega final
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => <div key={step.id} className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex flex-col items-center text-center min-w-[200px]">
                  <div className="bg-gradient-primary rounded-full p-4 mb-4 shadow-elegant">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && <ArrowRight className="h-6 w-6 text-muted-foreground hidden lg:block" />}
              </div>)}
          </div>

          <div className="mt-12 bg-gradient-subtle rounded-lg p-6">
            <h4 className="font-semibold text-card-foreground mb-4 text-center">
              Indicadores de Sucesso
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">20%</div>
                <p className="text-sm text-muted-foreground">Tempo médio por lote</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">&gt;92%</div>
                <p className="text-sm text-muted-foreground">Taxa de sucesso</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Até 300</div>
                <p className="text-sm text-muted-foreground">Desligamentos/dia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};