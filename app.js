const missions = [
  {
    id: "post-treinamento-ao-vivo",
    type: "Ao vivo",
    group: "main",
    icon: "01",
    accent: "yellow",
    title: "Desafio inicial",
    short: "Envie o relatório final com os insights da atividade.",
    description:
      "Compartilhe aqui o relatório final com os insights identificados na atividade realizada durante o treinamento de IA aplicada ao trabalho.",
    steps: [
      "Faça a versão final do seu relatório com base nas informações da tabela.",
      "Use sua capacidade analítica, criatividade e a ferramenta que preferir para gerar o documento executivo.",
      "Organize o material da forma que fizer mais sentido para facilitar o consumo do conteúdo.",
    ],
    resources: ["Reveja também o conteúdo do nosso treinamento no link abaixo: Link do treinamento - inserir aqui quando o material final estiver disponível."],
    fileOnlySubmission: true,
  },
  {
    id: "infografico-rotina-chave",
    type: "Infografico",
    group: "main",
    icon: "02",
    accent: "orange",
    title: "Estruturando a rotina",
    short: "Documente uma rotina chave com apoio de IA.",
    description:
      "Seu desafio aqui é criar a documentação de alguma rotina chave do seu trabalho. O formato dessa documentação é livre, seja um fluxograma, um infográfico, POP/PAP, checklist, mapa mental, vídeo tutorial, etc. Além disso, o processo de construção desse material precisa ser feito por IA de sua escolha.",
    steps: [
      "Escolha uma rotina relevante do seu trabalho.",
      "Use uma IA de sua escolha para apoiar a construção da documentação.",
      "Lembre-se de NÃO COMPARTILHAR INFORMAÇÕES sensíveis, que identifiquem usuários, clientes ou fornecedores de nossa base de dados.",
      "Também não compartilhe informações sigilosas, como documentos ou contratos da CIA, nas ferramentas.",
    ],
    resources: [
      "Para te apoiar nesse desafio veja alguns conteúdos selecionados:",
      "Mapeamento de processos: https://www.youtube.com/watch?v=uZ57s5R4-Jc&list=PL1txHw-3UosJRE7HA3i6_jB3Pe8MP__nV",
      "Ideias de documentação de processos: https://pt.venngage.com/blog/como-fazer-fluxograma/",
    ],
    fileOnlySubmission: true,
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
  {
    id: "referencias-avancadas-ia",
    type: "Opcional 3",
    group: "optional",
    icon: "07",
    accent: "silver",
    title: "Estudos avancados",
    short: "Explore referencias para aprofundar sua jornada em IA.",
    description:
      "Acesse uma curadoria de podcasts, relatórios, perfis e canais para continuar estudando IA depois da trilha.",
    steps: [
      "Escolha pelo menos duas referencias da curadoria.",
      "Registre quais materiais voce acessou.",
      "Comente o que pretende aplicar ou investigar a partir dessas referencias.",
    ],
    resources: [
      "Podcast - IA Todo dia: https://open.spotify.com/show/2FHimuESqvjBL4x8AKur2b",
      "Podcast - Gestao do amanha: https://open.spotify.com/show/4apVjIcnTppVfmyicivpkJ",
      "Report - Future of Jobs (WEF): https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf",
      "LinkedIn - Miguel Fernandes: https://www.linkedin.com/in/inventormiguel/",
      "LinkedIn - Matheus Castelo: https://www.linkedin.com/in/matheuscastelobranco/",
      "LinkedIn - Andreas Horn: https://www.linkedin.com/in/andreashorn1/",
      "Canal YT - Gustavo Guanabara: https://www.youtube.com/watch?v=70z3vC9mgzo&list=PLHz_AreHm4dk0Hg99bUQMiH1dEn-qu0Hg",
    ],
  },
];

const storageKey = "uol-edtech-ai-missions";
const sessionKey = "uol-edtech-ai-current-user";
const themeKey = "uol-edtech-ai-theme";
const maxUploadSizeMb = 5;
const maxUploadSizeBytes = maxUploadSizeMb * 1024 * 1024;
const uploadHelperText = `PDF, imagem, DOC ou PPT ate ${maxUploadSizeMb} MB`;
const supabaseConfig = window.SUPABASE_CONFIG || {};
const hasSupabaseConfig = Boolean(supabaseConfig.url && supabaseConfig.anonKey && window.supabase);
const db = hasSupabaseConfig ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey) : null;
const state = {
  user: null,
  selectedMissionId: null,
  submissions: [],
  adminProfiles: [],
  adminSubmissions: [],
  adminViewMode: "users",
  adminSort: { key: "name", direction: "asc" },
  animateNextHomeProgress: true,
  uploadPreviewTimer: null,
};

