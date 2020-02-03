import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';


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
        case 'change_home_data':
            return state.merge({
                'homeTopicList': fromJS(action.homeTopicList),
                'homeListList': fromJS(action.homeListList),
                'homeRecommendList': fromJS(action.homeRecommendList),
            });
        default:
            return state;
    }
}