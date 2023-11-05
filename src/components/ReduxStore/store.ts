import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './RootReducers';

const store = configureStore({reducer: RootReducer});

export default store;