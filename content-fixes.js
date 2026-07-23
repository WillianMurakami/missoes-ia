(function applyContentFixes() {
  if (typeof missions === "undefined" || typeof renderDetail === "undefined") return;

  const normalizedReferences = [
    { level: "Iniciante", order: 1, title: "IA Todo Dia", producer: "Sommers e Helena", tag: "Podcast", url: "https://open.spotify.com/show/2FHimuESqvjBL4x8AKur2b" },
    { level: "Iniciante", order: 2, title: "Não existe automação sem padronização", producer: "Letícia Mirelli", tag: "Post Instagram", url: "https://www.instagram.com/p/DYFMJMLlGtG/" },
    { level: "Iniciante", order: 3, title: "Treinamento interno da ferramenta principal", producer: "Uni UOL", tag: "Curso interno", url: "https://uni.uol.com.br/missions/Qf8wPJQ3ZSfmb8Td1vc4" },
    { level: "Iniciante", order: 4, title: "Prompt Engineering Guide", producer: "OpenAI", tag: "Artigo", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    { level: "Iniciante", order: 5, title: "Elements of AI", producer: "University of Helsinki / MinnaLearn", tag: "Curso", url: "https://course.elementsofai.com/pt/" },
    { level: "Iniciante", order: 6, title: "Do Prompt ao Agente", producer: "Gustavo Guanabara", tag: "Vídeo", url: "https://www.youtube.com/watch?v=pv4pTteJOwA" },
    { level: "Iniciante", order: 7, title: "Como a IA vai mudar tudo (inclusive você)", producer: "Miguel Fernandes", tag: "TEDx", url: "https://www.youtube.com/watch?v=C38xlWnkezQ" },
    { level: "Intermediario", order: 1, title: "ChatGPT Prompt Engineering for Developers", producer: "DeepLearning.AI / OpenAI", tag: "Curso", url: "https://www.deeplearning.ai/courses/chatgpt-prompt-eng" },
    { level: "Intermediario", order: 2, title: "Evolução do uso das IAs", producer: "Breno Masi", tag: "Post Instagram", url: "https://www.instagram.com/p/DYDlxo0tnHW/" },
    { level: "Intermediario", order: 3, title: "Excel para Análise de Dados", producer: "Preditiva.ai", tag: "Curso", url: "https://www.preditiva.ai/curso-excel-gratuito?campaign=excel-link-home" },
    { level: "Intermediario", order: 4, title: "Análise de Dados com IA para Iniciantes", producer: "Karine Lago", tag: "Vídeo", url: "https://www.youtube.com/watch?v=rxgM2bbAfjY" },
    { level: "Intermediario", order: 5, title: "Fluência em IA com Copilot", producer: "Microsoft Learn", tag: "Plataforma de aprendizado", url: "https://learn.microsoft.com/pt-br/training/paths/ai-fluency/" },
    { level: "Intermediario", order: 6, title: "Da febre da IA à vantagem competitiva real", producer: "Gestão do Amanhã", tag: "Podcast", url: "https://open.spotify.com/episode/3oWxE3iLpT2S3CZQpagr5K" },
    { level: "Intermediario", order: 7, title: "Guia de melhores práticas com prompting", producer: "Anthropic", tag: "Artigo", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" },
    { level: "Intermediario", order: 8, title: "Capacidades e limitações da IA", producer: "Anthropic", tag: "Curso", url: "https://anthropic.skilljar.com/ai-capabilities-and-limitations" },
    { level: "Intermediario", order: 9, title: "5 IAs secretas do Google", producer: "Jeferson de Oliveira", tag: "Post Instagram", url: "https://www.instagram.com/p/DX5nm3doO1-/" },
    { level: "Intermediario", order: 10, title: "Google Pomelli: a IA que cria todo o marketing da sua empresa", producer: "Investi News BR", tag: "Vídeo", url: "https://www.youtube.com/watch?v=swBVLYEECBw" },
    { level: "Avancado", order: 1, title: "Por dentro das LLMs como ChatGPT", producer: "Asimov Academy", tag: "Curso", url: "https://www.youtube.com/watch?v=CVXsLyRC1bY" },
    { level: "Avancado", order: 2, title: "Future of Jobs Report 2025", producer: "World Economic Forum", tag: "Relatório", url: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf" },
    { level: "Avancado", order: 3, title: "20 termos mais conhecidos de IA agêntica", producer: "Andreas Horn", tag: "Post LinkedIn", url: "https://www.linkedin.com/posts/andreashorn1_%F0%9D%97%A0%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%B6%F0%9D%98%80%F0%9D%97%B2%F0%9D%98%80-%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B2-%F0%9D%97%AF-share-7462042620521836544-Ur2V/" },
    { level: "Avancado", order: 4, title: "Cartilha da IA Generativa", producer: "Governo do Brasil (MGI)", tag: "Infográfico", url: "https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/cartilha-ia-generativa" },
    { level: "Avancado", order: 5, title: "Tópico IA", producer: "MIT Technology Review", tag: "Notícias", url: "https://www.technologyreview.com/topic/artificial-intelligence/" },
    { level: "Avancado", order: 6, title: "Codex e a IA estão democratizando a programação", producer: "Investi News BR", tag: "Vídeo", url: "https://www.youtube.com/watch?v=P1zCSwkD5eM" },
    { level: "Avancado", order: 7, title: "Ranking de comparação das IAs", producer: "Hugging Face", tag: "Plataforma", url: "https://huggingface.co/spaces/lmarena-ai/arena-leaderboard" },
    { level: "Avancado", order: 8, title: "LangChain Academy", producer: "LangChain", tag: "Curso", url: "https://academy.langchain.com/" },
    { level: "Avancado", order: 9, title: "Do zero ao seu primeiro agente de IA em 20 minutos (sem codar, com n8n)", producer: "Asimov Academy", tag: "Vídeo", url: "https://www.youtube.com/watch?v=DgxHP1LG5dM" },
    { level: "Avancado", order: 10, title: "O que é Vibe Coding?", producer: "NoCode Startup", tag: "Vídeo", url: "https://www.youtube.com/watch?v=3T3SS7r2Zpo" },
    { level: "Avancado", order: 11, title: "Arquitetura de software no Vibe Coding", producer: "Polímatas AI", tag: "Vídeo", url: "https://www.youtube.com/watch?v=kU4-2a__1YY" },
  ];

  function patchReferences() {
    const referenceMission = missions.find((mission) => mission.id === "referencias-avancadas-ia");
    if (!referenceMission || !Array.isArray(referenceMission.references)) return;
    referenceMission.references.splice(0, referenceMission.references.length, ...normalizedReferences);
  }

  function referenceId(item) {
    return `${item.level}-${item.order}`.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  function getReferenceClickSet() {
    try {
      const key = `uol-edtech-ai-reference-clicks:${typeof state !== "undefined" ? state?.user?.id || "anon" : "anon"}`;
      return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
    } catch {
      return new Set();
    }
  }

  function updateReferenceTotalProgress() {
    const panel = document.querySelector("#readingPanel");
    const button = document.querySelector("#markReadingBtn");
    const mission = missions.find((item) => item.id === "referencias-avancadas-ia");
    const existingBadge = panel?.querySelector(".reference-total-progress");

    if (typeof state === "undefined" || state?.selectedMissionId !== "referencias-avancadas-ia") {
      existingBadge?.remove();
      return;
    }

    if (!mission?.references || !button || !panel) return;
    const clicks = getReferenceClickSet();
    const viewed = mission.references.filter((item) => clicks.has(referenceId(item))).length;
    const total = mission.references.length;
    let badge = existingBadge;
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "reference-total-progress";
      button.insertAdjacentElement("beforebegin", badge);
    }
    badge.textContent = `${viewed}/${total} vistos`;
  }

  function updateReferenceScrollState(section) {
    const grid = section.querySelector(".reference-grid");
    if (!grid) return;
    const canScroll = grid.scrollWidth > grid.clientWidth + 4;
    const atStart = grid.scrollLeft <= 4;
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
    section.classList.toggle("has-reference-scroll", canScroll);
    section.classList.toggle("is-scroll-start", !canScroll || atStart);
    section.classList.toggle("is-scroll-end", !canScroll || atEnd);
    const previous = section.querySelector("[data-reference-scroll='prev']");
    const next = section.querySelector("[data-reference-scroll='next']");
    if (previous) previous.disabled = !canScroll || atStart;
    if (next) next.disabled = !canScroll || atEnd;
  }

  function markReferenceCardKinds(section) {
    section.querySelectorAll(".reference-card").forEach((card) => {
      const preview = card.querySelector(".reference-preview");
      const tag = preview?.textContent?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || "";
      preview?.classList.toggle("reference-youtube", tag.includes("video") || tag.includes("youtube") || tag.includes("tedx"));
    });
  }

  function bindReferenceLinks(section) {
    section.querySelectorAll("a.reference-card[data-reference-id]").forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  function enhanceReferenceScroll() {
    patchReferences();
    if (typeof state === "undefined" || state?.selectedMissionId !== "referencias-avancadas-ia") {
      updateReferenceTotalProgress();
      return;
    }

    document.querySelectorAll(".reference-section").forEach((section) => {
      const grid = section.querySelector(".reference-grid");
      if (!grid) return;
      markReferenceCardKinds(section);
      bindReferenceLinks(section);

      const levelLabel = section.querySelector(".reference-section-heading span");
      if (levelLabel?.textContent === "Intermediario") levelLabel.textContent = "Intermediário";
      if (levelLabel?.textContent === "Avancado") levelLabel.textContent = "Avançado";

      if (!section.querySelector(".reference-scroll-actions")) {
        const actions = document.createElement("div");
        actions.className = "reference-scroll-actions";
        actions.innerHTML = `
          <button type="button" aria-label="Ver conteúdos anteriores" data-reference-scroll="prev">&lsaquo;</button>
          <button type="button" aria-label="Ver próximos conteúdos" data-reference-scroll="next">&rsaquo;</button>
        `;
        section.appendChild(actions);
      }

      if (!grid.dataset.scrollEnhanced) {
        grid.dataset.scrollEnhanced = "true";
        grid.addEventListener("scroll", () => updateReferenceScrollState(section), { passive: true });
      }

      section.querySelectorAll("[data-reference-scroll]").forEach((button) => {
        if (button.dataset.bound) return;
        button.dataset.bound = "true";
        button.addEventListener("click", () => {
          const direction = button.dataset.referenceScroll === "next" ? 1 : -1;
          const amount = Math.max(260, Math.round(grid.clientWidth * 0.82));
          grid.scrollBy({ left: direction * amount, behavior: "smooth" });
          window.setTimeout(() => updateReferenceScrollState(section), 260);
        });
      });

      updateReferenceScrollState(section);
    });

    updateReferenceTotalProgress();
  }

  const originalRenderDetail = renderDetail;
  renderDetail = function renderDetailWithReferenceEnhancement(missionId) {
    patchReferences();
    const result = originalRenderDetail(missionId);
    window.setTimeout(enhanceReferenceScroll, 0);
    window.setTimeout(enhanceReferenceScroll, 140);
    return result;
  };

  patchReferences();
  window.addEventListener("resize", enhanceReferenceScroll);
  window.addEventListener("storage", updateReferenceTotalProgress);
  const referenceContent = document.querySelector("#readingContent");
  if (referenceContent) {
    new MutationObserver(enhanceReferenceScroll).observe(referenceContent, { childList: true, subtree: true });
  }
  window.setTimeout(enhanceReferenceScroll, 0);
})();
