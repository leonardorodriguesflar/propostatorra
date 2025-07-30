import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, CheckCircle, Star } from "lucide-react";

export const ServiceModels = () => {
  const models = [
    {
      name: "SaaS",
      subtitle: "Recomendado",
      icon: Cloud,
      description: "Infraestrutura completa em nuvem, 100% gerida pelo fornecedor",
      features: [
        "Hospedagem em nuvem totalmente gerida",
        "Licenças, orquestração e manutenção incluídas",
        "Integração via VPN fornecida pelo cliente",
        "Execução 24/7 com logs automáticos",
        "Suporte técnico nível 1 e 2 incluso"
      ],
      clientRequirements: [
        "VPN configurada",
        "Certificados digitais",
        "Credenciais dos sistemas"
      ],
      recommended: true,
      pricing: "Modelo de assinatura mensal"
    },
    {
      name: "On-Premise",
      subtitle: "Recursos do Cliente",
      icon: Server,
      description: "Infraestrutura fornecida pelo cliente com suporte para instalação",
      features: [
        "Infraestrutura cliente (VM + Orquestrador)",
        "Instalação e configuração assistida",
        "Manutenção com suporte técnico",
        "Controle total sobre a infraestrutura",
        "Customizações avançadas disponíveis"
      ],
      clientRequirements: [
        "Máquina Virtual dedicada",
        "Licenças RPA (cliente)",
        "Rede e certificados",
        "Equipe técnica interna"
      ],
      recommended: false,
      pricing: "Investimento único + manutenção"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Modelos de Oferta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o modelo que melhor se adapta às necessidades e infraestrutura da sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Card key={index} className={`p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative ${
              model.recommended ? 'ring-2 ring-primary bg-gradient-card' : 'bg-card'
            }`}>
              {model.recommended && (
                <Badge className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Recomendado
                </Badge>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`rounded-lg p-3 ${
                  model.recommended ? 'bg-gradient-primary' : 'bg-secondary'
                }`}>
                  <model.icon className={`h-8 w-8 ${
                    model.recommended ? 'text-primary-foreground' : 'text-secondary-foreground'
                  }`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {model.name}
                  </h3>
                  <p className="text-muted-foreground">{model.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {model.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Inclui
                  </h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">
                    Cliente Fornece
                  </h4>
                  <ul className="space-y-2">
                    {model.clientRequirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-sm">
                        <div className="h-2 w-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold">Modelo de Precificação:</span> {model.pricing}
                  </p>
                  <Button 
                    variant={model.recommended ? "gradient" : "professional"} 
                    size="lg" 
                    className="w-full"
                  >
                    Solicitar Proposta {model.name}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-subtle rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Próximos Passos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-bold mb-2">
                1
              </div>
              <p className="text-sm text-muted-foreground">Aprovação da proposta e escolha do modelo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-bold mb-2">
                2
              </div>
              <p className="text-sm text-muted-foreground">Fornecimento de VPN, certificados e credenciais</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-bold mb-2">
                3
              </div>
              <p className="text-sm text-muted-foreground">Desenvolvimento, testes e go-live em 45 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};