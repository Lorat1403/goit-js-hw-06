function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputRef = document.querySelector("[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const arrayDiv = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const widthHeightSize = 30 + i * 10 + "px";
    const divNew = document.createElement("div");
    divNew.style.width = widthHeightSize; // ширина
    divNew.style.height = widthHeightSize; // высота
    divNew.style.backgroundColor = getRandomHexColor();
    divNew.style.marginTop = 5 + "px";
    arrayDiv.append(divNew);
  }
};

function onCreateClick(el) {
  arrayDiv.innerHTML = "";
  createBoxes(inputRef.value);
}

function onDestroyClick(el) {
  arrayDiv.innerHTML = "";
  inputRef.value = 0;
}
createBtn.addEventListener("click", onCreateClick);
destroyBtn.addEventListener("click", onDestroyClick);
