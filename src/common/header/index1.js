import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from  './store/headerStoreIndex';

import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition, Button, SearchWrapper
} from './style';
import index from "./index";

class Header1 extends Component{

    getListArea (flag) {

        const aa = [];

        this.props.pageList.forEach(function (item, index) {
            aa.push(<SearchInfoItem key={item}>{item}</SearchInfoItem>);
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
        const {focused, handleInputFocus, handleInputBlur} = this.props;
        return(
            <HeaderWrapper>
                <Logo href='/' />
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
                                onFocus={handleInputFocus}
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
        handleInputFocus() {
            console.log("handleInputFocus");
            const action = actionCreators.searchFocus();
            dispatch(action);
            const action1 = actionCreators.getList();
            dispatch(action1);
        },
        handleInputBlur() {
            console.log("handleInputBlur");
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header1);

