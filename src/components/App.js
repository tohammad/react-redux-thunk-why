import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
  render() {
    return (
      <div>
      <label>Field Value: </label>
            <input value={this.props.field}>
            </input>
            <button disabled={this.props.isWaiting} onClick={this.props.update}> Fetch
            </button>
            {this.props.isWaiting && <div>Waiting... </div>}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  field: PropTypes.any,
  isWaiting: PropTypes.bool
}

export default App;
