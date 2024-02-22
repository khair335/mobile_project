import { FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS, SET_SEARCH_TERM } from "../actionTypes/actionTypes";

// Action Creators
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
  
  export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
  });
  