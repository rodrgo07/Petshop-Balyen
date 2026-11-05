/* ==========================================================================
   PET BALYEN — script.js
   --------------------------------------------------------------------------
   ⚙️  COMO EDITAR O SITE
   Todos os textos, serviços, ofertas, telefone e links ficam no objeto
   CONFIG logo abaixo. Altere só os valores entre aspas e salve.
   O layout (index.html / style.css) não precisa ser tocado.

   • Campos marcados com  ✏️ PREENCHER  ainda estão vazios ou precisam
     ser confirmados pela loja.
   • Deixar um campo vazio ('') é seguro: o site esconde ou troca por um
     texto padrão (ex.: preço vazio → "Consulte pelo WhatsApp").
   • Depois de editar, (opcional, recomendado) rode no terminal:
         node ferramentas/pre-render.js
     Isso grava os novos textos direto no index.html (melhor para o Google
     e para quem abre o site com internet lenta). Se não rodar, o site se
     atualiza sozinho pelo navegador do mesmo jeito.
   ========================================================================== */

const CONFIG = {
  /* ------------------------------------------------------------------
     1) DADOS DA LOJA
     ------------------------------------------------------------------ */
  loja: {
    nome: 'Pet Balyen',
    slogan: 'Petshop humanizado • Cuidamos do seu bebê como se fosse nosso',
    whatsapp: '5511992959110',              // só números, com 55 + DDD
    telefoneExibicao: '(11) 99295-9110',
    instagram: 'https://www.instagram.com/petbalyen/',
    instagramUsuario: '@petbalyen',
    endereco: {
      rua: 'Rua Guido Fecchio, 125',
      bairro: 'Centro',
      cidade: 'Cotia',
      uf: 'SP',
      cep: '06700-105',
    },
    geo: { lat: -23.60398, lng: -46.93222 },
    // Links do Google Maps
    mapsAvaliacoes: 'https://www.google.com/maps/search/?api=1&query=Pet+Balyen+Cotia',
    mapsComoChegar: 'https://www.google.com/maps/dir/?api=1&destination=Pet+Balyen,+Rua+Guido+Fecchio,+125+-+Centro,+Cotia+-+SP,+06700-105',
    mapsEmbed: 'https://www.google.com/maps?q=Pet+Balyen,+Rua+Guido+Fecchio,+125,+Cotia+-+SP&z=16&output=embed',
    notaGoogle: '5,0',
    totalAvaliacoes: '+130',
  },

  /* ------------------------------------------------------------------
     2) SEO — ✏️ CONFIRMAR o endereço final do site depois de publicar
     ------------------------------------------------------------------ */
  seo: {
    url: 'https://petbalyen.pages.dev/',   // ✏️ PREENCHER: troque pelo domínio definitivo
    titulo: 'Pet Balyen | Banho e Tosa em Cotia – SP | Leva e Traz',
    descricao: 'Petshop humanizado no Centro de Cotia. Banho, tosa, tosa higiênica e hidratação com leva e traz. Nota 5,0 no Google. Agende pelo WhatsApp!',
  },

  /* ------------------------------------------------------------------
     3) MENSAGENS PRÉ-PREENCHIDAS DO WHATSAPP
     {servico} é trocado automaticamente pelo nome do serviço.
     ------------------------------------------------------------------ */
  mensagens: {
    padrao: 'Olá! Vi o site e quero agendar um horário para o meu pet 🐾',
    servico: 'Olá! Vi o site e quero agendar {servico} para o meu pet 🐾',
    levaETraz: 'Olá! Vi o site e quero agendar um banho com o leva e traz para o meu pet 🚐🐾',
    duvida: 'Olá! Vi o site e tenho uma dúvida sobre os serviços para o meu pet 💬',
  },

  /* ------------------------------------------------------------------
     4) TEXTOS DAS SEÇÕES
     ------------------------------------------------------------------ */
  textos: {
    agendarTopo: 'Agendar',
    microtexto: 'Agendamento direto com a nossa equipe pelo WhatsApp 💙',
    botaoFlutuante: 'Agendar pelo WhatsApp',

    heroTitulo: 'Banho e Tosa em Cotia com carinho de família',
    heroSubtitulo: 'Petshop humanizado: cuidamos do seu bebê como se fosse nosso.',
    heroSeloNota: '⭐ 5,0 no Google',
    heroSeloLevaTraz: '🚐 Leva e traz',
    heroCta: 'Agendar pelo WhatsApp',
    heroCta2: 'Conhecer os serviços',

    servicosTitulo: 'Banho e tosa no Centro de Cotia',
    servicosSubtitulo: 'Tudo feito com calma, produtos suaves e muito chamego. Escolha o cuidado do seu bebê:',
    servicoBotao: 'Agendar este serviço',
    servicoSemPreco: 'Consulte pelo WhatsApp',
    maisTitulo: 'E muito mais!',
    maisTexto: 'Tem alguma dúvida ou procura outro cuidado? Pergunte pra gente 💬',
    maisBotao: 'Perguntar no WhatsApp',

    levaTrazSelo: 'Sistema leva e traz',
    levaTrazTitulo: 'Leva e traz: a gente busca e devolve seu pet em casa',
    levaTrazTexto: 'Sem correria na sua rotina! Nossa equipe busca o seu bebê, cuida dele com todo o carinho e devolve cheiroso e feliz na sua porta.',
    levaTrazPasso1: 'Buscamos em casa',
    levaTrazPasso2: 'Banho com carinho',
    levaTrazPasso3: 'Devolvemos cheiroso',
    levaTrazCta: 'Quero o leva e traz',

    ofertaTitulo: 'Oferta especial pra você',

    galeriaTitulo: 'Família Balyen',
    galeriaSubtitulo: 'Alguns dos bebês que passaram por aqui (e saíram ainda mais lindos).',
    galeriaBotao: 'Ver mais no Instagram',

    videosTitulo: 'Veja com quanto carinho cuidamos de cada pet',
    videosSubtitulo: 'Bastidores do banho e da secagem, do jeitinho que acontece aqui.',
    videoSomLigar: 'Ativar som',
    videoSomDesligar: 'Desativar som',

    produtosSelo: 'Hipoalergênico',
    produtosTitulo: 'Produtos hipoalergênicos, suaves para a pele',
    produtosTexto: 'Usamos produtos hipoalergênicos Hydra, mais suaves para a pele do seu pet. Ideal para os bebês mais sensíveis.',

    depoimentosTitulo: 'Quem confia, recomenda 💙',
    depoimentosSelo: 'Avaliação no Google',
    depoimentosBotao: 'Ver todas as avaliações no Google',

    curiosidadesTitulo: 'Você sabia?',

    passosTitulo: 'Como agendar',
    passosCta: 'Já agendou o banho? 🛁',

    faqTitulo: 'Perguntas frequentes',

    localTitulo: 'Pet shop no Centro de Cotia',
    localHorarios: 'Horários de atendimento',
    localComoChegar: 'Como chegar',
    localVerMapa: 'Ver mapa',
    localHoje: 'Hoje',

    finalTitulo: 'Seu pet merece esse carinho 💙',
    finalTexto: 'Chama a gente no WhatsApp e garanta o horário do seu bebê.',
    finalCta: 'Agendar pelo WhatsApp',
  },

  /* ------------------------------------------------------------------
     5) DIFERENCIAIS (faixa de ícones azuis)
     ícones disponíveis: coracao, van, gota, pata, banho, tesoura,
     higienica, hidratacao, chat, estrela, presente, casa
     ------------------------------------------------------------------ */
  diferenciais: [
    { icone: 'coracao', titulo: 'Atendimento humanizado' },
    { icone: 'van', titulo: 'Leva e traz' },
    { icone: 'gota', titulo: 'Produtos hipoalergênicos' },
    { icone: 'pata', titulo: 'Pets soltinhos e à vontade' },
  ],

  /* ------------------------------------------------------------------
     6) SERVIÇOS
     preco: deixe '' para mostrar "Consulte pelo WhatsApp".
     Ex.: preco: 'a partir de R$ 60'
     ------------------------------------------------------------------ */
  servicos: [
    {
      icone: 'banho', nome: 'Banho',
      descricao: 'Banho caprichado com produtos suaves, secagem com carinho e aquele cheirinho de pet limpinho.',
      preco: '', // ✏️ PREENCHER
    },
    {
      icone: 'tesoura', nome: 'Tosa',
      descricao: 'Tosa feita com calma e paciência, no estilo que combina com o seu bebê (e com você).',
      preco: '', // ✏️ PREENCHER
    },
    {
      icone: 'higienica', nome: 'Tosa Higiênica',
      descricao: 'Aparamos barriguinha, patinhas e regiões íntimas para mais higiene e conforto no dia a dia.',
      preco: '', // ✏️ PREENCHER
    },
    {
      icone: 'hidratacao', nome: 'Hidratação',
      descricao: 'Pelos macios, brilhantes e fáceis de desembaraçar. Um mimo que o seu pet merece.',
      preco: '', // ✏️ PREENCHER
    },
  ],

  /* ------------------------------------------------------------------
     7) LEVA E TRAZ — ✏️ PREENCHER (vazio = "Consulte a disponibilidade…")
     ------------------------------------------------------------------ */
  levaETraz: {
    area: '',  // ex.: 'Centro, Granja Viana e bairros próximos de Cotia'
    taxa: '',  // ex.: 'a partir de R$ 10'  ou  'Grátis no pacote mensal'
    semInfo: 'Consulte a disponibilidade para o seu bairro',
  },

  /* ------------------------------------------------------------------
     8) OFERTAS EM DESTAQUE
     Uma oferta só aparece se "titulo" E "beneficio" estiverem preenchidos.
     Se nenhuma estiver preenchida, a seção inteira some.
     validade: 'AAAA-MM-DD' (opcional) → mostra contagem regressiva e some
     sozinha depois da data.
     ------------------------------------------------------------------ */
  ofertas: [
    {
      selo: 'Primeira visita',
      titulo: 'Primeiro banho na Pet Balyen',
      beneficio: '',   // ✏️ PREENCHER  ex.: '10% de desconto no primeiro banho'
      detalhe: '',     // ex.: 'Válido para novos clientes.'
      validade: '',    // ex.: '2026-12-20'
      cta: 'Quero essa oferta',
      mensagem: 'Olá! Vi no site a oferta do primeiro banho e quero agendar para o meu pet 🐾',
    },
    {
      selo: 'Pacote',
      titulo: 'Pacote mensal de banhos',
      beneficio: '',   // ✏️ PREENCHER  ex.: '4 banhos no mês com leva e traz incluso'
      detalhe: '',
      validade: '',
      cta: 'Quero o pacote mensal',
      mensagem: 'Olá! Vi no site o pacote mensal de banhos e quero saber mais 🐾',
    },
  ],

  /* ------------------------------------------------------------------
     9) SEÇÃO SAZONAL (opcional) — ativo: false para esconder
     ------------------------------------------------------------------ */
  sazonal: {
    ativo: true,
    selo: 'Datas festivas',
    titulo: 'O Natal está chegando! 🎄',
    texto: 'Que tal deixar o seu bebê cheiroso e lindo para as fotos de fim de ano com a família? Garanta o banho dele antes das festas.',
    imagem: 'banho-tosa-cotia-pet-balyen-bully-natal',
    alt: 'Bully com gorro de Papai Noel e bandana natalina, sorrindo após o banho na Pet Balyen, em Cotia',
    cta: 'Agendar o banho de Natal',
    mensagem: 'Olá! Vi o site e quero agendar o banho de Natal do meu pet 🎄🐾',
  },

  /* ------------------------------------------------------------------
     10) GALERIA "FAMÍLIA BALYEN"
     imagem: nome base do arquivo em assets/img (sem -400/-720 e extensão)
     ------------------------------------------------------------------ */
  galeria: [
    {
      imagem: 'banho-tosa-cotia-pet-balyen-filhote-caramelo',
      alt: 'Filhote caramelo com bandana rosa e strass na testa, de língua de fora após o banho na Pet Balyen',
      legenda: 'Sorriso de quem acabou de sair do banho 🐾',
    },
    {
      imagem: 'banho-tosa-cotia-pet-balyen-cachorro-olhos-azuis-galeria',
      alt: 'Cachorro tricolor de olhos azuis com laço rosa, sentado e feliz depois do banho e tosa em Cotia',
      legenda: 'Olhos azuis e laço rosa: pronta pra arrasar 💙',
    },
    {
      imagem: 'banho-tosa-cotia-pet-balyen-bully-natal',
      alt: 'Bully com gorro de Papai Noel e bandana natalina, sorrindo na Pet Balyen',
      legenda: 'Cheiroso e no clima de Natal 🎄',
    },
  ],

  /* ------------------------------------------------------------------
     11) VÍDEOS (bastidores) — arquivos em assets/video e pôster em assets/img
     ------------------------------------------------------------------ */
  videos: [
    {
      arquivo: 'bastidores-banho-pet-balyen-cotia',
      titulo: 'Hora do banho 🛁',
      descricao: 'Vídeo do banho de um pastor-alemão na Pet Balyen',
    },
    {
      arquivo: 'bastidores-secagem-pet-balyen-cotia',
      titulo: 'Banho, secagem e bandana 💙',
      descricao: 'Vídeo do banho e da secagem de um cachorrinho de pelo longo na Pet Balyen',
    },
  ],

  /* ------------------------------------------------------------------
     12) DEPOIMENTOS — somente trechos reais de avaliações do Google
     ------------------------------------------------------------------ */
  depoimentos: [
    'Meus pets voltaram simplesmente perfeitos, cheirosos e muito bem cuidados. Trabalho impecável, feito com muito carinho e dedicação.',
    'Meu cachorro tinha ‘fama’ de ser bravo no antigo pet; no Balyen, quando chegamos, ele estava até dormindo. Fora que os pets ficam livres e à vontade no local.',
    'Atendimento maravilhoso, desde o início até a entrega do nosso animalzinho. Muito atenciosa, sinalizou alguns cuidados.',
    'A Chanel vinha tomando banho em outro pet shop e acabou ficando traumatizada… fiquei realmente muito feliz com a experiência.',
  ],

  /* ------------------------------------------------------------------
     13) "VOCÊ SABIA?"
     ------------------------------------------------------------------ */
  curiosidades: [
    {
      icone: 'banho',
      titulo: 'Banho demais também não é bom',
      texto: 'A frequência ideal depende da raça, da pelagem e da rotina do pet. Banhos em excesso podem ressecar a pele, por isso o equilíbrio é tudo.',
    },
    {
      icone: 'higienica',
      titulo: 'Tosa higiênica é saúde',
      texto: 'Aparar os pelos da barriga, das partes íntimas e entre os dedinhos evita acúmulo de sujeira e umidade, ajuda a prevenir assaduras e até escorregões.',
    },
    {
      icone: 'gota',
      titulo: 'A pele do pet é diferente da nossa',
      texto: 'Ela é mais fina e tem outro pH, por isso shampoo de gente não é indicado. Produtos próprios para pets (e hipoalergênicos para os sensíveis) fazem toda a diferença.',
    },
  ],

  /* ------------------------------------------------------------------
     14) COMO AGENDAR (3 passos)
     ------------------------------------------------------------------ */
  passos: [
    { titulo: 'Clique em "Agendar"', texto: 'Você cai direto no nosso WhatsApp, com a mensagem prontinha.' },
    { titulo: 'Combine dia e horário', texto: 'Nossa equipe confirma o melhor horário para o seu bebê.' },
    { titulo: 'Traga seu pet', texto: 'Ou use o leva e traz: a gente busca e devolve em casa.' },
  ],

  /* ------------------------------------------------------------------
     15) PERGUNTAS FREQUENTES — ✏️ CONFIRMAR as respostas com a equipe
     ------------------------------------------------------------------ */
  faq: [
    {
      pergunta: 'Quanto tempo leva o banho?',
      // ✏️ PREENCHER: se quiser, informe o tempo médio (ex.: "de 1h30 a 3h")
      resposta: 'Depende do porte, da pelagem e do serviço escolhido. Quando você agenda pelo WhatsApp, a nossa equipe já passa a previsão certinha para o seu pet.',
    },
    {
      pergunta: 'Vocês atendem gatos?',
      // ✏️ CONFIRMAR: quais serviços são feitos em gatos
      resposta: 'Nosso logo tem um gatinho por um motivo 🐱 Chama a gente no WhatsApp para saber quais cuidados estão disponíveis para o seu gato.',
    },
    {
      pergunta: 'Como funciona o leva e traz?',
      resposta: 'Nossa equipe busca o seu pet em casa no horário combinado e devolve depois do banho, cheiroso e feliz. Consulte a disponibilidade e as condições para o seu bairro pelo WhatsApp.',
    },
    {
      pergunta: 'Que produtos vocês usam?',
      resposta: 'Usamos produtos hipoalergênicos da linha Hydra, mais suaves para a pele do seu pet. Se o seu bebê tem alguma sensibilidade, é só avisar a nossa equipe.',
    },
    {
      pergunta: 'Precisa agendar?',
      // ✏️ CONFIRMAR: se a loja aceita encaixes sem agendamento
      resposta: 'Sim! Trabalhamos com horário marcado para dar toda a atenção que o seu bebê merece. É só chamar no WhatsApp e combinar o melhor dia.',
    },
  ],

  /* ------------------------------------------------------------------
     16) HORÁRIOS (abre/fecha no formato 24h 'HH:MM')
     diasSemana: 0 = domingo, 1 = segunda … 6 = sábado
     ------------------------------------------------------------------ */
  horarios: [
    { dias: 'Segunda a quinta', diasSemana: [1, 2, 3, 4], abre: '09:00', fecha: '18:00' },
    { dias: 'Sexta e sábado', diasSemana: [5, 6], abre: '08:00', fecha: '18:00' },
    { dias: 'Domingo', diasSemana: [0], abre: '09:00', fecha: '12:30' },
  ],
};

