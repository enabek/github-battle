var React = require('react');

var PromptContainer = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm6 col-sm-offset-3 text-center">
        <h1>HEADER TEXT</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeHolder="Github Username"
                type="text" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = PromptContainer;