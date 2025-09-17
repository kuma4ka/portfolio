// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle button
    const themeBtn = document.createElement("button");
    themeBtn.classList.add("btn", "btn-sm", "btn-outline-secondary", "theme-toggle-btn");
    document.body.appendChild(themeBtn);

    const setTheme = (dark) => {
        document.body.classList.toggle("bg-dark", dark);
        document.body.classList.toggle("text-white", dark);
        themeBtn.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", dark ? "dark" : "light");
    };

    // Load saved theme
    setTheme(localStorage.getItem("theme") === "dark");

    // Toggle on click
    themeBtn.addEventListener("click", () => {
        setTheme(!document.body.classList.contains("bg-dark"));
    });
});
