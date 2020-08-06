const { BUY_CAKE } = require("./cakesTypes")

const initialState = {
    numOfCakes: 10
}

const cakesReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state;
    }
}

export default cakesReducer;