var React = require("react")
var WeatherForADay = require("../components/WeatherForADay.js")

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.weathers.map(weather => <WeatherForADay date = {weather.dt} weather = {weather.weather} temp = {weather.temp} humidity = {weather.humidity} />)}
      </div>
    )
  }
})
