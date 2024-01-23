// export async function getPosts()
const url = "https://thrive.annakalis.com/wp-json/wp/v2/posts";
const productsContainer = document.querySelector(".products");

productsContainer.innerHTML = `<div class="loader"></div>`;

async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const getResults = await response.json();
    createProducts(getResults);
  } catch (error) {
    productsContainer.innerHTML = displayError("An error occured when uploading the products from the server!"
    );
  }
}

getProducts();