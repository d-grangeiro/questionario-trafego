// Login temporário para MVP
const LOGIN_EMAIL = "cliente@example.com";
const LOGIN_PASSWORD = "SenhaForte123";

const questions = [
  {
    id: "identificacao",
    title: "Vamos começar: qual o seu nome e o nome da sua empresa?",
    description: "Essas informações serão usadas internamente para identificarmos o seu projeto.",
    type: "text",
    placeholder: "Exemplo: João Silva, Agência XYZ",
    helpText: "Escreva no formato: Nome do cliente, Nome da empresa"
  },
  {
    id: "servico_atual",
    title: "Qual destas opções descreve melhor o seu serviço hoje?",
    description: "Selecione a opção que mais se aproxima da sua operação atual.",
    type: "single",
    options: [
      "Faço todo o processo com o cliente, do início ao fim",
      "Faço a análise e encaminho para os bancos/parceiros",
      "Tenho equipa comercial a tratar dos contactos",
      "Trabalho de outra forma"
    ]
  },
  {
    id: "tipo_credito",
    title: "Em que tipo de crédito a sua empresa atua principalmente?",
    description: "Ajuda-nos a segmentar corretamente a campanha.",
    type: "single",
    options: [
      "Crédito habitação para primeira casa",
      "Crédito habitação para investimento",
      "Ambos",
      "Outros serviços ligados a crédito"
    ]
  },
  {
    id: "zona_atuacao",
    title: "Em que zona atua?",
    description: "Escolha a área geográfica mais adequada.",
    type: "single",
    options: [
      "Todo o Portugal",
      "Apenas algumas regiões",
      "Apenas atendimento local",
      "Outro"
    ]
  },
  {
    id: "diferencial",
    title: "Qual é o seu principal diferencial?",
    description: "Ex.: rapidez, acompanhamento completo, melhores condições, atendimento mais próximo.",
    type: "single",
    options: [
      "Rapidez no processo",
      "Acompanhamento do início ao fim",
      "Melhores condições junto dos bancos",
      "Atendimento mais próximo e personalizado",
      "Outro"
    ]
  },
  {
    id: "objetivo_anuncios",
    title: "O que você mais quer conseguir com os anúncios neste momento?",
    description: "Selecione o objetivo principal da campanha.",
    type: "single",
    options: [
      "Receber mais contactos de potenciais clientes",
      "Receber contactos mais qualificados",
      "Agendar reuniões ou chamadas",
      "Fechar mais contratos"
    ]
  },
  {
    id: "maior_problema",
    title: "Hoje, o seu maior problema está em qual ponto?",
    description: "Escolha a opção que melhor representa a situação atual.",
    type: "single",
    options: [
      "Poucas pessoas entram em contacto",
      "Entram muitos contactos sem perfil",
      "Tenho dificuldade em converter os contactos em clientes",
      "Ainda não sei bem onde está o problema"
    ]
  },
  {
    id: "prioridade_volume_qualidade",
    title: "Qual destas opções é mais importante para você?",
    description: "Queremos perceber o equilíbrio entre volume e qualidade.",
    type: "single",
    options: [
      "Receber mais contactos",
      "Receber menos contactos, mas com mais qualidade",
      "Ter um equilíbrio entre quantidade e qualidade"
    ]
  },
  {
    id: "faixa_etaria",
    title: "Qual é a faixa etária ideal do cliente que pretende atrair?",
    description: "Ajuda a afinar a segmentação do público.",
    type: "single",
    options: [
      "20 a 30 anos",
      "25 a 40 anos",
      "30 a 45 anos",
      "Outra faixa etária"
    ]
  },
  {
    id: "tipo_cliente",
    title: "Que tipo de cliente é mais interessante para o seu negócio?",
    description: "Pode escolher a opção mais próxima do seu perfil ideal.",
    type: "single",
    options: [
      "Pessoas a comprar a primeira casa",
      "Casais jovens",
      "Pessoas com estabilidade profissional",
      "Investidores",
      "Uma combinação destes perfis"
    ]
  },
  {
    id: "situacao_profissional",
    title: "Qual é a situação profissional mais desejada?",
    description: "Selecione o tipo de cliente que prefere atrair.",
    type: "single",
    options: [
      "Empregado com contrato efetivo",
      "Trabalhador independente / recibos verdes",
      "Empresário",
      "Funcionário público",
      "Indiferente"
    ]
  },
  {
    id: "rendimento_mensal",
    title: "Qual é o rendimento mensal mais compatível com o perfil de cliente que procura?",
    description: "Valor aproximado, só para ajudar a filtrar melhor o público.",
    type: "single",
    options: [
      "Até 1.000€",
      "1.000€ a 2.000€",
      "2.000€ a 3.500€",
      "Mais de 3.500€",
      "Não sei"
    ]
  },
  {
    id: "entrada_imovel",
    title: "Normalmente, o cliente ideal já tem algum valor de entrada para o imóvel?",
    description: "Ex.: poupança inicial para avançar com a compra.",
    type: "single",
    options: [
      "Sim, na maioria dos casos",
      "Às vezes sim, às vezes não",
      "Normalmente não",
      "Não sei"
    ]
  },
  {
    id: "contato_nao_atrair",
    title: "Que tipo de contacto você NÃO quer atrair?",
    description: "Ajuda a filtrar leads sem intenção real.",
    type: "single",
    options: [
      "Pessoas interessadas em crédito pessoal",
      "Pessoas interessadas em crédito consolidado",
      "Pessoas apenas a pedir informações sem intenção real",
      "Pessoas sem capacidade financeira para avançar",
      "Todos os anteriores"
    ]
  },
  {
    id: "perfis_evitar",
    title: "Existem perfis que quer evitar logo no início?",
    description: "Escolha a opção mais próxima do que pretende filtrar.",
    type: "single",
    options: [
      "Pessoas com dívidas em atraso",
      "Pessoas com histórico de incumprimento",
      "Pessoas sem rendimento comprovável",
      "Pessoas muito indecisas / só a pesquisar",
      "Prefiro analisar caso a caso"
    ]
  },
  {
    id: "faixa_etaria_evitar",
    title: "Existe alguma faixa etária que faz menos sentido para o seu negócio?",
    description: "Se não quiser filtrar por idade, também pode indicar isso.",
    type: "single",
    options: [
      "Menos de 25 anos",
      "Mais de 55 anos",
      "Ambas",
      "Não quero filtrar por idade"
    ]
  },
  {
    id: "oferta_primeiro_contacto",
    title: "O que costuma oferecer no primeiro contacto?",
    description: "Ex.: diagnóstico, simulação ou chamada inicial.",
    type: "single",
    options: [
      "Simulação gratuita",
      "Análise gratuita",
      "Reunião de diagnóstico",
      "Atendimento direto no WhatsApp ou telefone",
      "Outro"
    ]
  },
  {
    id: "acompanhamento",
    title: "Até onde vai o seu acompanhamento?",
    description: "Queremos entender o nível de suporte prestado ao cliente.",
    type: "single",
    options: [
      "Apenas primeira análise",
      "Até apresentar opções ao cliente",
      "Acompanho até ao fim do processo",
      "Depende do caso"
    ]
  },
  {
    id: "mensagem_empresa",
    title: "Qual destas mensagens representa melhor a sua empresa?",
    description: "Escolha a frase que mais combina com o posicionamento.",
    type: "single",
    options: [
      "Ajudamos a encontrar a melhor solução de crédito habitação",
      "Tratamos do processo com os bancos por si",
      "Facilitamos o acesso ao crédito com mais segurança",
      "Acompanhamos o cliente do início ao fim",
      "Ainda não tenho uma mensagem definida"
    ]
  },
  {
    id: "preferencia_contacto",
    title: "Como prefere receber os contactos dos anúncios?",
    description: "Selecione o canal principal de receção dos leads.",
    type: "single",
    options: [
      "WhatsApp",
      "Formulário",
      "Telefone",
      "Agendamento de chamada",
      "Tanto faz"
    ]
  },
  {
    id: "quem_responde",
    title: "Quem responde aos novos contactos?",
    description: "Ajuda a definir a operação comercial.",
    type: "single",
    options: [
      "Eu mesmo",
      "Um membro da equipa",
      "Mais do que uma pessoa"
    ]
  },
  {
    id: "tempo_resposta",
    title: "Em quanto tempo, em média, responde a um novo contacto?",
    description: "Tempo de resposta impacta a taxa de conversão.",
    type: "single",
    options: [
      "Em poucos minutos",
      "Até 1 hora",
      "No mesmo dia",
      "Só quando tenho disponibilidade"
    ]
  },
  {
    id: "pagina_atual",
    title: "Já tem alguma página, site ou landing page para receber os contactos?",
    description: "Informe a situação atual do seu funil.",
    type: "single",
    options: [
      "Sim",
      "Não",
      "Tenho, mas precisa de melhorias",
      "Não sei"
    ]
  },
  {
    id: "ja_investiu",
    title: "Já investiu em anúncios antes?",
    description: "Nos ajuda a entender sua experiência anterior.",
    type: "single",
    options: [
      "Sim",
      "Não",
      "Já tentei, mas sem estratégia"
    ]
  },
  {
    id: "avaliacao_experiencia",
    title: "Se já fez anúncios, como avalia a experiência?",
    description: "Se nunca fez, pode marcar a opção correspondente.",
    type: "single",
    options: [
      "Trouxe bons clientes",
      "Trouxe muitos contactos, mas poucos bons",
      "Não trouxe resultado",
      "Ainda não consigo avaliar bem",
      "Nunca fiz anúncios"
    ]
  },
  {
    id: "origem_clientes",
    title: "Hoje, de onde vêm os seus melhores clientes?",
    description: "Escolha a origem principal dos clientes com melhor qualidade.",
    type: "single",
    options: [
      "Indicação",
      "Redes sociais",
      "Site / Google",
      "Parcerias",
      "Outro"
    ]
  },
  {
    id: "investimento_mensal",
    title: "Quanto pensa investir por mês para atrair novos clientes?",
    description: "Pode ser uma estimativa. Se não souber, escolha a última opção.",
    type: "single",
    options: [
      "Até 300€",
      "300€ a 800€",
      "800€ a 1.500€",
      "Mais de 1.500€",
      "Ainda não sei"
    ]
  },
  {
    id: "percepcao_marca",
    title: "Como quer que a sua marca seja percebida pelos clientes?",
    description: "Selecione o posicionamento desejado.",
    type: "single",
    options: [
      "Profissional e confiável",
      "Próxima e humana",
      "Rápida e eficiente",
      "Premium e especializada",
      "Uma mistura destas características"
    ]
  },
  {
    id: "estilo_comunicacao",
    title: "Que tipo de comunicação combina mais com o seu negócio?",
    description: "Escolha o estilo que mais representa a sua marca.",
    type: "single",
    options: [
      "Direta e objetiva",
      "Educativa e explicativa",
      "Mais humana e acolhedora",
      "Mais técnica e profissional"
    ]
  },
  {
    id: "provas_confianca",
    title: "Tem provas de confiança que possam ser usadas na campanha?",
    description: "Ex.: depoimentos, avaliações, casos de sucesso, resultados, tempo de mercado.",
    type: "single",
    options: [
      "Sim",
      "Tenho algumas",
      "Não tenho ainda"
    ]
  },
  {
    id: "prioridade_campanha",
    title: "O que mais importa para você numa campanha bem feita?",
    description: "Escolha a prioridade principal.",
    type: "single",
    options: [
      "Gerar mais contactos",
      "Atrair pessoas com perfil certo",
      "Aproveitar melhor o investimento",
      "Melhorar a taxa de conversão em clientes",
      "Tudo isso"
    ]
  },
  {
    id: "cliente_ideal_resumo",
    title: "Se tivesse de resumir o cliente ideal numa frase, qual seria?",
    description: "Ex.: casal jovem com rendimento estável, a procurar crédito habitação para primeira casa e com intenção real de avançar.",
    type: "text",
    placeholder: "Resposta curta."
  },
  {
    id: "info_extra",
    title: "Existe mais alguma informação importante para criar campanhas melhores para o seu negócio?",
    description: "Escreva qualquer detalhe adicional que considere relevante.",
    type: "text",
    placeholder: "Resposta longa."
  }
];

