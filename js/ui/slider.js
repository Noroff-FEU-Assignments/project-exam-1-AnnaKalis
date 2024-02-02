
export function slidePosts() {
  const slidesContainer = document.querySelector(".slider-post-container");
  const slide = document.querySelector(".slide-post");
  const prevButton = document.querySelector(".arrow-prev");
  const nextButton = document.querySelector(".arrow-next");
  const slideWidth = slide.clientWidth;
  console.log(prevButton);
  nextButton.addEventListener("click", function () {
    slidesContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", function () {
    slidesContainer.scrollLeft -= slideWidth;
  });
  console.log(slide.clientWidth);
}

