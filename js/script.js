document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.querySelector(".ingredients").style.display = "block";
        });
        item.addEventListener("mouseleave", () => {
            item.querySelector(".ingredients").style.display = "none";
        });
    });
});
