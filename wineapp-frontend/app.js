const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value;
    const apiKey = "57decebcbb3e8343fde5fcb48ae8b86a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    axios.get(url)
        .then(response => {
            const weatherData = response.data;
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const humidity = weatherData.main.humidity;
            const cityName = weatherData.name;

            weatherDiv.innerHTML = `
                <p>Cidade:${cityName}:<br> Temperatura:${temperature}ºC, <br>${description}, <br>Umidade:${humidity}</p>
            `;
        })
        .catch(error => {
            weatherDiv.innerHTML = `
                <p>Não foi possível obter informações do tempo para ${city}. Tente novamente mais tarde.</p>
            `;
            console.log(error);
        });
});
