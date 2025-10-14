const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

yesBtn.addEventListener("click", () => {
  questionContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
