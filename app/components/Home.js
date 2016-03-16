var React = require("react");
var InputAndButton = require("../components/InputAndButton.js");

module.exports = React.createClass({
  render: function(){
    return (
      <div className="col-lg-12 text-center" style={{"backgroundImage": "url(../app/images/pattern.svg)", height: "1200px", width: "1200px"}}>
        <div className="container">
          <h1> Enter City and State </h1>
          <InputAndButton twoLines = {true}/>
        </div>
      </div>
    )
  }
})
