import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import axios from 'axios';
import Writer from './component/Writer';


import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount() {
        axios.get('/api/home.json').then( (res) => {
            const result = res.data.data;
            console.log('result' + result);
            const action = {
                type: "change_home_data",
                homeTopicList: result.topicList,
                homeListList: result.articleList,
                homeRecommendList: result.recommendList
            };
            this.props.changeHomeData(action);
        })
    }
}

const mapState = (state) => {
    return {

    }
};

const mapDispatch = (dispatch) => ({
        changeHomeData(action) {
            dispatch(action);
        }
});

export default connect(mapState, mapDispatch)(Home);