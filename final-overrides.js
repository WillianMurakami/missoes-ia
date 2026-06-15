(function applyFinalMissionOverrides() {
  if (!Array.isArray(missions)) return;

  const references = [
    { level: "Iniciante", order: 1, title: "IA Todo Dia", producer: "Sommers e Helena", tag: "Podcast", url: "https://open.spotify.com/show/2FHimuESqvjBL4x8AKur2b" },
    { level: "Iniciante", order: 2, title: "Nao existe automacao sem Padronizacao", producer: "Leticia Mirelli", tag: "Post Instagram", url: "https://www.instagram.com/p/DYFMJMLlGtG/?igsh=MXczeXM5N3AybmxteA==" },
    { level: "Iniciante", order: 3, title: "Google AI Essentials", producer: "Google", tag: "Curso", url: "https://grow.google/ai-essentials/" },
    { level: "Iniciante", order: 4, title: "Prompt Engineering Guide", producer: "OpenAI", tag: "Artigo", url: "https://developers.openai.com/api/docs/guides/prompt-guidance?model=gpt-5.5" },
    { level: "Iniciante", order: 5, title: "Elements of AI", producer: "University of Helsinki / MinnaLearn", tag: "Curso", url: "https://course.elementsofai.com/pt/" },
    { level: "Iniciante", order: 6, title: "DeepLearning.AI", producer: "Andrew Ng", tag: "Plataforma", url: "https://learn.deeplearning.ai/" },
    { level: "Iniciante", order: 7, title: "Do Prompt ao Agente", producer: "Gustavo Guanabara", tag: "Video", url: "https://www.youtube.com/watch?v=pv4pTteJOwA" },
    { level: "Iniciante", order: 8, title: "Como a IA vai mudar tudo (inclusive voce)", producer: "Miguel Fernandes", tag: "TEDx", url: "https://www.youtube.com/watch?v=C38xlWnkezQ" },
    { level: "Intermediario", order: 1, title: "ChatGPT Prompt Engineering for Developers", producer: "DeepLearning.AI / OpenAI", tag: "Curso", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
    { level: "Intermediario", order: 2, title: "Evolucao do uso das IAs", producer: "Breno Masi", tag: "Post Instagram", url: "https://www.instagram.com/reel/DYDlxo0tnHW/?igsh=ODcwdWJ5eGgwcHdu" },
    { level: "Intermediario", order: 3, title: "Excel para Analise de Dados", producer: "Preditiva.ai", tag: "Curso", url: "https://www.preditiva.ai/curso-excel-gratuito?campaign=excel-link-home" },
    { level: "Intermediario", order: 4, title: "Fluencia em IA com Copilot", producer: "Microsoft Learn", tag: "Plataforma", url: "https://learn.microsoft.com/pt-br/training/paths/ai-fluency/" },
    { level: "Intermediario", order: 5, title: "Da Febre da IA a vantagem competitiva real", producer: "Gestao do Amanha", tag: "Podcast", url: "https://open.spotify.com/episode/3oWxE3iLpT2S3CZQpagr5K" },
    { level: "Intermediario", order: 6, title: "Guia de melhores praticas com Prompting", producer: "Anthropic", tag: "Artigo", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" },
    { level: "Intermediario", order: 7, title: "Capacidades e Limitacoes da IA", producer: "Anthropic", tag: "Curso", url: "https://anthropic.skilljar.com/ai-capabilities-and-limitations" },
    { level: "Intermediario", order: 8, title: "5 IAs secretas do Google", producer: "Jeferson de Oliveira", tag: "Post Instagram", url: "https://www.instagram.com/reel/DX5nm3doO1-/?igsh=b3Y0bzd2d3hjZXNj" },
    { level: "Intermediario", order: 9, title: "Google Pomelli: a IA que cria todo o marketing da sua empresa", producer: "Investi News BR", tag: "Video", url: "https://www.youtube.com/watch?v=swBVLYEECBw" },
    { level: "Avancado", order: 1, title: "Por dentro das LLMs como ChatGPT", producer: "Asimov Academy", tag: "Curso", url: "https://www.youtube.com/watch?v=CVXsLyRC1bY" },
    { level: "Avancado", order: 2, title: "Future of Jobs Report 2025", producer: "World Economic Forum", tag: "Relatorio", url: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf" },
    { level: "Avancado", order: 3, title: "20 termos mais conhecidos de IA Agenticas", producer: "Andreas Horn", tag: "Post LinkedIn", url: "https://www.linkedin.com/posts/andreashorn1_%F0%9D%97%A0%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%B6%F0%9D%98%80%F0%9D%97%B2%F0%9D%98%80-%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B2-%F0%9D%97%AF-share-7462042620521836544-Ur2V/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABiCtyIBNP8uef3cbenSgG1UjIt_9-z8UTc" },
    { level: "Avancado", order: 4, title: "Cartilha da IA Generativa", producer: "Governo do Brasil (MGI)", tag: "Infografico", url: "https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/cartilha-ia-generativa" },
    { level: "Avancado", order: 5, title: "Topico IA", producer: "MIT Technology Review", tag: "Noticias", url: "https://www.technologyreview.com/topic/artificial-intelligence/" },
    { level: "Avancado", order: 6, title: "Codex e a IA estao democratizando a programacao", producer: "Investi News BR", tag: "Video", url: "https://www.youtube.com/watch?v=P1zCSwkD5eM" },
    { level: "Avancado", order: 7, title: "Ranking de comparacao das IAs", producer: "Hugging Face", tag: "Plataforma", url: "https://huggingface.co/spaces/lmarena-ai/arena-leaderboard" },
    { level: "Avancado", order: 8, title: "LangChain Academy", producer: "LangChain", tag: "Curso", url: "https://academy.langchain.com/" },
    { level: "Avancado", order: 9, title: "Do zero a seu primeiro agente de IA em 20 minutos (sem codar, com n8n)", producer: "Asimov Academy", tag: "Video", url: "https://www.youtube.com/watch?v=DgxHP1LG5dM" },
  ];

  const cases = [
    { title: "Triagem de e-mails e atendimento", company: "Capita + Microsoft", area: "Atendimento", impact: "reduziu tempo de resposta em e-mails e liberou equipes para casos mais complexos", context: "A Capita aplicou IA generativa em fluxos de atendimento para organizar demandas, apoiar respostas e acelerar rotinas repetitivas sem retirar a supervisao humana.", whyItMatters: "Bom exemplo para times que recebem alto volume de solicitacoes internas ou externas e precisam padronizar o primeiro atendimento.", link: "https://www.microsoft.com/en/customers/story/25164-capita-microsoft-copilot-studio" },
    { title: "Feedback de clientes virando acao", company: "Mattel + Google Cloud", area: "Cliente e dados", impact: "usa Gemini e BigQuery para transformar feedback de consumidores em insights acionaveis", context: "O caso mostra IA apoiando leitura de dados e comentarios de consumidores para identificar padroes, temas recorrentes e oportunidades de melhoria.", whyItMatters: "Ajuda a imaginar usos em pesquisas, NPS, atendimento, comentarios de alunos e analises de qualidade.", link: "https://cloud.google.com/customers?hl=en" },
    { title: "Ambiente seguro para explorar IA", company: "Stanford University + Google Cloud", area: "Educacao", impact: "criou um AI Playground para milhares de usuarios testarem IA generativa com seguranca", context: "A universidade estruturou um ambiente controlado para estudantes, docentes e equipes explorarem IA com governanca e menos risco.", whyItMatters: "E uma referencia direta para programas de aculturamento, laboratorios internos e trilhas de aprendizagem em IA.", link: "https://cloud.google.com/customers?hl=en" },
    { title: "Agente para rotinas de RH", company: "Coca-Cola Andina + Microsoft", area: "RH e operacoes", impact: "moderniza operacoes de RH com agente criado no Microsoft Copilot Studio", context: "O exemplo aponta para agentes que respondem duvidas, organizam etapas e reduzem friccao em processos internos de pessoas.", whyItMatters: "Inspira melhorias em onboarding, comunicados, FAQ interno, suporte a liderancas e fluxos administrativos.", link: "https://adoption.microsoft.com/en-us/ai-agents/transformation-stories/" },
    { title: "Produtividade com assistentes de trabalho", company: "Google Workspace + clientes enterprise", area: "Produtividade", impact: "estudo citado pelo Google aponta economia media de 105 minutos por usuario por semana", context: "O conteudo reune exemplos de IA integrada ao trabalho diario: escrever, resumir, organizar informacoes e apoiar tomada de decisao.", whyItMatters: "E util para mostrar que ganhos pequenos, quando repetidos por muitas pessoas, podem virar impacto relevante.", link: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work-ai-agents/" },
  ];

  const challengeThreeContents = [
    { id: "video-design-solucoes", order: 1, title: "Introdução ao design de soluções", tag: "Vídeo", url: "https://www.youtube.com/watch?v=9hPd7KuOmIc", summary: "Assista ao conteúdo para ampliar repertório sobre construção e estruturação de soluções." },
    { id: "template-solution-design", order: 2, title: "Template de solution design", tag: "Template", url: "https://miro.com/pt/modelos/solution-design-template/", summary: "Explore um modelo visual para organizar problema, contexto, proposta e caminhos de implementação." },
    { id: "video-solucao-pratica", order: 3, title: "Aplicando a lógica na prática", tag: "Vídeo", url: "https://www.youtube.com/watch?v=oYq5TzmBc7Y", summary: "Veja uma referência complementar para conectar ideia, desenho de solução e execução." },
  ];

  const initialMission = missions.find((mission) => mission.id === "post-treinamento-ao-vivo");
  if (initialMission) {
    Object.assign(initialMission, {
      resources: [
        "heading::Reveja o treinamento do dia 17/06/26 pelo link abaixo:",
        "disabled-link::Link da gravação",
      ],
    });
  }

  const routineMission = missions.find((mission) => mission.id === "infografico-rotina-chave");
  if (routineMission) {
    Object.assign(routineMission, {
      steps: [
        "Escolha uma rotina relevante do seu trabalho.",
        "Use uma IA de sua escolha para apoiar a construção da documentação.",
        "Lembre-se de <strong>NÃO COMPARTILHAR INFORMAÇÕES</strong> sensíveis, que identifiquem usuários, clientes ou fornecedores de nossa base de dados.",
        "Também <strong>NÃO COMPARTILHE INFORMAÇÕES</strong> sigilosas, como documentos ou contratos da CIA, nas ferramentas.",
      ],
    });
  }

  const challengeThreeMission = missions.find((mission) => mission.id === "treinamento-no-code-startup");
  if (challengeThreeMission) {
    Object.assign(challengeThreeMission, {
      type: "Conteúdos",
      title: "Preparação final",
      short: "Acesse os 3 conteúdos essenciais.",
      description: "Para preparação separamos alguns conteúdos para te dar mais visão sobre o processo de ideação de projetos de melhoria, que se aplicam para casos de IA e outros também.",
      steps: [
        "Abra cada conteúdo indicado abaixo.",
        "Use os materiais para refletir sobre como estruturar uma solução aplicável.",
        "O check de desafio concluído será feito automaticamente quando os 3 conteúdos forem consumidos.",
      ],
      resources: [],
      readingContent: ["conteudos-desafio-3"],
      trackedContents: challengeThreeContents,
    });
  }

  const finalChallengeMission = missions.find((mission) => mission.id === "solucao-performance-ia");
  if (finalChallengeMission) {
    Object.assign(finalChallengeMission, {
      short: "Envie sua proposta final de melhoria com IA.",
      description: "Chegamos no desafio final dessa jornada, e essa é a hora de você mostrar sua solução de melhoria utilizando todos os novos aprendizados em IA. A ideia é simples aqui, estruture uma descrição e breve demonstração do projeto de implementação de Inteligência Artificial, lembrando que essa proposta precisa ter:",
      steps: [
        "1. Nome do projeto",
        "2. Problema / oportunidade",
        "3. Solução proposta + ferramenta(s) utilizada(s)",
        "4. Impacto esperado",
        "5. Plano de implementação",
        "6. Protótipo / demonstração visual",
        "⚠️ IMPORTANTE: esse documento tem formato livre, mas precisa ser feito em 1 FOLHA (1 PÁGINA)!!!",
        "A avaliação das soluções será feita por todos os líderes nos seguintes indicadores: potencial de impacto positivo (relevância e alcance), aplicabilidade do projeto, qualidade da proposta/protótipo e segurança/uso responsável.",
        "🤖 Construa o futuro do seu trabalho e participe desse desafio. Boa sorte! 🚀🚀🚀",
        "Em caso de dúvidas, procure Thais Brasil ou Willian Murakami.",
      ],
      fileOnlySubmission: true,
    });
  }

  if (finalChallengeMission) {
    Object.assign(finalChallengeMission, {
      description: "",
      descriptionHtml: "<p>Chegamos no desafio final dessa jornada, e essa é a hora de você mostrar sua solução de melhoria utilizando todos os novos aprendizados em IA.</p><p>A ideia é simples aqui, estruture uma descrição e breve demonstração do projeto de implementação de Inteligência Artificial, lembrando que essa proposta precisa ter:</p>",
      steps: [
        "1. Nome do projeto",
        "2. Problema / oportunidade",
        "3. Solução proposta + ferramenta(s) utilizada(s)",
        "4. Impacto esperado",
        "5. Plano de implementação",
        "6. Protótipo / demonstração visual",
      ],
      resources: [
        "note::<strong>⚠️ IMPORTANTE: esse documento tem formato livre, mas precisa ser feito em 1 FOLHA (1 PÁGINA)!!!</strong>",
        "note::<p><strong>A avaliação das soluções será feita por todos os líderes nos seguintes indicadores:</strong></p><ul><li>Potencial de impacto positivo (relevância e alcance);</li><li>Aplicabilidade do projeto;</li><li>Qualidade da proposta/protótipo;</li><li>Segurança/uso responsável.</li></ul>",
        "note::<p>🤖 Construa o futuro do seu trabalho, e participe desse desafio. Boa sorte! 🚀🚀🚀</p><p>Em caso de dúvidas, procure Thais Brasil ou Willian Murakami.</p>",
      ],
      fileOnlySubmission: true,
    });
  }

  const certificateIndex = missions.findIndex((mission) => mission.id === "certificado-anthropic");
  if (certificateIndex >= 0) missions.splice(certificateIndex, 1);

  const caseMission = missions.find((mission) => mission.id === "leitura-conteudo-ia") || {};
  Object.assign(caseMission, {
    id: "cases-ia-reais",
    type: "Opcional 2",
    group: "optional",
    icon: "06",
    accent: "silver",
    title: "Cases de IA",
    short: "Veja exemplos reais de IA aplicada em negocios.",
    description: "Explore cases reais para entender como empresas aplicam IA em atendimento, operacao, dados e produtividade.",
    steps: ["Leia os cards de cases.", "Abra pelo menos uma referencia externa se quiser se aprofundar.", "Marque como concluido ao final da leitura."],
    readingContent: ["cases"],
    cases,
  });

  const refMission = missions.find((mission) => mission.id === "referencias-avancadas-ia");
  if (refMission) {
    Object.assign(refMission, {
      type: "Opcional 1",
      group: "optional",
      icon: "05",
      accent: "silver",
      title: "Materiais complementares sobre IA",
      short: "Siga uma curadoria de IA por nível de maturidade.",
      description: "Acesse uma curadoria de conteúdos para continuar estudando IA depois da trilha.",
      steps: ["Complete todos os links iniciantes para liberar o intermediário.", "Complete o intermediário para liberar o avançado.", "A conclusão só libera depois de acessar todos os conteúdos avançados."],
      resources: [],
      references,
    });
  }

  const mainMissions = missions.filter((mission) => mission.group === "main");
  const optionalMissions = [refMission, caseMission].filter(Boolean);
  missions.splice(0, missions.length, ...mainMissions, ...optionalMissions);

  function html(value) {
    return String(value || "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function referenceClass(tag) {
    const normalized = String(tag || "").toLowerCase();
    if (normalized.includes("podcast")) return "reference-podcast";
    if (normalized.includes("instagram")) return "reference-instagram";
    if (normalized.includes("linkedin")) return "reference-linkedin";
    if (normalized.includes("youtube") || normalized.includes("video") || normalized.includes("tedx")) return "reference-youtube";
    if (normalized.includes("relatorio") || normalized.includes("infografico") || normalized.includes("noticias")) return "reference-report";
    if (normalized.includes("curso")) return "reference-course";
    if (normalized.includes("plataforma")) return "reference-platform";
    return "reference-reference";
  }

  function refId(item) {
    return `${item.level}-${item.order}`.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  function clickKey() {
    return `uol-edtech-ai-reference-clicks:${state.user?.id || "anon"}`;
  }

  function getReferenceClicks() {
    try { return new Set(JSON.parse(localStorage.getItem(clickKey()) || "[]")); } catch { return new Set(); }
  }

  function saveReferenceClicks(clicks) {
    localStorage.setItem(clickKey(), JSON.stringify([...clicks]));
  }

  function challengeContentKey(missionId) {
    return `uol-edtech-ai-content-clicks:${missionId}:${state.user?.id || "anon"}`;
  }

  function getChallengeContentClicks(missionId) {
    try { return new Set(JSON.parse(localStorage.getItem(challengeContentKey(missionId)) || "[]")); } catch { return new Set(); }
  }

  function saveChallengeContentClicks(missionId, clicks) {
    localStorage.setItem(challengeContentKey(missionId), JSON.stringify([...clicks]));
  }

  function challengeContentComplete(mission) {
    const clicks = getChallengeContentClicks(mission.id);
    return (mission.trackedContents || []).every((item) => clicks.has(item.id));
  }

  function levelItems(level) {
    return references.filter((item) => item.level === level).sort((a, b) => a.order - b.order);
  }

  function isLevelComplete(level, clicks) {
    return levelItems(level).every((item) => clicks.has(refId(item)));
  }

  function isLevelUnlocked(level, clicks) {
    if (level === "Iniciante") return true;
    if (level === "Intermediario") return isLevelComplete("Iniciante", clicks);
    if (level === "Avancado") return isLevelComplete("Iniciante", clicks) && isLevelComplete("Intermediario", clicks);
    return false;
  }

  function referenceSummary(item) {
    const tag = String(item.tag || "").toLowerCase();
    if (tag.includes("podcast")) return "Audio para acompanhar tendencias e aplicacoes praticas de IA.";
    if (tag.includes("instagram")) return "Conteudo curto para repertorio rapido e provocacao.";
    if (tag.includes("curso")) return "Curso para aprofundar com uma sequencia mais guiada.";
    if (tag.includes("plataforma")) return "Ambiente para seguir explorando conteudos e trilhas.";
    if (tag.includes("video") || tag.includes("tedx")) return "Video para ampliar entendimento com exemplos diretos.";
    if (tag.includes("relatorio")) return "Leitura estrategica sobre tendencias e impactos no trabalho.";
    if (tag.includes("linkedin")) return "Referencia para acompanhar termos e discussoes atuais.";
    if (tag.includes("infografico")) return "Material visual para consulta rapida e entendimento.";
    return "Referencia complementar para ampliar repertorio em IA.";
  }

  function updateReferenceButton() {
    const clicks = getReferenceClicks();
    const complete = isLevelComplete("Avancado", clicks);
    if (complete || isMissionCompleted("referencias-avancadas-ia")) {
      setReadingButtonState(isMissionCompleted("referencias-avancadas-ia") ? "complete" : "ready");
      document.querySelector("#markReadingBtn").textContent = isMissionCompleted("referencias-avancadas-ia") ? "Concluido" : "Marcar conteudos como concluidos";
      return;
    }
    setReadingButtonState("locked");
    document.querySelector("#markReadingBtn").textContent = "Continue navegando pelos conteudos";
  }

  function referenceSections(items) {
    const clicks = getReferenceClicks();
    return ["Iniciante", "Intermediario", "Avancado"].map((level) => {
      const group = items.filter((item) => item.level === level).sort((a, b) => a.order - b.order);
      const visited = group.filter((item) => clicks.has(refId(item))).length;
      const unlocked = isLevelUnlocked(level, clicks);
      return `
        <section class="reference-section ${unlocked ? "" : "is-locked"}" data-reference-level="${level}">
          <header class="reference-section-heading">
            <span>${level}</span>
            <strong>${visited}/${group.length} acessados</strong>
          </header>
          <div class="reference-grid">
            ${group.map((item) => referenceCard(item, unlocked, clicks.has(refId(item)))).join("")}
          </div>
        </section>`;
    }).join("");
  }

  function referenceCard(item, unlocked, visited) {
    const body = `
      <div class="reference-preview ${referenceClass(item.tag)}"><strong>${html(item.tag)}</strong></div>
      <strong>${String(item.order).padStart(2, "0")}. ${html(item.title)}</strong>
      <small>${html(item.producer)}</small>
      <p>${html(referenceSummary(item))}</p>
      <span class="reference-state">${visited ? "Acessado" : unlocked ? "Abrir conteudo" : "Bloqueado"}</span>`;
    if (!unlocked) return `<article class="reference-card is-locked">${body}</article>`;
    return `<a class="reference-card ${visited ? "is-visited" : ""}" data-reference-id="${refId(item)}" href="${html(item.url)}" target="_blank" rel="noreferrer">${body}</a>`;
  }

  function caseCard(item, index) {
    return `
      <article class="case-story">
        <div class="case-story-cover">
          <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="case-area">${html(item.area)}</span>
        </div>
        <div class="case-story-body">
          <span class="eyebrow">${html(item.company)}</span>
          <h3>${html(item.title)}</h3>
          <p class="case-lead">${html(item.context)}</p>
          <div class="case-insight">
            <strong>Por que vale observar</strong>
            <p>${html(item.whyItMatters)}</p>
          </div>
          <div class="case-impact">
            <strong>Resumo do impacto</strong>
            <p>${html(item.impact)}.</p>
          </div>
          <a class="case-link" href="${html(item.link)}" target="_blank" rel="noreferrer">Acessar materia original</a>
        </div>
      </article>`;
  }

  function challengeContentCard(item, visited) {
    return `
      <a class="reference-card challenge-content-card ${visited ? "is-visited" : ""}" data-challenge-content-id="${html(item.id)}" href="${html(item.url)}" target="_blank" rel="noreferrer">
        <div class="reference-preview ${referenceClass(item.tag)}"><strong>${html(item.tag)}</strong></div>
        <strong>${String(item.order).padStart(2, "0")}. ${html(item.title)}</strong>
        <p>${html(item.summary)}</p>
        <span class="reference-state">${visited ? "Acessado" : "Abrir conteudo"}</span>
      </a>`;
  }

  function recordChallengeContentAccess(mission, contentId) {
    const clicks = getChallengeContentClicks(mission.id);
    const before = clicks.size;
    clicks.add(contentId);
    saveChallengeContentClicks(mission.id, clicks);
    if (clicks.size !== before) {
      if (challengeContentComplete(mission) && !isMissionCompleted(mission.id)) {
        window.setTimeout(() => completeChallengeContentMission(), 80);
      }
      window.setTimeout(() => renderChallengeContentMission(mission), 120);
    }
  }

  function updateChallengeContentButton(mission) {
    const complete = challengeContentComplete(mission);
    if (isMissionCompleted(mission.id)) {
      setReadingButtonState("complete");
      document.querySelector("#markReadingBtn").textContent = "Concluido";
      return;
    }
    setReadingButtonState(complete ? "ready" : "locked");
    document.querySelector("#markReadingBtn").textContent = complete ? "Concluindo automaticamente..." : "Acesse os 3 conteudos";
  }

  function renderChallengeContentMission(mission) {
    const panel = document.querySelector("#readingPanel");
    const content = document.querySelector("#readingContent");
    const clicks = getChallengeContentClicks(mission.id);
    panel.classList.remove("hidden");
    content.scrollTop = 0;
    content.innerHTML = `
      <article class="reference-article challenge-content-article">
        <header class="reference-hero">
          <span class="eyebrow">Conteudos essenciais</span>
          <h2>03. Preparação para o desafio final</h2>
          <p>Para preparação separamos alguns conteúdos para te dar mais visão sobre o processo de ideação de projetos de melhoria, que se aplicam para casos de IA (e outros também). Acesse os 3 conteúdos abaixo para concluir esta etapa.</p>
          <p>O check de desafio concluído será feito automaticamente quando os 3 conteúdos forem consumidos.</p>
        </header>
        <section class="reference-section">
          <header class="reference-section-heading">
            <span>Conteudos selecionados</span>
            <strong>${clicks.size}/${(mission.trackedContents || []).length} acessados</strong>
          </header>
          <div class="reference-grid challenge-content-grid">
            ${(mission.trackedContents || []).map((item) => challengeContentCard(item, clicks.has(item.id))).join("")}
          </div>
        </section>
      </article>`;
    content.querySelectorAll("[data-challenge-content-id]").forEach((link) => {
      link.addEventListener("mousedown", (event) => {
        if (event.button === 0 || event.button === 1) recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
      link.addEventListener("auxclick", (event) => {
        if (event.button === 1) recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
      link.addEventListener("click", () => {
        recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
    });
    updateChallengeContentButton(mission);
  }

  async function completeChallengeContentMission() {
    const mission = missions.find((item) => item.id === state.selectedMissionId);
    if (!mission || !challengeContentComplete(mission)) return;
    const accessed = (mission.trackedContents || [])
      .filter((item) => getChallengeContentClicks(mission.id).has(item.id))
      .map((item) => `${String(item.order).padStart(2, "0")}. ${item.title} - ${item.url}`)
      .join("\n");
    const text = `Conteudos acessados no desafio:\n${accessed}`;

    if (db) {
      const { error } = await db.from("app_submissions").upsert(
        {
          user_id: state.user.id,
          mission_id: mission.id,
          text,
          file_name: "",
          file_path: "",
          file_url: "",
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,mission_id" }
      );
      if (error) {
        alert(`Nao foi possivel concluir: ${error.message}`);
        return;
      }
      await loadCloudSubmissions();
    } else {
      const existingIndex = state.submissions.findIndex((item) => item.userId === state.user.id && item.missionId === mission.id);
      const record = {
        id: crypto.randomUUID(),
        missionId: mission.id,
        userId: state.user.id,
        userName: state.user.name,
        userArea: state.user.area,
        text,
        fileName: "",
        createdAt: new Date().toISOString(),
      };
      if (existingIndex >= 0) state.submissions.splice(existingIndex, 1, record);
      else state.submissions.push(record);
      persistSubmissions();
    }

    renderProgress();
    renderMissions();
    updateChallengeContentButton(mission);
  }

  function recordReferenceAccess(referenceId, mission) {
    const clicks = getReferenceClicks();
    const before = clicks.size;
    clicks.add(referenceId);
    saveReferenceClicks(clicks);
    if (clicks.size !== before) {
      window.setTimeout(() => renderReferenceMission(mission), 180);
    }
  }

  function renderReferenceMission(mission) {
    const panel = document.querySelector("#readingPanel");
    const content = document.querySelector("#readingContent");
    panel.classList.remove("hidden");
    content.scrollTop = 0;
    content.innerHTML = `
      <article class="reference-article">
        <header class="reference-hero">
          <span class="eyebrow">Curadoria complementar</span>
          <h2>05. Estudos avancados</h2>
          <p>Uma trilha de repertorio para guiar o aprendizado em IA. Complete cada nivel para liberar o proximo bloco.</p>
        </header>
        ${referenceSections(mission.references || [])}
      </article>`;
    content.querySelectorAll("[data-reference-id]").forEach((link) => {
      link.addEventListener("mousedown", (event) => {
        if (event.button === 0 || event.button === 1) recordReferenceAccess(link.dataset.referenceId, mission);
      });
      link.addEventListener("auxclick", (event) => {
        if (event.button === 1) recordReferenceAccess(link.dataset.referenceId, mission);
      });
      link.addEventListener("click", () => {
        recordReferenceAccess(link.dataset.referenceId, mission);
      });
    });
    updateReferenceButton();
  }

  function renderCasesMission(mission) {
    const panel = document.querySelector("#readingPanel");
    const content = document.querySelector("#readingContent");
    panel.classList.remove("hidden");
    content.scrollTop = 0;
    content.innerHTML = `
      <article class="case-article">
        <header class="reference-hero">
          <span class="eyebrow">Cases reais</span>
          <h2>06. Cases de IA</h2>
          <p>Exemplos iniciais de IA aplicada em atendimento, dados, produtividade, educacao e RH. Use como inspiracao para pensar em problemas reais da sua rotina.</p>
        </header>
        <section class="case-grid">${(mission.cases || []).map(caseCard).join("")}</section>
      </article>`;
    setReadingButtonState(isMissionCompleted(mission.id) ? "complete" : "ready");
    document.querySelector("#markReadingBtn").textContent = isMissionCompleted(mission.id) ? "Concluido" : "Marcar cases como concluidos";
  }

  const oldRenderReadingPanel = renderReadingPanel;
  renderReadingPanel = function renderReadingPanelFinal(mission) {
    if (mission?.id === "treinamento-no-code-startup") return renderChallengeContentMission(mission);
    if (mission?.id === "referencias-avancadas-ia") return renderReferenceMission(mission);
    if (mission?.id === "cases-ia-reais") return renderCasesMission(mission);
    return oldRenderReadingPanel(mission);
  };

  function renderChallengeContentMissionClean(mission) {
    const panel = document.querySelector("#readingPanel");
    const content = document.querySelector("#readingContent");
    const clicks = getChallengeContentClicks(mission.id);
    panel.classList.remove("hidden");
    content.scrollTop = 0;
    content.innerHTML = `
      <article class="reference-article challenge-content-article">
        <header class="reference-hero">
          <span class="eyebrow">Conteúdos essenciais</span>
          <h2>03. Preparação para o desafio final</h2>
          <p>Para preparação separamos alguns conteúdos para te dar mais visão sobre o processo de ideação de projetos de melhoria, que se aplicam para casos de IA (e outros também). Acesse os 3 conteúdos abaixo para concluir esta etapa.</p>
          <p>O check de desafio concluído será feito automaticamente quando os 3 conteúdos forem consumidos.</p>
        </header>
        <section class="reference-section">
          <header class="reference-section-heading">
            <span>Conteúdos selecionados</span>
            <strong>${clicks.size}/${(mission.trackedContents || []).length} acessados</strong>
          </header>
          <div class="reference-grid challenge-content-grid">
            ${(mission.trackedContents || []).map((item) => challengeContentCard(item, clicks.has(item.id))).join("")}
          </div>
        </section>
      </article>`;
    content.querySelectorAll("[data-challenge-content-id]").forEach((link) => {
      link.addEventListener("mousedown", (event) => {
        if (event.button === 0 || event.button === 1) recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
      link.addEventListener("auxclick", (event) => {
        if (event.button === 1) recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
      link.addEventListener("click", () => {
        recordChallengeContentAccess(mission, link.dataset.challengeContentId);
      });
    });
    updateChallengeContentButton(mission);
  }

  const renderReadingPanelBeforeCleanChallenge = renderReadingPanel;
  renderReadingPanel = function renderReadingPanelCleanChallenge(mission) {
    if (mission?.id === "treinamento-no-code-startup") return renderChallengeContentMissionClean(mission);
    return renderReadingPanelBeforeCleanChallenge(mission);
  };

  const oldHandleReadingScroll = handleReadingScroll;
  handleReadingScroll = function handleReadingScrollFinal(event) {
    if (["treinamento-no-code-startup", "referencias-avancadas-ia", "cases-ia-reais"].includes(state.selectedMissionId)) return;
    return oldHandleReadingScroll(event);
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("#markReadingBtn");
    if (!button || state.selectedMissionId !== "treinamento-no-code-startup") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    completeChallengeContentMission();
  }, true);

  const oldGetAdminRows = getAdminRows;
  getAdminRows = function getAdminRowsFinal() {
    const rows = oldGetAdminRows();
    if (state.adminViewMode !== "students") return rows;
    const submissionsByUser = new Map();
    state.adminSubmissions.forEach((submission) => {
      if (!submissionsByUser.has(submission.user_id)) submissionsByUser.set(submission.user_id, new Set());
      submissionsByUser.get(submission.user_id).add(submission.mission_id);
    });
    return rows.map((row) => {
      const profile = state.adminProfiles.find((item) => (item.email || item.id) === row.email);
      const completedIds = submissionsByUser.get(profile?.id) || new Set();
      return { ...row, completed: completedIds.size, certificateDone: completedIds.has("cases-ia-reais") ? "Sim" : "Nao" };
    });
  };

  const oldRenderAdminTable = renderAdminTable;
  renderAdminTable = function renderAdminTableFinal() {
    oldRenderAdminTable();
    document.querySelectorAll('[data-admin-sort="certificateDone"]').forEach((button) => {
      button.textContent = button.textContent.replace("Certificado", "Cases").replace("Referencias", "Cases");
    });
  };

  window.setTimeout(() => {
    if (state.user && !document.querySelector("#homeView").classList.contains("hidden")) renderHome({ animateProgress: false });
    if (["treinamento-no-code-startup", "referencias-avancadas-ia", "cases-ia-reais"].includes(state.selectedMissionId)) renderDetail(state.selectedMissionId);
  }, 0);
})();
