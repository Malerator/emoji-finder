"use strict"

// import {data} from "./emoji.js";


const urlEmoji = "https://emoji.ymatuhin.workers.dev/"
const data = await getData(urlEmoji)
const grid = document.querySelector(".grid")
const inp = document.querySelector("input")
const form = document.forms[0]


async function getData(urlEmoji) {
let response = await fetch(urlEmoji);
let urlData = await response.json();
return urlData
}

function repeats(arr) {
  data.forEach((elem) => {
    elem.keywords = [...new Set(elem.keywords.split(" "))].join(" ");
  });
}

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

form.addEventListener("submit", (event) => event.preventDefault()) ///предотвращает отправку формы
inp.addEventListener("change", inpHand)

function inpHand(event) {
let res = event.target.value.toLowerCase().trim();
res = res.split(" ");
let search = res.map((elem) => data.filter((el) => el.keywords.includes(elem) || el.title.includes(elem)));

grid.innerHTML = '';

[...new Set(search.flat(2))].forEach((elem) => grid.append(createCard(elem)));
}

function checkPosition(grid) {
  // Нам потребуется знать высоту документа и высоту экрана:
  const height = document.grid.offsetHeight
  const screenHeight = window.innerHeight

  // Они могут отличаться: если на странице много контента,
  // высота документа будет больше высоты экрана (отсюда и скролл).

  // Записываем, сколько пикселей пользователь уже проскроллил:
  const scrolled = window.scrollY

  // Обозначим порог, по приближении к которому
  // будем вызывать какое-то действие.
  // В нашем случае — четверть экрана до конца страницы:
  const threshold = height - screenHeight / 4

  // Отслеживаем, где находится низ экрана относительно страницы:
  const position = scrolled + screenHeight

  if (position >= threshold) {
    // Если мы пересекли полосу-порог, вызываем нужное действие.
data.forEach(elem => grid.append(createCard(elem)));
;(() => {
  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', checkPosition)
})()

  }
}

