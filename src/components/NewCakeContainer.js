import React, { useState } from "react";
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>By {number} cakes</button>
        </div>
    );
};


//Get redux state as parameter and return and object
const mapStateToProps = state => {
    return {
        numOfCakes: state.cakes.numOfCakes
    };
}

//Get redux dispatch and return and object
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);