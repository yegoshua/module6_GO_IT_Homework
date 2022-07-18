const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");
console.log(list);

for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = `${ingredient}`;
  listItem.className = "item";
  list.append(listItem);
}
