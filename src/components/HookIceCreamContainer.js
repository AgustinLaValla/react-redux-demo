import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux';

export const HookIceCreamContainer = () => {
    const numOfIceCreams = useSelector(state => state.iceCreams.numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of icre creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy an ice cream</button>
        </div>
    )
}
