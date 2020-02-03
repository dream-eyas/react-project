import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer } from  '../common/header/store/headerStoreIndex';

export default combineReducers({
    header: headerReducer
})