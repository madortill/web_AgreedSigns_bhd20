var bAbout = false;

window.onload = () => {
    document.querySelector(".about-btn").addEventListener("click", About);
    document.querySelector(".about-x").addEventListener("click", About);
}

function About(event) {
    if(!bAbout) {
        bAbout = true;
        document.querySelector(".about").classList.add("transition");
    } else {
        bAbout = false;
        document.querySelector(".about").classList.remove("transition");
    }
}