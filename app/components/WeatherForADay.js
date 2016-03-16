var React = require("react")
var PropTypes = React.PropTypes;
var Link = require("react-router").Link

function dayAndDateFromEpoch(epoch){
  var dayNumberToStr = { 1: "Monday", 2: "Tuesday", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat", 0: "Sun" };
  var monthNumberToStr = {0: "Jan", 1: "Feb", 2: "Mar"}
  var d = new Date(epoch * 1000)
  var day = d.getDay()
  var month = d.getMonth()
  return dayNumberToStr[day.toString()] + ", " + monthNumberToStr[month.toString()] + " " + d.getDate().toString()
}

module.exports = React.createClass({
  propTypes: {
    date: PropTypes.number.isRequired,
    weather: PropTypes.object.isRequired,
    temp: PropTypes.object.isRequired,
    humidity: PropTypes.number.isRequired
  },
  render: function(){
    return (<div>
      <Link to = {{
        pathname: "/detail/" + this.props.city,
        state: {dateStr: dayAndDateFromEpoch(this.props.date), weather: this.props.weather, temp: this.props.temp, humidity: this.props.humidity}
      }}>
        <img src = {"./app/images/weather-icons/" + this.props.weather.icon + ".svg"} />
        <p/>
        {dayAndDateFromEpoch(this.props.date)}
      </Link>
    </div>)
  }
})
