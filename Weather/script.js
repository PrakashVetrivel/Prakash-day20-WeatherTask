document.getElementById('fetch-button').addEventListener('click', fetchWeather);

function fetchWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '82ebaf90bb1aa91e3937d8e3bac5c26b'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const container = document.getElementById('weather-container');
    container.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
