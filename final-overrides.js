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
    { title: "Triagem de e-mails e atendimento", company: "Capita + Microsoft", area: "Atendimento", impact: "reduziu tempo de resposta em e-mails e liberou equipes para casos mais complexos", link: "https://www.microsoft.com/en/customers/story/25164-capita-microsoft-copilot-studio" },
    { title: "Feedback de clientes virando acao", company: "Mattel + Google Cloud", area: "Cliente e dados", impact: "usa Gemini e BigQuery para transformar feedback de consumidores em insights acionaveis", link: "https://cloud.google.com/customers?hl=en" },
    { title: "Ambiente seguro para explorar IA", company: "Stanford University + Google Cloud", area: "Educacao", impact: "criou um AI Playground para milhares de usuarios testarem IA generativa com seguranca", link: "https://cloud.google.com/customers?hl=en" },
    { title: "Agente para rotinas de RH", company: "Coca-Cola Andina + Microsoft", area: "RH e operacoes", impact: "moderniza operacoes de RH com agente criado no Microsoft Copilot Studio", link: "https://adoption.microsoft.com/en-us/ai-agents/transformation-stories/" },
    { title: "Produtividade com assistentes de trabalho", company: "Google Workspace + clientes enterprise", area: "Produtividade", impact: "estudo citado pelo Google aponta economia media de 105 minutos por usuario por semana", link: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work-ai-agents/" },
  ];

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
      title: "Estudos avancados",
      short: "Siga uma curadoria de IA por nivel de maturidade.",
      description: "Acesse uma curadoria de conteudos para continuar estudando IA depois da trilha.",
      steps: ["Complete todos os links iniciantes para liberar o intermediario.", "Complete o intermediario para liberar o avancado.", "A conclusao so libera depois de acessar todos os conteudos avancados."],
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
    document.querySelector("#markReadingBtn").textContent = "Acesse todos os conteudos avancados";
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
      <a class="case-card" href="${html(item.link)}" target="_blank" rel="noreferrer">
        <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="case-area">${html(item.area)}</span>
        <strong>${html(item.title)}</strong>
        <small>${html(item.company)}</small>
        <p>${html(item.impact)}.</p>
      </a>`;
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
      link.addEventListener("click", () => {
        const clicks = getReferenceClicks();
        clicks.add(link.dataset.referenceId);
        saveReferenceClicks(clicks);
        window.setTimeout(() => renderReferenceMission(mission), 250);
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
    if (mission?.id === "referencias-avancadas-ia") return renderReferenceMission(mission);
    if (mission?.id === "cases-ia-reais") return renderCasesMission(mission);
    return oldRenderReadingPanel(mission);
  };

  const oldHandleReadingScroll = handleReadingScroll;
  handleReadingScroll = function handleReadingScrollFinal(event) {
    if (["referencias-avancadas-ia", "cases-ia-reais"].includes(state.selectedMissionId)) return;
    return oldHandleReadingScroll(event);
  };

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
    if (["referencias-avancadas-ia", "cases-ia-reais"].includes(state.selectedMissionId)) renderDetail(state.selectedMissionId);
  }, 0);
})();