import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

export const HookCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cakes.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
