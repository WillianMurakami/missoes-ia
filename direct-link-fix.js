(function applyDirectReferenceLinkFix() {
  const version = "20260604-direct2";
  if (window.__directReferenceLinkFixVersion === version) return;
  window.__directReferenceLinkFixVersion = version;

  let pointerStart = null;

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

  function getStorageKey() {
    const userId = typeof state !== "undefined" ? state?.user?.id || "anon" : "anon";
    return `uol-edtech-ai-reference-clicks:${userId}`;
  }

  function markAccess(link) {
    const referenceId = link?.dataset?.referenceId;
    if (!referenceId) return;
    try {
      const key = getStorageKey();
      const clicks = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
      clicks.add(referenceId);
      localStorage.setItem(key, JSON.stringify([...clicks]));
    } catch {
      // Keep navigation working even if localStorage is unavailable.
    }
    link.classList.add("is-visited");
    const label = link.querySelector(".reference-state");
    if (label) label.textContent = "Acessado";
  }

  function refreshReferenceView() {
    window.setTimeout(() => {
      if (
        typeof renderDetail === "function" &&
        typeof state !== "undefined" &&
        state?.selectedMissionId === "referencias-avancadas-ia"
      ) {
        renderDetail("referencias-avancadas-ia");
      }
    }, 350);
  }

  function openLink(link) {
    markAccess(link);
    const opened = window.open(link.href, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = link.href;
    refreshReferenceView();
  }

  function handlePointerDown(event) {
    const link = getReferenceLink(event);
    if (!link) return;
    pointerStart = {
      x: event.clientX || 0,
      y: event.clientY || 0,
      moved: false,
    };
  }

  function handlePointerMove(event) {
    if (!pointerStart) return;
    const movedX = Math.abs((event.clientX || 0) - pointerStart.x);
    const movedY = Math.abs((event.clientY || 0) - pointerStart.y);
    if (movedX > 8 || movedY > 8) pointerStart.moved = true;
  }

  function clearPointer() {
    window.setTimeout(() => {
      pointerStart = null;
    }, 0);
  }

  function handleReferenceClick(event) {
    const link = getReferenceLink(event);
    if (!link || pointerStart?.moved) {
      clearPointer();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openLink(link);
    clearPointer();
  }

  function handleReferenceAuxClick(event) {
    const link = getReferenceLink(event);
    if (!link || event.button !== 1 || pointerStart?.moved) {
      clearPointer();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openLink(link);
    clearPointer();
  }

  function handleReferenceContextMenu(event) {
    const link = getReferenceLink(event);
    if (!link) return;
    markAccess(link);
    refreshReferenceView();
  }

  window.addEventListener("pointerdown", handlePointerDown, true);
  window.addEventListener("mousedown", handlePointerDown, true);
  window.addEventListener("pointermove", handlePointerMove, true);
  window.addEventListener("pointerup", clearPointer, true);
  window.addEventListener("pointercancel", clearPointer, true);
  window.addEventListener("click", handleReferenceClick, true);
  window.addEventListener("auxclick", handleReferenceAuxClick, true);
  window.addEventListener("contextmenu", handleReferenceContextMenu, true);
})();
