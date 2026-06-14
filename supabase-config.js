window.SUPABASE_CONFIG = {
  url: "https://kaahlnmidxkxigggqagc.supabase.co",
  anonKey: "sb_publishable_l0woXs4gxOrA17qgwspY-A_jKL_5TMG",
  evidenceBucket: "mission-evidence",
  adminCode: "uol-ia-2026",
};

(function loadFinalOverrides() {
  const version = "20260614-home-links-count";
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

window.addEventListener("load", () => {
  const form = document.querySelector("#loginForm");
  if (!form || !window.supabase) return;

  function databaseErrorMessage(error) {
    return error?.message || error?.details || error?.hint || "erro desconhecido";
  }

  function showDatabaseError(prefix, error) {
    console.error(prefix, error);
    setAuthStatus(`${prefix}: ${databaseErrorMessage(error)}. Rode o supabase-schema.sql atualizado no Supabase.`);
  }

  form.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const name = document.querySelector("#userName").value.trim() || "Participante";
      const area = document.querySelector("#userArea").value.trim() || "Nao informado";
      const email = document.querySelector("#userEmail").value.trim();
      const userId = email.toLowerCase().replace(/[^a-z0-9@._-]/g, "");

      if (!userId) {
        setAuthStatus("Digite um e-mail ou identificador para acessar.");
        return;
      }

      if (!db) {
        loginLocally({ id: userId, name, area, email });
        return;
      }

      setAuthStatus("Acessando trilha...");

      const { data: existingProfile, error: profileReadError } = await db
        .from("app_profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

      if (profileReadError) {
        showDatabaseError("Nao foi possivel ler seu perfil no banco", profileReadError);
        return;
      }

      const profile = {
        id: userId,
        email,
        name: name !== "Participante" ? name : existingProfile?.name || name,
        area: area !== "Nao informado" ? area : existingProfile?.area || area,
        updated_at: new Date().toISOString(),
      };

      const { error } = await db.from("app_profiles").upsert(profile, { onConflict: "id" });
      if (error) {
        showDatabaseError("Nao foi possivel salvar seu perfil no banco", error);
        return;
      }

      state.user = {
        id: profile.id,
        name: profile.name,
        area: profile.area,
        email: profile.email,
      };
      localStorage.setItem(sessionKey, JSON.stringify(state.user));
      await loadCloudSubmissions();
      setAuthStatus("");
      renderHome({ animateProgress: true });
    },
    true
  );
});
