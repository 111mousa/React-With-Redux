import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import buyCake from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes )
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Cakes - {numberOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;