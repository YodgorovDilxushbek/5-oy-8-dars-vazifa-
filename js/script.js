const form = document.querySelector("#form");
const cardContainer = document.querySelector("#card");

function localSto() {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  cardContainer.innerHTML = ""; 
  savedCards.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${data}</h2>
      <div class="image">
        <img src="./image/pen-solid.svg" width="15px" alt="">
        <img src="./image/trash-solid.svg" width="15px" alt="">
      </div>`;
    cardContainer.appendChild(card);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const search = document.querySelector("#search").value;
  if (search) {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];

    savedCards.push(search);
    
    localStorage.setItem("cards", JSON.stringify(savedCards));

    localSto();

    form.reset();
  }
});

document.addEventListener("DOMContentLoaded", localSto);

 




