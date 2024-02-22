// actions/deviceActions.js
import axios from 'axios';
import { FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS } from '../actionTypes/actionTypes';
// import * as actionTypes from '../actionTypes/deviceActionTypes';


// Action creators
export const fetchDevicesRequest = () => ({
  type: FETCH_DEVICES_REQUEST,
});

export const fetchDevicesSuccess = (devices) => ({
  type: FETCH_DEVICES_SUCCESS,
  payload: devices,
});

export const fetchDevicesFailure = (error) => ({
  type: FETCH_DEVICES_FAILURE,
  payload: error,
});

// Async action (using Thunk middleware)
export const fetchDevices = () => {
  return async (dispatch) => {
    dispatch(fetchDevicesRequest());

    try {
      const response = await axios.get('http://localhost:2000/api/allDeviceName');
      dispatch(fetchDevicesSuccess(response.data));
    } catch (error) {
      dispatch(fetchDevicesFailure(error.message));
    }
  };
};
