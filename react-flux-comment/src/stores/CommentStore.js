import React from 'react';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import CommentConstants from '../constants/CommentConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

let comment = [];

// 合并EventEmitter,让store拥有触发监听的功能
const CommentStore = assign({}, EventEmitter.prototype, {
    getComment() {
        return comment;
    },

    emitChange() {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener(callback);
    }

});

// 调用register()将store定义为一个flux监听器，每当dispatch分发一个action时，监听器就会被调用，此action作为参数
AppDispatcher.register(action => {
    console.log('3:flux监听器被调用,处理事件逻辑，更新数据', action.type);
    switch (action.type) {
        case CommentConstants.LOAD_COMMENT_SUCCESS:
            comment = action.payload.comment.commentList;
            console.log('4:在store中数据更新后，通过node的eventEmitter触发事件，让组件能知道store中数据变化');
            CommentStore.emitChange();
            break;
        default:
            break;
    }
});

export default CommentStore;