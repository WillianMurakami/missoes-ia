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
      link.target = "_self";
      link.removeAttribute("rel");
    });
  }

  function openReferenceLink(event) {
    const link = event.target?.closest?.("a.reference-card[data-reference-id]");
    if (!link) return;

    if (event.button && event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.closest(".reference-grid")?.classList.contains("is-dragging")) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    saveReferenceAccess(link.dataset.referenceId);
    window.location.assign(link.href);
  }

  normalizeReferenceLinks();
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) normalizeReferenceLinks(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  document.addEventListener("click", openReferenceLink, true);
})();
