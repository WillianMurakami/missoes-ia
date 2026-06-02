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
    if (evolutionPost) evolutionPost.url = "https://www.instagram.com/reel/DYDlxo0tnHW/";

    const googleSecretsPost = references.find((item) => item.title === "5 IAs secretas do Google");
    if (googleSecretsPost) googleSecretsPost.url = "https://www.instagram.com/p/DX5nm3doO1-/";

    if (typeof state !== "undefined" && state?.selectedMissionId === "referencias-avancadas-ia") {
      renderDetail("referencias-avancadas-ia");
    }
  }

  patchReferences();
})();