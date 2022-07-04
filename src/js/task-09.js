function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function onChangeColor() {
//   let color = getRandomHexColor();
//   document.body.setAttribute("style", `background-color: ${color}`);
//   textWidgetColor.textContent = color;
// }
