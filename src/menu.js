function renderMenu() {
  const card = document.getElementById("content");
  let div = document.createElement("div");
  let title = document.createElement("h1");
  let p1 = document.createElement("p");
  title.textContent = "The best products in your plate";
  p1.textContent = "The surprise menu is made with organic products only";
  div.append(title);
  div.append(p1);
  card.prepend(div);
}

export { renderMenu };
