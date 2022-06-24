const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const itemEl1 = document.createElement("li");
itemEl1.classList.add("item");
itemEl1.textContent = ingredients[0];

const itemEl2 = document.createElement("li");
itemEl2.classList.add("item");
itemEl2.textContent = ingredients[1];

const itemEl3 = document.createElement("li");
itemEl3.classList.add("item");
itemEl3.textContent = ingredients[2];

const itemEl4 = document.createElement("li");
itemEl4.classList.add("item");
itemEl4.textContent = ingredients[3];

const itemEl5 = document.createElement("li");
itemEl5.classList.add("item");
itemEl5.textContent = ingredients[4];

const itemEl6 = document.createElement("li");
itemEl6.classList.add("item");
itemEl6.textContent = ingredients[5];

ingredientsEl.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);
console.log(ingredientsEl);
