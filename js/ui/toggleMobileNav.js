const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");

function onToggleClick(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

export function toggleMobileNav() {
    hamburger.addEventListener("click", onToggleClick)
}

