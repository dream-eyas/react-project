import {fromJS} from 'immutable';
import {actionTypes} from '../store/homeStoreIndex';


const defaultState = fromJS({
    homeTopicList: [],
    homeListList: [],
    homeRecommendList: []
});

export default (state = defaultState, action) => {
    console.log("home");
    console.log(action);
    console.log(action.type);
    const type = action.type;
    switch (type) {
        case actionTypes.CHANGE_HOME_DATA :
            return state.merge({
                'homeTopicList': fromJS(action.homeTopicList),
                'homeListList': fromJS(action.homeListList),
                'homeRecommendList': fromJS(action.homeRecommendList),
            });
        case actionTypes.CHANGE_HOME_LIST_DATA :
            console.log("homeListList" + state.get('homeListList'));
            const newState = state.get('homeListList');
        return state.merge({
                'homeListList': newState.concat(fromJS(action.result))
            });
        default:
            return state;
    }
}