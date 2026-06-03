(function applyContentFixes() {
  if (typeof missions === "undefined" || typeof renderDetail === "undefined") return;

  function patchReferences() {
    if (!Array.isArray(missions)) return;

    const referenceMission = missions.find((mission) => mission.id === "referencias-avancadas-ia");
    if (!referenceMission || !Array.isArray(referenceMission.references)) return;

    const references = referenceMission.references;
    const deepLearningIndex = references.findIndex(
      (item) => item.level === "Iniciante" && item.title === "DeepLearning.AI" && item.producer === "Andrew Ng"
    );
    if (deepLearningIndex >= 0) references.splice(deepLearningIndex, 1);

    references
      .filter((item) => item.level === "Iniciante")
      .sort((a, b) => a.order - b.order)
      .forEach((item, index) => {
        item.order = index + 1;
      });

    const evolutionPost = references.find((item) => item.title === "Evolucao do uso das IAs");
    if (evolutionPost) evolutionPost.url = "https://www.instagram.com/p/DYDlxo0tnHW/";

    const googleSecretsPost = references.find((item) => item.title === "5 IAs secretas do Google");
    if (googleSecretsPost) googleSecretsPost.url = "https://www.instagram.com/p/DX5nm3doO1-/";

    const vibeCodingItems = [
      {
        level: "Avancado",
        order: 10,
        title: "O que e Vibe Coding?",
        producer: "NoCode Startup",
        tag: "Video",
        url: "https://www.youtube.com/watch?v=3T3SS7r2Zpo",
      },
      {
        level: "Avancado",
        order: 11,
        title: "Criando um CRM sozinho (com vibe Code)",
        producer: "Gustavo Campos - IA",
        tag: "Video",
        url: "https://www.youtube.com/watch?v=q4VaJ2ae9o0",
      },
    ];

    vibeCodingItems.forEach((newItem) => {
      const existingItem = references.find((item) => item.title === newItem.title);
      if (existingItem) {
        Object.assign(existingItem, newItem);
        return;
      }
      references.push(newItem);
    });

    if (typeof state !== "undefined" && state?.selectedMissionId === "referencias-avancadas-ia") {
      renderDetail("referencias-avancadas-ia");
    }
  }

  patchReferences();

  let enhanceFrame = 0;

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

  function getReferenceId(item) {
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
    const mission = typeof missions !== "undefined"
      ? missions.find((item) => item.id === "referencias-avancadas-ia")
      : null;
    const button = document.querySelector("#markReadingBtn");
    const panel = document.querySelector("#readingPanel");
    if (
      !mission?.references ||
      !button ||
      !panel ||
      typeof state === "undefined" ||
      state?.selectedMissionId !== "referencias-avancadas-ia"
    ) return;

    let badge = panel.querySelector(".reference-total-progress");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "reference-total-progress";
      button.insertAdjacentElement("beforebegin", badge);
    }

    const clicks = getReferenceClickSet();
    const total = mission.references.length;
    const viewed = mission.references.filter((item) => clicks.has(getReferenceId(item))).length;
    badge.textContent = `${viewed}/${total} vistos`;
  }

  function scheduleReferenceEnhancement() {
    if (enhanceFrame) return;
    enhanceFrame = window.requestAnimationFrame(() => {
      enhanceFrame = 0;
      enhanceReferenceScroll();
    });
  }

  function enhanceReferenceScroll() {
    if (typeof state === "undefined" || state?.selectedMissionId !== "referencias-avancadas-ia") return;

    document.querySelectorAll(".reference-section").forEach((section) => {
      const grid = section.querySelector(".reference-grid");
      const heading = section.querySelector(".reference-section-heading");
      if (!grid || !heading) return;

      if (!section.querySelector(".reference-scroll-actions")) {
        const actions = document.createElement("div");
        actions.className = "reference-scroll-actions";
        actions.innerHTML = `
          <button type="button" aria-label="Ver conteudos anteriores" data-reference-scroll="prev">&lsaquo;</button>
          <button type="button" aria-label="Ver proximos conteudos" data-reference-scroll="next">&rsaquo;</button>
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
    const result = originalRenderDetail(missionId);
    if (missionId === "referencias-avancadas-ia") {
      window.setTimeout(scheduleReferenceEnhancement, 0);
      window.setTimeout(scheduleReferenceEnhancement, 120);
    }
    return result;
  };

  window.addEventListener("resize", scheduleReferenceEnhancement);
  window.addEventListener("storage", updateReferenceTotalProgress);
  window.setTimeout(scheduleReferenceEnhancement, 0);
})();