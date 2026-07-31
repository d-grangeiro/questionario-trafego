// Configuração simples de "login"
// Troque o código abaixo por algo que só você e o cliente conhecem.
const ACCESS_CODE = "TRAFEGO2024";

// Perguntas (fácil de editar/adicionar)
// type: "single" (múltipla escolha) ou "text"
const questions = [
  {
    id: "objetivo_principal",
    title: "Qual é o principal objetivo da sua campanha de tráfego pago?",
    description:
      "Isso nos ajuda a direcionar os anúncios para o resultado que importa para você.",
    type: "single",
    options: [
      "Gerar leads qualificados para o time comercial",
      "Aumentar vendas diretas (e-commerce / checkout)",
      "Trazer mais agendamentos / orçamentos",
      "Aumentar reconhecimento da marca",
      "Outro (vou explicar em detalhes)"
    ]
  },
  {
    id: "publico_alvo",
    title: "Quem é o seu público-alvo ideal?",
    description:
      "Descreva quem você quer atingir: faixa etária, região, interesses, profissão, etc.",
    type: "text",
    placeholder:
      "Exemplo: homens e mulheres, 25-40 anos, região de Lisboa, interessados em ...",
  },
  {
    id: "oferta_principal",
    title: "Qual é a sua oferta principal?",
    description:
      "Produto/serviço, ticket médio, margens e qualquer detalhe que ajude a criar anúncios relevantes.",
    type: "text",
    placeholder:
      "Exemplo: plano mensal de consultoria em marketing por 197€, com suporte por WhatsApp...",
  },
  {
    id: "lead_quente",
    title: "O que você considera um 'lead quente'?",
    description:
      "Explique o que diferencia um contato curioso de um lead pronto para falar com vendas.",
    type: "text",
    placeholder:
      "Exemplo: quem já pediu proposta, preencheu todos os dados e tem orçamento definido...",
  },
  {
    id: "orcamento",
    title: "Qual é o orçamento mensal de tráfego pago que você pretende investir?",
    description:
      "Podemos ajustar a estratégia conforme o nível de investimento.",
    type: "single",
    options: [
      "Até 500€ por mês",
      "Entre 500€ e 1.500€ por mês",
      "Entre 1.500€ e 5.000€ por mês",
      "Acima de 5.000€ por mês",
      "Ainda não defini com clareza"
    ]
  },
  {
    id: "restricoes",
    title: "Existem restrições importantes que devemos respeitar?",
    description:
      "Por exemplo: regiões onde não pode anunciar, tipos de público, mensagens proibidas, horários, etc.",
    type: "text",
    placeholder:
      "Exemplo: não anunciar em determinadas cidades, evitar mencionar descontos, etc.",
  }
];

// Tempo médio estimado (em minutos) para exibir na interface
const AVERAGE_MINUTES = 7;

// Estado em memória
let currentStep = 0;
let answers = {};
let clientName = "";
let companyName = "";

