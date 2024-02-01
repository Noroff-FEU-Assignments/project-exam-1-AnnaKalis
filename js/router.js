
import { setUpBlogPage } from "./pages/blog.js";
import { setUpContactPage } from "./pages/contact.js";
import { homePage } from "./pages/home.js";
import { setUpBlogPostPage } from "./pages/blogPost.js";


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
      setUpBlogPage();
      break;
    case "/blogpost/":
    case "/blogpost":
    case "/blogpost/index.html":
      console.log("Blog post page");
      setUpBlogPostPage();
      break;
    case "/contact/":
    case "/contact":
    case "/contact/index.html":
      console.log("Contact page");
      setUpContactPage
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
