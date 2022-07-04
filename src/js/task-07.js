// textEl.style.fontSize = `${inputEl.value}px`;
// event.currentTarget.value + "px";

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", changeFontSize);

textEl.style.fontSize = `${inputEl.value}px`;

function changeFontSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
