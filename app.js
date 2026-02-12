const formatter = new Intl.NumberFormat("zh-TW");

const questions = [
  {
    id: "status",
    label: "你的目前身分",
    help: "選擇最接近的狀態。",
    type: "select",
    options: ["MBA2 學生", "全職工作者", "兼職/實習", "其他"],
  },
  {
    id: "grad",
    label: "預計畢業 / 轉職時間",
    help: "用年份或月份描述即可。",
    type: "text",
    placeholder: "例如 2026-05",
  },
  {
    id: "city",
    label: "目前居住城市",
    help: "例如 Ann Arbor。",
    type: "text",
    placeholder: "Ann Arbor",
  },
  {
    id: "housing",
    label: "居住型態",
    help: "會影響你的固定支出。",
    type: "select",
    options: ["宿舍", "合租", "單人", "與家人/伴侶"],
  },
  {
    id: "dependents",
    label: "需要一起負擔生活費的人數",
    help: "如果沒有就填 0。",
    type: "number",
    placeholder: "0",
  },
  {
    id: "income_fixed",
    label: "每月固定收入（稅後）",
    help: "助教、兼職或家裡固定支援都算。",
    type: "number",
    placeholder: "例如 30000",
  },
  {
    id: "income_variable",
    label: "每月不固定收入平均",
    help: "獎學金、接案、獎金等。",
    type: "number",
    placeholder: "例如 5000",
  },
  {
    id: "rent",
    label: "房租或宿舍費",
    help: "每月固定要支付的住宿費。",
    type: "number",
    placeholder: "例如 15000",
  },
  {
    id: "utilities",
    label: "水電網路 / 手機",
    help: "含水電瓦斯、網路、手機費。",
    type: "number",
    placeholder: "例如 2000",
  },
  {
    id: "food",
    label: "基本餐食",
    help: "每天吃飯、日常食品。",
    type: "number",
    placeholder: "例如 8000",
  },
  {
    id: "transport",
    label: "交通費",
    help: "油錢、Uber、公車、停車費。",
    type: "number",
    placeholder: "例如 2000",
  },
  {
    id: "insurance",
    label: "保險 / 醫療",
    help: "健康保險、醫療、藥品。",
    type: "number",
    placeholder: "例如 1500",
  },
  {
    id: "tuition",
    label: "學費或學貸月繳",
    help: "如果沒有就填 0。",
    type: "number",
    placeholder: "例如 10000",
  },
  {
    id: "entertainment",
    label: "娛樂 / 聚餐",
    help: "外食聚會、休閒娛樂。",
    type: "number",
    placeholder: "例如 3000",
  },
  {
    id: "subscriptions",
    label: "訂閱服務",
    help: "Netflix、Spotify、雲端等。",
    type: "number",
    placeholder: "例如 600",
  },
  {
    id: "shopping",
    label: "購物 / 其他非必要支出",
    help: "服飾、美妝、其他可縮支出。",
    type: "number",
    placeholder: "例如 2000",
  },
  {
    id: "travel",
    label: "旅行 / 長途移動",
    help: "每月平均抓多少？沒有就填 0。",
    type: "number",
    placeholder: "例如 0",
  },
  {
    id: "cash",
    label: "現金 / 存款餘額",
    help: "你現在可動用的存款。",
    type: "number",
    placeholder: "例如 20000",
  },
  {
    id: "emergency_months",
    label: "緊急預備金想存幾個月生活費",
    help: "通常建議 6 個月。",
    type: "number",
    placeholder: "例如 6",
  },
  {
    id: "debt_credit",
    label: "信用卡總餘額",
    help: "目前總共欠多少。",
    type: "number",
    placeholder: "例如 50000",
  },
  {
    id: "debt_credit_payment",
    label: "信用卡每月最低還款",
    help: "若沒有信用卡就填 0。",
    type: "number",
    placeholder: "例如 2000",
  },
  {
    id: "debt_student",
    label: "學貸總額",
    help: "目前學貸總欠款。",
    type: "number",
    placeholder: "例如 300000",
  },
  {
    id: "debt_student_payment",
    label: "學貸每月還款",
    help: "每月最低還款金額。",
    type: "number",
    placeholder: "例如 6000",
  },
  {
    id: "debt_other",
    label: "其他負債總額",
    help: "車貸、私人借款等。",
    type: "number",
    placeholder: "例如 0",
  },
  {
    id: "debt_other_payment",
    label: "其他負債每月還款",
    help: "每月最低還款金額。",
    type: "number",
    placeholder: "例如 0",
  },
  {
    id: "goal_priority",
    label: "你最想先解決的目標",
    help: "系統會依你優先目標排序建議。",
    type: "select",
    options: ["避免每月赤字", "儲蓄到一筆現金", "降低負債", "建立投資習慣"],
  },
  {
    id: "goal_months",
    label: "希望幾個月內達成",
    help: "填大概的時間即可。",
    type: "number",
    placeholder: "例如 12",
  },
  {
    id: "goal_savings",
    label: "每月希望至少存下",
    help: "作為安全存款或投資起點。",
    type: "number",
    placeholder: "例如 3000",
  },
  {
    id: "risk",
    label: "投資風險偏好",
    help: "現金流轉正後會用到。",
    type: "select",
    options: ["保守", "平衡", "成長"],
  },
];