const $ = (selector) => document.querySelector(selector);

function isAllowedCorporateEmail(email) {
  return /^[^@\s]+@uolinc\.com$/i.test(email);
}

async function loadState() {
  state.submissions = [];
  state.user = null;
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
  state.submissions = [];
  renderHome({ animateProgress: true });
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
  $("#userName").value = "";
  $("#userArea").value = "";
  $("#userEmail").value = "";
}

function isMissionCompleted(missionId) {
  return getUserSubmissions().some((item) => item.missionId === missionId);
}

function isContentOnlyMission(mission) {
  return Boolean(
    mission?.readingContent ||
      ["treinamento-no-code-startup", "referencias-avancadas-ia", "cases-ia-reais"].includes(mission?.id)
  );
}

function isFileOnlyMission(mission) {
  return Boolean(mission?.fileOnlySubmission);
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

function renderProgress({ animate = false } = {}) {
  const mainMissions = missions.filter((mission) => mission.group === "main");
  const optionalMissions = missions.filter((mission) => mission.group === "optional");
  const mainCompleted = mainMissions.filter((mission) => isMissionCompleted(mission.id)).length;
  const optionalCompleted = optionalMissions.filter((mission) => isMissionCompleted(mission.id)).length;
  const completed = mainCompleted === mainMissions.length ? mainCompleted + optionalCompleted : mainCompleted;
  const percent = Math.round((completed / missions.length) * 100);
  const completedPrize = isMissionCompleted("solucao-performance-ia");
  const completedCertificate = completed === missions.length;
  const completedCount = $("#completedCount");
  const totalCount = $("#totalCount");
  const progressPercent = $("#progressPercent");
  if (completedCount) completedCount.textContent = completed;
  if (totalCount) totalCount.textContent = missions.length;
  if (progressPercent) progressPercent.textContent = `${percent}%`;
  animateProgressFill(percent, animate);
  const prizeMarker = document.querySelector(".milestone-prize");
  const certificateMarker = document.querySelector(".milestone-certificate");
  if (prizeMarker) prizeMarker.classList.toggle("reached", completedPrize);
  if (certificateMarker) {
    certificateMarker.classList.toggle("reached", completedCertificate);
    certificateMarker.classList.toggle("celebrate", completedCertificate && animate);
  }
  if (completedCertificate && animate) launchCertificateConfetti();
}

function animateProgressFill(percent, shouldAnimate) {
  const fill = $("#progressFill");
  if (!fill) return;

  fill.classList.toggle("is-animating", shouldAnimate);
  if (!shouldAnimate) {
    fill.style.width = `${percent}%`;
    return;
  }

  fill.style.width = "0%";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.width = `${percent}%`;
    });
  });
}

function launchCertificateConfetti() {
  const marker = document.querySelector(".milestone-certificate");
  if (!marker || marker.querySelector(".confetti-burst")) return;

  const burst = document.createElement("span");
  burst.className = "confetti-burst";
  for (let index = 0; index < 10; index += 1) {
    const piece = document.createElement("span");
    piece.style.setProperty("--angle", `${index * 36 - 90}deg`);
    piece.style.setProperty("--distance", `${22 + (index % 3) * 7}px`);
    piece.style.setProperty("--delay", `${index * 22}ms`);
    burst.appendChild(piece);
  }
  marker.appendChild(burst);
  window.setTimeout(() => burst.remove(), 1200);
}

