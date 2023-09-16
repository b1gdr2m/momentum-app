const API_KEY = "d34683a52ea61446bc29eace7332c535";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
              .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                const name = data.name;
                const main = data.weather[0].main;
                city.innerText = name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
              });
            }
    // fetch는 promise임 당장 뭔가 일어나지 않고 조금 뒤에 서버가 응답한다는 뜻

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
