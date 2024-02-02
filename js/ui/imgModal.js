const modal = document.querySelector(".modal");
const modalTargetImg = document.querySelector(".modal-target-img");
const modalImg = document.querySelector(".modal-image")

function openImgModal() {
  modal.style.display = "block";
  modalImg.src= modalTargetImg.src;
  modalImg.alt = modalTargetImg.alt;
};

function closeImgModal(event) {
    // console.log(event);
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

export function toggleImageModal() {
  modalTargetImg.addEventListener("click", openImgModal);
  window.addEventListener("click", closeImgModal);
  
}
