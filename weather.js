// const dotenv  = require("dotenv");
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var city = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var long = document.querySelector(".long");
var lat = document.querySelector(".lat");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=c85056b722519d68c492b405acae7281"
  )
    .then((responce) => responce.json())
    .then((data) => {
      var cityValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];
      // var iconValue = data['weather'][0]['icon'];
      var humidValue = data["main"]["humidity"];
      var longValue = data["coord"]["lon"];
      var latValue = data["coord"]["lat"];

      city.innerHTML = cityValue;
      temp.innerHTML = "Temperature- " + tempValue;
      desc.innerHTML = "Sky- " + descValue;
      // icon.innerHTML = iconValue;
      humidity.innerHTML = "Humidity- " + humidValue;
      long.innerHTML = "location: " + "longitude- " + longValue;
      lat.innerHTML = "latitude- " + latValue;
      console.log(data);
    })

    .catch((err) => alert("Wrong data entered!"));
});
