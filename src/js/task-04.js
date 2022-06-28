const counterValue = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const valueEl = document.querySelector("#value");

const counter = document.querySelectorAll("#counter button");

counter[0].addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

counter[1].addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
