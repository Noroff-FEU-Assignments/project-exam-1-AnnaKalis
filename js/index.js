import { homePage } from "./pages/homePage.js";
import { blogPage } from "./pages/blogPage.js";
import { blogPostPage } from "./pages/blogPostPage.js";

// Router
if (window.location.pathname === "/index.html") {
  homePage();
} else if (window.location.pathname === "/blog.html") {
  blogPage();}
 else if (window.location.pathname === "/blogPost.html") {
  blogPostPage();
} 
else {
  console.log("error");
}
