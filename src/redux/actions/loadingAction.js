function loadOn() {
    return (dispatch) => {
        console.log("loading");
        dispatch({ type: "LOADING_ON" });
    }
}
function loadOut() {
    return (dispatch) => {
        console.log("load out");
        dispatch({ type: "LOADING_END" });
    }
}

export const loadingAction = { loadOn, loadOut };