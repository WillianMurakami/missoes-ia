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

  function normalizeReferenceLinks(root = document) {
    root.querySelectorAll?.("a.reference-card[data-reference-id]").forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  function saveReferenceLinkAccess(event) {
    const link = event.target?.closest?.("a.reference-card[data-reference-id]");
    if (!link) return;

    if (link.closest(".reference-grid")?.classList.contains("is-dragging")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    saveReferenceAccess(link.dataset.referenceId);
    event.preventDefault();
    event.stopImmediatePropagation();

    const opened = window.open(link.href, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = link.href;
  }

  normalizeReferenceLinks();
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) normalizeReferenceLinks(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  document.addEventListener("click", saveReferenceLinkAccess, true);
  document.addEventListener("auxclick", saveReferenceLinkAccess, true);
})();
