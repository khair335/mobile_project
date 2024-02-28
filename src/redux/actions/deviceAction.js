// actions/deviceActions.js
import axios from 'axios';
import { FETCH_BRAND_DEVICES_FAILURE, FETCH_BRAND_DEVICES_REQUEST, FETCH_BRAND_DEVICES_SUCCESS, FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS, ON_SEARCH } from '../actionTypes/actionTypes';
import { api } from '../../urlConfig';
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

// Action creators for loading
export const fetchBrandDevicesRequest = () => ({
  type: FETCH_BRAND_DEVICES_REQUEST,
});

export const fetchBrandDevicesSuccess = (devices) => ({
  type: FETCH_BRAND_DEVICES_SUCCESS,
  payload: devices,
});

export const fetchBrandDevicesFailure = (error) => ({
  type: FETCH_BRAND_DEVICES_FAILURE,
  payload: error,
});
export const onSearch = (searchTerm) => ({
  type: ON_SEARCH,
  payload: searchTerm,
});

export const fetchDevices = () => {
  return async (dispatch) => {
    dispatch(fetchDevicesRequest());

    try {
      const response = await axios.get(`${api}/allDeviceName`);
      dispatch(fetchDevicesSuccess(response.data));
    } catch (error) {
      dispatch(fetchDevicesFailure(error.message));
    }
  };
};
export const fetchBrandDevices = (brandName) => async (dispatch) => {
  dispatch(fetchBrandDevicesRequest());
  try {
    const response = await axios.get(`${api}/brand/${brandName}`);
    dispatch(fetchBrandDevicesSuccess(response.data));
  } catch (error) {
    dispatch(fetchBrandDevicesFailure(error.message));
  }
};