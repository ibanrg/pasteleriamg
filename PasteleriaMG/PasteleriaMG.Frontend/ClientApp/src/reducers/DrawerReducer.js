import * as actionType from "../actions/ActionTypes";

const initialState = {
    open: false
};

const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.OPEN_DRAWER:
            return Object.assign({}, state, {
                open: true
            });
        case actionType.CLOSE_DRAWER:
            return Object.assign({}, state, {
                open: false
            });
        case actionType.TOGGLE_DRAWER:
            return Object.assign({}, state, {
                open: !state.open
            });
        default:
            return state;
    }
};

export default DrawerReducer;
