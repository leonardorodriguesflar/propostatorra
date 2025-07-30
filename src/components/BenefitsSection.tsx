import { CheckCircle, Clock, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Redução de 80% do tempo",
      description: "Execução do processo em apenas 20% do tempo atual"
    },
    {
      icon: Target,
      title: "Aumento da produtividade",
      description: "Mais de 90% de redução de falhas manuais"
    },
    {
      icon: TrendingUp,
      title: "Visibilidade total",
      description: "Status em tempo real com logs detalhados"
    },
    {
      icon: CheckCircle,
      title: "Alta confiabilidade",
      description: "Taxa de sucesso superior a 92%"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            Benefícios Esperados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforme seu processo de rescisão com automação inteligente e ganhe eficiência operacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card">
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};