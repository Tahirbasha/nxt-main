import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './root-reducers';

const store = configureStore({reducer: RootReducer});

export default store;