import * as actionType from "../actions/ActionTypes";

const initialState = {
    productos: null
};

const ProductoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PRODUCTOS_LOADED:
            return Object.assign({}, state, {
                productos: action.value
            });
        default:
            return state;
    }
};

export default ProductoReducer;
