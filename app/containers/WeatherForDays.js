var React = require("react")
var WeatherForADay = require("../components/WeatherForADay.js")

module.exports = React.createClass({
  render: function(){
    return (
      <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', maxWidth: 1200, margin: '50px auto'}}>
        {this.props.weathers.map((list) => {
          return <WeatherForADay city = {this.props.city} date = {list.dt} weather = {list.weather[0]} temp = {list.temp} humidity = {list.humidity} key = {list.dt}/>
        })}
      </div>
    )
  }
})
