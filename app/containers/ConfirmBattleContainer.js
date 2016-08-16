var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getIntitalState: function() {
    console.log('getIntitalState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
    var query = this.props.location.query;
    // Fetch info from githup api to update state
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading} //property received as 'null'
        playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;
