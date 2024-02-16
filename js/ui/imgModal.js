const body = document.querySelector("body");
const modal = document.createElement("div");
const modalImg = document.createElement("img");


function openImgModal(event) {
  modal.style.display = "block";
  const clickedImg = event.target;
  modalImg.src = clickedImg.src;
  modalImg.alt = clickedImg.alt;
}

function closeImgModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

export function toggleImageModal() {
  const modalTargetImg = document.querySelectorAll(".modal-target-img");
  body.append(modal);
  modal.classList.add("modal");
  modalImg.classList.add("modal-image");
  modal.appendChild(modalImg);
  modalTargetImg.forEach((img) => {
    img.addEventListener("click", openImgModal);
  });
  window.addEventListener("click", closeImgModal);
}

