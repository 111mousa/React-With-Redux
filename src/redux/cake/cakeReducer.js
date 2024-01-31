import { BUY_CAKE } from "./actionsTypes"

export const initialState = {
    numberOfCakes : 10
}

export const cakeReducer = (state = initialState , action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes - action.payload
        }
        default : return state
    }
}