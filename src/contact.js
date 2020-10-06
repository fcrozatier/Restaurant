function renderContact() {
  const card = document.getElementById("content");
  let div = document.createElement("div");
  let title = document.createElement("h1");
  let p1 = document.createElement("p");
  title.textContent = "At your service";
  p1.textContent = "You can contact us to make a reservation.";
  div.append(title);
  div.append(p1);
  card.prepend(div);
}

export { renderContact };
