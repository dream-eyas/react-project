import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends PureComponent {
    render() {
        const {homeRecommendList} = this.props;

        return (
            <div>
                <RecommendWrapper>
                    {
                        homeRecommendList.map( (item) => (
                            <RecommendItem key={item.get('id')} imgUrl = {item.get('imgUrl')}/>
                        ))
                    }
                </RecommendWrapper>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        homeRecommendList: state.get('home').get('homeRecommendList')
    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(Recommend);