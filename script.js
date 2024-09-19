const jokeElement = document.getElementById('jokeElement');
const jokeButton = document.getElementById('jokeButton');

// Function to fetch and display a random dad joke
function fetchJoke() {
    fetch("https://icanhazdadjoke.com/slack")
        .then(response => response.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            jokeElement.innerHTML = jokeText;
        })
        .catch(error => {
            jokeElement.innerHTML = "Oops! Something went wrong.";
            console.error("Error fetching joke:", error);
        });
}

// Fetch a joke when the page loads
window.onload = fetchJoke;

// Fetch a new joke when the button is clicked
jokeButton.addEventListener('click', fetchJoke);
