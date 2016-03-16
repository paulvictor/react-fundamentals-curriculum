var React = require("react")
var PropTypes = React.PropTypes;


module.exports = React.createClass({
  propTypes: {
    date: PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired,
    temp: PropTypes.object.isRequired,
    humidity: PropTypes.number.isRequired
  },
  render: function(){
    var dayNumberToStr = { 0: "Monday", 1: "Tuesday", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun" };
    var monthNumberToStr = {0: "Jan", 1: "Feb", 2: "Mar"}
    var d = new Date()
    d.setUTCMilliseconds(this.props.date);
    var day = d.getDay()
    var month = d.getMonth()
    var dayAndDate = dayNumberToStr[day.toString()] + ", " + monthNumberToStr[month.toString()] + " " + d.getDate().toString()
    return (<div>
      <img src = {"./app/images/weather/" + this.props.weather[0].icon + ".svg"} />
      <p/>
      {dayAndDate}
    </div>)
  }
})
