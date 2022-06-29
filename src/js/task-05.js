const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(output.textContent);

textInput.addEventListener("input", function (event) {
  output.textContent = event.currentTarget.value;
});
