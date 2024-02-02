import { displayError } from "../ui/displayError.js";

const postsContainer = document.querySelector(".posts");
const loaderContainer = document.createElement("div");
const loadMoreButton = document.createElement("button");

let posts = [];
let postsLoaded = 0;
const perPage = 10;

function loadMore() {
  createPosts(postsLoaded, perPage);
  postsLoaded += perPage;
}

function createPosts(index, count) {
  for (let i = index; i < index + count; i++) {
    if (i >= posts.length) {
      // console.log("length working");
      loadMoreButton.style.display = "none";
      break;
    }

    const detail = posts[i];
    
    const container = document.createElement("div");
    const img = document.createElement("img");
    const link = document.createElement("a");
    const a = document.createElement("a");

    console.log("Detail:", detail);


    link.href = "/blogpost/index.html?id=" + detail.id;
    img.src = detail._embedded["wp:featuredmedia"][0].source_url;
    img.alt = detail._embedded["wp:featuredmedia"][0].alt_text;
    a.innerText = detail.title.rendered;
    a.href = "/blogpost/index.html?id=" + detail.id;

    img.classList.add("featured-image");
    a.classList.add("post-title");
    container.classList.add("post-container");

    link.append(img);
    postsContainer.append(container);
    container.append(link);
    container.append(a);

    loadMoreButton.innerText = "Load more";
    loadMoreButton.classList.add("cta");
    loadMoreButton.classList.add("load-more-btn");
    postsContainer.append(loadMoreButton);
    loadMoreButton.addEventListener("click", loadMore);
  }
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
    posts = await response.json();
    loadMore();
  } catch (error) {
    postsContainer.innerHTML = displayError("An error occured when uploading the posts from the server!");
  } finally {
    loaderContainer.style.display = "none";
  }
}


export async function setUpBlogPage() {
  await getPosts();
}
