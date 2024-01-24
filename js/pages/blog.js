import { displayError } from "../ui/displayError.js";

const postsContainer = document.querySelector(".posts");
const loaderContainer = document.createElement("div");

function createPosts(details) {
  details.forEach(function (detail) {
    loaderContainer.classList.remove("loader");
    const a = document.createElement("a");
    a.innerText = detail.title.rendered;
    a.href = "/blogpost/index.html?id=" + detail.id;
    postsContainer.append(a);
  });
}

export async function getPosts() {
  loaderContainer.classList.add("loader");
  postsContainer.append(loaderContainer);
  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts" + "?_embed";

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
