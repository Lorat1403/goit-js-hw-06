const items = document.querySelectorAll(".item");

console.log(`Numbers of categories : ${items.length}`);

const titles = document.querySelectorAll("h2");

const list = document.querySelectorAll(".item > ul");
const sublist1 = list[0].querySelectorAll("li");
const sublist2 = list[1].querySelectorAll("li");
const sublist3 = list[2].querySelectorAll("li");

console.log(`Category : ${titles[0].innerHTML}`);
console.log(`Elements : ${sublist1.length}`);

console.log(`Category : ${titles[1].innerHTML}`);
console.log(`Elements : ${sublist2.length}`);

console.log(`Category : ${titles[2].innerHTML}`);
console.log(`Elements : ${sublist3.length}`);
