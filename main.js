document.addEventListener("DOMContentLoaded", () =>
    document.querySelectorAll(".open-window").forEach(btn =>
    btn.addEventListener("click", () =>
        btn.parentElement.parentElement.querySelector(".window").showModal()
    )));

function hamburger(element) {
    element.classList.toggle("change");
    element.parentElement.querySelector("ul").classList.toggle("display");
    element.parentElement.parentElement.parentElement.querySelector("h1").classList.toggle("moved");
}