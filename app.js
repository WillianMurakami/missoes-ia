const missions = [
  {
    id: "post-treinamento-ao-vivo",
    type: "Ao vivo",
    group: "main",
    icon: "01",
    accent: "yellow",
    title: "Desafio inicial",
    short: "Publique o material criado no encontro ao vivo.",
    description:
      "Poste a imagem criada durante o treinamento ao vivo e use o espaco de comentario para contextualizar seu aprendizado.",
    steps: [
      "Reassista a gravacao do treinamento, se precisar revisar o passo a passo.",
      "Inclua no comentario uma introducao curta sobre o que voce criou.",
      "Anexe a imagem gerada no desafio feito durante o treinamento.",
    ],
    resources: ["Link da gravacao: inserir aqui quando o material final estiver disponivel."],
  },
  {
    id: "infografico-rotina-chave",
    type: "Infografico",
    group: "main",
    icon: "02",
    accent: "orange",
    title: "Estruturando a rotina",
    short: "Transforme uma rotina chave em visual explicativo.",
    description:
      "Crie um infografico sobre alguma rotina chave do seu trabalho. A ferramenta e livre, mas o processo com IA deve ficar registrado.",
    steps: [
      "Escolha uma rotina relevante para seu time.",
      "Use IA para organizar a explicacao, etapas, riscos ou boas praticas.",
      "Anexe o infografico e o export do prompt ou conversa usada para gerar o material.",
    ],
  },
  {
    id: "treinamento-no-code-startup",
    type: "Video",
    group: "main",
    icon: "03",
    accent: "red",
    title: "Amplie seus conhecimentos",
    short: "Assista ao conteudo e registre seu principal insight.",
    description:
      "Assista ao treinamento no-code startup e poste um print da parte que mais gostou com um comentario proprio.",
    steps: [
      "Assista ao video indicado.",
      "Escolha a parte que mais chamou sua atencao.",
      "Anexe um print e escreva o que voce absorveu desse conteudo.",
    ],
    resources: ["Treinamento: https://www.youtube.com/watch?v=JQeItPqowOg"],
  },
  {
    id: "solucao-performance-ia",
    type: "Projeto final",
    group: "main",
    icon: "04",
    accent: "purple",
    title: "Transformando com IA",
    short: "Apresente uma melhoria aplicavel de performance.",
    description:
      "Apresente uma solucao aplicavel com IA para melhorar performance em um processo, produto ou rotina da area.",
    steps: [
      "Descreva a solucao e o problema que ela resolve.",
      "Informe a ferramenta utilizada ou recomendada.",
      "Estime o potencial de ganho e detalhe os passos de implementacao.",
    ],
  },
  {
    id: "leitura-conteudo-ia",
    type: "Opcional 1",
    group: "optional",
    icon: "05",
    accent: "dark",
    title: "Mundo da IA",
    short: "Leia o conteudo completo para marcar como feito.",
    description:
      "Leia o conteudo embedado sobre IA. A missao so pode ser marcada como concluida depois de rolar ate o final.",
    steps: [
      "Leia o material completo dentro da plataforma.",
      "Role ate o fim do conteudo para liberar a conclusao.",
      "Marque a leitura como feita quando o botao ficar disponivel.",
    ],
    readingContent: [
      "Conteudo em definicao.",
      "Este espaco simula a area onde o artigo final sobre IA sera publicado dentro da propria pagina.",
      "A ideia e garantir que o participante passe pelo material antes de marcar a etapa como concluida.",
      "O texto pode explicar conceitos basicos, exemplos de uso no trabalho, cuidados com dados e boas praticas de prompt.",
      "Tambem pode trazer exemplos da realidade UOL EdTech: comunicacao, educacao corporativa, atendimento, conteudo, operacao e analise.",
      "Fim do conteudo. Ao chegar aqui, o botao de conclusao fica liberado.",
    ],
  },
  {
    id: "certificado-anthropic",
    type: "Opcional 2",
    group: "optional",
    icon: "06",
    accent: "blue",
    title: "Certificacao Anthropic",
    short: "Conclua o curso gratuito e envie o certificado.",
    description:
      "Complete os cursos gratuitos de IA da Anthropic e entregue o PDF do certificado gerado ao final.",
    steps: [
      "Acesse os cursos gratuitos da Anthropic.",
      "Conclua a trilha escolhida.",
      "Anexe o PDF do certificado na entrega da missao.",
    ],
    resources: ["Conteudo externo: cursos gratuitos de IA da Anthropic."],
  },
];

