import { ProposalHeader } from "@/components/ProposalHeader";
import { ProjectScope } from "@/components/ProjectScope";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServiceModels } from "@/components/ServiceModels";
import { ProcessFlow } from "@/components/ProcessFlow";
import { RpaToolsComparison } from "@/components/RpaToolsComparison";
import { Button } from "@/components/ui/button";
import { FileDown, Mail, Phone } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <ProposalHeader />
      <ProjectScope />
      <BenefitsSection />
      <ServiceModels />
      <ProcessFlow />
      <RpaToolsComparison />
      
      {/* Call to Action Footer */}
      <section className="py-16 px-6 bg-gradient-primary">
        
      </section>
    </div>;
};
export default Index;