window.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');

    searchButton.addEventListener('click', () => {
        const cityName = cityInput.value;
        if (cityName) {
            fetchWeather(cityName);
        }
    });

    function fetchWeather(cityName) {
        const api_key = '812323031bf1a87cf2e2abf68c3e6a23'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;

        axios.get(apiUrl)
            .then(response => {
                const weatherData = response.data;
                displayWeather(weatherData);
            })
            .catch(error => {
                console.error('Sorry, data for this city is currrently not available.', error)
            });
    }

    function displayWeather(weatherData) {
        weatherInfo.innerHTML = ''

        const city = weatherData.name;
        const temperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const humidity = weatherData.main.humidity;

        const cityElement = document.createElement('h2');
        cityElement.textContent = city;

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `${temperature} degree celcius.`;

        const weatherElement = document.createElement('p');
        weatherElement.textContent = `Description: ${weatherDescription}`;

        const humidityElement = document.createElement('p');
        humidityElement.textContent = `Humidity: ${humidity}`;

        weatherInfo.appendChild(cityElement);
        weatherInfo.appendChild(temperatureElement);
        weatherInfo.appendChild(weatherElement);
        weatherInfo.appendChild(humidityElement);
    }
})