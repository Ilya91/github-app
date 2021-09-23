import { configureStore } from '@reduxjs/toolkit';

import user from './user-slice';

const store = configureStore({
    reducer: { users: user.reducer },
});

export default store;