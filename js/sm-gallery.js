const images = document.querySelectorAll(".sm-gallery img");
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <img src="${images[currentIndex].src}" alt="${images[currentIndex].alt}" />
        <div class="modal-controls">
          <button class="prev-btn">&lt;</button>
          <button class="next-btn">&gt;</button>
        </div>
      </div>
    `;
  modal.style.display = "block";

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal
    .querySelector(".prev-btn")
    .addEventListener("click", () => navigate(-1));
  modal.querySelector(".next-btn").addEventListener("click", () => navigate(1));

  document.addEventListener("keydown", handleKeyDown);
}

function closeModal() {
  modal.style.display = "none";
  document.removeEventListener("keydown", handleKeyDown);
}

function showImage(index) {
  const img = modal.querySelector("img");
  img.src = images[index].src;
  img.alt = images[index].alt;
  currentIndex = index;
}

function navigate(delta) {
  const newIndex = currentIndex + delta;
  if (newIndex >= 0 && newIndex < images.length) {
    showImage(newIndex);
  }
}

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      navigate(-1);
      break;
    case "ArrowRight":
      navigate(1);
      break;
    case "Escape":
      closeModal();
      break;
    default:
      break;
  }
}

images.forEach((image, index) => {
  image.addEventListener("click", () => openModal(index));
});