document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const wizardSection = document.getElementById("wizard-section");

  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");

  const questionCounter = document.getElementById("question-counter");
  const totalQuestionsEl = document.getElementById("total-questions");
  const avgTimeEl = document.getElementById("avg-time");
  const progressBar = document.getElementById("progress-bar");
  const questionContainer = document.getElementById("question-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const clientInfo = document.getElementById("client-info");

  // Configuração inicial de textos meta
  totalQuestionsEl.textContent = `Total: ${questions.length} perguntas`;
  avgTimeEl.textContent = `Tempo médio: ~${AVERAGE_MINUTES} minutos`;

  // Login simples
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("clientName");
    const companyInput = document.getElementById("companyName");
    const accessCodeInput = document.getElementById("accessCode");

    const nameVal = nameInput.value.trim();
    const companyVal = companyInput.value.trim();
    const accessVal = accessCodeInput.value.trim();

    if (!nameVal || !companyVal || !accessVal) {
      loginError.textContent = "Preencha todos os campos.";
      loginError.classList.remove("hidden");
      return;
    }

    if (accessVal !== ACCESS_CODE) {
      loginError.textContent = "Código de acesso inválido. Verifique com o suporte.";
      loginError.classList.remove("hidden");
      return;
    }

    // Login ok
    clientName = nameVal;
    companyName = companyVal;
    loginError.classList.add("hidden");

    // Mostrar wizard
    loginSection.classList.add("hidden");
    wizardSection.classList.remove("hidden");

    clientInfo.textContent = `${clientName} · ${companyName}`;

    // Render primeira pergunta
    currentStep = 0;
    renderStep();
  });

  // Navegação
  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      saveCurrentAnswer();
      currentStep -= 1;
      renderStep();
    }
  });

  nextBtn.addEventListener("click", () => {
    // Último passo = finalizar
    const isLast = currentStep === questions.length - 1;
    saveCurrentAnswer();

    if (!validateCurrentStep()) {
      return;
    }

    if (isLast) {
      // Aqui você pode, por exemplo, exibir um resumo
      // ou enviar as respostas por e-mail via algum backend no futuro.
      alert("Obrigado! Suas respostas foram registradas.\n\n(Lembrete: depois vamos integrar com envio por e-mail ou armazenamento seguro.)");
      return;
    }

    currentStep += 1;
    renderStep();
  });

  function renderStep() {
    const question = questions[currentStep];

    questionCounter.textContent = `Pergunta ${currentStep + 1} de ${questions.length}`;
    updateProgress();

    // Atualiza botão "Próximo"
    nextBtn.textContent = currentStep === questions.length - 1 ? "Finalizar" : "Próximo";

    // Atualiza estado do botão "Voltar"
    prevBtn.disabled = currentStep === 0;

    // Renderiza pergunta
    questionContainer.innerHTML = "";

    const titleEl = document.createElement("h3");
    titleEl.className = "question-title";
    titleEl.textContent = question.title;

    const descEl = document.createElement("p");
    descEl.className = "question-description";
    descEl.textContent = question.description || "";

    questionContainer.appendChild(titleEl);
    questionContainer.appendChild(descEl);

    let fieldEl;

    if (question.type === "single" && question.options) {
      const optionsWrapper = document.createElement("div");
      optionsWrapper.className = "options";

      question.options.forEach((opt, index) => {
        const label = document.createElement("label");
        label.className = "option-label";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = opt;

        // Restaura resposta se já havia
        if (answers[question.id] === opt) {
          input.checked = true;
        }

        const span = document.createElement("span");
        span.textContent = opt;

        label.appendChild(input);
        label.appendChild(span);
        optionsWrapper.appendChild(label);
      });

      fieldEl = optionsWrapper;
    } else {
      const textarea = document.createElement("textarea");
      textarea.rows = 4;
      textarea.placeholder = question.placeholder || "";

      if (answers[question.id]) {
        textarea.value = answers[question.id];
      }

      fieldEl = textarea;
      fieldEl.dataset.questionId = question.id;
    }

    questionContainer.appendChild(fieldEl);
  }

  function updateProgress() {
    const percent = ((currentStep + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
  }

  function saveCurrentAnswer() {
    const question = questions[currentStep];
    const questionId = question.id;

    if (question.type === "single") {
      const selected = document.querySelector(`input[name="${questionId}"]:checked`);
      if (selected) {
        answers[questionId] = selected.value;
      }
    } else {
      const textarea = questionContainer.querySelector("textarea");
      if (textarea) {
        answers[questionId] = textarea.value.trim();
      }
    }
  }

  function validateCurrentStep() {
    const question = questions[currentStep];
    const questionId = question.id;
    const value = answers[questionId];

    if (!value || value.length === 0) {
      alert("Por favor, responda esta pergunta antes de continuar.");
      return false;
    }

    return true;
  }
});
