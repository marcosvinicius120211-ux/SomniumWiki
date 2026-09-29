const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sections = [...document.querySelectorAll(".wiki-section")];
const noResults = document.getElementById("noResults");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
});

function searchWiki() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        sections.forEach(section => section.hidden = false);
        noResults.hidden = true;
        return;
    }

    let found = false;

    sections.forEach(section => {
        const searchableText = (
            section.dataset.search + " " + section.textContent
        ).toLowerCase();

        const match = searchableText.includes(query);
        section.hidden = !match;

        if (match) found = true;
    });

    noResults.hidden = found;
}

searchInput.addEventListener("input", searchWiki);

searchButton.addEventListener("click", searchWiki);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchWiki();
    }
});
