window.SUPABASE_CONFIG = {
  url: "",
  anonKey: "",
  evidenceBucket: "mission-evidence",
  adminCode: "uol-ia-2026",
};

(function loadFinalOverrides() {
  const version = "20260723-uni-uol-material-fix";
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = `./final-overrides.css?v=${version}`;
  document.head.appendChild(stylesheet);

  const contentStylesheet = document.createElement("link");
  contentStylesheet.rel = "stylesheet";
  contentStylesheet.href = `./content-fixes.css?v=${version}`;
  document.head.appendChild(contentStylesheet);

  const visualStylesheet = document.createElement("link");
  visualStylesheet.rel = "stylesheet";
  visualStylesheet.href = `./visual-fixes.css?v=${version}`;
  document.head.appendChild(visualStylesheet);

  const mobileScrollStylesheet = document.createElement("link");
  mobileScrollStylesheet.rel = "stylesheet";
  mobileScrollStylesheet.href = `./mobile-scroll-fix.css?v=${version}`;
  document.head.appendChild(mobileScrollStylesheet);

  const casesStylesheet = document.createElement("link");
  casesStylesheet.rel = "stylesheet";
  casesStylesheet.href = `./cases-curadoria.css?v=${version}`;
  document.head.appendChild(casesStylesheet);

  window.addEventListener("load", () => {
    const script = document.createElement("script");
    script.src = `./final-overrides.js?v=${version}`;
    script.onload = () => {
      const contentScript = document.createElement("script");
      contentScript.src = `./content-fixes.js?v=${version}`;
      contentScript.onload = () => {
        const curadoriaScript = document.createElement("script");
        curadoriaScript.src = `./curadoria-fixes.js?v=${version}`;
        curadoriaScript.onload = () => {
          const visualScript = document.createElement("script");
          visualScript.src = `./visual-fixes.js?v=${version}`;
          visualScript.onload = () => {
            const casesScript = document.createElement("script");
            casesScript.src = `./cases-curadoria.js?v=${version}`;
            document.body.appendChild(casesScript);
          };
          document.body.appendChild(visualScript);
        };
        document.body.appendChild(curadoriaScript);
      };
      document.body.appendChild(contentScript);
    };
    document.body.appendChild(script);
  });
})();
