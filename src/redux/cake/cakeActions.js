import { BUY_CAKE } from "./actionsTypes"

const buyCake = (number = 1)=>{
    return {
        type : BUY_CAKE,
        payload : number
    }
}

export default buyCake;