import { ProposalHeader } from "@/components/ProposalHeader";
import { ProjectScope } from "@/components/ProjectScope";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServiceModels } from "@/components/ServiceModels";
import { ProcessFlow } from "@/components/ProcessFlow";
import { RpaToolsComparison } from "@/components/RpaToolsComparison";
import { Button } from "@/components/ui/button";
import { FileDown, Mail, Phone } from "lucide-react";
import html2pdf from "html2pdf.js";
const Index = () => {
  const downloadPDF = () => {
    const element = document.getElementById('proposal-content');
    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'proposta-automacao-rpa.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 1,
        useCORS: true,
        allowTaint: true,
        height: window.innerHeight,
        width: window.innerWidth,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return <div className="min-h-screen bg-background">
    <div id="proposal-content">
      <ProposalHeader />
      <ProjectScope />
      <BenefitsSection />
      <ServiceModels />
      <ProcessFlow />
      <RpaToolsComparison />
    </div>
      
    {/* Call to Action Footer */}
    <section className="py-16 px-6 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Pronto para Transformar seus Processos?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Baixe nossa proposta completa e descubra como podemos automatizar sua empresa
        </p>
        <Button 
          onClick={downloadPDF}
          size="xl" 
          variant="secondary"
          className="bg-white text-primary hover:bg-white/90"
        >
          <FileDown className="mr-2 h-5 w-5" />
          Baixar Proposta em PDF
        </Button>
      </div>
    </section>
  </div>;
};
export default Index;