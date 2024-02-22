import axios from "axios";
import { fetchDevicesFailure, fetchDevicesRequest, fetchDevicesSuccess } from "../actions/deviceAction";
import { FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS, SET_SEARCH_TERM } from "../actionTypes/actionTypes";

// Initial State
const initialState = {
    devices: [],
    loading: false,
    error: null,
    searchTerm: '',
  };


  // Thunk to Fetch Devices
export const fetchDevices = () => {
    return async (dispatch) => {
      dispatch(fetchDevicesRequest());
      try {
        const response = await axios.get('http://localhost:2000/api/allDeviceName');
        dispatch(fetchDevicesSuccess(response.data));
      } catch (error) {
        dispatch(fetchDevicesFailure(error.message || 'An error occurred while fetching devices.'));
      }
    };
  };
  
  // Reducer
  const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DEVICES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DEVICES_SUCCESS:
        return { ...state, loading: false, devices: action.payload, error: null };
      case FETCH_DEVICES_FAILURE:
        return { ...state, loading: false, devices: [], error: action.payload };
      case SET_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      default:
        return state;
    }
  };
  
  export default deviceReducer;