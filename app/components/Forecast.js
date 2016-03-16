var React = require("react")
var OpenWeather = require("../utils/OpenWeather.js")
var WeatherForDays = require("../containers/WeatherForDays.js")

module.exports = React.createClass({
  getInitialState: function(){
    return {isLoading: true, forecast: null}
  },
  componentDidMount: function(){
    OpenWeather.forecast(this.props.routeParams.city).then(data => this.setState({isLoading: false, forecast: data}))
  },
  render: function(){
    if (this.state.isLoading){
      return <div> Loading </div>
    } else {
      console.log(this.state.forecast)
      return (
      <div className="col-lg-12 text-center">
        <h2>{this.props.routeParams.city}</h2>
        <p/>
        <h3>Select a day</h3>
        <WeatherForDays weathers = {this.state.forecast.list}/>

      </div>)
    }
  }
})
