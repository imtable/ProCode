const axios = require('axios');
const fs = require('fs');

// const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Kyiv&cnt=2&appid=c822ed03c42a3aedc3737fd87e6e881f'; запрос на завтра, но недоступен (видимо, из-за фри-аккаунта)
const url = 'https://api.openweathermap.org/data/2.5/forecast?id=703448&cnt=40&appid=c822ed03c42a3aedc3737fd87e6e881f&units=metric';

let forecast = '123';

const foo = async () => {
   axios.get(url).then((response) => {
      const temp = response.data.list[9].main.temp;
      const date = response.data.list[9].dt_txt;
      forecast = `temperature forecast: ${temp} Celsius, date: ${date}`; 
      console.log(forecast);
      bar();
   });
};
const bar = async () => {
   const writeForecast = await fs.promises.appendFile('./forecast.txt', `${forecast} \n`);
}

setInterval(() => {
   foo();
}, 9000);