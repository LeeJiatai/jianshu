import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
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
    width: 280px;
    float: right;
    margin-left: 15px;
    padding-top: 30px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px;
    overflow: hidden;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;

    .pic {
        width: 100px;
        height: 100px;
        display: block;
        float: right;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;

    .title {
        color: #333333;
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }

    .desc {
        color: #999999;
        font-size: 13px;
        line-height: 18px;
    }
`

export const RecommenWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 10px;
    background: url(${(props) => props.url});
    background-size: cover;
    border-radius: 8px;
`

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    margin: 30px 0;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    right: 30px;
    bottom: 50px;
    cursor: pointer;
    border: 1px solid #cccccc;
`
