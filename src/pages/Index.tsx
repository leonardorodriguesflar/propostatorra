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
    // Cria uma nova janela com apenas o conteúdo da proposta
    const printContent = document.getElementById('proposal-content');
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Proposta de Automação RPA</title>
          <link rel="stylesheet" href="/src/index.css">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body { -webkit-print-color-adjust: exact; }
              .no-print { display: none; }
              .page-break { page-break-before: always; }
            }
            body { font-family: Inter, sans-serif; }
          </style>
        </head>
        <body class="bg-white">
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Aguarda carregar e dispara impressão
    printWindow.onload = () => {
      printWindow.print();
      setTimeout(() => printWindow.close(), 1000);
    };
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
          Imprimir Proposta
        </Button>
      </div>
    </section>
  </div>;
};
export default Index;