// reducers/deviceReducer.js
// import * as actionTypes from '../actionTypes/deviceActionTypes';
// import * as actionTypes from '../actionTypes/actionTypes';
import { FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS } from '../actionTypes/actionTypes';
const initialState = {
  devices: [],
  loading: false,
  error: null,
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DEVICES_SUCCESS:
      return { ...state, loading: false, devices: action.payload, error: null };
    case FETCH_DEVICES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deviceReducer;
