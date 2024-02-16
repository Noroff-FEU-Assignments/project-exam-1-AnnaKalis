
import { setUpBlogPage } from "./pages/blog.js";
import { setUpContactPage } from "./pages/contact.js";
import { homePage } from "./pages/home.js";
import { setUpBlogPostPage } from "./pages/blogPost.js";


export function router() {
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
      homePage();
      break;
    case "/about/":
    case "/about":
    case "/about/index.html":
      break;
    case "/blog/":
    case "/blog":
    case "/blog/index.html":
      setUpBlogPage();
      break;
    case "/blogpost/":
    case "/blogpost":
    case "/blogpost/index.html":
      setUpBlogPostPage();
      break;
    case "/contact/":
    case "/contact":
    case "/contact/index.html":
      setUpContactPage();
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
