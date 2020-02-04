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
    HomeRight,
    BackTop
} from './style';

class Home extends Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

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
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}> 顶部 </BackTop> : null }

            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

}

const mapState = (state) => {
    return {
        showScroll: state.get('home').get('showScroll')
    }
};

const mapDispatch = (dispatch) => ({
        changeHomeData() {
            dispatch(actionCreators.getList())
        },
        changeScrollTopShow() {
            console.log(document.documentElement.scrollTop);
            if ( document.documentElement.scrollTop > 400 ){
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
});

export default connect(mapState, mapDispatch)(Home);