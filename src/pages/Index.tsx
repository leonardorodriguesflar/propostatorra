import { ProposalHeader } from "@/components/ProposalHeader";
import { ProjectScope } from "@/components/ProjectScope";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServiceModels } from "@/components/ServiceModels";
import { ProcessFlow } from "@/components/ProcessFlow";
import { RpaToolsComparison } from "@/components/RpaToolsComparison";
import { Button } from "@/components/ui/button";
import { FileDown, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalHeader />
      <ProjectScope />
      <BenefitsSection />
      <ServiceModels />
      <ProcessFlow />
      <RpaToolsComparison />
      
      {/* Call to Action Footer */}
      <section className="py-16 px-6 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Pronto para Transformar seu Processo de Rescisão?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
            Entre em contato conosco para discutir a implementação da automação RPA 
            e revolucionar a eficiência operacional da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="gap-2">
              <FileDown className="h-5 w-5" />
              Baixar Proposta Completa
            </Button>
            <Button variant="outline" size="xl" className="gap-2 bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20">
              <Mail className="h-5 w-5" />
              Solicitar Reunião
            </Button>
            <Button variant="outline" size="xl" className="gap-2 bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20">
              <Phone className="h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-primary-foreground/70 text-sm">
              Esta proposta é válida por 30 dias. Implementação em 45 dias úteis após aprovação.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;