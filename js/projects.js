document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleDetails");
    const details = document.getElementById("details");
    const themeBtn = document.getElementById("themeToggle");
    const card = document.querySelector(".card");

    toggleBtn.addEventListener("click", () => {
        if (details.style.display === "none") {
            details.style.display = "block";
            toggleBtn.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            toggleBtn.textContent = "Show Details";
        }
    });

    themeBtn.addEventListener("click", () => {
        card.classList.toggle("bg-dark");
        card.classList.toggle("text-white");
    });
});
