document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const fechar = document.querySelector(".modal-fechar");

  document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("ativo");
      modalImg.src = img.src;
    });
  });

  fechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("ativo");
    }
  });
});