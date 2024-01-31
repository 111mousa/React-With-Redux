import * as actions from "./actionTypes"

export const initialState = {
    loading : false,
    users : [],
    error : ""
}

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actions.FETCH_USERS_REQUEST : return {
            ...state,
            loading : true,
        }
        case actions.FETCH_USERS_SUCCESS: return { 
            loading : false,
            users : action.payload,
            error :  ""
        } 
        case actions.FETCH_USERS_FAILURE : return {
            users : [],
            loading : false,
            error : action.payload,
        }
        default : return state
    }
}