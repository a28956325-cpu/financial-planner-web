const formatter = new Intl.NumberFormat("zh-TW");

const elements = {
  income: document.getElementById("income"),
  expense: document.getElementById("expense"),
  debt: document.getElementById("debt"),
  cash: document.getElementById("cash"),
  target: document.getElementById("target"),
  goalMonths: document.getElementById("goal-months"),
  generate: document.getElementById("generate-plan"),
  cashflow: document.getElementById("cashflow"),
  statusLabel: document.getElementById("status-label"),
  requiredIncome: document.getElementById("required-income"),
  incomeGap: document.getElementById("income-gap"),
  cutAmount: document.getElementById("cut-amount"),
  investAmount: document.getElementById("invest-amount"),
  actionList: document.getElementById("action-list"),
  emergencyProgress: document.getElementById("emergency-progress"),
  emergencyText: document.getElementById("emergency-text"),
};

const toNumber = (value) => Number(value || 0);

const updatePlan = () => {
  const income = toNumber(elements.income.value);
  const expense = toNumber(elements.expense.value);
  const debt = toNumber(elements.debt.value);
  const cash = toNumber(elements.cash.value);
  const target = toNumber(elements.target.value);

  const cashflow = income - expense;
  const requiredIncome = expense + target;
  const incomeGap = Math.max(0, requiredIncome - income);
  const cutAmount = Math.max(0, expense - (income - target));
  const investAmount = Math.max(0, cashflow - target);

  elements.cashflow.textContent = `NT$ ${formatter.format(cashflow)}`;
  elements.requiredIncome.textContent = `NT$ ${formatter.format(requiredIncome)}`;
  elements.incomeGap.textContent = `還差 NT$ ${formatter.format(incomeGap)}`;
  elements.cutAmount.textContent = `NT$ ${formatter.format(cutAmount)}`;
  elements.investAmount.textContent = `NT$ ${formatter.format(investAmount)}`;

  if (cashflow >= 0) {
    elements.statusLabel.textContent = "轉正中";
    elements.statusLabel.className = "status-pill safe";
  } else {
    elements.statusLabel.textContent = "赤字中";
    elements.statusLabel.className = "status-pill warning";
  }

  const emergencyTarget = expense * 6;
  const progress = emergencyTarget === 0 ? 0 : Math.min(100, (cash / emergencyTarget) * 100);
  elements.emergencyProgress.style.width = `${progress}%`;
  elements.emergencyText.textContent = `NT$ ${formatter.format(cash)} / NT$ ${formatter.format(emergencyTarget)}`;

  const actions = [];
  if (cashflow < 0) {
    actions.push(`增加月收入至少 NT$ ${formatter.format(incomeGap)}（兼職/加班/談加薪）。`);
    actions.push(`削減非必要支出 NT$ ${formatter.format(cutAmount)}（娛樂/訂閱/外食）。`);
    actions.push("暫停投資，把現金集中在生活與還債。");
  } else {
    actions.push("現金流已轉正，開始建立 6 個月緊急預備金。");
    actions.push(`每月保留 NT$ ${formatter.format(target)} 作為安全存款。`);
    actions.push(`可投資金額約 NT$ ${formatter.format(investAmount)}。`);
  }

  if (debt > 0) {
    actions.push("採用高利率優先還款（雪崩法）。");
  }

  elements.actionList.innerHTML = actions.map((item) => `<li>• ${item}</li>`).join("");
};

elements.generate?.addEventListener("click", updatePlan);