const intialState = {
    loading: false,
    error: false,
    articleInfo: null
};

const LOAD_DETAIL = "LOAD_DETAIL";
const LOAD_DETAIL_SUCCESS = "LOAD_DETAIL_SUCCESS";
const LOAD_DETAIL_ERROR = "LOAD_DETAIL_ERROR";

export function loadDetail(id) {
    console.log(id)
    return {
        types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_ERROR],
        url: `/api/article/${id}.json`
    }
}

export default function COntentReducer(state = intialState, action) {
    switch (action.type) {
        case LOAD_DETAIL:
            return {
                ...state,
                loading: true,
                error: false
            };
        case LOAD_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                articleInfo: action.payload
            };
        case LOAD_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                articleInfo: null
            };
        default: return state;
    }
}