import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';

import rootReducers from './reducers';
import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
    afterFetch({ action, result }) {
        return result.json().then(data => {
            return Promise.resolve({
                action,
                result: data
            });
        });
    }
});

// 用compose方法增强createStore方法
const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,    // 支持异步请求
        FetchMiddleware,    // 扩展action类型，让redux可以解析各种类型的action(对象，方法，promise等)
        routerMiddleware(hashHistory)   // 将redux store与router状态结合在一起，通过分发action来更改路由，store.dispatch(push('/detail'))
    ),
    DevTools.instrument()
)(createStore);


// 实现router状态与redux store的统一
const reducer = combineReducers(Object.assign({}, rootReducers, {
    routing: routerReducer
}));


export default function configStore(intialState) {
    const store = finalCreateStore(reducer, intialState);
    return store;
}