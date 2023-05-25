axios.get('http://localhost:8080/previsao')
.then(function(response) {
    const garanhunsData = response.data.garanhuns;
    const petrolinaData = response.data.petrolina;

            // Exibir dados de Garanhuns
            document.getElementById('garanhuns-temperatura').textContent = garanhunsData.garanhunsTemperature + '°C';
            document.getElementById('garanhuns-icone-tempo').src = garanhunsData.weatherIconUrl;
            document.getElementById('garanhuns-descricao-tempo').textContent = garanhunsData.garanhunsWeatherDescription;
            document.getElementById('garanhuns-umidade').textContent = 'Umidade: ' + garanhunsData.garanhunsHumidity + '%';

            // Exibir dados de Petrolina
            document.getElementById('petrolina-temperatura').textContent = petrolinaData.petrolinaTemperature + '°C';
            document.getElementById('petrolina-icone-tempo').src = petrolinaData.weatherIconUrl;
            document.getElementById('petrolina-descricao-tempo').textContent = petrolinaData.petrolinaWeatherDescription;
            document.getElementById('petrolina-umidade').textContent = 'Umidade: ' + petrolinaData.petrolinaHumidity + '%';
        })
        .catch(function(error) {
            console.error(error);
        });
