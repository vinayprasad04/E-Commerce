import {SET_NEWS_SOURCE, SET_NEWS_LIST_DATA} from '../actions/actions';

const initialState ={
    source_info:{
        selectedSource:'',
        sources:[],
        newsList:[]
    }
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_NEWS_SOURCE:
        return {
            ...state,
            ['source_info']:{
                ...state['source_info'],
                selectedSource:action.source
            }
        }

        case SET_NEWS_LIST_DATA:
        return {
            ...state,
            ['source_info']:{
                ...state['source_info'],
                newsList:action.newsListData
            }
        }

        default:
        return state
      } 
  }

  export default newsReducer;