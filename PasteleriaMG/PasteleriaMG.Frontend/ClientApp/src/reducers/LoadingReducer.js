import * as actionType from "../actions/ActionTypes";

const initialState = {
    message: "",
    loading: false
};

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOW_LOADING:
            return Object.assign({}, state, {
                message: action.value,
                loading: true
            });
        case actionType.HIDE_LOADING:
            return Object.assign({}, state, {
                message: "",
                loading: false
            });
        case actionType.CHANGE_LOADING_MESSAGE:
            return Object.assign({}, state, {
                message: action.value
            });
        default:
            return state;
    }
};

export default LoadingReducer;
