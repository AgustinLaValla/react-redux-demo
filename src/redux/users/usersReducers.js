import { USERS_REQUEST, USERS_REQUEST_SUCCESS, USERS_REQUEST_FAILED } from './usersTypes';

const intialState = {
    loading: false,
    users: [],
    error: null
}

export const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case USERS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...action.payload],
                error: null
            };

        case USERS_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: { ...action.payload }
            }

        default:
            return state;
    }
}