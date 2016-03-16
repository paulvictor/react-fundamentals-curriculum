var React = require("react");

module.exports = React.createClass({
  render: function(){
    var state = this.props.location.state;
    return (
      <div style = {{fontSize: 34, fontWeight: 100, maxWidth: 400, margin: '0 auto', textAlign: 'center',}}>
        <img src = {"./app/images/weather-icons/" + state.weather.icon + ".svg"} />
        <p/>
        {state.dateStr}
        <p />
        {this.props.routeParams.city}
        <p />
        {state.weather.description}
        <p/ >
        {"min temp: " + state.temp.min}
        <p/ >
        {"max temp: " + state.temp.max}
        <p/ >
        {"humidity: " + state.humidity}
      </div>
    )
  }
})
