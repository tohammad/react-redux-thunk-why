
import React from 'react';
import { connect } from 'react-redux';
import ActionTypes from '../actions/actionTypes';
import AsyncApi from '../services/api';
import App from '../components/App';
// export default ContainerApp = () => {
//     return (
//         <div>
//             <App/>
//         </div>
//     );
// }

const mapStateToProps = (state) => {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: () => {
            dispatch({
                type: ActionTypes.STARTED_UPDATING
            });

            AsyncApi.getFieldValue()
            .then(result => dispatch({
                type: ActionTypes.UPDATED,
                payload: result
            }));
        }
    };
}


const ContainerApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ContainerApp;

