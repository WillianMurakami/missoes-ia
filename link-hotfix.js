(function applyReferenceLinkHotfix() {
  const version = "20260603-final21";
  if (window.__referenceLinkHotfixVersion === version) return;
  window.__referenceLinkHotfixVersion = version;

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

  function getReferenceLink(event) {
    const path = event.composedPath?.() || [];
    for (const node of path) {
      if (node?.matches?.("a.reference-card[data-reference-id]")) return node;
      const link = node?.closest?.("a.reference-card[data-reference-id]");
      if (link) return link;
    }

    const target = event.target?.nodeType === Node.ELEMENT_NODE ? event.target : event.target?.parentElement;
    return target?.closest?.("a.reference-card[data-reference-id]") || null;
  }

  function openReference(link) {
    const opened = window.open(link.href, "_blank");
    if (opened) {
      try {
        opened.opener = null;
      } catch {
        // Some browsers block opener assignment for cross-origin tabs.
      }
      return;
    }

    window.location.assign(link.href);
  }

  function saveReferenceLinkAccess(event) {
    const link = getReferenceLink(event);
    if (!link) return;

    if (link.closest(".reference-grid")?.classList.contains("is-dragging")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    saveReferenceAccess(link.dataset.referenceId);
    link.classList.add("is-visited");
    const stateLabel = link.querySelector(".reference-state");
    if (stateLabel) stateLabel.textContent = "Acessado";

    event.preventDefault();
    event.stopImmediatePropagation();
    openReference(link);
  }

  normalizeReferenceLinks();
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) normalizeReferenceLinks(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  window.addEventListener("click", saveReferenceLinkAccess, true);
  window.addEventListener("auxclick", saveReferenceLinkAccess, true);
  document.addEventListener("click", saveReferenceLinkAccess, true);
  document.addEventListener("auxclick", saveReferenceLinkAccess, true);
})();
