(function applyFinalMissionOverrides() {
  if (!Array.isArray(missions)) return;

  const references = [
    { level: "Iniciante", order: 1, title: "IA Todo Dia", producer: "Sommers e Helena", tag: "Podcast", url: "https://open.spotify.com/show/2FHimuESqvjBL4x8AKur2b" },
    { level: "Iniciante", order: 2, title: "Nao existe automacao sem Padronizacao", producer: "Leticia Mirelli", tag: "Post Instagram", url: "https://www.instagram.com/p/DYFMJMLlGtG/?igsh=MXczeXM5N3AybmxteA==" },
    { level: "Iniciante", order: 3, title: "Google AI Essentials", producer: "Google", tag: "Curso", url: "https://grow.google/ai-essentials/" },
    { level: "Iniciante", order: 4, title: "Prompt Engineering Guide", producer: "OpenAI", tag: "Artigo", url: "https://developers.openai.com/api/docs/guides/prompt-guidance?model=gpt-5.5" },
    { level: "Iniciante", order: 5, title: "Elements of AI", producer: "University of Helsinki / MinnaLearn", tag: "Curso", url: "https://course.elementsofai.com/pt/" },
    { level: "Iniciante", order: 6, title: "DeepLearning.AI", producer: "Andrew Ng", tag: "Plataforma Aprendizado", url: "https://learn.deeplearning.ai/" },
    { level: "Iniciante", order: 7, title: "Do Prompt ao Agente", producer: "Gustavo Guanabara", tag: "Video", url: "https://www.youtube.com/watch?v=pv4pTteJOwA" },
    { level: "Iniciante", order: 8, title: "Como a IA vai mudar tudo (inclusive voce)", producer: "Miguel Fernandes", tag: "TEDx", url: "https://www.youtube.com/watch?v=C38xlWnkezQ" },
    { level: "Intermediario", order: 1, title: "ChatGPT Prompt Engineering for Developers", producer: "DeepLearning.AI / OpenAI", tag: "Curso", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
    { level: "Intermediario", order: 2, title: "Evolucao do uso das IAs", producer: "Breno Masi", tag: "Post Instagram", url: "https://www.instagram.com/reel/DYDlxo0tnHW/?igsh=ODcwdWJ5eGgwcHdu" },
    { level: "Intermediario", order: 3, title: "Excel para Analise de Dados", producer: "Preditiva.ai", tag: "Curso", url: "https://www.preditiva.ai/curso-excel-gratuito?campaign=excel-link-home" },
    { level: "Intermediario", order: 4, title: "Fluencia em IA com Copilot", producer: "Microsoft Learn", tag: "Plataforma Aprendizado", url: "https://learn.microsoft.com/pt-br/training/paths/ai-fluency/" },
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

  const certificateIndex = missions.findIndex((mission) => mission.id === "certificado-anthropic");
  if (certificateIndex >= 0) missions.splice(certificateIndex, 1);

  const refMission = missions.find((mission) => mission.id === "referencias-avancadas-ia");
  if (refMission) {
    Object.assign(refMission, {
      type: "Opcional 2",
      group: "optional",
      icon: "06",
      accent: "silver",
      title: "Estudos avancados",
      short: "Explore uma curadoria de IA por nivel de maturidade.",
      description: "Acesse uma curadoria de conteudos para continuar estudando IA depois da trilha.",
      steps: [
        "Comece pelos conteudos iniciantes se voce ainda usa pouco IA no trabalho.",
        "Avance para os materiais intermediarios para melhorar prompts, automacoes e analises.",
        "Use os conteudos avancados para ampliar visao estrategica, tendencias e proximos passos.",
      ],
      resources: [],
      references,
    });
  }

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

  function referenceSummary(item) {
    const tag = String(item.tag || "").toLowerCase();
    if (tag.includes("podcast")) return "Conteudo em audio para acompanhar conversas, tendencias e aplicacoes praticas de IA.";
    if (tag.includes("instagram")) return "Post curto para repertorio rapido, provocacao e exemplos aplicaveis ao dia a dia.";
    if (tag.includes("curso")) return "Curso para estruturar aprendizado com mais profundidade e pratica guiada.";
    if (tag.includes("plataforma")) return "Plataforma para aprender por trilhas, materiais e exploracao continua.";
    if (tag.includes("video") || tag.includes("tedx")) return "Conteudo em video para ampliar entendimento com explicacoes diretas e exemplos.";
    if (tag.includes("relatorio")) return "Relatorio para entender tendencias, impactos no trabalho e leitura estrategica.";
    if (tag.includes("linkedin")) return "Referencia para acompanhar termos, discussoes e atualizacoes do mercado.";
    if (tag.includes("infografico")) return "Material visual para consulta rapida e entendimento dos principais conceitos.";
    return "Referencia complementar para ampliar repertorio e seguir estudando IA.";
  }

  function referenceSections(items) {
    return ["Iniciante", "Intermediario", "Avancado"].map((level) => {
      const group = items.filter((item) => item.level === level).sort((a, b) => a.order - b.order);
      return `
        <section class="reference-section">
          <header class="reference-section-heading"><span>${level}</span><strong>${group.length} conteudos</strong></header>
          <div class="reference-grid">
            ${group.map(referenceCard).join("")}
          </div>
        </section>`;
    }).join("");
  }

  function referenceCard(item) {
    return `
      <a class="reference-card" href="${html(item.url)}" target="_blank" rel="noreferrer">
        <div class="reference-preview ${referenceClass(item.tag)}"><strong>${html(item.producer)}</strong><span>${html(item.tag)}</span></div>
        <strong>${String(item.order).padStart(2, "0")}. ${html(item.title)}</strong>
        <small>${html(item.producer)} - ${html(item.level)}</small>
        <p>${html(referenceSummary(item))}</p>
      </a>`;
  }

  const oldRenderReadingPanel = renderReadingPanel;
  renderReadingPanel = function renderReadingPanelFinal(mission) {
    if (mission?.id !== "referencias-avancadas-ia") return oldRenderReadingPanel(mission);

    const panel = document.querySelector("#readingPanel");
    const content = document.querySelector("#readingContent");
    panel.classList.remove("hidden");
    content.scrollTop = 0;
    content.innerHTML = `
      <article class="reference-article">
        <header class="reference-hero">
          <span class="eyebrow">Curadoria complementar</span>
          <h2>06. Estudos avancados</h2>
          <p>Uma trilha de repertorio para guiar o aprendizado em IA, indo de conceitos simples a referencias mais densas para quem quiser aprofundar.</p>
        </header>
        ${referenceSections(mission.references || [])}
      </article>`;
    setReadingButtonState(isMissionCompleted(mission.id) ? "complete" : "ready");
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
      return {
        ...row,
        completed: completedIds.size,
        certificateDone: completedIds.has("referencias-avancadas-ia") ? "Sim" : "Nao",
      };
    });
  };

  const oldRenderAdminTable = renderAdminTable;
  renderAdminTable = function renderAdminTableFinal() {
    oldRenderAdminTable();
    document.querySelectorAll('[data-admin-sort="certificateDone"]').forEach((button) => {
      button.textContent = button.textContent.replace("Certificado", "Referencias");
    });
  };

  window.setTimeout(() => {
    if (state.user && !document.querySelector("#homeView").classList.contains("hidden")) renderHome({ animateProgress: false });
    if (state.selectedMissionId === "referencias-avancadas-ia") renderDetail("referencias-avancadas-ia");
  }, 0);
})();