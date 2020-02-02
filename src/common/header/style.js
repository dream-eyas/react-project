import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    // background: red;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    };
    &.right {
        float: right;
        color: #969696;
    };
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    // border: 1px solid red;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        // background: red;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
`;

export const Addition = styled.div`
    // border: 1px solid red;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 56px;
`;

export const Button = styled.button`
    border: 1px solid #ec6149;
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    line-height: 38px;
    border-radius: 19px;
    padding:0 20px;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: #ec6149;
    }
    
`;