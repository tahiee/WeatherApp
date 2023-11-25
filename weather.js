
const apikey = '8dd4d754b9d105e92e843c3a8f059e0c';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+ 'km/hr';

}
searchbtn.addEventListener('click', () => {
    checkweather(searchbox.value);
})



