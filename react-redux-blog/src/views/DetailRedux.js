import { combineReducers } from 'redux';
import ContentReducer, { loadDetail } from '../components/Detail/ContentRedux';

export default combineReducers({
    detailInfo: ContentReducer
});

export const actions = {
    loadDetail
};