// FAQ Accordion
document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
    });
});

// Search Feature
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", () => {
    let filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".faq").forEach(faq => {
        let question = faq.querySelector(".faq-question span").textContent.toLowerCase();
        faq.style.display = question.includes(filter) ? "block" : "none";
    });
});

// Dark Mode Toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});

// Apply stored theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Category Filter
function filterFAQs(category) {
    document.querySelectorAll(".faq-category").forEach(cat => {
        cat.style.display = category === "all" || cat.getAttribute("data-category") === category ? "block" : "none";
    });
}


