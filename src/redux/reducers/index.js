import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    auth : authenticateReducer,
    product : productReducer,
    loading : loadingReducer,
});