import { Card } from "@/components/ui/card";
import { CheckCircle, Database, FileText, Mail, BarChart3 } from "lucide-react";

export const ProjectScope = () => {
  const scopeItems = [
    {
      icon: Database,
      title: "Apuração de Descontos e Benefícios",
      description: "Consulta automática em múltiplos sistemas: Univers, Creditas, Santander, E-Consignado e FGTS",
      details: [
        "Integração com sistemas externos",
        "Validação automática de dados",
        "Consolidação em planilha central"
      ]
    },
    {
      icon: FileText,
      title: "Lançamentos no Sistema AP Data",
      description: "Inclusão automática dos dados processados com opção de upload em lote via XLS",
      details: [
        "Lançamentos automáticos",
        "Upload em lote (XLS)",
        "Validação de integridade"
      ]
    },
    {
      icon: FileText,
      title: "Emissão e Organização de Documentos",
      description: "Geração automática de todos os documentos de desligamento necessários",
      details: [
        "Comprovantes diversos",
        "Seguro Desemprego",
        "GRRF e GFD",
        "Organização por loja"
      ]
    },
    {
      icon: Mail,
      title: "Notificação e Logging",
      description: "Sistema completo de notificações e histórico de execução para auditoria",
      details: [
        "E-mails automáticos",
        "Logs detalhados",
        "Histórico para auditoria"
      ]
    },
    {
      icon: BarChart3,
      title: "Indicadores e Relatórios",
      description: "Dashboards gerenciais com métricas de performance e acompanhamento em tempo real",
      details: [
        "Métricas de performance",
        "Relatórios gerenciais",
        "Acompanhamento em tempo real"
      ]
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Escopo do Projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automação integral do processo de Rescisão de Funcionários, contemplando todas as etapas críticas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {scopeItems.map((item, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-primary rounded-lg p-3 flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Automação Integral do Processo de Rescisão
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Nossa solução abrange desde a extração inicial dos dados até a entrega final dos documentos, 
            garantindo um processo completamente automatizado e auditável.
          </p>
        </div>
      </div>
    </section>
  );
};