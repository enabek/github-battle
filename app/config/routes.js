var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../container/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}> //make main component always active
      <IndexRoute component={Home} /> //IndexRoute makes /home active when no other routes are
      <Route path='playerOne' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
