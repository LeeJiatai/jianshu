import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: 'hello',
            src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.uzzf.com%2Fup%2F2015-6%2F201568142811.png&refer=http%3A%2F%2Fpic.uzzf.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668822289&t=d81bd4b46c022438c65a5a65bbb07eda'
        }
    ],

    articalList: [
        {
            id: 1,
            title: '不要与内心贫穷的人在一起',
            desc: '一位女孩的母亲写给女儿的一封信，刷爆了朋友圈：女儿，听说你要带男朋友回家了。我跟你父亲很开心。但是上周跟他接触之后呢，我们却坚决不同意，我们知道，',
            pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.uzzf.com%2Fup%2F2015-6%2F201568142811.png&refer=http%3A%2F%2Fpic.uzzf.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668822289&t=d81bd4b46c022438c65a5a65bbb07eda'
        },

        {
            id: 2,
            title: '不要与内心贫穷的人在一起2',
            desc: '一位女孩的母亲写给女儿的一封信，刷爆了朋友圈：女儿，听说你要带男朋友回家了。我跟你父亲很开心。但是上周跟他接触之后呢，我们却坚决不同意，我们知道，',
            pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.uzzf.com%2Fup%2F2015-6%2F201568142811.png&refer=http%3A%2F%2Fpic.uzzf.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668822289&t=d81bd4b46c022438c65a5a65bbb07eda'
        }
    ]
})

export default function fn(state = defaultState, action) {
    const { type } = action
    switch (type) {
        default:
            return state
    }
}