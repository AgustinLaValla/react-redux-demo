import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { buyIceCream } from '../redux';

const IceCreamContainer = (props) => {
    const numOfIceCreams = useSelector(state => state.iceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice creams - {props.numOfIceCreams} </h2>
            <button onClick={props.byIceCream}>Buy iceCream</button>
        </div>
    )
}


const mapStateToProp = state => {
    return {
        numOfIceCreams: state.iceCreams.numOfIceCreams 
    }
}

const mapDispatchToProp = dispatch => {
    return {
        byIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(IceCreamContainer)