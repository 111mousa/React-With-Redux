import  * as actions  from "./actionTypes"
import axios from "axios"

export const fetchUsersRequest = ()=>{
    return {
        type : actions.FETCH_USERS_REQUEST
    }
} 

export const fetchUsersFailure = (error)=>{
    return {
        type : actions.FETCH_USERS_FAILURE,
        payload : error
    }
} 

export const fetchUsersSuccess = (users)=>{
    return {
        type : actions.FETCH_USERS_SUCCESS,
        payload : users
    }
} 

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            const errorMessage = error.message;
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
}