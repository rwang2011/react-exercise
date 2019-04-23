import { combineReducers } from 'redux';
import tableReducer, { loadArticles, changeQuery, search } from '../components/List/ArticleTableRedux';
import addModalReducer,{ showModal, hideModal, addArticle } from '../components/List/AddModalRedux';

export const tableActions = {
    loadArticles,
    changeQuery,
    search
};

export const modalActions={
    showModal,
    hideModal,
    addArticle
};

export default combineReducers({
    tableInfo: tableReducer,
    modalInfo: addModalReducer
});