import { USERS_REQUEST, USERS_REQUEST_SUCCESS, USERS_REQUEST_FAILED } from './usersTypes';

export const usersRequest = () => {
    return {
        type: USERS_REQUEST
    }
}

export const usersRequestSuccess = (users) => {
    return {
        type: USERS_REQUEST_SUCCESS,
        payload: users
    }
}

export const usersRequestFailed = (error) => {
    return {
        type: USERS_REQUEST_FAILED,
        payload: error
    }
}

export const fetchUsers = () => async dispatch => {
    try {
        dispatch(usersRequest);
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await result.json();
        dispatch(usersRequestSuccess(data));
    } catch (error) {
        dispatch(usersRequestSuccess(error));
    }

}