document.addEventListener("DOMContentLoaded", () => {
    // Copy email to clipboard
    const emailLink = document.querySelector("a[href^='mailto:']");
    if (emailLink) {
        const copyBtn = document.createElement("button");
        copyBtn.textContent = "📋";
        copyBtn.classList.add("btn", "btn-sm", "btn-outline-primary", "ms-2");
        emailLink.insertAdjacentElement("afterend", copyBtn);

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(emailLink.textContent.trim());
            copyBtn.textContent = "✅ Copied!";
            setTimeout(() => (copyBtn.textContent = "📋"), 2000);
        });
    }

    // Download confirmation effect
    const downloadBtn = document.querySelector("a[download]");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = "✅ Saved!";
            setTimeout(() => (downloadBtn.innerHTML = originalText), 2000);
        });
    }
});
