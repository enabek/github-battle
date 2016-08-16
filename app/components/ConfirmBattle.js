var React = require('react');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p> //not rendering on container, debug
    : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
