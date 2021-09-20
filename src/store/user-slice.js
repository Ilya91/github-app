import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: JSON.parse(localStorage.getItem("users") || "[]")
    },
    reducers: {
        addUser(state, action) {
            const newItem = action.payload.user;
            const existingItem = state.users.find((user) => user.id === newItem.id);

            if (!existingItem) {
                const dataObj = {
                    id: newItem.id,
                    avatar: newItem.avatar_url,
                    name: newItem.name,
                    repos: newItem.public_repos
                }
                state.users.push(dataObj);

                localStorage.setItem('users', JSON.stringify(state.users));
            }
        },
        getUser(state, action){
            const id = action.payload;
            console.log(id);
            return {
                users: [
                    ...state.users.filter((user) => user.id === id)
                ]
            };
        }
    },
});

export const userActions = userSlice.actions;

export default userSlice;