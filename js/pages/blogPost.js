import { displayError } from "../ui/displayError.js";

const postContainer = document.querySelector(".blog-post");
const loaderContainer = document.createElement("div");

function createPost(details) {
  loaderContainer.classList.remove("loader");
  const postImage = document.createElement("img");
  const postTitle = document.createElement("h1");
  const postText = document.createElement("div");
  postContainer.append(postImage)
  postContainer.append(postTitle);
  postContainer.append(postText);
  postImage.src = details._embedded['wp:featuredmedia'][0].source_url
  postImage.alt = details._embedded['wp:featuredmedia'][0].alt_text
  postImage.classList.add("featured-blogpost-image")
  postTitle.innerText = details.title.rendered;
  postText.innerHTML = details.content.rendered;
  console.log(details);
}

export async function getPost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  loaderContainer.classList.add("loader");
  postContainer.append(loaderContainer);

  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts/" + id + "?_embed";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    return await response.json();
  } catch (error) {
    postContainer.innerText = displayError("An error occured when uploading the product from the server!");
  }
}

export async function setUpBlogPostPage() {
  const getResult = await getPost();
  createPost(getResult);
}
