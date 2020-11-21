const navButton = document.querySelector(".buttton-icon");
const displayNavMobile = document.querySelector(".display-nav-mobile");


function displayNav(){
    alert("Igot clicked");
    // displayNavMobile.classList.add("show-nav");
}
navButton.addEventListener("click", displayNav());