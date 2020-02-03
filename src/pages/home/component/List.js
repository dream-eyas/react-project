import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    ListItem,
    ListInfo
} from '../style';

class List extends Component {
    render() {
        const {homeListList} = this.props;

        return (
            <div>
                {
                    homeListList.map( (item) => (
                        <ListItem>
                            <span className="iconfont">&#xe624;</span>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        homeListList: state.get('home').get('homeListList')
    }
};

const mapDispatch = (dispatch) => {
    return {

    }
};

export default connect(mapState, mapDispatch)(List);