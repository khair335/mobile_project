import { MOBILE_SEARCH_BOX_SHOW, ONLY_SEARCH_BOX_CLOSE, ON_SEARCH, SEARCH_BOX_CLOSE, SEARCH_BOX_OPEN } from '../actionTypes/actionTypes';

const initialState = {
  searchData: [],
  searchBox: false,
  searchPanel: false,
  mobileSearch: false,
};

export const onSearch = (payload) => ({
  type: ON_SEARCH,
  payload,
});
const searchReducer = (state = initialState, action) => {

  // const handleSearch = state.search
  switch (action.type) {
    case SEARCH_BOX_OPEN:
      return {
        ...state,
        searchBox: true,
      }

    case SEARCH_BOX_CLOSE:
      return {
        ...state,
        searchBox: false,
        searchPanel: false,
      }
    case ONLY_SEARCH_BOX_CLOSE:
      return {
        ...state,
         searchPanel: false,

      }
    case ON_SEARCH:
      return {
        ...state,
        searchPanel: true,
        searchData: [...action.payload]

        // assuming you want to store the payload in the state
      }
    case MOBILE_SEARCH_BOX_SHOW:
      let value;
      if (state.mobileSearch === false) {

        value = true
      }
      if (state.mobileSearch === true) {

        value = false
      }
      return {
        ...state,
        mobileSearch: value,
      }

    default:
      return state;
  }
}

export default searchReducer;