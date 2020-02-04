import { actionTypes } from  './homeStoreIndex';
import axios from 'axios';
import {fromJS} from 'immutable';

// 内部用
const changeHomeList = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    homeTopicList: result.homeTopicList,
    homeListList: result.homeListList,
    homeRecommendList: result.homeRecommendList
});

const changeHomeListData = (result) => ({
    type: actionTypes.CHANGE_HOME_LIST_DATA,
    result: fromJS(result)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then( (res) => {
            const result = res.data.data;
            const action = changeHomeList(result);
            dispatch(action);
        });
    }
};

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then( (res) => {
            const result = res.data.data;
            console.log("getMoreList" + result);
            const action = changeHomeListData(result);
            dispatch(action);
        });
    }
};