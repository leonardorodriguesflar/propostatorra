function printProposal() {
    // Abre uma nova janela para impressão
    const printWindow = window.open('', '_blank');
    const proposalContent = document.getElementById('proposal-content');
    
    if (!proposalContent) {
        alert('Conteúdo da proposta não encontrado!');
        return;
    }

    // HTML completo para a janela de impressão
    const printHTML = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Proposta Automação RPA - Lojas TORRA</title>
            <style>
                /* Reset e variáveis CSS para impressão */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :root {
                    --background: hsl(0 0% 100%);
                    --foreground: hsl(240 10% 3.9%);
                    --card: hsl(0 0% 100%);
                    --primary: hsl(240 5.9% 10%);
                    --primary-foreground: hsl(0 0% 98%);
                    --muted: hsl(240 4.8% 95.9%);
                    --muted-foreground: hsl(240 3.8% 46.1%);
                    --border: hsl(240 5.9% 90%);
                    --gradient-primary: linear-gradient(135deg, hsl(240 5.9% 10%), hsl(240 3.8% 46.1%));
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    line-height: 1.6;
                    color: var(--foreground);
                    background-color: var(--background);
                    font-size: 12px;
                }

                /* Layout básico */
                .max-w-6xl { max-width: 100%; margin: 0 auto; }
                .py-16 { padding: 2rem 0; }
                .px-6 { padding: 0 1rem; }
                .p-4 { padding: 0.75rem; }
                .p-6 { padding: 1rem; }
                .mb-6 { margin-bottom: 1rem; }
                .mb-4 { margin-bottom: 0.75rem; }
                .mb-12 { margin-bottom: 2rem; }
                .mt-8 { margin-top: 1.5rem; }
                .mt-12 { margin-top: 2rem; }
                .ml-auto { margin-left: auto; }
                .text-center { text-align: center; }

                /* Typography */
                .font-bold { font-weight: 700; }
                .font-semibold { font-weight: 600; }
                .font-medium { font-weight: 500; }
                .text-4xl { font-size: 1.5rem; }
                .text-3xl { font-size: 1.25rem; }
                .text-xl { font-size: 1.1rem; }
                .text-lg { font-size: 1rem; }
                .text-sm { font-size: 0.875rem; }
                .opacity-90 { opacity: 0.9; }

                /* Flexbox e Grid */
                .flex { display: flex; }
                .items-center { align-items: center; }
                .items-start { align-items: flex-start; }
                .justify-center { justify-content: center; }
                .gap-3 { gap: 0.5rem; }
                .gap-6 { gap: 1rem; }
                .gap-8 { gap: 1.5rem; }
                .space-y-3 > * + * { margin-top: 0.5rem; }
                .space-y-8 > * + * { margin-top: 1.5rem; }

                .grid { display: grid; }
                .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
                .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }

                /* Cards */
                .card {
                    background-color: var(--card);
                    border: 1px solid var(--border);
                    border-radius: 0.25rem;
                    margin-bottom: 1rem;
                    break-inside: avoid;
                }

                .card-header {
                    background-color: #f5f5f5;
                    border-bottom: 1px solid var(--border);
                    padding: 0.75rem;
                }

                /* Badge */
                .badge {
                    display: inline-flex;
                    align-items: center;
                    border-radius: 9999px;
                    border: 1px solid var(--border);
                    padding: 0.25rem 0.5rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    background-color: #f5f5f5;
                    color: var(--foreground);
                }

                /* Tables */
                .table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.875rem;
                }

                .table th,
                .table td {
                    text-align: left;
                    padding: 0.5rem;
                    border-bottom: 1px solid var(--border);
                    border-right: 1px solid var(--border);
                }

                .table th {
                    font-weight: 600;
                    background-color: #f5f5f5;
                    color: var(--foreground);
                }

                .table td {
                    color: var(--foreground);
                }

                .w-20 { width: 15%; }
                .w-48 { width: 25%; }

                /* Colors */
                .text-foreground { color: var(--foreground); }
                .text-muted-foreground { color: var(--muted-foreground); }
                .text-primary-foreground { color: var(--primary-foreground); }
                .text-primary { color: var(--primary); }
                .text-green-500 { color: #22c55e; }
                .text-red-500 { color: #ef4444; }

                /* Backgrounds */
                .bg-background { background-color: var(--background); }
                .bg-gradient-primary { 
                    background: #333;
                    color: white;
                }
                .bg-white\/10 { background-color: rgba(255, 255, 255, 0.2); }
                .bg-muted\/50 { background-color: rgba(240, 240, 240, 0.5); }
                .bg-muted\/30 { background-color: rgba(240, 240, 240, 0.3); }

                /* Rounded corners */
                .rounded-lg { border-radius: 0.25rem; }

                /* SVG Icons */
                svg {
                    display: inline-block;
                    vertical-align: middle;
                }

                .h-5, .w-5 { height: 1rem; width: 1rem; }
                .h-6, .w-6 { height: 1.25rem; width: 1.25rem; }
                .h-8, .w-8 { height: 1.5rem; width: 1.5rem; }
                .h-10, .w-10 { height: 2rem; width: 2rem; }

                .overflow-hidden { overflow: hidden; }

                /* Print specific styles */
                @page {
                    margin: 1cm;
                    size: A4;
                }

                @media print {
                    body { font-size: 11px; }
                    .py-16 { padding: 1rem 0; }
                    .card { margin-bottom: 0.5rem; }
                    .space-y-8 > * + * { margin-top: 1rem; }
                }
            </style>
        </head>
        <body>
            ${proposalContent.outerHTML}
        </body>
        </html>
    `;

    // Escreve o conteúdo na nova janela
    printWindow.document.write(printHTML);
    printWindow.document.close();

    // Aguarda o carregamento e depois imprime
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
            setTimeout(() => {
                printWindow.close();
            }, 1000);
        }, 500);
    };
}