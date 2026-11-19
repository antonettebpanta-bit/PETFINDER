
// PETFINDER WEBSITE
// Mobile navigation functionality

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const isOpen = navigation.classList.contains("open");

            menuButton.setAttribute("aria-expanded", isOpen);

        });

    }

    console.log("PETFINDER website loaded successfully!");

});
