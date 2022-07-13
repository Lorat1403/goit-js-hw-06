const inputText = document.querySelector("#validation-input");

const checkLength = Number(inputText.dataset.length);

inputText.addEventListener("blur", onFocusText);

function onFocusText(event) {
  if (event.currentTarget.value.length === checkLength) {
    inputText.classList.remove("invalid");
    return inputText.classList.add("valid");
  }
  inputText.classList.remove("valid");
  inputText.classList.add("invalid");
}
