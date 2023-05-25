const express = require("express")
const router = express.Router()
const axios = require('axios');

router.get('/previsao', async (req, res) => {
    try {
        // Obter dados climáticos de Garanhuns
        const garanhunsResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Garanhuns,br&appid=57decebcbb3e8343fde5fcb48ae8b86a&units=metric&lang=pt_br');
        const garanhunsTemperature = garanhunsResponse.data.main.temp;
        const garanhunsWeatherDescription = garanhunsResponse.data.weather[0].description;
        const garanhunsHumidity = garanhunsResponse.data.main.humidity;

        // Obter dados climáticos de Petrolina
        const petrolinaResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Petrolina,br&appid=57decebcbb3e8343fde5fcb48ae8b86a&units=metric&lang=pt_br');
        const petrolinaTemperature = petrolinaResponse.data.main.temp;
        const petrolinaWeatherDescription = petrolinaResponse.data.weather[0].description;
        const petrolinaHumidity = petrolinaResponse.data.main.humidity;

        res.send({
            garanhuns: {
                garanhunsTemperature,
                weatherIconUrl: 'https://openweathermap.org/img/wn/04n.png',
                garanhunsWeatherDescription,
                garanhunsHumidity
            },
            petrolina: {
                petrolinaTemperature,
                weatherIconUrl: 'https://openweathermap.org/img/wn/04n.png',
                petrolinaWeatherDescription,
                petrolinaHumidity
            }
        });
    } catch (error) {
        console.error(error);
        res.send('error');
    }
});


router.get('/buscar', (req, res) => { //rota para busca
    res.render('buscar');
});

router.get('/buscarclima', async (req, res) => {
    try {
        const cidade = req.body.cidade;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=57decebcbb3e8343fde5fcb48ae8b86a&units=metric&lang=pt_br`);
        const temperature = response.data.main.temp;
        const weatherDescription = response.data.weather[0].description;
        const city = response.data.name;

        res.render('climarecebido', {
            temperature,
            weatherDescription,
            city,
        });
    } catch (error) {
        console.error(error);
        res.send('error');
    }
});












module.exports = router;