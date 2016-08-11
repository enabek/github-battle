var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '351942f9bf144793ba6c4621c5b42752';
var sentryApp = '91744';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  version: '1.0'
}

Raven.config(sentryURL, {release: _APP_INFO.version }).install();

ReactDOM.render(
  routes, //routes file is JSX
  document.getElementById('app')
);
