// 包含Home页面所有组件相关的reducer,action creator

import { combineReducers } from 'redux';
// 引入componnets/Home/PreviewListRedux.js  即Home所有组件的reducer和action creator
import previewList, { loadArticles } from '../components/Home/PreviewListRedux';


//合并后的reducer
export default combineReducers({
    list: previewList
});

export const actions = {
    loadArticles
};