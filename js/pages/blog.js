import { displayError } from "../ui/displayError.js";

const postsContainer = document.querySelector(".posts");
const loaderContainer = document.createElement("div");

function createPosts(details) {
  details.forEach(function (detail) {
    // loaderContainer.classList.remove("loader");
    loaderContainer.style.display = "none";
    const container = document.createElement("div");
    const img = document.createElement("img");
    const link = document.createElement("a");
    const a = document.createElement("a");
    link.href = "/blogpost/index.html?id=" + detail.id;
    img.src = detail._embedded["wp:featuredmedia"][0].source_url;
    img.alt = detail._embedded["wp:featuredmedia"][0].alt_text;
    a.innerText = detail.title.rendered;
    a.href = "/blogpost/index.html?id=" + detail.id;
    img.classList.add("featured-image");
    a.classList.add("post-title")
    container.classList.add("post-container");
    link.append(img);
    postsContainer.append(container);
    container.append(link);
    container.append(a);
  });
}

export async function getPosts() {
  loaderContainer.classList.add("loader");
  postsContainer.append(loaderContainer);
  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts" + "?per_page=50&_embed";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    postsContainer.innerHTML = displayError("An error occured when uploading the posts from the server!");
  }
}

export async function setUpBlogPage() {
  const getResults = await getPosts();
  createPosts(getResults);
}
