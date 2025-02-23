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
}

// Close pop-up when clicking outside the content

var pop_up_open = false;
addEventListener("click", function (event) {
    document.querySelectorAll(".popup").forEach(popup => {
        let content = popup.querySelector(".popup-content");

        //If the click is outside the content, close the pop-up
        if (popup.style.display == "block" && !content.contains(event.target)) {
            if (pop_up_open) {
                closePopup(popup.id);    
            }
            pop_up_open = !pop_up_open;
        }
    });
});

const container = document.querySelector(".internal-reveal-container");
const internalImage = document.querySelector(".internal-image");

container.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    internalImage.style.clipPath = `circle(20% at ${x}% ${y}%)`; // Adjust size for larger/smaller reveal area
    internalImage.style.maskImage = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 60%)`;
    internalImage.style.webkitMaskImage = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 60%)`;

});

container.addEventListener("mouseleave", () => {
    internalImage.style.clipPath = "circle(0% at 50% 50%)"; // Resets effect when mouse leaves
});

