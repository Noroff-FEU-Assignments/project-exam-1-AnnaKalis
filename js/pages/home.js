import { displayError } from "../ui/displayError.js";
import { slidePosts } from "../ui/slider.js";

const featuredPostsConatiner = document.querySelector(".slider-post-container");
const loaderContainer = document.createElement("div");


export function createFeaturedPosts(details) {
  console.log(details);
  details.forEach(function (detail) {
    loaderContainer.style.display = "none";
    const container = document.createElement("li");
    
    const img = document.createElement("img");
    const link = document.createElement("a");
    const a = document.createElement("a");

    link.href = "/blogpost/index.html?id=" + detail.id;
    img.src = detail._embedded["wp:featuredmedia"][0].source_url;
    img.alt = detail._embedded["wp:featuredmedia"][0].alt_text;
    a.innerText = detail.title.rendered;
    a.href = "/blogpost/index.html?id=" + detail.id;

    img.classList.add("featured-image");
    a.classList.add("post-title");
    container.classList.add("post-container");
    container.classList.add("slide-post");
    link.append(img);
    featuredPostsConatiner.append(container);
    container.append(link);
    container.append(a);
    console.log("Container width:", container.clientWidth);
    
  });
}

export async function getFeaturedPosts() {
  loaderContainer.classList.add("loader");
  featuredPostsConatiner.append(loaderContainer);
  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts" + "?per_page=50&_embed";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    const getResults = await response.json();
    
    const firstFourPosts = getResults.slice(0,4);
  
    createFeaturedPosts(firstFourPosts);
    }
    
   catch (error) {
    featuredPostsConatiner.innerHTML = displayError("An error occured when uploading the posts from the server!");
  } finally {
    loaderContainer.style.display = "none";
  }
}

export async function homePage() {
  await getFeaturedPosts();
  slidePosts();
}
