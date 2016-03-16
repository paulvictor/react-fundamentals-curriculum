var Axios = require("axios")

module.exports = {
  currentWeather: function(city){
    return Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&APPID=" + "788da8f96b5dd413345f9ee839995575").then(resp => resp.data)
  },
  forecast: function(city){
    return Axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&cnt=5&APPID=" + "788da8f96b5dd413345f9ee839995575").then(resp => resp.data)
  }
}
