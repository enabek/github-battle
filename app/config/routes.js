var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require("../components/Main");
var Home = require("../components/Home");

var routes = (
  <Router>
    <Route path='/' component={Main}> //make main component always active
      <Route path ='/home' component={Home} /> //notice self-closing tag
    </Route>
  </Router>
);

module.exports = routes;
