import { displayError } from "../ui/displayError.js";

export async function setUpBlogPostPage (){
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const postContainer = document.querySelector(".post");
    postContainer.innerHTML = `<div class="loader"></div>`;

    const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts/" + id;

    try {
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
    
        const getResult = await response.json();
        createPost(getResult);
    } catch (error) {
        postContainer.innerHTML = displayError("An error occured when uploading the product from the server!");
      }
       

    function createPost(details) {
        postContainer.innerHTML = "";
        postContainer.innerHTML += `<div>${details.title.rendered}</div>`;
    }



}