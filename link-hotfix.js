(function applyReferenceLinkHotfix() {
  const version = "20260603-final22";
  if (window.__referenceLinkHotfixVersion === version) return;
  window.__referenceLinkHotfixVersion = version;

  let referencePointer = null;

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
      // localStorage can fail in restricted contexts; opening the link remains the priority.
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

  function markReferenceCard(link) {
    saveReferenceAccess(link.dataset.referenceId);
    link.classList.add("is-visited");
    const stateLabel = link.querySelector(".reference-state");
    if (stateLabel) stateLabel.textContent = "Acessado";
  }

  function openReference(link) {
    const opened = window.open(link.href, "_blank");
    if (opened) {
      try {
        opened.opener = null;
      } catch {
        // Cross-origin popup handles can reject opener changes.
      }
      return;
    }

    window.location.assign(link.href);
  }

  function scheduleReferenceRefresh() {
    window.setTimeout(() => {
      try {
        if (
          typeof renderDetail === "function" &&
          typeof state !== "undefined" &&
          state?.selectedMissionId === "referencias-avancadas-ia"
        ) {
          renderDetail("referencias-avancadas-ia");
        }
      } catch {
        // Stored access is enough if the visual refresh cannot run.
      }
    }, 450);
  }

  function trackReferencePointer(event) {
    const link = getReferenceLink(event);
    if (!link) return;
    referencePointer = {
      link,
      moved: false,
      x: event.clientX || 0,
      y: event.clientY || 0,
    };
    markReferenceCard(link);
  }

  function updateReferencePointer(event) {
    if (!referencePointer) return;
    const deltaX = Math.abs((event.clientX || 0) - referencePointer.x);
    const deltaY = Math.abs((event.clientY || 0) - referencePointer.y);
    if (deltaX > 8 || deltaY > 8) referencePointer.moved = true;
  }

  function clearReferencePointer() {
    window.setTimeout(() => {
      referencePointer = null;
    }, 0);
  }

  function handleReferenceClick(event) {
    const link = getReferenceLink(event);
    if (!link) return;

    if (referencePointer?.moved) {
      event.preventDefault();
      event.stopImmediatePropagation();
      clearReferencePointer();
      return;
    }

    markReferenceCard(link);
    event.preventDefault();
    event.stopImmediatePropagation();
    openReference(link);
    scheduleReferenceRefresh();
    clearReferencePointer();
  }

  function handleReferenceContextMenu(event) {
    const link = getReferenceLink(event);
    if (!link) return;
    markReferenceCard(link);
    scheduleReferenceRefresh();
  }

  normalizeReferenceLinks();
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) normalizeReferenceLinks(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  window.addEventListener("pointerdown", trackReferencePointer, true);
  window.addEventListener("mousedown", trackReferencePointer, true);
  window.addEventListener("pointermove", updateReferencePointer, true);
  window.addEventListener("pointerup", clearReferencePointer, true);
  window.addEventListener("pointercancel", clearReferencePointer, true);
  window.addEventListener("contextmenu", handleReferenceContextMenu, true);
  window.addEventListener("click", handleReferenceClick, true);
  window.addEventListener("auxclick", handleReferenceClick, true);
})();
