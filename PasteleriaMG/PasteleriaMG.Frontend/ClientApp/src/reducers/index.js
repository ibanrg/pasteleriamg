import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import MessageDialogReducer from "./MessageDialogReducer";
import DrawerReducer from "./DrawerReducer";
import ProductoReducer from "./ProductoReducer";

const rootReducer = combineReducers({
    LoadingReducer,
    MessageDialogReducer,
    DrawerReducer,
    ProductoReducer
});

export default rootReducer;
