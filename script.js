function openPopup(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("content").classList.add("popup-active"); // Add blur effect
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("content").classList.remove("popup-active"); // Remove blur effect
}