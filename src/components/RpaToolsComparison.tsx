import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Zap, Shield, DollarSign } from "lucide-react";

export const RpaToolsComparison = () => {
  const tools = [
    {
      name: "Automation Anywhere",
      strengths: "Orquestração robusta, bots atendidos/não atendidos, IA nativa",
      observation: "Melhor opção SaaS para nuvem e escalabilidade",
      rating: 5,
      icon: Star,
      category: "Enterprise",
      tags: ["SaaS", "Escalabilidade", "IA Nativa"]
    },
    {
      name: "UiPath",
      strengths: "Ecossistema avançado, forte em SAP e IA",
      observation: "Ideal para ambientes híbridos ou On-Premise",
      rating: 5,
      icon: Shield,
      category: "Enterprise",
      tags: ["Híbrido", "SAP", "Robusto"]
    },
    {
      name: "Power Automate Desktop",
      strengths: "Integração nativa com Microsoft 365 e Power Platform",
      observation: "Bom custo-benefício para clientes Microsoft",
      rating: 4,
      icon: DollarSign,
      category: "Microsoft",
      tags: ["Microsoft", "Custo-benefício", "Integração"]
    },
    {
      name: "Blue Prism",
      strengths: "Governança corporativa forte e segurança",
      observation: "Preferencialmente On-Premise",
      rating: 4,
      icon: Shield,
      category: "Enterprise",
      tags: ["Segurança", "Governança", "On-Premise"]
    },
    {
      name: "Roquetbot",
      strengths: "Plataforma cloud-first, rápida implementação e baixo custo",
      observation: "Excelente para empresas que querem simplicidade SaaS",
      rating: 4,
      icon: Zap,
      category: "Cloud-Native",
      tags: ["Cloud-First", "Rápida", "Baixo Custo"]
    }
  ];

  const conclusions = [
    {
      model: "SaaS",
      tools: "Falar",
      reason: "Facilidade de integração e custo operacional"
    },
    {
      model: "On-Premise",
      tools: "UiPath ou Blue Prism",
      reason: "Maior controle interno"
    },
    {
      model: "Cliente Microsoft",
      tools: "Power Automate",
      reason: "Ótimo custo-benefício"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Módulo de Ferramentas RPA - Comparativo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Análise das principais ferramentas RPA do mercado para implementação da automação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-lg p-2">
                    <tool.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground text-lg">
                      {tool.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < tool.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-card-foreground mb-1">Pontos Fortes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.strengths}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-card-foreground mb-1">Observações</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.observation}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {tool.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-card">
          <h3 className="text-xl font-bold text-card-foreground mb-6 text-center">
            Análise Conclusiva por Modelo
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {conclusions.map((conclusion, index) => (
              <div key={index} className="bg-gradient-subtle rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-card-foreground">
                    {conclusion.model}
                  </h4>
                </div>
                <p className="font-medium text-primary text-sm mb-2">
                  {conclusion.tools}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {conclusion.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};