import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const changeHeaderList = (data) => ({
    type: actionTypes.CHANGE_HEADER_LIST,
    data
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