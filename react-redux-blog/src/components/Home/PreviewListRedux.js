// 包含了PreviewList组件需要用到的所有action creator，reducer,constants

import React from 'react';

// 初始state
const intialState = {
    loading: false,
    error: false,
    articleList: []
};

// constants
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";


//action creator
export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: "/api/articles.json"
    }
}

/**
 * reducer
 * @param {*} state  初始化之外，state取值为上一次响应action时计算出的那个state
 * @param {*} action 
 */
export default function previewList(state = intialState, action) {
    console.log('action.type:', action.type);
    switch (action.type) {
        case LOAD_ARTICLES:
            return {
                ...state,
                loading: true,
                error: false
            };
        case LOAD_ARTICLES_SUCCESS:
            console.log('---', action.payload)
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload
            };
        case LOAD_ARTICLES_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
                articleList: []
            };
        default: return state;
    }

}

