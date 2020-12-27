import * as actionType from "../actions/ActionTypes";

const initialState = {
    message: "",
    show: false
};

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_MESSAGE_DIALOG:
            return Object.assign({}, state, {
                message: action.value,
                show: true
            });
        case actionType.HIDE_MESSAGE_DIALOG:
            return Object.assign({}, state, {
                message: "",
                show: false
            });
        default:
            return state;
    }
};

export default DialogReducer;
