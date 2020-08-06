import React from "react";
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - { props.numOfCakes }</h2>
            <button onClick={props.buyCake}>By a cake</button>
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
        buyCake: () => dispatch(buyCake())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);