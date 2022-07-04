const nameColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
console.log(nameColor);
console.log(btnChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute("style", `background-color: ${color}`);
  nameColor.textContent = color;
}
btnChangeColor.addEventListener("click", onChangeColor);
