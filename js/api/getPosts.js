import { displayError } from "../ui/displayError.js";


export async function getPosts() {
  const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts";
  const postsContainer = document.querySelector(".posts");

  postsContainer.innerHTML = `<div class="loader"></div>`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const getResults = await response.json();
    console.log(getResults)
    postsContainer.innerHTML = "";
    getResults.forEach(function(detail) {
      postsContainer.innerHTML += `<a href="blogPost.html?id=${detail.id}"><div>${detail.title.rendered}</div></a>`;
    });

  } catch (error) {
    postsContainer.innerHTML = displayError("An error occured when uploading the posts from the server!"
    );
  }
}

