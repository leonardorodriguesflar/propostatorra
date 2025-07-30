import { Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    phase: "Fase 1 – Planejamento e Levantamento",
    duration: "5 dias úteis",
    items: [
      { day: "1", activity: "Kick-off e alinhamento de escopo", responsible: "Cliente + Fornecedor", delivery: "Ata de reunião" },
      { day: "1-2", activity: "Coleta de acessos, VPN e credenciais", responsible: "Cliente", delivery: "Lista de acessos" },
      { day: "2-3", activity: "Levantamento detalhado do AS-IS e dados", responsible: "Fornecedor", delivery: "Documento revisado" },
      { day: "4", activity: "Mapeamento TO-BE preliminar", responsible: "Fornecedor", delivery: "Fluxo inicial" },
      { day: "5", activity: "Validação do TO-BE com cliente", responsible: "Cliente + Fornecedor", delivery: "TO-BE aprovado" }
    ]
  },
  {
    phase: "Fase 2 – Desenvolvimento RPA",
    duration: "35 dias úteis",
    items: [
      { day: "6-7", activity: "Configuração do ambiente de desenvolvimento", responsible: "Fornecedor", delivery: "Ambiente configurado" },
      { day: "8-12", activity: "Desenvolvimento da estrutura base do bot", responsible: "Fornecedor", delivery: "Framework do bot" },
      { day: "13-18", activity: "Automação da apuração de descontos e benefícios", responsible: "Fornecedor", delivery: "Bot versão 0.1" },
      { day: "19-24", activity: "Automação dos lançamentos no AP Data", responsible: "Fornecedor", delivery: "Bot versão 0.2" },
      { day: "25-30", activity: "Automação da emissão e organização de documentos", responsible: "Fornecedor", delivery: "Bot versão 0.3" },
      { day: "31-34", activity: "Implementação de logs, notificações e indicadores", responsible: "Fornecedor", delivery: "Bot versão 0.4" },
      { day: "35-38", activity: "Otimização de performance e tratamento de exceções", responsible: "Fornecedor", delivery: "Bot versão 0.5" },
      { day: "39-40", activity: "Testes de integração completos e refinamentos", responsible: "Fornecedor", delivery: "Bot versão 0.6 otimizada" }
    ]
  },
  {
    phase: "Fase 3 – Testes e QA/UAT",
    duration: "17 dias úteis",
    items: [
      { day: "41-45", activity: "Testes internos (QA) abrangentes", responsible: "Fornecedor", delivery: "Relatório de testes QA" },
      { day: "46-50", activity: "Testes de integração em ambiente homologação", responsible: "Cliente + Fornecedor", delivery: "Checklist de integração" },
      { day: "51-55", activity: "Testes de aceitação pelo cliente (UAT)", responsible: "Cliente + Fornecedor", delivery: "Checklist UAT aprovado" },
      { day: "56-57", activity: "Ajustes finais baseados em feedback", responsible: "Fornecedor", delivery: "Bot versão 1.0 finalizada" }
    ]
  },
  {
    phase: "Fase 4 – Implantação e Go-Live",
    duration: "5 dias úteis",
    items: [
      { day: "58-59", activity: "Preparação do ambiente de Produção", responsible: "Fornecedor", delivery: "Infraestrutura validada" },
      { day: "60", activity: "Implantação em Produção", responsible: "Fornecedor", delivery: "Ambiente produtivo ativo" },
      { day: "61-62", activity: "Acompanhamento assistido (Hypercare)", responsible: "Cliente + Fornecedor", delivery: "Go-Live validado e aceite final" }
    ]
  }
];

const milestones = [
  { day: "Dia 5", description: "TO-BE aprovado pelo cliente" },
  { day: "Dia 40", description: "Bot completo em ambiente de desenvolvimento" },
  { day: "Dia 57", description: "UAT aprovado e versão 1.0 finalizada" },
  { day: "Dia 62", description: "Go-Live concluído e aceite formal" }
];

export const ProjectTimeline = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Cronograma Detalhado</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Automação do Processo de Rescisão - 62 dias úteis
          </p>
        </div>

        <div className="space-y-8">
          {timelineData.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  {phase.phase}
                  <Badge variant="secondary" className="ml-auto">
                    {phase.duration}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">Dia</TableHead>
                      <TableHead>Atividade</TableHead>
                      <TableHead className="w-48">Responsável</TableHead>
                      <TableHead className="w-48">Entrega</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {phase.items.map((item, itemIndex) => (
                      <TableRow key={itemIndex}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            {item.responsible}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            {item.delivery}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marcos do Projeto */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              Marcos do Projeto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <Badge variant="outline" className="font-semibold">
                    {milestone.day}
                  </Badge>
                  <span className="text-sm">{milestone.description}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};