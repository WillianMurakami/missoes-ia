(function applyVisualReferenceFixes() {
  const missionId = "referencias-avancadas-ia";
  const scrollKey = "uol-edtech-ai-reference-scroll-position";
  const managedPreviewClasses = [
    "reference-podcast",
    "reference-instagram",
    "reference-course",
    "reference-article-type",
    "reference-platform",
    "reference-linkedin",
    "reference-youtube",
    "reference-tedx",
    "reference-report",
    "reference-infographic",
    "reference-news",
    "reference-reference",
  ];

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function classForType(label) {
    const normalized = normalize(label);
    if (normalized.includes("podcast")) return "reference-podcast";
    if (normalized.includes("instagram")) return "reference-instagram";
    if (normalized.includes("linkedin")) return "reference-linkedin";
    if (normalized.includes("tedx")) return "reference-tedx";
    if (normalized.includes("youtube") || normalized.includes("video")) return "reference-youtube";
    if (normalized.includes("relatorio")) return "reference-report";
    if (normalized.includes("infografico")) return "reference-infographic";
    if (normalized.includes("noticia")) return "reference-news";
    if (normalized.includes("artigo")) return "reference-article-type";
    if (normalized.includes("curso")) return "reference-course";
    if (normalized.includes("plataforma")) return "reference-platform";
    return "reference-reference";
  }

  function isReferenceMission() {
    return typeof state !== "undefined" && state?.selectedMissionId === missionId;
  }

  function readingContent() {
    return document.querySelector("#readingContent");
  }

  function saveScrollPosition() {
    if (!isReferenceMission()) return;
    const content = readingContent();
    if (!content) return;
    try {
      sessionStorage.setItem(scrollKey, String(Math.max(0, Math.round(content.scrollTop || 0))));
    } catch {
      // Session storage can be unavailable in hardened browser settings.
    }
  }

  function restoreScrollPosition() {
    if (!isReferenceMission()) return;
    const content = readingContent();
    if (!content) return;
    const value = Number(sessionStorage.getItem(scrollKey));
    if (!Number.isFinite(value) || value <= 0) return;
    window.requestAnimationFrame(() => {
      content.scrollTop = value;
    });
  }

  function applyTypeColors() {
    document.querySelectorAll(".reference-preview").forEach((preview) => {
      preview.classList.remove(...managedPreviewClasses);
      preview.classList.add(classForType(preview.textContent));
    });
  }

  function refreshVisuals() {
    applyTypeColors();
    restoreScrollPosition();
  }

  function observeReadingContent() {
    const content = readingContent();
    if (!content || content.dataset.visualFixObserved) return;
    content.dataset.visualFixObserved = "true";
    content.addEventListener("scroll", saveScrollPosition, { passive: true });
    new MutationObserver(refreshVisuals).observe(content, { childList: true, subtree: true });
  }

  ["mousedown", "click", "auxclick", "contextmenu"].forEach((eventName) => {
    document.addEventListener(
      eventName,
      (event) => {
        if (!event.target.closest?.("a.reference-card[data-reference-id]")) return;
        saveScrollPosition();
        window.setTimeout(refreshVisuals, 220);
        window.setTimeout(restoreScrollPosition, 760);
      },
      true
    );
  });

  window.addEventListener("pageshow", refreshVisuals);
  window.addEventListener("resize", refreshVisuals);
  window.addEventListener("load", () => {
    observeReadingContent();
    refreshVisuals();
  });

  const boot = () => {
    observeReadingContent();
    refreshVisuals();
  };

  window.setTimeout(boot, 0);
  window.setTimeout(boot, 250);
  window.setTimeout(boot, 900);
})();
