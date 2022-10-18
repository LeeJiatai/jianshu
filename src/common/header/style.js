import styled from 'styled-components'
import logoPic from '../../statics/image/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: "/"
})`
    position: absolute;
    width: 100px;
    height: 56px;
    top: 0;
    left: 0;
    display: block;
    background: url(${logoPic});
    background-size: 100% 100%;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    height: 56px;
    padding: 0 15px;
    color: #333333;
    font-size: 17px;
    line-height: 56px;
    &.left {
        float: left;
    }

    &.right {
        color: #969696;
        float: right;
    }

    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    overflow: hidden;

    .iconfont {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 5px;
        top: 12px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;

        &.focused {
            color: #FFFFFF;
            background: #777777;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    color: #888888;
    font-size: 14px;
    border-radius: 19px;
    margin: 9px 0;
    padding: 0 35px 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    background: #eeeeee;

    &.slide-enter, &.slide-exit {
        transition: all .2s ease-out;
    }

    &.slide-enter-active {
        width: 200px;
    }

    &.slide-exit-active {
        width: 160px
    }

    &::placeholder {
        color: #999999;
    }

    &.focused {
        width: 200px;
    }
`

export const Addtion = styled.div`
    position: absolute;
    height: 56px;
    right: 0;
    top: 0;
`

export const Button = styled.div`
    float: right;
    font-size: 14px;
    margin: 9px 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    cursor: pointer;
    border: 1px solid #ec6149;

    &.reg {
        color: #ec6149;
    }

    &.writting {
        color: #FFFFFF;
        background: #ec6149;
    }
`
