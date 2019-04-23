// constants
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";
const CHANGE_QUERY = 'CHANGE_QUERY';

const initialState = {
    loading: false,
    error: false,
    articleList: [],
    query: '',
};

export function changeQuery(e) {
    return {
        type: CHANGE_QUERY,
        payload: {
            query: e && e.target.value.trim()
        }
    }
}

export function search() {
    return (dispatch, getState) => {
        // const { query } = getState().list.tableInfo;
        return dispatch(loadArticles());
    }
}

export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: "/api/articles.json"
    }
}

export default function tableReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return {
                ...state,
                loading: true,
                error: false
            };
        case LOAD_ARTICLES_SUCCESS:
            let list = action.payload || [];
            if (list.length && state.query) {
                list = list.filter(vo => vo.title.indexOf(state.query) > -1);
            }
            return {
                ...state,
                loading: false,
                error: false,
                articleList: list
            };
        case LOAD_ARTICLES_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
                articleList: []
            };
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.payload.query
            };
        default:
            return state;
    }
}