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
