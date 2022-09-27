import {data} from "./emoji.js";

function repeats(arr) {
  data.forEach((elem) => {
    elem.keywords = [...new Set(elem.keywords.split(" "))].join(" ");
  });
}

const card = [
  {title: "💯", subTitle: "100", text: "Hundred, points, symbol, wow, win, perfect, parties"}
]

const grid = document.querySelector(".grid")

function createCard(cardObj) {
  const card = document.createElement("div")
  card.className = "card"
  console.log(cardObj)

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
  console.log(card)

createCard(card[0])

repeats(data)

data.forEach(elem => {
  grid.append(createCard(elem))
});
