import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../redux/users/usersActions';

const UsersContainer = ({ usersData, fetchUsers }) => {

    useEffect(() => fetchUsers(), []);

    return usersData.loading
        ? <h2>Loading...</h2>
        : usersData.error ? <h2>{usersData.error.message}</h2>
            : (
                <div>
                    <h2>User Lists</h2>
                    <div>
                        {usersData.users.map(user =>
                            <span key={user.id}>{user.name}, </span>
                        )}
                    </div>
                </div>
            )
}

const mapStateToProps = state => {
    return {
        usersData: state.users
    }
}

const matDispatchToProp = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, matDispatchToProp)(UsersContainer);
