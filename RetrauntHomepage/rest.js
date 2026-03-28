const searchInput = document.querySelector("#search");
const cards = document.querySelectorAll(".card");

if (searchInput && cards.length > 0) {
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase().trim();

        cards.forEach(function (card) {
            const title = card.querySelector("h3");
            const foodName = title ? title.textContent.toLowerCase() : "";

            if (foodName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
let darkToggle=document.querySelector("#darkToggle");
darkToggle.addEventListener("click",()=>{
    document.body.classList.toggle('dark');
    if(document.body.classList.contains("dark")){
        darkToggle.textContent="☀️";
    }
    else{
        darkToggle.textContent="🌙";
    }
});