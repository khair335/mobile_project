import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import searchReducer from "./reducers/searchReducer";
import deviceReducer from "./reducers/deviceReducer";
import thunk from "redux-thunk"; // Import Thunk middleware if not already done

// Combine your reducers
const rootReducer = combineReducers({
  search: searchReducer,
  device: deviceReducer,
  // Add other reducers if needed
});

// Apply middleware and compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(thunk));

// Create the store with combined reducer and enhancer
const store = createStore(rootReducer, enhancer);

export default store;
