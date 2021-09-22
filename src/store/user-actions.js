import {userActions} from './user-slice';

export const fetchUserData = (name) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.github.com/users/${name}`
            );

            if (!response.ok) {
                throw new Error('Could not fetch user data!');
            }

            return await response.json();
        };

        const user = await fetchData();

        dispatch(
            userActions.addUser({
                user
            })
        );
    };
};

export const getUser = (id) => {
    return (dispatch) => {
        dispatch(
            userActions.getUser(id)
        );
    }
}