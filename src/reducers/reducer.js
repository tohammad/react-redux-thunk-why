
import React from 'react';

import ActionTypes from '../actions/actionTypes';
const initialState = {
    field: 'No Data',
    isWaiting: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.STARTED_UPDATING: 
            return {
                ...state, isWaiting: true
            };
        case ActionTypes.UPDATED: 
        return {
            ...state, isWaiting: false, field: action.payload
        };

        default: return state;
    }
};

export default reducer;