import * as actionType from "./ActionTypes";

// LOADING

export const showLoading = value => ({
    type: actionType.SHOW_LOADING,
    value
});

export const hideLoading = () => ({
    type: actionType.HIDE_LOADING
});

export const changeLoadingMessage = value => ({
    type: actionType.CHANGE_LOADING_MESSAGE,
    value
});

// MESSAGE_DIALOG

export const showMessageDialog = value => ({
    type: actionType.SHOW_MESSAGE_DIALOG,
    value
});

export const hideMessageDialog = () => ({
    type: actionType.HIDE_MESSAGE_DIALOG
});

// DRAWER

export const openDrawer = () => ({
    type: actionType.OPEN_DRAWER
});

export const closeDrawer = () => ({
    type: actionType.CLOSE_DRAWER
});

export const toggleDrawer = () => ({
    type: actionType.TOGGLE_DRAWER
});

// PRODUCTOS
export const productosLoaded = value => ({
    type: actionType.PRODUCTOS_LOADED,
    value
});