import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store/homeStoreIndex';

import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends PureComponent {
    render() {
        const {homeListList, getMoreList} = this.props;

        return (
            <div>
                {
                    homeListList.map( (item, index) => (
                        <ListItem  key={index}>
                            <img className='pic' src={item.get('imgUrl')} />
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        homeListList: state.get('home').get('homeListList')
    }
};

const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList());
    }
});

export default connect(mapState, mapDispatch)(List);