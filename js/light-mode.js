const dayNight = document.querySelector(".toggle-mode");

dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fas");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fas");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.add("fas");
        icon.classList.add("fa-moon");
    }
});