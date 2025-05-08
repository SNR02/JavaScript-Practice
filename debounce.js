function debounce(func, delay) {
    let timer; // Stores the timer reference
    return function(...args) {
        clearTimeout(timer); // Clear previous timer (if any)
        timer = setTimeout(() => {
            func.apply(this, args); // Execute the function after delay
        }, delay);
    };
}


// ----------- without debounce -------------------
document.getElementById("search").addEventListener("input", function(event) {
    fetch(`https://api.example.com/search?q=${event.target.value}`)
        .then(response => response.json())
        .then(data => console.log(data));
});


// ---------------- with debounce -------------------
const searchInput = document.getElementById("search");

function fetchSearchResults(query) {
    console.log("Fetching data for:", query);
    fetch(`https://api.example.com/search?q=${query}`)
        .then(response => response.json())
        .then(data => console.log(data));
}
// Create a debounced version of fetchSearchResults with 300ms delay
const debouncedSearch = debounce(fetchSearchResults, 300);

searchInput.addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
});
