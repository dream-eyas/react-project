import * as actionTypes from './actionTypes';
import axios from 'axios';

// 内部用
const changeHeaderList = (data) => ({
    type: actionTypes.CHANGE_HEADER_LIST,
    data
});

// 外部用
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
    return (dispatch) => {
        console.log("121");
        axios.get('/headerList.json').then( (res) =>{
            const data = res.data;
            console.log('data->' + data);
            const action = changeHeaderList(data.data);
            dispatch(action);
        });
    }
};