function buildMissionCards(items) {
  return items
    .map((mission) => {
      return `
        <article class="mission-card accent-${mission.accent}" data-open-mission="${mission.id}">
          <div class="mission-art" aria-hidden="true">
            <span>${mission.icon}</span>
          </div>
          <div class="mission-copy">
            <h3>${mission.title}</h3>
            <p>${mission.short}</p>
          </div>
          <footer>
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

function renderHome(options = {}) {
  const shouldAnimate = options.animateProgress ?? state.animateNextHomeProgress;
  updateUserHeader();
  renderProgress({ animate: shouldAnimate });
  renderMissions();
  show("#homeView");
  state.animateNextHomeProgress = false;
}

function renderDetail(missionId) {
  const mission = missions.find((item) => item.id === missionId);
  const missionNumber = String(missions.findIndex((item) => item.id === missionId) + 1).padStart(2, "0");
  const contentOnly = isContentOnlyMission(mission);
  state.selectedMissionId = missionId;
  $("#detailView").classList.toggle("reading-mode", contentOnly);
  $("#detailView").classList.toggle("references-mode", mission.id === "referencias-avancadas-ia");
  document.querySelector(".mission-detail").classList.toggle(
    "resources-wide",
    ["infografico-rotina-chave", "solucao-performance-ia"].includes(mission.id)
  );
  document.querySelector(".mission-detail").classList.toggle("final-challenge", mission.id === "solucao-performance-ia");
  $("#detailTitle").textContent = `${missionNumber}. ${mission.title}`;
  $("#detailDescription").innerHTML = mission.descriptionHtml || mission.description;
  $("#detailSteps").innerHTML = mission.steps.map((step) => `<li>${step}</li>`).join("");
  $("#resourceList").innerHTML = mission.id === "referencias-avancadas-ia" ? "" : (mission.resources || [])
    .map((resource) => {
      const isHeading = resource.startsWith("heading::");
      const isDisabledLink = resource.startsWith("disabled-link::");
      const isNote = resource.startsWith("note::");
      const cleanResource = resource.replace(/^(heading|disabled-link|note)::/, "");
      const url = resource.match(/https?:\/\/\S+/)?.[0] || "";
      const isUrl = Boolean(url);
      const isSupportHeading = isHeading || (mission.id === "infografico-rotina-chave" && !isUrl);
      const className = ["post-treinamento-ao-vivo", "infografico-rotina-chave", "treinamento-no-code-startup"].includes(mission.id)
        ? `resource-feature ${isSupportHeading ? "resource-heading" : "resource-link"}`
        : mission.id === "solucao-performance-ia"
          ? `resource-feature ${isSupportHeading ? "resource-heading" : isNote ? "resource-note" : "resource-link"}`
        : "";
      if (isDisabledLink) return `<span class="resource-feature resource-link resource-disabled">${cleanResource}</span>`;
      if (isNote) return `<div class="${className}">${cleanResource}</div>`;
      const displayText = className.includes("resource-link")
        ? cleanResource.replace(/:\s*https?:\/\/\S+/, "")
        : cleanResource;
      return isUrl
        ? `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${displayText}</a>`
        : `<span class="${className}">${displayText}</span>`;
  })
    .join("");
  $("#submissionText").required = false;
  $("#submissionFile").required = false;
  $("#submissionForm").classList.add("hidden");
  document.querySelector(".submission-history").classList.add("hidden");
  renderReadingPanel(mission);
  updateMissionNavigation();
  show("#detailView");
}

function setSubmissionButtonState(stateName, message = "") {
  const button = $("#submitMissionBtn");
  const text = $("#submitMissionText");
  const status = $("#submissionStatus");
  if (!button || !text || !status) return;

  button.classList.remove("is-loading", "is-sent");
  button.disabled = false;
  status.textContent = message;

  if (stateName === "loading") {
    button.classList.add("is-loading");
    button.disabled = true;
    text.textContent = "Enviando...";
    status.textContent = "Processando envio. Aguarde alguns instantes.";
    return;
  }

  if (stateName === "sent") {
    button.classList.add("is-sent");
    text.textContent = "Enviado";
    status.textContent = message || "Envio realizado com sucesso.";
    return;
  }

  text.textContent = "Enviar desafio";
}

function updateSelectedFileName() {
  const input = $("#submissionFile");
  const file = input.files[0];
  const fileName = $("#selectedFileName");
  const uploadZone = document.querySelector(".upload-zone");
  window.clearTimeout(state.uploadPreviewTimer);

  if (file && file.size > maxUploadSizeBytes) {
    input.value = "";
    uploadZone.classList.remove("is-loading");
    fileName.textContent = uploadHelperText;
    setSubmissionButtonState("idle", `O arquivo selecionado tem mais de ${maxUploadSizeMb} MB. Envie uma versao mais leve.`);
    alert(`O arquivo selecionado tem mais de ${maxUploadSizeMb} MB. Comprima o arquivo e tente novamente.`);
    return;
  }

  uploadZone.classList.toggle("is-loading", Boolean(file));
  fileName.textContent = file ? "Carregando arquivo..." : uploadHelperText;
  state.uploadPreviewTimer = window.setTimeout(() => {
    uploadZone.classList.remove("is-loading");
    fileName.textContent = file ? file.name : uploadHelperText;
  }, file ? 650 : 0);
  setSubmissionButtonState("idle");
}

function markSubmissionDraft() {
  if (isMissionCompleted(state.selectedMissionId)) setSubmissionButtonState("idle");
}

function updateMissionNavigation() {
  const currentIndex = missions.findIndex((mission) => mission.id === state.selectedMissionId);
  $("#prevMissionBtn").disabled = currentIndex <= 0;
  $("#nextMissionBtn").disabled = currentIndex >= missions.length - 1;
}

function moveMission(direction) {
  const currentIndex = missions.findIndex((mission) => mission.id === state.selectedMissionId);
  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= missions.length) return;
  renderDetail(missions[nextIndex].id);
}

function renderReadingPanel(mission) {
  const panel = $("#readingPanel");
  const content = $("#readingContent");
  const button = $("#markReadingBtn");
  if (!isContentOnlyMission(mission) || (!mission.readingContent && mission.id !== "referencias-avancadas-ia")) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  content.scrollTop = 0;
  if (mission.id === "referencias-avancadas-ia") {
    content.innerHTML = `
      <article class="reference-article">
        <header class="reference-hero">
          <span class="eyebrow">Curadoria avançada</span>
          <h2>07. Estudos avançados</h2>
          <p>Explore conteúdos complementares para continuar evoluindo em IA. Escolha materiais por formato e registre a conclusão quando finalizar sua navegação.</p>
        </header>
        <section class="reference-grid">
          ${buildReferenceCards(mission.resources || [])}
        </section>
      </article>
    `;
    setReadingButtonState(isMissionCompleted(mission.id) ? "complete" : "ready");
    return;
  }

  if (mission.id === "leitura-conteudo-ia") {
    content.innerHTML = `
      <article class="blog-article">
        <header class="blog-hero">
          <span class="eyebrow">Mundo da IA</span>
          <h2>05. Mundo da IA</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sed lectus gravida facilisis. Este espaco simula o conteudo final que sera publicado na trilha.</p>
        </header>
        <section class="blog-grid">
          <div class="blog-card illustration-yellow"></div>
          <div>
            <h3>Primeiros conceitos</h3>
            <p>A IA pode apoiar analise, criacao, automacao e tomada de decisao, desde que exista clareza de contexto e objetivo.</p>
            <p>O ponto principal e transformar a ferramenta em apoio pratico para rotinas reais, sempre validando o resultado antes de usar.</p>
          </div>
        </section>
        <div class="blog-media">
          <video class="blog-video" controls preload="metadata" src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
        </div>
        <a class="video-fallback" href="https://www.youtube.com/watch?v=JQeItPqowOg" target="_blank" rel="noreferrer">Abrir video principal em nova aba</a>
        <section class="blog-grid reverse">
          <div>
            <h3>Boas praticas</h3>
            <p>Use prompts claros, revise respostas, preserve dados sensiveis e sempre valide o resultado antes de aplicar em rotinas criticas.</p>
            <p>Ao chegar aqui, o botao de conclusao fica liberado quando voce rolar ate o fim do conteudo.</p>
          </div>
          <div class="blog-card illustration-red"></div>
        </section>
      </article>
    `;
  } else {
    content.innerHTML = mission.readingContent.map((paragraph) => `<p>${paragraph}</p>`).join("");
  }
  setReadingButtonState(isMissionCompleted(mission.id) ? "complete" : "locked");
}

function getReferenceType(resource) {
  const label = resource.split(":")[0].toLowerCase();
  if (label.includes("podcast")) return "Podcast";
  if (label.includes("linkedin")) return "LinkedIn";
  if (label.includes("canal yt")) return "YouTube";
  if (label.includes("report")) return "Report";
  return "Referencia";
}

function getReferenceDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "referencia externa";
  }
}

function getReferenceSummary(type, title) {
  if (type === "Podcast") return "Conteúdo em áudio para acompanhar tendências e aplicações práticas de IA.";
  if (type === "LinkedIn") return "Perfil de referência para acompanhar provocações, cases e discussões sobre IA.";
  if (type === "YouTube") return "Trilha em vídeo para aprofundar fundamentos técnicos e ampliar repertório.";
  if (type === "Report") return "Relatório estratégico para entender impactos de tecnologia, trabalho e futuro.";
  return `Referência complementar para aprofundar: ${title}.`;
}

function buildReferenceCards(resources) {
  return resources
    .map((resource) => {
      const url = resource.match(/https?:\/\/\S+/)?.[0] || "#";
      const title = resource.replace(/:\s*https?:\/\/\S+/, "");
      const type = getReferenceType(resource);
      const summary = getReferenceSummary(type, title);
      return `
        <a class="reference-card" href="${url}" target="_blank" rel="noreferrer">
          <div class="reference-preview reference-${type.toLowerCase()}">
            <strong>${type}</strong>
          </div>
          <strong>${title}</strong>
          <small>${summary}</small>
        </a>
      `;
    })
    .join("");
}

function setReadingButtonState(stateName) {
  const button = $("#markReadingBtn");
  if (!button) return;
  button.classList.remove("is-complete");

  if (stateName === "complete") {
    button.classList.add("is-complete");
    button.disabled = true;
    button.textContent = "Concluído";
    return;
  }

  if (stateName === "ready") {
    button.disabled = false;
    button.textContent = "Marcar como concluído";
    return;
  }

  button.disabled = true;
  button.textContent = "Role ate o final para liberar";
}

function renderBacklog() {
  if (!$("#backlogList")) return;
  const missionRecords = state.submissions
    .filter((item) => item.missionId === state.selectedMissionId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!missionRecords.length) {
    $("#backlogList").innerHTML = `<div class="empty-state">Nenhum envio registrado para este desafio.</div>`;
    return;
  }

  $("#backlogList").innerHTML = missionRecords
    .map(
      (item) => `
      <article class="backlog-item">
        <div>
          <strong>${item.userName} - ${item.userArea}</strong>
          <small>${new Date(item.createdAt).toLocaleString("pt-BR")}</small>
          <small>${
            item.fileUrl
              ? `Arquivo: <a href="${item.fileUrl}" target="_blank" rel="noreferrer">${item.fileName || "Abrir arquivo"}</a>`
              : item.fileName
              ? `Arquivo: ${item.fileName}`
              : "Sem arquivo anexado"
          }</small>
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
  event?.preventDefault?.();
  const name = $("#userName").value.trim();
  const area = $("#userArea").value.trim();
  const email = $("#userEmail").value.trim().toLowerCase();

  if (!name || !area || !email) {
    setAuthStatus("Preencha nome, e-mail corporativo e area para acessar.");
    return;
  }

  if (!isAllowedCorporateEmail(email)) {
    setAuthStatus("Use seu e-mail corporativo com final @uolinc.com.");
    return;
  }

  const userId = email.replace(/[^a-z0-9@._-]/g, "");
  setAuthStatus("");
  loginLocally({ id: userId, name, area, email });
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
  const requiresText = !mission?.readingContent && !isFileOnlyMission(mission);
  if (!mission?.readingContent && ((!text && requiresText) || !file)) {
    alert(
      requiresText
        ? "Para concluir este desafio, envie um comentario e um arquivo de evidencia."
        : "Para concluir este desafio, envie o arquivo de evidencia."
    );
    return;
  }

  if (file && file.size > maxUploadSizeBytes) {
    setSubmissionButtonState("idle", `O arquivo selecionado tem mais de ${maxUploadSizeMb} MB. Envie uma versao mais leve.`);
    alert(`O arquivo selecionado tem mais de ${maxUploadSizeMb} MB. Comprima o arquivo e tente novamente.`);
    return;
  }

  setSubmissionButtonState("loading");
  await new Promise((resolve) => setTimeout(resolve, 350));

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
      setSubmissionButtonState("sent");
      return data;
    } catch (error) {
      setSubmissionButtonState("idle", `Nao foi possivel enviar: ${error.message}`);
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
  setSubmissionButtonState("sent");
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
    setReadingButtonState("complete");
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
  setReadingButtonState("complete");
}

function handleReadingScroll(event) {
  const element = event.currentTarget;
  if (missions.find((mission) => mission.id === state.selectedMissionId)?.id === "referencias-avancadas-ia") return;
  const reachedEnd = element.scrollTop + element.clientHeight >= element.scrollHeight - 8;
  if (isMissionCompleted(state.selectedMissionId)) {
    setReadingButtonState("complete");
    return;
  }
  if (reachedEnd) {
    setReadingButtonState("ready");
  }
}

function toggleDevicePreview() {
  const shell = $("#appShell");
  const isMobile = shell.classList.toggle("demo-mobile");
  $("#deviceToggle").textContent = isMobile ? "Modo desktop" : "Modo mobile";
  $("#deviceToggle").setAttribute("aria-pressed", String(isMobile));
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("light", isLight);
  document.documentElement.classList.toggle("dark", !isLight);
  $("#themeToggle").textContent = isLight ? "Tema escuro" : "Tema claro";
  $("#themeToggle").setAttribute("aria-pressed", String(isLight));
  localStorage.setItem(themeKey, theme);
}

function toggleTheme() {
  const current = localStorage.getItem(themeKey) || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
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
  state.adminProfiles = profiles || [];
  state.adminSubmissions = submissions || [];

  renderAdminTable();
  show("#adminView");
}

function getAdminRows() {
  const profilesById = new Map(state.adminProfiles.map((profile) => [profile.id, profile]));
  if (state.adminViewMode === "users") {
    return state.adminProfiles.map((profile) => {
      const userSubmissions = state.adminSubmissions.filter((item) => item.user_id === profile.id);
      return {
        type: "user",
        name: profile.name || profile.id,
        email: profile.email || profile.id,
        area: profile.area || "Area nao informada",
        submissions: userSubmissions.length,
        createdAt: profile.created_at,
        updatedAt: profile.updated_at || profile.created_at,
      };
    });
  }

  if (state.adminViewMode === "students") {
    return state.adminProfiles.map((profile) => {
      const userSubmissions = state.adminSubmissions.filter((item) => item.user_id === profile.id);
      const completedIds = new Set(userSubmissions.map((item) => item.mission_id));
      const lastSubmission = userSubmissions
        .slice()
        .sort((a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at))[0];
      return {
        type: "student",
        name: profile.name || profile.id,
        email: profile.email || profile.id,
        area: profile.area || "Area nao informada",
        completed: completedIds.size,
        requiredCompleted: missions.filter((mission) => mission.group === "main" && completedIds.has(mission.id)).length,
        finalDone: completedIds.has("solucao-performance-ia") ? "Sim" : "Nao",
        certificateDone: completedIds.has("certificado-anthropic") ? "Sim" : "Nao",
        updatedAt: lastSubmission?.updated_at || profile.updated_at || profile.created_at,
      };
    });
  }

  return state.adminSubmissions.map((item) => {
    const profile = profilesById.get(item.user_id) || {};
    const mission = missions.find((missionItem) => missionItem.id === item.mission_id);
    const missionIndex = missions.findIndex((missionItem) => missionItem.id === item.mission_id);
    const missionNumber = missionIndex >= 0 ? String(missionIndex + 1).padStart(2, "0") : "-";
    return {
      type: "submission",
      name: profile.name || item.user_id,
      email: profile.email || item.user_id,
      area: profile.area || "Area nao informada",
      missionNumber,
      mission: mission?.title || item.mission_id,
      missionType: mission?.type || "",
      comment: item.text || "",
      fileUrl: item.file_url || "",
      fileName: item.file_name || "",
      updatedAt: item.updated_at || item.created_at,
    };
  });
}

function sortAdminRows(rows) {
  const { key, direction } = state.adminSort;
  return rows.slice().sort((a, b) => {
    const valueA = a[key] || "";
    const valueB = b[key] || "";
    const normalizedA = key === "updatedAt" ? new Date(valueA).getTime() : String(valueA).toLowerCase();
    const normalizedB = key === "updatedAt" ? new Date(valueB).getTime() : String(valueB).toLowerCase();
    if (normalizedA > normalizedB) return direction === "asc" ? 1 : -1;
    if (normalizedA < normalizedB) return direction === "asc" ? -1 : 1;
    return 0;
  });
}

function sortableHeader(label, key) {
  const active = state.adminSort.key === key;
  const arrow = active ? (state.adminSort.direction === "asc" ? "↑" : "↓") : "";
  return `<button type="button" data-admin-sort="${key}">${label} ${arrow}</button>`;
}

function renderAdminTable() {
  const rows = sortAdminRows(getAdminRows());
  $("#adminUsersTab").classList.toggle("active", state.adminViewMode === "users");
  $("#adminStudentsTab").classList.toggle("active", state.adminViewMode === "students");
  $("#adminSubmissionsTab").classList.toggle("active", state.adminViewMode === "submissions");

  if (!rows.length) {
    $("#adminReportList").innerHTML = `<div class="empty-state">Nenhum registro encontrado.</div>`;
    return;
  }

  if (state.adminViewMode === "users") {
    $("#adminReportList").innerHTML = `
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>${sortableHeader("Participante", "name")}</th>
              <th>${sortableHeader("E-mail", "email")}</th>
              <th>${sortableHeader("Area", "area")}</th>
              <th>${sortableHeader("Envios", "submissions")}</th>
              <th>${sortableHeader("Cadastro", "createdAt")}</th>
              <th>${sortableHeader("Ultima atividade", "updatedAt")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                <tr>
                  <td><strong>${row.name}</strong></td>
                  <td>${row.email}</td>
                  <td>${row.area}</td>
                  <td>${row.submissions}</td>
                  <td>${row.createdAt ? new Date(row.createdAt).toLocaleString("pt-BR") : "-"}</td>
                  <td>${row.updatedAt ? new Date(row.updatedAt).toLocaleString("pt-BR") : "-"}</td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  if (state.adminViewMode === "students") {
    $("#adminReportList").innerHTML = `
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>${sortableHeader("Participante", "name")}</th>
              <th>${sortableHeader("Area", "area")}</th>
              <th>${sortableHeader("Concluidos", "completed")}</th>
              <th>${sortableHeader("Obrigatorios", "requiredCompleted")}</th>
              <th>${sortableHeader("Final", "finalDone")}</th>
              <th>${sortableHeader("Certificado", "certificateDone")}</th>
              <th>${sortableHeader("Ultima atividade", "updatedAt")}</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                <tr>
                  <td><strong>${row.name}</strong><small>${row.email}</small></td>
                  <td>${row.area}</td>
                  <td>${row.completed}/${missions.length}</td>
                  <td>${row.requiredCompleted}/4</td>
                  <td>${row.finalDone}</td>
                  <td>${row.certificateDone}</td>
                  <td>${row.updatedAt ? new Date(row.updatedAt).toLocaleString("pt-BR") : "-"}</td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  $("#adminReportList").innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>${sortableHeader("Data/hora", "updatedAt")}</th>
            <th>${sortableHeader("Participante", "name")}</th>
            <th>${sortableHeader("Area", "area")}</th>
            <th>${sortableHeader("Ativ.", "missionNumber")}</th>
            <th>${sortableHeader("Desafio", "mission")}</th>
            <th>Comentario</th>
            <th>Arquivo</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
              <tr>
                <td>${row.updatedAt ? new Date(row.updatedAt).toLocaleString("pt-BR") : "-"}</td>
                <td><strong>${row.name}</strong><small>${row.email}</small></td>
                <td>${row.area}</td>
                <td><span class="admin-mission-number">${row.missionNumber}</span></td>
                <td>${row.mission}</td>
                <td>${row.comment}</td>
                <td>${
                  row.fileUrl
                    ? `<a href="${row.fileUrl}" target="_blank" rel="noreferrer">${row.fileName || "Abrir"}</a>`
                    : "-"
                }</td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function setAdminSort(key) {
  if (state.adminSort.key === key) {
    state.adminSort.direction = state.adminSort.direction === "asc" ? "desc" : "asc";
  } else {
    state.adminSort = { key, direction: "asc" };
  }
  renderAdminTable();
}

function exportAdminXlsx() {
  const rows = sortAdminRows(getAdminRows());
  const data = rows.map((row) => {
    if (state.adminViewMode === "users") {
      return {
        Participante: row.name,
        Email: row.email,
        Area: row.area,
        Envios: row.submissions,
        Cadastro: row.createdAt,
        "Ultima atividade": row.updatedAt,
      };
    }
    if (state.adminViewMode === "students") {
      return {
        Participante: row.name,
        Email: row.email,
        Area: row.area,
        "Desafios concluidos": row.completed,
        "Obrigatorios concluidos": row.requiredCompleted,
        Final: row.finalDone,
        Certificado: row.certificateDone,
        "Ultima atividade": row.updatedAt,
      };
    }
    return {
      "Data/hora": row.updatedAt,
      Participante: row.name,
      Email: row.email,
      Area: row.area,
      "Nº atividade": row.missionNumber,
      Desafio: row.mission,
      Comentario: row.comment,
      Arquivo: row.fileUrl,
    };
  });

  if (!window.XLSX) {
    alert("Biblioteca de exportacao XLSX nao carregou. Verifique a conexao e tente novamente.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  worksheet["!autofilter"] = { ref: XLSX.utils.encode_range(range) };
  worksheet["!cols"] = Object.keys(data[0] || {}).map((key) => ({ wch: Math.max(14, key.length + 6) }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Relatorio");
  XLSX.writeFile(workbook, `relatorio-missoes-ia-${state.adminViewMode}.xlsx`);
}

function bindEvents() {
  $("#loginForm").addEventListener("submit", handleLogin);
  $("#authSubmitBtn").addEventListener("click", handleLogin);
  $("#adminOpenBtn").addEventListener("click", openAdminAccess);
  $("#adminAccessForm").addEventListener("submit", handleAdminAccess);
  $("#adminBackLoginBtn").addEventListener("click", () => show("#loginView"));
  $("#adminExitBtn").addEventListener("click", () => show("#loginView"));
  $("#prevMissionBtn").addEventListener("click", () => moveMission(-1));
  $("#nextMissionBtn").addEventListener("click", () => moveMission(1));
  $("#adminUsersTab").addEventListener("click", () => {
    state.adminViewMode = "users";
    state.adminSort = { key: "name", direction: "asc" };
    renderAdminTable();
  });
  $("#adminStudentsTab").addEventListener("click", () => {
    state.adminViewMode = "students";
    state.adminSort = { key: "name", direction: "asc" };
    renderAdminTable();
  });
  $("#adminSubmissionsTab").addEventListener("click", () => {
    state.adminViewMode = "submissions";
    state.adminSort = { key: "updatedAt", direction: "desc" };
    renderAdminTable();
  });
  $("#adminExportBtn").addEventListener("click", exportAdminXlsx);
  const deviceToggle = $("#deviceToggle");
  if (deviceToggle) deviceToggle.addEventListener("click", toggleDevicePreview);
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#readingContent").addEventListener("scroll", handleReadingScroll);
  $("#markReadingBtn").addEventListener("click", markReadingDone);
  $("#logoutBtn").addEventListener("click", () => {
    localStorage.removeItem(sessionKey);
    state.user = null;
    state.submissions = [];
    fillLoginFromSession();
    show("#loginView");
  });
  $("#backHomeBtn").addEventListener("click", () => renderHome({ animateProgress: false }));
  $("#submissionForm").addEventListener("submit", handleSubmission);
  $("#submissionFile").addEventListener("change", updateSelectedFileName);
  $("#submissionText").addEventListener("input", markSubmissionDraft);

  document.addEventListener("click", (event) => {
    const missionButton = event.target.closest("[data-open-mission]");
    if (missionButton) {
      renderDetail(missionButton.dataset.openMission);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-submission]");
    const adminSortButton = event.target.closest("[data-admin-sort]");
    if (adminSortButton) {
      setAdminSort(adminSortButton.dataset.adminSort);
      return;
    }

    if (deleteButton) {
      const confirmed = window.confirm("Tem certeza de que deseja excluir o envio?");
      if (!confirmed) return;

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
            setSubmissionButtonState("idle");
            if (missions.find((mission) => mission.id === state.selectedMissionId)?.readingContent) {
              setReadingButtonState("locked");
            }
          });
        return;
      }
      state.submissions = state.submissions.filter((item) => item.id !== deleteButton.dataset.deleteSubmission);
      persistSubmissions();
      renderBacklog();
      renderProgress();
      renderMissions();
      setSubmissionButtonState("idle");
      if (missions.find((mission) => mission.id === state.selectedMissionId)?.readingContent) {
        setReadingButtonState("locked");
      }
    }
  });
}

async function start() {
  applyTheme(localStorage.getItem(themeKey) || "dark");
  await loadState();
  localStorage.removeItem(sessionKey);
  state.user = null;
  bindEvents();
  fillLoginFromSession();
  show("#loginView");
}

start();
