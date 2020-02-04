import {fromJS} from 'immutable';
import {actionTypes} from '../store/homeStoreIndex';


const defaultState = fromJS({
    homeTopicList: [],
    homeListList: [],
    homeRecommendList: [],
    showScroll: false
});

export default (state = defaultState, action) => {
    console.log("home");
    console.log(action);
    console.log(action.type);
    const type = action.type;
    switch (type) {
        case actionTypes.CHANGE_HOME_DATA :
            return changeHomeData(state, action);
        case actionTypes.CHANGE_HOME_LIST_DATA :
            return changeHomeListData(state, action);
        case actionTypes.TOGGLE_TOP_SHOW :
            return toggleTopShow(state, action);
        default:
            return state;
    }
}

const changeHomeData = (state, action) =>{
    return state.merge({
        'homeTopicList': fromJS(action.homeTopicList),
        'homeListList': fromJS(action.homeListList),
        'homeRecommendList': fromJS(action.homeRecommendList),
    });
};

const changeHomeListData = (state, action) =>{
    console.log("homeListList" + state.get('homeListList'));
    const newState = state.get('homeListList');
    return state.merge({
        'homeListList': newState.concat(fromJS(action.result))
    });
};

const toggleTopShow = (state, action) =>{
    // 获取flag
    const flag = action.flag;
    return state.set('showScroll', flag);
};