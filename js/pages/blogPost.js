import { displayError } from "../ui/displayError.js";

const postContainer = document.querySelector(".blog-post");
const loaderContainer = document.createElement("div");
loaderContainer.classList.add("loader");
postContainer.append(loaderContainer);

function createPost(details) {
    loaderContainer.classList.remove("loader");
    const postTitle = document.createElement("h1");
    const postText = document.createElement("div");
    postContainer.append(postTitle);
    postContainer.append(postText);
    postTitle.innerText = details.title.rendered;
    postText.innerHTML = details.content.rendered;
    console.log(details);
}

export async function setUpBlogPostPage() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts/" + id + "?_embed";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    const getResult = await response.json();
    createPost(getResult);
  } catch (error) {
    postContainer.innerText = displayError("An error occured when uploading the product from the server!");
  }

  
  
}
