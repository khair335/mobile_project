import { createStore } from "redux";
// import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import searchReducer from "./reducers/searchReducer";

const store = createStore( searchReducer, composeWithDevTools());

export default store;