const storageKey = "uol-edtech-ai-missions";
const sessionKey = "uol-edtech-ai-current-user";
const supabaseConfig = window.SUPABASE_CONFIG || {};
const hasSupabaseConfig = Boolean(supabaseConfig.url && supabaseConfig.anonKey && window.supabase);
const db = hasSupabaseConfig ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey) : null;
const state = {
  user: null,
  selectedMissionId: null,
  submissions: [],
};

const $ = (selector) => document.querySelector(selector);

async function loadState() {
  if (db) {
    state.user = JSON.parse(localStorage.getItem(sessionKey) || "null");
    if (state.user) await loadCloudSubmissions();
    return;
  }

  state.submissions = JSON.parse(localStorage.getItem(storageKey) || "[]");
  state.user = JSON.parse(localStorage.getItem(sessionKey) || "null");
}

function persistSubmissions() {
  if (db) return;
  localStorage.setItem(storageKey, JSON.stringify(state.submissions));
}

async function loadCloudSubmissions() {
  const { data, error } = await db
    .from("app_submissions")
    .select("*")
    .eq("user_id", state.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    setAuthStatus(error.message);
    state.submissions = [];
    return;
  }

  state.submissions = (data || []).map((item) => ({
    id: item.id,
    missionId: item.mission_id,
    userId: item.user_id,
    userName: state.user.name,
    userArea: state.user.area,
    text: item.text || "",
    fileName: item.file_name || "",
    filePath: item.file_path || "",
    fileUrl: item.file_url || "",
    createdAt: item.created_at,
  }));
}

function setAuthStatus(message) {
  const status = $("#authStatus");
  if (status) status.textContent = message || "";
}

function loginLocally({ id, name, area, email }) {
  state.user = { id, name, area, email };
  localStorage.setItem(sessionKey, JSON.stringify(state.user));
  state.submissions = JSON.parse(localStorage.getItem(storageKey) || "[]");
  renderHome();
}

function show(viewId) {
  ["#loginView", "#homeView", "#detailView", "#adminAccessView", "#adminView"].forEach((id) =>
    $(id).classList.add("hidden")
  );
  $(viewId).classList.remove("hidden");
}

function getUserSubmissions() {
  if (!state.user) return [];
  return state.submissions.filter((item) => item.userId === state.user.id);
}

function fillLoginFromSession() {
  if (!state.user) return;
  $("#userName").value = state.user.name || "";
  $("#userArea").value = state.user.area || "";
  $("#userEmail").value = state.user.email || "";
}

function isMissionCompleted(missionId) {
  return getUserSubmissions().some((item) => item.missionId === missionId);
}

