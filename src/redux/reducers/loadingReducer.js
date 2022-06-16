let initialState = {
    loading: false
}

function loadingReducer(state = initialState, action) {
    let { type } = action;
    switch (type) {
        case "LOADING_ON":
            return {
                ...state,
                loading: true
            }
        case "LOADING_END":
            return {
                ...state,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default loadingReducer;