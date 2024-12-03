import { getQuotePerson } from "./helpers";

const text = document.getElementById("text");
const person = document.getElementById("person");
const button = document.getElementsByTagName("button")[0];
const img = document.getElementsByTagName("img")[0];

function setQuote() {
  const quotePerson = getQuotePerson();
  img.src = quotePerson.imgUrl;
  text.innerText = quotePerson["text"];
  person.innerText = quotePerson["person"];
}

setQuote();

window.addEventListener("load", () => {
  button.addEventListener("click", () => setQuote());
});