const elements = {
  questionTitle: document.getElementById("question-title"),
  questionHelp: document.getElementById("question-help"),
  questionInput: document.getElementById("question-input"),
  stepCount: document.getElementById("step-count"),
  progressFill: document.getElementById("progress-fill"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  saveBtn: document.getElementById("save-btn"),
  reportActions: document.getElementById("report-actions"),
  summaryIncome: document.getElementById("summary-income"),
  summaryEssential: document.getElementById("summary-essential"),
  summaryDiscretionary: document.getElementById("summary-discretionary"),
  summaryDebtPayments: document.getElementById("summary-debt-payments"),
  summaryCashflow: document.getElementById("summary-cashflow"),
  summaryRequiredIncome: document.getElementById("summary-required-income"),
  summaryIncomeGap: document.getElementById("summary-income-gap"),
  summaryCutAmount: document.getElementById("summary-cut-amount"),
  reportEmergencyProgress: document.getElementById("report-emergency-progress"),
  reportEmergencyText: document.getElementById("report-emergency-text"),
};

const stored = JSON.parse(localStorage.getItem("finplanAnswers") || "{}");
let answers = { ...stored };
let currentIndex = 0;

const toNumber = (value) => Number(value || 0);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const renderQuestion = () => {
  const question = questions[currentIndex];
  if (!question) return;

  if (elements.stepCount) {
    elements.stepCount.textContent = `${currentIndex + 1} / ${questions.length}`;
  }
  const progress = ((currentIndex + 1) / questions.length) * 100;
  if (elements.progressFill) {
    elements.progressFill.style.width = `${progress}%`;
  }

  if (elements.questionTitle) elements.questionTitle.textContent = question.label;
  if (elements.questionHelp) elements.questionHelp.textContent = question.help || "";
  if (elements.questionInput) elements.questionInput.innerHTML = "";

  let input;
  if (question.type === "select") {
    input = document.createElement("select");
    question.options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      input.appendChild(opt);
    });
  } else {
    input = document.createElement("input");
    input.type = question.type || "text";
    input.placeholder = question.placeholder || "";
  }

  input.id = "current-input";
  if (answers[question.id] !== undefined && answers[question.id] !== "") {
    input.value = answers[question.id];
  }

  if (elements.questionInput) elements.questionInput.appendChild(input);
  if (elements.prevBtn) elements.prevBtn.disabled = currentIndex === 0;
  if (elements.nextBtn) {
    elements.nextBtn.textContent = currentIndex === questions.length - 1 ? "產生報告" : "下一步";
  }
};

const saveAnswer = () => {
  const question = questions[currentIndex];
  const input = document.getElementById("current-input");
  if (!question || !input) return;

  answers[question.id] = input.value;
  localStorage.setItem("finplanAnswers", JSON.stringify(answers));
};

