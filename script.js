"use strict"

import {data} from "./emoji.js";

function repeats(arr) {
  data.forEach((elem) => {
    elem.keywords = [...new Set(elem.keywords.split(" "))].join(" ");
  });
}


const grid = document.querySelector(".grid")

function createCard(cardObj) {
  const card = document.createElement("div")
  card.className = "card"

  const symbol = document.createElement("h2")
  symbol.textContent = cardObj.symbol
  symbol.className = "img"

  const title = document.createElement("p")
  title.textContent = cardObj.title
  title.className = "card_n"

  const keywords = document.createElement("p")
  keywords.textContent = cardObj.keywords
  keywords.className = "text"

  card.append(symbol)
  card.append(title)
  card.append(keywords)

  return card;
}

repeats(data)

data.forEach(elem => grid.append(createCard(elem)));

const inp = document.querySelector("input")
const form = document.forms[0]
form.addEventListener("submit", (event) => event.preventDefault()) ///предотвращает отправку
inp.addEventListener("change", inpHand)
function inpHand(event) {
let res = event.target.value
let result = data.filter((elem) => elem.keywords.includes(res.toLowerCase().trim().replace(/\s/g,'')) || elem.title.includes(res.toLowerCase().trim()))
grid.innerHTML = "";
result.forEach((elem) => grid.append(createCard(elem)));
}