/* ==========================================================================
   DAQUI PARA BAIXO: CÓDIGO DO SITE (não precisa mexer)
   ========================================================================== */

/** Escapa texto para uso seguro dentro do HTML */
function esc(t) {
  return String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** Monta o link do WhatsApp com a mensagem pré-preenchida */
function linkWhats(msg, cfg) {
  const c = cfg || CONFIG;
  return 'https://api.whatsapp.com/send?phone=' + c.loja.whatsapp +
    '&text=' + encodeURIComponent(msg || c.mensagens.padrao);
}

/** Lê um valor do CONFIG pelo caminho, ex.: "textos.heroTitulo" */
function pegar(caminho, cfg) {
  return caminho.split('.').reduce((o, k) => (o == null ? o : o[k]), cfg || CONFIG);
}

/** Ícone do sprite SVG que está no index.html */
function icone(nome, cls) {
  return '<svg class="' + (cls || 'ico') + '" aria-hidden="true" focusable="false"><use href="#i-' + esc(nome) + '"></use></svg>';
}

/** Atributos padrão para links externos */
const EXT = 'target="_blank" rel="noopener"';

/** <picture> com AVIF + WebP em vários tamanhos */
function foto(base, alt, sizes, larguras, extra) {
  const ws = larguras || [400, 720];
  const set = (ext) => ws.map((w) => 'assets/img/' + base + '-' + w + '.' + ext + ' ' + w + 'w').join(', ');
  const maior = ws[ws.length - 1];
  return '<picture>' +
    '<source type="image/avif" srcset="' + set('avif') + '" sizes="' + sizes + '">' +
    '<source type="image/webp" srcset="' + set('webp') + '" sizes="' + sizes + '">' +
    '<img src="assets/img/' + base + '-' + maior + '.webp" alt="' + esc(alt) + '" width="' + maior + '" height="' + maior + '" loading="lazy" decoding="async"' + (extra || '') + '>' +
    '</picture>';
}

/** "09:00" → "9h", "12:30" → "12h30" */
function hora(h) {
  const [hh, mm] = h.split(':');
  return parseInt(hh, 10) + 'h' + (mm && mm !== '00' ? mm : '');
}

/** Converte a data 'AAAA-MM-DD' para 'DD/MM' */
function dataCurta(d) {
  const p = d.split('-');
  return p[2] + '/' + p[1];
}

/* --------------------------------------------------------------------------
   RENDERIZADORES: recebem o CONFIG e devolvem HTML (texto).
   São usados no navegador e pelo ferramentas/pre-render.js.
   -------------------------------------------------------------------------- */
const R = {
  diferenciais(c) {
    return c.diferenciais.map((d) =>
      '<li class="dif">' +
        '<span class="dif-ico">' + icone(d.icone) + '</span>' +
        '<span class="dif-txt">' + esc(d.titulo) + '</span>' +
      '</li>').join('');
  },

  servicos(c) {
    const t = c.textos;
    const cards = c.servicos.map((s) => {
      const msg = s.mensagem || c.mensagens.servico.replace('{servico}', s.nome);
      const preco = s.preco
        ? '<p class="card-preco">' + esc(s.preco) + '</p>'
        : '<p class="card-preco card-preco--consulta">' + esc(t.servicoSemPreco) + '</p>';
      return '<li class="card">' +
        '<span class="card-ico">' + icone(s.icone) + '</span>' +
        '<h3>' + esc(s.nome) + '</h3>' +
        '<p>' + esc(s.descricao) + '</p>' +
        preco +
        '<a class="btn btn--sm" href="' + esc(linkWhats(msg, c)) + '" ' + EXT + ' aria-label="' + esc(t.servicoBotao + ': ' + s.nome) + '">' +
          icone('whats') + esc(t.servicoBotao) + '</a>' +
      '</li>';
    }).join('');
    const mais = '<li class="card card--mais">' +
      '<span class="card-ico">' + icone('chat') + '</span>' +
      '<h3>' + esc(t.maisTitulo) + '</h3>' +
      '<p>' + esc(t.maisTexto) + '</p>' +
      '<a class="btn btn--sm btn--claro" href="' + esc(linkWhats(c.mensagens.duvida, c)) + '" ' + EXT + '>' +
        icone('whats') + esc(t.maisBotao) + '</a>' +
    '</li>';
    return cards + mais;
  },

  levaETrazInfo(c) {
    const l = c.levaETraz;
    const itens = [];
    if (l.area) itens.push('<li>' + icone('pin') + '<span><strong>Onde atendemos:</strong> ' + esc(l.area) + '</span></li>');
    if (l.taxa) itens.push('<li>' + icone('estrela') + '<span><strong>Taxa:</strong> ' + esc(l.taxa) + '</span></li>');
    if (!itens.length) itens.push('<li>' + icone('pin') + '<span>' + esc(l.semInfo) + '</span></li>');
    return itens.join('');
  },

  ofertas(c) {
    return c.ofertas.filter((o) => o.titulo && o.beneficio).map((o) =>
      '<article class="oferta"' + (o.validade ? ' data-validade="' + esc(o.validade) + '"' : '') + '>' +
        '<span class="selo selo--roxo">' + icone('presente') + esc(o.selo || 'Oferta') + '</span>' +
        '<h3>' + esc(o.titulo) + '</h3>' +
        '<p class="oferta-beneficio">' + esc(o.beneficio) + '</p>' +
        (o.detalhe ? '<p class="oferta-detalhe">' + esc(o.detalhe) + '</p>' : '') +
        (o.validade ? '<p class="oferta-validade">' + icone('relogio') + '<span class="oferta-contagem">Válido até ' + esc(dataCurta(o.validade)) + '</span></p>' : '') +
        '<a class="btn btn--roxo" href="' + esc(linkWhats(o.mensagem, c)) + '" ' + EXT + '>' + icone('whats') + esc(o.cta || 'Quero essa oferta') + '</a>' +
      '</article>').join('');
  },

  sazonal(c) {
    const s = c.sazonal;
    if (!s || !s.ativo || !s.titulo) return '';
    return '<div class="sazonal-foto">' +
        foto(s.imagem, s.alt, '(min-width: 800px) 340px, 70vw') +
      '</div>' +
      '<div class="sazonal-txt">' +
        '<span class="selo selo--roxo">' + esc(s.selo) + '</span>' +
        '<h2>' + esc(s.titulo) + '</h2>' +
        '<p>' + esc(s.texto) + '</p>' +
        '<a class="btn" href="' + esc(linkWhats(s.mensagem, c)) + '" ' + EXT + '>' + icone('whats') + esc(s.cta) + '</a>' +
      '</div>';
  },

  galeria(c) {
    return c.galeria.map((g, i) =>
      '<li class="galeria-item">' +
        '<figure>' +
          foto(g.imagem, g.alt, i === 0
            ? '(min-width: 900px) 340px, (min-width: 600px) 33vw, 100vw'
            : '(min-width: 900px) 340px, (min-width: 600px) 33vw, 50vw') +
          '<figcaption>' + esc(g.legenda) + '</figcaption>' +
        '</figure>' +
      '</li>').join('');
  },

  videos(c) {
    const t = c.textos;
    return c.videos.map((v) =>
      '<li class="reel">' +
        '<div class="reel-video">' +
          '<video muted loop playsinline preload="none" width="405" height="720" ' +
            'poster="assets/img/' + esc(v.arquivo) + '-poster.webp" aria-label="' + esc(v.descricao) + '" ' +
            'data-webm="assets/video/' + esc(v.arquivo) + '.webm" data-mp4="assets/video/' + esc(v.arquivo) + '.mp4"></video>' +
          '<button class="reel-som" type="button" aria-pressed="false" ' +
            'data-ligar="' + esc(t.videoSomLigar) + '" data-desligar="' + esc(t.videoSomDesligar) + '" aria-label="' + esc(t.videoSomLigar) + '">' +
            icone('mudo', 'ico ico-mudo') + icone('som', 'ico ico-som') +
          '</button>' +
        '</div>' +
        '<p class="reel-titulo">' + esc(v.titulo) + '</p>' +
      '</li>').join('');
  },

  depoimentos(c) {
    return c.depoimentos.map((d) =>
      '<li class="depo">' +
        '<blockquote><p>“' + esc(d) + '”</p></blockquote>' +
        '<p class="depo-fonte">' + icone('estrela') + esc(c.textos.depoimentosSelo) + '</p>' +
      '</li>').join('');
  },

  curiosidades(c) {
    return c.curiosidades.map((q) =>
      '<li class="sabia">' +
        '<span class="sabia-ico">' + icone(q.icone || 'pata') + '</span>' +
        '<h3>' + esc(q.titulo) + '</h3>' +
        '<p>' + esc(q.texto) + '</p>' +
      '</li>').join('');
  },

  passos(c) {
    return c.passos.map((p, i) =>
      '<li class="passo">' +
        '<span class="passo-num" aria-hidden="true">' + (i + 1) + '</span>' +
        '<h3>' + esc(p.titulo) + '</h3>' +
        '<p>' + esc(p.texto) + '</p>' +
      '</li>').join('');
  },

  faq(c) {
    return c.faq.map((f) =>
      '<details class="faq-item">' +
        '<summary>' + esc(f.pergunta) + icone('seta', 'ico faq-seta') + '</summary>' +
        '<p>' + esc(f.resposta) + '</p>' +
      '</details>').join('');
  },

  horarios(c) {
    return c.horarios.map((h) =>
      '<tr data-dias="' + h.diasSemana.join(',') + '">' +
        '<th scope="row">' + esc(h.dias) + '</th>' +
        '<td>' + hora(h.abre) + ' às ' + hora(h.fecha) + '</td>' +
      '</tr>').join('');
  },

  horariosRodape(c) {
    return c.horarios.map((h) =>
      '<li><span>' + esc(h.dias) + '</span> ' + hora(h.abre) + '–' + hora(h.fecha) + '</li>').join('');
  },

  endereco(c) {
    const e = c.loja.endereco;
    return esc(e.rua) + ' – ' + esc(e.bairro) + '<br>' + esc(e.cidade) + ' – ' + esc(e.uf) + ', CEP ' + esc(e.cep);
  },
};

/** Dados estruturados (JSON-LD) do tipo PetStore */
function jsonLd(c) {
  const nomesDias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const e = c.loja.endereco;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    '@id': c.seo.url + '#petshop',
    name: c.loja.nome,
    description: c.seo.descricao,
    url: c.seo.url,
    telephone: '+' + c.loja.whatsapp,
    image: c.seo.url + 'assets/img/pet-balyen-banho-tosa-cotia-og.jpg',
    logo: c.seo.url + 'assets/img/pet-balyen-logo-512.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: e.rua,
      addressLocality: e.cidade,
      addressRegion: e.uf,
      postalCode: e.cep,
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: c.loja.geo.lat, longitude: c.loja.geo.lng },
    openingHoursSpecification: c.horarios.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.diasSemana.map((d) => nomesDias[d]),
      opens: h.abre,
      closes: h.fecha,
    })),
    sameAs: [c.loja.instagram],
    hasMap: c.loja.mapsAvaliacoes,
  }, null, 2);
}

