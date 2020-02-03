import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer } from  '../common/header/store/headerStoreIndex';
import { reducer as homeReducer } from  '../pages/home/store/homeStoreIndex';


export default combineReducers({
    header: headerReducer,
    home: homeReducer
})