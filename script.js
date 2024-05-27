"use strict";

const transactions = [
  {
    id: 1,
    name: "salary",
    amount: 5000,
    date: new Date(),
    type: "income",
  },
  {
    id: 2,
    name: "haircut",
    amount: 25,
    date: new Date(),
    type: "expense",
  },
  {
    id: 3,
    name: "concert ticket",
    amount: 250,
    date: new Date(),
    type: "expense",
  },
];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  signDisplay: "always",
});

const list = document.getElementById("transactionList");
const status = document.getElementById("status");

function renderList() {
  list.innerHTML = ``;

  if (transactions.length === 0) {
    status.textContent = "No Transactions";
    return;
  }

  transactions.forEach(({ id, name, date, amount, type }) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div class ="name">
    <h4>${name}</h4>
    <p>${new Date(date).toLocaleDateString()}</p>
    </div>

    
     
    <div class = "amount ${type}" >
    <span>${formatter.format(amount)}</span>
    </div>
    
    <div class ="action">
    </div>
    `;

    list.appendChild(li);
  });
}
renderList();
