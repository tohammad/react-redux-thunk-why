import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
class App extends React.Component {

    render() {
        return (<div>
            <input type="text" value={this.props.field}> </input>
        </div>);
    }
}

App.propTypes = {
    
}