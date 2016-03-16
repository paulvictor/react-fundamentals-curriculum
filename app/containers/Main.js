var React = require("react")
var InputAndButton = require("../components/InputAndButton.js");

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container" style = {{"backgroundColor": "orange"}}>
          <div className = "col-lg-8">
            <h2>Clever Title</h2>
          </div>
          <div className = "col-ls-4 col-lg-offset-8">
            <InputAndButton twoLines = {false}/>
            <p/>
          </div>
        </div>
        {this.props.children}
      </div>
           )
  }
})
