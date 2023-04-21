const buttonEl = document.querySelector("#button");
const button2El = document.querySelector("#button2");
const overlayEl = document.querySelector(".overlay");
const cardEl = document.querySelector(".card");
const wraperEl = document.querySelector(".wraper");
const navEl = document.querySelector(".nav");
const buttonR = document.querySelector(".buttonR");

function hideModal() {
  wraperEl.classList.remove("block");
  buttonEl.classList.remove("hidden");
}
function showModal() {
  buttonEl.classList.add("hidden");
  wraperEl.classList.add("block");
}

buttonEl.addEventListener("click", function () {
  showModal();
});

button2El.addEventListener("click", function () {
  hideModal();
});

// 'keydown'
document.addEventListener("keydown", function (event) {
  const isOpen = wraperEl.classList.contains("block");
  if (event.code === "Escape") {
    hideModal();
  }
  if (event.code === "KeyC") {
    hideModal();
  }
  if (event.code === "KeyO") {
    if (isOpen === true) {
      hideModal();
    } else {
      showModal();
    }
  }
  if (event.code === "Space") {
    if (isOpen === true) {
      hideModal();
    } else {
      showModal();
    }
  }
});
