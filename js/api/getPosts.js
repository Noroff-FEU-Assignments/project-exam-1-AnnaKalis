
const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts");

postsContainer.innerHTML = `<div class="loader"></div>`;

export async function getPosts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const getResults = await response.json();
    console.log(getResults)
    // createPosts(getResults);
  } catch (error) {
    postsContainer.innerHTML = displayError("An error occured when uploading the products from the server!"
    );
  }
}


// export function createPosts(details) {
  
//     postsContainer.innerHTML = "";
//     postsContainer.innerHTML += ;
// }