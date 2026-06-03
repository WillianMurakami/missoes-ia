(function applyReferenceLinkHotfix() {
  if (window.__referenceLinkHotfix) return;
  window.__referenceLinkHotfix = true;

  function getUserKey() {
    const userId = typeof state !== "undefined" ? state?.user?.id || "anon" : "anon";
    return `uol-edtech-ai-reference-clicks:${userId}`;
  }

  function saveReferenceAccess(referenceId) {
    if (!referenceId) return;
    try {
      const key = getUserKey();
      const clicks = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
      clicks.add(referenceId);
      localStorage.setItem(key, JSON.stringify([...clicks]));
    } catch {
      // localStorage can fail in restricted browser contexts; opening the link is still the priority.
    }
  }

  function openReferenceLink(event) {
    const link = event.target?.closest?.("a.reference-card[data-reference-id]");
    if (!link) return;

    if (event.type === "auxclick" && event.button !== 1) return;
    if (link.closest(".reference-grid")?.classList.contains("is-dragging")) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    saveReferenceAccess(link.dataset.referenceId);
    window.open(link.href, "_blank", "noopener,noreferrer");

    if (typeof renderDetail === "function") {
      window.setTimeout(() => renderDetail("referencias-avancadas-ia"), 650);
    }
  }

  document.addEventListener("click", openReferenceLink, true);
  document.addEventListener("auxclick", openReferenceLink, true);
})();
