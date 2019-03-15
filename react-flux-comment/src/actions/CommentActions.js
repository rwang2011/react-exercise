import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';

const CommentActions = {
    loadComment() {
        console.log('2:flux分发action');
        //分发action
        AppDispatcher.dispatch({
            type: CommentConstants.LOAD_COMMENT
        });

        fetch('/api/comment/list.json')
            .then(res => {
                return res.json();
            })
            .then(value => {
                AppDispatcher.dispatch({
                    type: CommentConstants.LOAD_COMMENT_SUCCESS,
                    payload: {
                        comment: value
                    }
                });
            })
            .catch(err => {
                AppDispatcher.dispatch({
                    type: CommentConstants.LOAD_COMMENT_ERROR,
                    error: err
                });
            });
    },

    addComment(text) {
        AppDispatcher.dispatch({
            type: CommentConstants.ADD_COMMENT
        });

        fetch('/api/comment/add.json', {
            method: 'POST',
            body: JSON.stringify({ value: encodeURI(text) }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            })
            .then(value => {
                AppDispatcher.dispatch({
                    type: CommentConstants.ADD_COMMENT_SUCCESS,
                    payload: {
                        comment: value
                    }
                });
                this.loadComment();
            })
            .catch(err => {
                AppDispatcher.dispatch({
                    type: CommentConstants.ADD_COMMENT_ERROR,
                    error: err
                });
            });
    }
}

export default CommentActions;