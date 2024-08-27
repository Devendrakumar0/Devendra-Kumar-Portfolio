document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("#navbar");

    menuIcon.onclick = function() {
        navbar.classList.toggle("active");
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-texts', {
        strings: ['Recent Computer Science Graduate'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});

