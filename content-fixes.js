(function applyContentFixes() {
  function patchReferences() {
    if (typeof missions === "undefined" || !Array.isArray(missions)) return;

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
})();