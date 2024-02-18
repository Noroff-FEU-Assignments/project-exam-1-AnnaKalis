import { displayError } from "../ui/displayError.js";
import { toggleImageModal } from "../ui/imgModal.js";

const postContainer = document.querySelector(".blog-post");
const loaderContainer = document.createElement("div");

function createPost(details) {
  const titleContainer = document.createElement("div");
  const postImage = document.createElement("img");
  const postTitle = document.createElement("h1");
  const postText = document.createElement("div");
  const postData = document.createElement("div");
  const postAuthor = document.createElement("div");
  const postDate = document.createElement("div");
  const postCategory = document.createElement("div");
  const backToBlog = document.createElement("a");
  let title = document.querySelector("title");
  titleContainer.append(postImage);
  titleContainer.append(postTitle);
  postContainer.append(titleContainer);
  postContainer.append(postText);
  postContainer.append(postData);
  postData.append(postAuthor);
  postData.append(postDate);
  postData.append(postCategory);
  postContainer.append(backToBlog);
  postImage.src = details._embedded["wp:featuredmedia"][0].source_url;
  postImage.alt = details._embedded["wp:featuredmedia"][0].alt_text;
  postTitle.innerText = details.title.rendered;
  postText.innerHTML = details.content.rendered;
  postAuthor.innerText = "Author: " + details._embedded.author[0].name;
  postDate.innerText = "Published: " + details.date.substring(0,10);
  postCategory.innerText = "Category: " + details._embedded["wp:term"][0][0].name;
  backToBlog.innerText = "Back to blog";
  title.innerText = "Blog | " + details.title.rendered;
  backToBlog.href = "/blog/index.html";
  postImage.classList.add("featured-blogpost-image");
  titleContainer.classList.add("blog-post-intro");
  postText.classList.add("blog-post-text");
  postData.classList.add("post-data");
  backToBlog.classList.add("cta");
  backToBlog.classList.add("cta-about-blog");
  

  const blogPostImages = postText.querySelectorAll("img");
  blogPostImages.forEach((img) => {
    img.classList.add("modal-target-img");
  });
  toggleImageModal();
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
    postContainer.innerText = displayError("An error occured when uploading the post from the server!");
  } finally {
    loaderContainer.style.display = "none";
  }
}

export async function setUpBlogPostPage() {
  const getResult = await getPost();
  createPost(getResult);
}
