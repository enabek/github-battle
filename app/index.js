var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');



ReactDOM.render(
  routes, //routes file is JSX
  document.getElementById('app')
);
