import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import { actionCreators } from  './store/homeStoreIndex';


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
        this.props.changeHomeData();
    }
}

const mapState = (state) => {
    return {

    }
};

const mapDispatch = (dispatch) => ({
        changeHomeData() {
            dispatch(actionCreators.getList())
        }
});

export default connect(mapState, mapDispatch)(Home);