import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    pageList: []
});

export default (state = defaultState, action) => {
    console.log("header");
    console.log(action);
    console.log(action.type);
    const type = action.type;

    switch (type) {
        case actionTypes.SEARCH_FOCUS :
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR :
            return state.set('focused', false);
        case actionTypes.CHANGE_HEADER_LIST :
            return state.set('pageList', action.data);
        default :
            return state;
    }

    // if (type === actionTypes.SEARCH_FOCUS){
    //     // const newState = JSON.parse(JSON.stringify(state));
    //     // // 修改newState数据并返回
    //     // newState.focused = true;
    //     // immutable对象在set的方法的时候，会结合之前immutable对象的值和设置的值，返回一个全新的对象并不会修改state
    //     return state.set('focused', true);
    // } else if (type === actionTypes.SEARCH_BLUR) {
    //     // const newState = JSON.parse(JSON.stringify(state));
    //     // // 修改newState数据并返回
    //     // newState.focused = false;
    //     return state.set('focused', false);
    // } else if (type === actionTypes.CHANGE_HEADER_LIST){
    //     return state.set('pageList', action.data)
    // }
    return state;
}