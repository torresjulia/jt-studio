import {
  Search,
  UserX,
  ShieldOff,
  Layers,
  TrendingDown,
  Award,
} from 'lucide-react';

const comparativo = [
  {
    icone: <Search size={24} />,
    pergunta:
      'Quando alguém procura "dentista perto de mim" no Google, seu Instagram aparece?',
    resposta:
      'O Google praticamente não indexa perfis de Instagram. Um site aparece nessas buscas — o Instagram, na prática, não.',
  },
  {
    icone: <UserX size={24} />,
    pergunta: 'E o cliente que nem usa Instagram?',
    resposta:
      'Pais de família, pessoas mais velhas, quem só usa WhatsApp — uma parcela real de clientes nunca vai ver seu perfil, mas pesquisa no Google antes de decidir.',
  },
  {
    icone: <ShieldOff size={24} />,
    pergunta: 'O que acontece se sua conta for banida ou hackeada amanhã?',
    resposta:
      'Anos de conteúdo e seguidores desaparecem de uma vez. Um site é seu — ninguém pode tirar, suspender ou apagar.',
  },
  {
    icone: <Layers size={24} />,
    pergunta:
      'Um cliente novo consegue achar seus preços, horários e endereço em 5 segundos?',
    resposta:
      'No Instagram a informação se perde no meio de posts e stories. Num site, fica tudo organizado num só lugar, sempre visível.',
  },
  {
    icone: <TrendingDown size={24} />,
    pergunta: 'Quantos dos seus seguidores realmente veem suas postagens hoje?',
    resposta:
      'O alcance orgânico despenca a cada atualização do algoritmo. Seu site não depende de algoritmo nenhum para ser visto.',
  },
  {
    icone: <Award size={24} />,
    pergunta:
      'Seu negócio parece tão sólido quanto o concorrente que tem site?',
    resposta:
      'Um site profissional passa a impressão de um negócio mais estabelecido — mesmo quando o produto ou serviço é parecido com o da concorrência.',
  },
];

export default function PorqueSite() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">
              Uma pergunta antes de continuar
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            "Já tenho Instagram,
            <br />
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              pra que um site?"
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-lg mt-6">
            Instagram gera visibilidade. Mas visibilidade emprestada tem limite
            — e essas perguntas mostram onde ele está.
          </p>
        </div>

        {/* Grid de perguntas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparativo.map((item) => (
            <div
              key={item.pergunta}
              className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-2xl p-7 hover:border-[#6b21a8]/40 transition-all"
            >
              <div className="text-[#3b82f6] mb-4">{item.icone}</div>
              <p className="text-white font-semibold text-base leading-snug mb-3">
                {item.pergunta}
              </p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {item.resposta}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de fechamento */}
        <div className="text-center mt-14">
          <p className="text-xl text-white font-medium">
            Instagram é a vitrine.{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              O site é o endereço fixo do seu negócio.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
