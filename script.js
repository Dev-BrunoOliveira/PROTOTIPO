document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  const nomeElemento = document.getElementById("nome");
  const texto = "Bruno Oliveira";
  let index = 0;

  function escrever() {
    if (!nomeElemento) return;
    nomeElemento.innerHTML = "";
    index = 0;
    digitar();
  }

  function digitar() {
    if (index < texto.length) {
      nomeElemento.innerHTML += texto.charAt(index);
      index++;
      setTimeout(digitar, 150);
    }
  }

  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  function aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem("theme");
    if (temaSalvo === "light") {
      body.classList.add("light-mode");
      if (toggleButton) toggleButton.checked = true;
    } else {
      body.classList.remove("light-mode");
      if (toggleButton) toggleButton.checked = false;
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener("change", () => {
      if (toggleButton.checked) {
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  escrever();
  aplicarTemaSalvo();
});
