import { ON_SEARCH, SEARCH_BOX_CLOSE, SEARCH_BOX_OPEN } from '../actionTypes/actionTypes';

const initialState = {
  searchData: [],
  searchBox: false,
  searchPanel: false,
};
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
      }
    case ON_SEARCH:
      return {
        ...state,
        searchPanel: true,
      }

    default:
      return state;
  }
}

export default searchReducer;