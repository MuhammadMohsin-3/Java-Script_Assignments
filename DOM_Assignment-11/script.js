const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

// OpenWeather API Key (replace with your own API key)
const API_KEY = "YOUR_API_KEY_HERE";

// Function to fetch weather
async function getWeather(city) {
    // Show loading message
    resultDiv.textContent = "Loading...";
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data);

        // Save last searched city
        localStorage.setItem("lastCity", city);

    } catch (error) {
        resultDiv.textContent = error.message;
    }
}

// Function to display weather
function displayWeather(data) {
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

// Search button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

// Enter key support
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) getWeather(city);
    }
});

// Load last searched city on page load
window.addEventListener("load", () => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        cityInput.value = lastCity;
        getWeather(lastCity);
    }
});