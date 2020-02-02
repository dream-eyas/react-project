import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style';

class Header extends Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            focused: false
        };

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames= "slide">
                            <NavSearch
                                className = {this.state.focused ? 'focused': ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className = {this.state.focused ? 'iconfont focused': 'iconfont'}>&#xe64d;</span>
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

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}



export default Header;

