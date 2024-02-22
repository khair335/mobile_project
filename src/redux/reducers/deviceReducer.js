
import { FETCH_BRAND_DEVICES_FAILURE, FETCH_BRAND_DEVICES_REQUEST, FETCH_BRAND_DEVICES_SUCCESS, FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS, ON_SEARCH } from '../actionTypes/actionTypes';
const initialState = {
  devices: [],
  loading: false,
  error: null,
  brandDevices: [],
  brandLoading: false,
  searchTerm: '',
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DEVICES_SUCCESS:
      return { ...state, loading: false, devices: action.payload, error: null };
    case FETCH_DEVICES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_BRAND_DEVICES_REQUEST:
      return { ...state, brandLoading: true, error: null };
    case FETCH_BRAND_DEVICES_SUCCESS:
      return { ...state, brandDevices: action.payload, brandLoading: false, error: null }; // Update brandLoading state
    case FETCH_BRAND_DEVICES_FAILURE:
      return { ...state, brandDevices: [], brandLoading: false, error: action.payload }; // Update brandLoading state
    case ON_SEARCH:
      return { ...state, searchTerm: action.payload };

    default:
      return state;
  }
};
export default deviceReducer;
