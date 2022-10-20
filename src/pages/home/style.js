import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid red;
`

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-right: 15px;
    padding-top: 30px;

    .banner {
        width: 100%;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
    margin-left: 15px;
    padding-top: 30px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px;
    overflow: hidden;
    margin-left: -10px;
    border: 1px solid red;
`

export const TopicItem = styled.div`
    height:32px;
    border: 1px solid #dcdcdc;
    font-size: 14px;
    line-height: 32px;
    float: left;
    background: #f7f7f7;
    border-radius: 3px;
    padding-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;

    .topic_icon {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`
