const SET_NEWS_SOURCE = 'SET_NEWS_SOURCE';
const SET_NEWS_LIST_DATA = 'SET_NEWS_LIST_DATA';

const setNewsSource = (source) =>{
    return {
        type: SET_NEWS_SOURCE,
        source
    }
}

const setNewsListData = (newsListData) =>{
    return {
        type: SET_NEWS_LIST_DATA,
        newsListData
    }
}

export {
    SET_NEWS_SOURCE,
    setNewsSource,
    SET_NEWS_LIST_DATA,
    setNewsListData
}