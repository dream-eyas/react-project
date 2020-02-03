import { combineReducers } from 'redux';
import { reducer as headerReducer } from  '../common/header/store/headerStoreIndex';

export default combineReducers({
    header: headerReducer
})