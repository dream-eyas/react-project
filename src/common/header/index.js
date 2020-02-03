import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from  './store/headerStoreIndex';


import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style';

const Header = (props) => {
        const {focused, handleInputFocus, handleInputBlur} = props;
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
};

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            console.log("handleInputFocus");
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur() {
            console.log("handleInputBlur");
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

