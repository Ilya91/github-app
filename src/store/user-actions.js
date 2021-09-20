import { userActions } from './user-slice';

export const fetchUserData = (name) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://api.github.com/users/' + name
            );

            if (!response.ok) {
                throw new Error('Could not fetch user data!');
            }

            const data = await response.json();
            return data;
        };

        const userData = await fetchData();

        dispatch(
            userActions.addUser({
                user: userData
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