const generateReport = () => {
  const income = toNumber(answers.income_fixed) + toNumber(answers.income_variable);
  const essential =
    toNumber(answers.rent) +
    toNumber(answers.utilities) +
    toNumber(answers.food) +
    toNumber(answers.transport) +
    toNumber(answers.insurance) +
    toNumber(answers.tuition);
  const discretionary =
    toNumber(answers.entertainment) +
    toNumber(answers.subscriptions) +
    toNumber(answers.shopping) +
    toNumber(answers.travel);
  const debtPayments =
    toNumber(answers.debt_credit_payment) +
    toNumber(answers.debt_student_payment) +
    toNumber(answers.debt_other_payment);
  const totalExpenses = essential + discretionary + debtPayments;
  const cashflow = income - totalExpenses;
  const desiredSavings = toNumber(answers.goal_savings);

  const requiredIncome = totalExpenses + desiredSavings;
  const incomeGap = Math.max(0, requiredIncome - income);
  const cutAmount = Math.max(0, totalExpenses - (income - desiredSavings));

  const emergencyMonths = Math.max(1, toNumber(answers.emergency_months) || 6);
  const emergencyTarget = essential * emergencyMonths;
  const cash = toNumber(answers.cash);
  const emergencyProgress = emergencyTarget === 0 ? 0 : Math.min(100, (cash / emergencyTarget) * 100);

  if (elements.summaryIncome) elements.summaryIncome.textContent = `NT$ ${formatter.format(income)}`;
  if (elements.summaryEssential) elements.summaryEssential.textContent = `NT$ ${formatter.format(essential)}`;
  if (elements.summaryDiscretionary)
    elements.summaryDiscretionary.textContent = `NT$ ${formatter.format(discretionary)}`;
  if (elements.summaryDebtPayments)
    elements.summaryDebtPayments.textContent = `NT$ ${formatter.format(debtPayments)}`;
  if (elements.summaryCashflow)
    elements.summaryCashflow.textContent = `NT$ ${formatter.format(cashflow)}`;
  if (elements.summaryRequiredIncome)
    elements.summaryRequiredIncome.textContent = `NT$ ${formatter.format(requiredIncome)}`;
  if (elements.summaryIncomeGap)
    elements.summaryIncomeGap.textContent = `NT$ ${formatter.format(incomeGap)}`;
  if (elements.summaryCutAmount)
    elements.summaryCutAmount.textContent = `NT$ ${formatter.format(cutAmount)}`;

  if (elements.reportEmergencyProgress) {
    elements.reportEmergencyProgress.style.width = `${emergencyProgress}%`;
  }
  if (elements.reportEmergencyText) {
    elements.reportEmergencyText.textContent = `NT$ ${formatter.format(cash)} / NT$ ${formatter.format(
      emergencyTarget
    )}`;
  }

  const actions = [];
  if (cashflow < 0) {
    actions.push(`你每月赤字約 NT$ ${formatter.format(Math.abs(cashflow))}，需要先止血。`);
    actions.push(`增加收入目標：至少 NT$ ${formatter.format(incomeGap)}。`);
    actions.push(`可削減支出目標：NT$ ${formatter.format(cutAmount)}（先砍娛樂/訂閱/購物）。`);
  } else {
    actions.push("現金流已轉正，保持每月正現金流。");
    if (desiredSavings > 0) {
      actions.push(`每月先存 NT$ ${formatter.format(desiredSavings)} 作為安全金。`);
    }
  }

  if (debtPayments > 0) {
    actions.push("優先清高利率債務（雪崩法），降低利息成本。);
  }

  if ((answers.city || "").toLowerCase().includes("ann arbor")) {
    actions.push("Ann Arbor 生活費偏高，建議每月檢查房租與餐飲支出是否可再優化。");
  }

  if (elements.reportActions) {
    elements.reportActions.innerHTML = actions.map((item) => `<li>• ${item}</li>`).join("");
  }
};

const goNext = () => {
  saveAnswer();
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    generateReport();
    scrollToSection("report");
  }
};

const goPrev = () => {
  saveAnswer();
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
};

const init = () => {
  renderQuestion();
  generateReport();

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => scrollToSection(btn.dataset.scroll));
  });

  if (elements.nextBtn) elements.nextBtn.addEventListener("click", goNext);
  if (elements.prevBtn) elements.prevBtn.addEventListener("click", goPrev);
  if (elements.saveBtn) {
    elements.saveBtn.addEventListener("click", () => {
      saveAnswer();
      alert("已儲存，你可以稍後回來繼續。);
    });
  }
};

init();