/** Hash curtinho para saber se o HTML já está atualizado */
function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

/* --------------------------------------------------------------------------
   NO NAVEGADOR
   -------------------------------------------------------------------------- */
if (typeof document !== 'undefined') {
  (function () {
    const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

    /* 1) Aplica o CONFIG à página (só reescreve o que mudou) */
    $$('[data-render]').forEach((el) => {
      const nome = el.dataset.render;
      if (!R[nome]) return;
      const html = R[nome](CONFIG);
      const h = hash(html);
      if (el.dataset.v !== h) { el.innerHTML = html; el.dataset.v = h; }
      const secao = el.closest('[data-opcional]');
      if (secao) secao.hidden = html === '';
    });
    $$('[data-c]').forEach((el) => {
      const v = pegar(el.dataset.c);
      if (v != null && el.textContent !== String(v)) el.textContent = v;
    });
    $$('[data-wa]').forEach((a) => {
      const chave = a.dataset.wa;
      a.href = linkWhats(CONFIG.mensagens[chave] || CONFIG.mensagens.padrao);
    });
    $$('[data-href]').forEach((a) => { a.href = pegar(a.dataset.href); });

    /* 2) Cabeçalho compacto ao rolar (sem escutar scroll) */
    const sentinela = document.getElementById('topo-sentinela');
    const cab = document.querySelector('.cabecalho');
    if (sentinela && cab && 'IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => cab.classList.toggle('is-compacto', !e.isIntersecting))
        .observe(sentinela);
    }

    /* 3) Ofertas: contagem regressiva e remoção após a validade */
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    $$('.oferta[data-validade]').forEach((o) => {
      const [a, m, d] = o.dataset.validade.split('-').map(Number);
      const dias = Math.round((new Date(a, m - 1, d) - hoje) / 864e5);
      if (dias < 0) { o.remove(); return; }
      const span = o.querySelector('.oferta-contagem');
      if (span) span.textContent = dias === 0 ? 'Último dia!' : 'Faltam ' + dias + (dias === 1 ? ' dia' : ' dias');
    });
    const ofertasBox = document.querySelector('[data-render="ofertas"]');
    if (ofertasBox && !ofertasBox.children.length) {
      const s = ofertasBox.closest('[data-opcional]'); if (s) s.hidden = true;
    }

    /* 4) Destaca o horário de hoje (fuso de São Paulo) */
    try {
      const nomeDia = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date());
      const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(nomeDia);
      $$('.horarios tr[data-dias]').forEach((tr) => {
        if (tr.dataset.dias.split(',').map(Number).includes(dia)) {
          tr.classList.add('is-hoje');
          const th = tr.querySelector('th');
          if (th) th.insertAdjacentHTML('beforeend', ' <span class="tag-hoje">' + esc(CONFIG.textos.localHoje) + '</span>');
        }
      });
    } catch (e) { /* navegador sem Intl: ignora */ }

    /* 5) Vídeos: só carregam e tocam quando aparecem na tela */
    const videos = $$('.reel video');
    const carregar = (v) => {
      if (v.dataset.carregado) return;
      v.dataset.carregado = '1';
      const tipos = [['webm', 'video/webm; codecs="vp9, opus"'], ['mp4', 'video/mp4']];
      tipos.forEach(([k, type]) => {
        const s = document.createElement('source');
        s.src = v.dataset[k]; s.type = type; v.appendChild(s);
      });
      v.load();
    };
    const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting) {
            carregar(v);
            if (!reduzMovimento || v.dataset.usuario) v.play().catch(() => {});
          } else if (!v.paused) {
            v.pause();
          }
        });
      }, { threshold: 0.4 });
      videos.forEach((v) => io.observe(v));
    }
    // Botão de som (liga o som de um vídeo e silencia os outros)
    $$('.reel-som').forEach((btn) => {
      btn.addEventListener('click', () => {
        const v = btn.parentElement.querySelector('video');
        carregar(v);
        const ligar = v.muted;
        videos.forEach((o) => {
          o.muted = true;
          const b = o.parentElement.querySelector('.reel-som');
          b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', b.dataset.ligar);
        });
        if (ligar) {
          v.muted = false; v.dataset.usuario = '1'; v.play().catch(() => {});
          btn.setAttribute('aria-pressed', 'true'); btn.setAttribute('aria-label', btn.dataset.desligar);
        }
      });
    });

    /* 6) Mapa do Google só carrega depois do clique */
    const btnMapa = document.querySelector('[data-mapa]');
    if (btnMapa) {
      btnMapa.addEventListener('click', () => {
        const box = btnMapa.closest('.mapa');
        const f = document.createElement('iframe');
        f.src = CONFIG.loja.mapsEmbed;
        f.title = 'Mapa: ' + CONFIG.loja.nome + ', ' + CONFIG.loja.endereco.rua + ', ' + CONFIG.loja.endereco.cidade;
        f.loading = 'lazy';
        f.referrerPolicy = 'no-referrer-when-downgrade';
        f.allowFullscreen = true;
        box.innerHTML = '';
        box.appendChild(f);
        box.classList.add('is-carregado');
      });
    }

    /* 7) Ano no rodapé */
    const ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();
  })();
}

/* Permite que o ferramentas/pre-render.js reutilize o CONFIG e os renderizadores */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, R, jsonLd, linkWhats, pegar, esc, hash };
}
