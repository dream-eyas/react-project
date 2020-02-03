import {fromJS} from 'immutable';

const defaultState = fromJS({
    homeTopicList: [
        {
            "id": 1,
            "title": "社会热点"
        },
        {
            "id": 2,
            "title": "手绘"
        },
        {
            "id": 3,
            "title": "新鲜蔬菜"
        },
        {
            "id": 4,
            "title": "社会热点"
        },
        {
            "id": 5,
            "title": "手绘"
        },
        {
            "id": 6,
            "title": "新鲜蔬菜"
        }, {
            "id": 7,
            "title": "社会热点"
        },
        {
            "id": 8,
            "title": "手绘"
        },
        {
            "id": 9,
            "title": "新鲜蔬菜"
        }
    ],
    homeListList: [
        {
            "id": 1,
            "title": "业余写作如何实现月入过万，与其观望，不如这里并肩",
            "desc": "关于写作自己一直是认为兴趣大于天赋，虽然自己一直没写出啥名堂，但是不影响自己古今中外天南海北正史外史的阅读，并且，一直记得那个小笑话，一个人吃到..",
            "imgUrl": "https://upload-images.jianshu.io/upload_images/15974930-623b8c97131ebab1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 2,
            "title": "看了31岁袁姗姗的生活，我突然爱上了自律",
            "desc": "《我家那闺女》话题度一直比较高的两个女明星是袁姗姗和吴昕。吴昕的生活状态总体上是宅，之前关于吴昕，我已经写过，不再多聊。 很想和大家探讨一下袁姗...",
            "imgUrl": "https://upload-images.jianshu.io/upload_images/15974930-623b8c97131ebab1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 3,
            "title": "林更新参加小学同学聚会，我却抱怨：岁月对明星真仁慈！",
            "desc": "具有热搜体质的林更新，2月21号又悄悄登顶微博热搜榜了。与之前不同的是，这次他热搜的关键词是“小学同学聚会”。 是的，林更新也跟大家一样，逢年过...",
            "imgUrl": "https://upload-images.jianshu.io/upload_images/15974930-623b8c97131ebab1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 4,
            "title": "程序员真的是吃年轻饭的吗？大龄程序员通过HR面试，上级却说送走！！",
            "desc": "程序员现在真的是一个较为尴尬的岗位，很多人吐槽这是个吃青春饭的岗位，如果到中年不转行或者考虑后路的话就只能被辞退了，哪怕国内的一些大厂比如华为，...",
            "imgUrl": "https://upload-images.jianshu.io/upload_images/15974930-623b8c97131ebab1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            "id": 5,
            "title": "这是一篇看哭了许多人的爆文",
            "desc": "这不是煽情 就真实的发生在我们身边的事 一位成绩优秀的青年，到一家大公司申请一个经理的职位，第一次面试过后，最后由董事长亲自在进行一次面试，做最...",
            "imgUrl": "https://upload-images.jianshu.io/upload_images/15974930-623b8c97131ebab1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
    ],
    homeRecommendList: [
        {
            "id": 1,
            "imgUrl": 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            "id": 2,
            "imgUrl": 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            "id": 3,
            "imgUrl": 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            "id": 4,
            "imgUrl": 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        },
    ]
});

export default (state = defaultState, action) => {
    console.log(action);
    console.log(action.type);
    const type = action.type;

    switch (type) {
        default :
            return state;
    }
}