const AVERAGE_MINUTES = 8;
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

  totalQuestionsEl.textContent = `Total: ${questions.length} perguntas`;
  avgTimeEl.textContent = `Tempo médio: ~${AVERAGE_MINUTES} minutos`;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = document.getElementById("email").value.trim();
    const passwordVal = document.getElementById("password").value.trim();

    if (!emailVal || !passwordVal) {
      loginError.textContent = "Preencha e-mail e senha.";
      loginError.classList.remove("hidden");
      return;
    }

    if (emailVal !== LOGIN_EMAIL || passwordVal !== LOGIN_PASSWORD) {
      loginError.textContent = "E-mail ou senha inválidos. Verifique com o suporte.";
      loginError.classList.remove("hidden");
      return;
    }

    loginError.classList.add("hidden");
    loginSection.classList.add("hidden");
    wizardSection.classList.remove("hidden");
    clientInfo.textContent = emailVal;
    currentStep = 0;
    renderStep();
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      saveCurrentAnswer();
      currentStep -= 1;
      renderStep();
    }
  });

  nextBtn.addEventListener("click", () => {
    saveCurrentAnswer();
    if (!validateCurrentStep()) return;
    if (currentStep === questions.length - 1) {
      alert("Obrigado! Suas respostas foram registradas.");
      return;
    }
    currentStep += 1;
    renderStep();
  });

  function renderStep() {
    const question = questions[currentStep];
    questionCounter.textContent = `Pergunta ${currentStep + 1} de ${questions.length}`;
    nextBtn.textContent = currentStep === questions.length - 1 ? "Finalizar" : "Próximo";
    prevBtn.disabled = currentStep === 0;
    updateProgress();
    questionContainer.innerHTML = "";

    const titleEl = document.createElement("h3");
    titleEl.className = "question-title";
    titleEl.textContent = question.title;

    const descEl = document.createElement("p");
    descEl.className = "question-description";
    descEl.textContent = question.description || "";

    questionContainer.appendChild(titleEl);
    questionContainer.appendChild(descEl);

    if (question.helpText) {
      const helpEl = document.createElement("p");
      helpEl.className = "question-help";
      helpEl.textContent = question.helpText;
      questionContainer.appendChild(helpEl);
    }

    let fieldEl;
    if (question.type === "single") {
      const optionsWrapper = document.createElement("div");
      optionsWrapper.className = "options";
      question.options.forEach((opt, idx) => {
        const label = document.createElement("label");
        label.className = "option-label";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = opt;
        input.id = `${question.id}_${idx}`;
        if (answers[question.id] === opt) input.checked = true;
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
      textarea.value = answers[question.id] || "";
      fieldEl = textarea;
    }

    questionContainer.appendChild(fieldEl);
  }

  function updateProgress() {
    progressBar.style.width = `${((currentStep + 1) / questions.length) * 100}%`;
  }

  function saveCurrentAnswer() {
    const question = questions[currentStep];
    if (question.type === "single") {
      const selected = document.querySelector(`input[name="${question.id}"]:checked`);
      if (selected) answers[question.id] = selected.value;
    } else {
      const textarea = questionContainer.querySelector("textarea");
      if (textarea) answers[question.id] = textarea.value.trim();
    }
    if (question.id === "identificacao") updateClientInfoFromAnswers();
  }

  function validateCurrentStep() {
    const question = questions[currentStep];
    const value = answers[question.id];
    if (!value || !String(value).trim()) {
      alert("Por favor, responda esta pergunta antes de continuar.");
      return false;
    }
    return true;
  }

  function updateClientInfoFromAnswers() {
    const identificacao = answers["identificacao"];
    if (!identificacao) return;
    const parts = identificacao.split(",");
    if (parts.length >= 2) {
      clientName = parts[0].trim();
      companyName = parts.slice(1).join(",").trim();
    } else {
      clientName = identificacao.trim();
      companyName = "";
    }
    clientInfo.textContent = clientName && companyName ? `${clientName} · ${companyName}` : (clientName || companyName);
  }
});
