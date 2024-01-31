import { combineReducers } from "redux";
import {iceCreamReducer} from "./iceCream/iceCreamReducer";
import {cakeReducer} from "./cake/cakeReducer";
import {reducer as userReducer} from './user/userReducer'


export const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
});