function login(id, password) {
    return (dispatch, getState) => {
        console.log("login success_action");
        dispatch({type:"LOGIN_SUCCESS", payload: {id, password}});
    }
}
function logout(){
    return (dispatch, getState) => {
        console.log("logout success_action");
        dispatch({type:"LOGOUT_SUCCESS"});
    }
}

export const authenticateAction = { login, logout };