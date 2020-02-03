import {SEARCH_FOCUS, SEARCH_BLUR} from './actionTypes';


const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    console.log(action);
    console.log(action.type);
    const type = action.type;
    if (type === SEARCH_FOCUS){
        const newState = JSON.parse(JSON.stringify(state));
        // 修改newState数据并返回
        newState.focused = true;
        return newState;
    } else if (type === SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        // 修改newState数据并返回
        newState.focused = false;
        return newState;
    }
    return state;
}