import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from  './store/headerStoreIndex';
import {Link} from 'react-router-dom';

import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition, Button, SearchWrapper
} from './style';

class Header1 extends Component{

    getListArea (flag) {

        const {pageList} = this.props;

        const aa = [];

        pageList.forEach(function (item, index) {
            aa.push(<SearchInfoItem key={index}>{item}</SearchInfoItem>);
        });

        if (flag) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {aa}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }


    render() {
        const {focused, handleInputFocus, handleInputBlur, pageList} = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载App</NavItem>
                    <NavItem className = 'right'>登录</NavItem>
                    <NavItem className = 'right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames= "slide">
                            <NavSearch
                                className = {focused ? 'focused': ''}
                                onFocus={ () => handleInputFocus(pageList)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <span className = {focused ? 'iconfont focused': 'iconfont'}>&#xe64d;</span>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className = 'writing'>
                        <span className="iconfont">&#xe624;</span>
                        写文章</Button>
                    <Button className= 'reg' >注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        pageList: state.get('header').get('pageList')
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(pageList) {
            console.log("handleInputFocus");
            console.log('pageList' + pageList);
            const action = actionCreators.searchFocus();
            dispatch(action);
            // 只调取一次
            (pageList.size === 0) && dispatch(actionCreators.getList());
        },
        handleInputBlur() {
            console.log("handleInputBlur");
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header1);

