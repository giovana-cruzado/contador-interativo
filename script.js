// script.js
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let count = 0;

// Função para atualizar o contador
function updateCounter() {
  counter.textContent = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

// Eventos dos botões
decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});
