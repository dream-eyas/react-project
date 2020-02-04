import { actionTypes } from  './homeStoreIndex';
import axios from 'axios';


// 内部用
const changeHomeList = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    homeTopicList: result.homeTopicList,
    homeListList: result.homeListList,
    homeRecommendList: result.homeRecommendList
});

export const getList = () => {
    return (dispatch) => {
        console.log("121111");
        axios.get('/api/home.json').then( (res) => {
            const result = res.data.data;
            const action = changeHomeList(result);
            dispatch(action);
        });
    }
};