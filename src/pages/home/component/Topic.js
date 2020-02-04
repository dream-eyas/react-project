import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
} from '../style';

class Topic extends PureComponent {
    render() {
        const {homeTopicList} = this.props;
        return (
            <TopicWrapper>
                {
                    homeTopicList.map( (item) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt=''
                            />
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