const numberOfcategories = document.getElementsByClassName("item").length;
console.log("Number of categories: " + numberOfcategories);
const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  const category = items[i].children[0].innerHTML;
  const elementsNumber = items[i].children[1].children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementsNumber}`);
}
