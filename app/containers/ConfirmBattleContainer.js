var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getIntitalState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    // Fetch info from githup api to update state
  },
  render: function() {
    return (
      <ConfirmBattle />
    )
  }
});

module.exports = ConfirmBattleContainer;
