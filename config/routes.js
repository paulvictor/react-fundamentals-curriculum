var React = require("react")
var ReactRouter = require("react-router")
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var hashHistory = ReactRouter.hashHistory
var Main = require("../app/containers/Main.js")
var Home = require("../app/components/Home.js")
var IndexRoute = ReactRouter.IndexRoute
var Forecast = require("../app/components/Forecast.js")

var routes = <Router history={hashHistory}>
               <Route path = "/" component = {Main}>
                 <IndexRoute component = {Home}/>
                 <Route path="/forecast/:city" component = {Forecast}/>
               </Route>
             </Router>


module.exports = routes;
