var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {value: ''}
  },
  updateCity: function(e){
    e.preventDefault();
    this.setState({value: e.target.value})
  },
  render: function(){
    return (
      <div>
        <input type="text" placeholder="Bengaluru" onChange={this.updateCity}/>
        {this.props.twoLines && <p/>}
        <Link to = {"/forecast/" + this.state.value}>
          <button className="btn btn-lg btn-success" type="submit" style = {{marginLeft: "25px"}}>Get Weather</button>
        </Link>
      </div>
    )
  }
})
