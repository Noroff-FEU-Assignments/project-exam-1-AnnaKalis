import { homePage } from "./pages/homePage.js";
import { blogPage } from "./pages/blogPage.js";
import { blogPostPage } from "./pages/blogPostPage.js";

// Router

export function router() {
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
      console.log("Home page");
      homePage();
      break;
    case "/about/":
    case "/about":
    case "/about/index.html":
      console.log("About page");
      break;
    case "/blog/":
    case "/blog":
    case "/blog/index.html":
      console.log("Blog page");
      blogPage();
      break;
    case "/blogpost/":
    case "/blogpost":
    case "/blogpost/index.html":
      console.log("Blog post page");
      blogPostPage();
      break;
    case "/contact/":
    case "/contact":
    case "/contact/index.html":
      console.log("Contact page");
      break;
    default:
      console.log("404 - not found");
  }
}

// if (window.location.pathname === "/index.html") {
//   homePage();
// } else if (window.location.pathname === "/blog.html") {
//   blogPage();
// } else if (window.location.pathname === "/blogPost.html") {
//   blogPostPage();
// } else {
//   console.log("error");
// }
