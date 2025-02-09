document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("data-image");
    image.style.opacity = 0;
    setTimeout(() => { image.style.opacity = 1; }, 1000);
});
