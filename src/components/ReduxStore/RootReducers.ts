import {combineReducers} from 'redux';
import LayoutReducer from './layout';
import { AppData } from './app-data';


const RootReducer = combineReducers({
    LayoutReducer,
    AppData
});

export default RootReducer;