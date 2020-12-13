import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import DrawerReducer from "./DrawerReducer";

const rootReducer = combineReducers({
    LoadingReducer,
    DrawerReducer,
});

export default rootReducer;
