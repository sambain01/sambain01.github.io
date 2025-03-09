var pop_up_open = false;

function openPopup(id) {
    let popup = document.getElementById(id);
    popup.style.display = "block";
    document.getElementById("content").classList.add("popup-active"); // Add blur effect

    // Ensure it starts at the top
    popup.querySelector('.popup-content').scrollTop = 0;
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("content").classList.remove("popup-active"); // Remove blur effect
    pop_up_open = false;
}

// Close pop-up when clicking outside the content
addEventListener("click", function (event) {
    document.querySelectorAll(".popup").forEach(popup => {
        let content = popup.querySelector(".popup-content");

        //If the click is outside the content, close the pop-up
        if (popup.style.display == "block" && !content.contains(event.target)) {
            if (pop_up_open) {
                closePopup(popup.id);    
            } else {
                pop_up_open = true;
            }
        }
    });
});

// Handle xray container interactions
document.querySelectorAll(".xray-container").forEach(container => {
    const internalImage = container.querySelector(".internal-image");

    // Mouse move handling for desktop
    container.addEventListener("mousemove", (e) => {
        if (window.matchMedia("(hover: hover)").matches) {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            internalImage.style.clipPath = `circle(20% at ${x}% ${y}%)`;
        }
    });

    // Touch handling for mobile
    container.addEventListener("click", (e) => {
        if (window.matchMedia("(hover: none)").matches) {
            container.classList.toggle("show-internal");
        }
    });

    container.addEventListener("mouseleave", (e) => {
        if (window.matchMedia("(hover: hover)").matches) {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
    
            internalImage.style.clipPath = `circle(0% at ${x}% ${y}%)`;
        }
    });
});

var typed = new Typed("#typing", {
    strings: ["Mechatronics Engineer", "Designer", "Drone Pilot", "Traveller", "Runner", "Skier"],
    typeSpeed: 75,
    backSpeed: 40,
    backDelay: 2000,
    Delay: 500,
    startDelay: 1000,
    smartBackspace: false,
    loop: true,
    cursorChar: "_",
});

