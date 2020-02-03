import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
} from '../style';

class Topic extends Component {
    render() {
        const {homeTopicList} = this.props;
        return (
            <TopicWrapper>
                {
                    homeTopicList.map( (item) => (
                            <TopicItem key={item.get('id')}>
                                <span className="iconfont">&#xe636;</span>
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
            </TopicWrapper>
        );
    }
}

const mapState = (state) => {
    return {
        homeTopicList: state.get('home').get('homeTopicList')
    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(Topic);