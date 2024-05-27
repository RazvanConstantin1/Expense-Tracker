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

const list = document.getElementById("transactionList");
const status = document.getElementById("status");

function renderList() {
  list.innerHTML = ``;

  transactions.forEach((transaction) => {
    const li = document.createElement("li");

    li.innerHTML = transaction.name;

    list.appendChild(li);
  });
}
renderList();
