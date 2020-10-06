function renderHome() {
  const card = document.getElementById("content");
  let div = document.createElement("div");
  let title = document.createElement("h1");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  title.textContent = "The best of modern food";
  p1.textContent =
    "Treat yourself to something you have never experienced before.";
  p2.textContent = "Our signature meals are works of art.";
  p3.textContent = "You will leave with a lasting impression.";
  div.append(title);
  div.append(p1);
  div.append(p2);
  div.append(p3);
  card.prepend(div);
}

export { renderHome };
