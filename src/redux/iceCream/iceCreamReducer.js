import { BUY_ICECREAM } from "./actionTypes";

export const initialState = {
    numberOfIceCream : 20
}

export const iceCreamReducer = (state = initialState,action)=> {
    switch(action.type){
        case BUY_ICECREAM: return {
            numberOfIceCream : state.numberOfIceCream - 1
        }
        default : return state;
    }
}

// export default iceCreamReducer;