function updateUserHeader() {
  $("#userDisplay").textContent = state.user.name;
  $("#userAreaDisplay").textContent = state.user.area;
  $("#userInitials").textContent = state.user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderProgress() {
  const completed = missions.filter((mission) => isMissionCompleted(mission.id)).length;
  const percent = Math.round((completed / missions.length) * 100);
  const completedPrize = isMissionCompleted("solucao-performance-ia");
  const completedCertificate = isMissionCompleted("certificado-anthropic");
  $("#completedCount").textContent = completed;
  $("#totalCount").textContent = missions.length;
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
  document.querySelector(".milestone-prize").classList.toggle("reached", completedPrize);
  document.querySelector(".milestone-certificate").classList.toggle("reached", completedCertificate);
}

function buildMissionCards(items) {
  return items
    .map((mission) => {
      const completed = isMissionCompleted(mission.id);
      return `
        <article class="mission-card accent-${mission.accent}">
          <div class="mission-art" aria-hidden="true">
            <span>${mission.icon}</span>
          </div>
          <div class="mission-copy">
            <span class="status-pill ${completed ? "" : "pending"}">${completed ? "Concluida" : "Pendente"}</span>
            <h3>${mission.title}</h3>
            <p>${mission.short}</p>
          </div>
          <footer>
            <small>${mission.type}</small>
            <button type="button" data-open-mission="${mission.id}">Abrir</button>
          </footer>
        </article>
      `;
    })
    .join("");
}

function renderMissions() {
  $("#mainMissionGrid").innerHTML = buildMissionCards(missions.filter((mission) => mission.group === "main"));
  $("#optionalMissionGrid").innerHTML = buildMissionCards(missions.filter((mission) => mission.group === "optional"));
}

function renderHome() {
  updateUserHeader();
  renderProgress();
  renderMissions();
  show("#homeView");
}

function renderDetail(missionId) {
  const mission = missions.find((item) => item.id === missionId);
  state.selectedMissionId = missionId;
  $("#detailType").textContent = mission.type;
  $("#detailTitle").textContent = mission.title;
  $("#detailDescription").textContent = mission.description;
  $("#detailSteps").innerHTML = mission.steps.map((step) => `<li>${step}</li>`).join("");
  $("#resourceList").innerHTML = (mission.resources || [])
    .map((resource) => {
      const isUrl = resource.includes("http");
      const text = isUrl ? resource.replace(/^Treinamento: /, "") : resource;
      return isUrl
        ? `<a href="${text}" target="_blank" rel="noreferrer">${resource}</a>`
        : `<span>${resource}</span>`;
    })
    .join("");
  $("#submissionText").value = "";
  $("#submissionFile").value = "";
  $("#submissionText").required = !mission.readingContent;
  $("#submissionFile").required = !mission.readingContent;
  renderReadingPanel(mission);
  renderBacklog();
  show("#detailView");
}

function renderReadingPanel(mission) {
  const panel = $("#readingPanel");
  const content = $("#readingContent");
  const button = $("#markReadingBtn");
  if (!mission.readingContent) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  content.scrollTop = 0;
  content.innerHTML = mission.readingContent.map((paragraph) => `<p>${paragraph}</p>`).join("");
  button.disabled = true;
  button.textContent = "Role ate o final para liberar";
}

function renderBacklog() {
  const missionRecords = state.submissions
    .filter((item) => item.missionId === state.selectedMissionId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!missionRecords.length) {
    $("#backlogList").innerHTML = `<div class="empty-state">Nenhum envio registrado para esta missao.</div>`;
    return;
  }

  $("#backlogList").innerHTML = missionRecords
    .map(
      (item) => `
      <article class="backlog-item">
        <div>
          <strong>${item.userName} - ${item.userArea}</strong>
          <small>${new Date(item.createdAt).toLocaleString("pt-BR")}</small>
          <small>${item.fileName ? `Arquivo: ${item.fileName}` : "Sem arquivo anexado"}</small>
          <small>${item.text || "Sem comentario"}</small>
        </div>
        ${
          item.userId === state.user.id
            ? `<button class="delete-button" type="button" data-delete-submission="${item.id}">Apagar</button>`
            : ""
        }
      </article>
    `
    )
    .join("");
}

async function handleLogin(event) {
  event.preventDefault();
  const name = $("#userName").value.trim() || "Participante";
  const area = $("#userArea").value.trim() || "Nao informado";
  const email = $("#userEmail").value.trim();
  const userId = email.toLowerCase().replace(/[^a-z0-9@._-]/g, "");
  if (!userId) {
    setAuthStatus("Digite um e-mail ou identificador para acessar.");
    return;
  }

  if (db) {
    setAuthStatus("Acessando trilha...");
    const { data: existingProfile, error: profileReadError } = await db
      .from("app_profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (profileReadError) {
      setAuthStatus("Banco ainda nao configurado. Abrindo pre-visualizacao local sem salvar na nuvem.");
      loginLocally({ id: userId, name, area, email });
      return;
    }
    const profile = {
      id: userId,
      email,
      name: name !== "Participante" ? name : existingProfile?.name || name,
      area: area !== "Nao informado" ? area : existingProfile?.area || area,
      updated_at: new Date().toISOString(),
    };
    const { error } = await db.from("app_profiles").upsert(profile);
    if (error) {
      setAuthStatus("Banco ainda nao configurado. Abrindo pre-visualizacao local sem salvar na nuvem.");
      loginLocally({ id: userId, name, area, email });
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
    renderHome();
    return;
  }

  state.user = {
    id: userId,
    name,
    area,
    email,
  };
  loginLocally(state.user);
}

async function uploadEvidence(file) {
  if (!db || !file) return { filePath: "", fileUrl: "" };

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const filePath = `${state.user.id}/${state.selectedMissionId}/${Date.now()}-${safeName}`;
  const { error } = await db.storage.from(supabaseConfig.evidenceBucket).upload(filePath, file, {
    upsert: true,
  });

  if (error) throw error;

  const { data } = db.storage.from(supabaseConfig.evidenceBucket).getPublicUrl(filePath);
  return { filePath, fileUrl: data.publicUrl || "" };
}

async function handleSubmission(event) {
  event.preventDefault();
  const file = $("#submissionFile").files[0];
  const text = $("#submissionText").value.trim();
  const mission = missions.find((item) => item.id === state.selectedMissionId);
  if (!mission?.readingContent && (!text || !file)) {
    alert("Para concluir esta missao, envie um comentario e um arquivo de evidencia.");
    return;
  }

  if (db) {
    try {
      const uploaded = await uploadEvidence(file);
      const { data, error } = await db
        .from("app_submissions")
        .upsert(
          {
            user_id: state.user.id,
            mission_id: state.selectedMissionId,
            text,
            file_name: file ? file.name : "",
            file_path: uploaded.filePath,
            file_url: uploaded.fileUrl,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,mission_id" }
        )
        .select()
        .single();

      if (error) throw error;
      await loadCloudSubmissions();
      renderBacklog();
      renderProgress();
      renderMissions();
      return data;
    } catch (error) {
      alert(`Nao foi possivel enviar: ${error.message}`);
      return;
    }
  }

  const existingIndex = state.submissions.findIndex(
    (item) => item.userId === state.user.id && item.missionId === state.selectedMissionId
  );
  const record = {
    id: crypto.randomUUID(),
    missionId: state.selectedMissionId,
    userId: state.user.id,
    userName: state.user.name,
    userArea: state.user.area,
    text,
    fileName: file ? file.name : "",
    createdAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    state.submissions.splice(existingIndex, 1, record);
  } else {
    state.submissions.push(record);
  }

  persistSubmissions();
  renderBacklog();
  renderProgress();
  renderMissions();
}

async function markReadingDone() {
  if (db) {
    const { error } = await db.from("app_submissions").upsert(
      {
        user_id: state.user.id,
        mission_id: state.selectedMissionId,
        text: "Leitura concluida dentro da plataforma.",
        file_name: "",
        file_path: "",
        file_url: "",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,mission_id" }
    );

    if (error) {
      alert(`Nao foi possivel marcar leitura: ${error.message}`);
      return;
    }

    await loadCloudSubmissions();
    renderBacklog();
    renderProgress();
    renderMissions();
    return;
  }

  const existingIndex = state.submissions.findIndex(
    (item) => item.userId === state.user.id && item.missionId === state.selectedMissionId
  );
  const record = {
    id: crypto.randomUUID(),
    missionId: state.selectedMissionId,
    userId: state.user.id,
    userName: state.user.name,
    userArea: state.user.area,
    text: "Leitura concluida dentro da plataforma.",
    fileName: "",
    createdAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    state.submissions.splice(existingIndex, 1, record);
  } else {
    state.submissions.push(record);
  }

  persistSubmissions();
  renderBacklog();
  renderProgress();
  renderMissions();
}

function handleReadingScroll(event) {
  const element = event.currentTarget;
  const reachedEnd = element.scrollTop + element.clientHeight >= element.scrollHeight - 8;
  if (reachedEnd) {
    $("#markReadingBtn").disabled = false;
    $("#markReadingBtn").textContent = "Marcar leitura como feita";
  }
}

function toggleDevicePreview() {
  const shell = $("#appShell");
  const isMobile = shell.classList.toggle("demo-mobile");
  $("#deviceToggle").textContent = isMobile ? "Modo desktop" : "Modo mobile";
  $("#deviceToggle").setAttribute("aria-pressed", String(isMobile));
}

function openAdminAccess() {
  $("#adminCodeInput").value = "";
  $("#adminStatus").textContent = "";
  show("#adminAccessView");
}

async function handleAdminAccess(event) {
  event.preventDefault();
  const typedCode = $("#adminCodeInput").value.trim();
  if (typedCode !== supabaseConfig.adminCode) {
    $("#adminStatus").textContent = "Codigo invalido.";
    return;
  }
  await renderAdminReport();
}

async function renderAdminReport() {
  if (!db) {
    $("#adminStatus").textContent = "Supabase nao configurado.";
    return;
  }

  const [{ data: profiles, error: profilesError }, { data: submissions, error: submissionsError }] =
    await Promise.all([
      db.from("app_profiles").select("*").order("updated_at", { ascending: false }),
      db.from("app_submissions").select("*").order("updated_at", { ascending: false }),
    ]);

  if (profilesError || submissionsError) {
    $("#adminStatus").textContent = "Nao foi possivel carregar o relatorio. Verifique o SQL no Supabase.";
    return;
  }

  const profilesById = new Map((profiles || []).map((profile) => [profile.id, profile]));
  const finalMissionUsers = new Set(
    (submissions || []).filter((item) => item.mission_id === "solucao-performance-ia").map((item) => item.user_id)
  );

  $("#adminUsersCount").textContent = profiles?.length || 0;
  $("#adminSubmissionsCount").textContent = submissions?.length || 0;
  $("#adminCompletedFinalCount").textContent = finalMissionUsers.size;

  if (!submissions?.length) {
    $("#adminReportList").innerHTML = `<div class="empty-state">Nenhum envio registrado ainda.</div>`;
    show("#adminView");
    return;
  }

  $("#adminReportList").innerHTML = submissions
    .map((item) => {
      const profile = profilesById.get(item.user_id) || {};
      const mission = missions.find((missionItem) => missionItem.id === item.mission_id);
      return `
        <article class="admin-report-item">
          <div>
            <strong>${profile.name || item.user_id}</strong>
            <small>${profile.email || item.user_id} · ${profile.area || "Area nao informada"}</small>
            <small>${mission?.title || item.mission_id} · ${new Date(item.updated_at || item.created_at).toLocaleString("pt-BR")}</small>
            <p>${item.text || "Sem comentario"}</p>
          </div>
          ${
            item.file_url
              ? `<a href="${item.file_url}" target="_blank" rel="noreferrer">Abrir arquivo</a>`
              : `<span>Sem arquivo</span>`
          }
        </article>
      `;
    })
    .join("");
  show("#adminView");
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#adminOpenBtn").addEventListener("click", openAdminAccess);
  $("#adminAccessForm").addEventListener("submit", handleAdminAccess);
  $("#adminBackLoginBtn").addEventListener("click", () => show("#loginView"));
  $("#adminExitBtn").addEventListener("click", () => show("#loginView"));
  $("#deviceToggle").addEventListener("click", toggleDevicePreview);
  $("#readingContent").addEventListener("scroll", handleReadingScroll);
  $("#markReadingBtn").addEventListener("click", markReadingDone);
  $("#logoutBtn").addEventListener("click", () => {
    localStorage.removeItem(sessionKey);
    state.user = null;
    show("#loginView");
  });
  $("#backHomeBtn").addEventListener("click", renderHome);
  $("#submissionForm").addEventListener("submit", handleSubmission);

  document.addEventListener("click", (event) => {
    const missionButton = event.target.closest("[data-open-mission]");
    if (missionButton) {
      renderDetail(missionButton.dataset.openMission);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-submission]");
    if (deleteButton) {
      if (db) {
        db.from("app_submissions")
          .delete()
          .eq("id", deleteButton.dataset.deleteSubmission)
          .eq("user_id", state.user.id)
          .then(async ({ error }) => {
            if (error) {
              alert(`Nao foi possivel apagar: ${error.message}`);
              return;
            }
            await loadCloudSubmissions();
            renderBacklog();
            renderProgress();
            renderMissions();
          });
        return;
      }
      state.submissions = state.submissions.filter((item) => item.id !== deleteButton.dataset.deleteSubmission);
      persistSubmissions();
      renderBacklog();
      renderProgress();
      renderMissions();
    }
  });
}

async function start() {
  await loadState();
  bindEvents();
  fillLoginFromSession();

  if (state.user) {
    renderHome();
  } else {
    show("#loginView");
  }
}

start();
