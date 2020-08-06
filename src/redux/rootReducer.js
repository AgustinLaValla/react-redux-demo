import { combineReducers } from 'redux';
import cakesReducer from './cakes/cakesReducer';
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { usersReducer } from './users/usersReducers';

export const rootReducer = combineReducers({
    cakes: cakesReducer,
    iceCreams: iceCreamReducer,
    users: usersReducer
});