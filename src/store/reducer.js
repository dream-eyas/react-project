const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    console.log(action);
    console.log(action.type);
    const type = action.type;
    if (type === 'search_focus'){
        const newState = JSON.parse(JSON.stringify(state));
        // 修改newState数据并返回
        newState.focused = true;
        return newState;
    } else if (type === 'search_blur') {
        const newState = JSON.parse(JSON.stringify(state));
        // 修改newState数据并返回
        newState.focused = false;
        return newState;
    }
    return state;
}