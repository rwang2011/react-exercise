import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Actions from '../actions/CommentActions';
import Store from '../stores/CommentStore';

class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: Store.getComment()
        };
    }

    componentDidMount() {
        //添加事件监听
        Store.addChangeListener(this.handleChange);

        console.log('1:调用事件，加载评论列表');
        Actions.loadComment();
    }

    componentWillUnmount() {
        //接触事件监听绑定
        Store.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        console.log('5:组件中的监听器被调用，更新组件state数据');
        this.setState({
            comment: Store.getComment()
        });
    }

    render() {
        return (
            <div>
                <CommentForm />
                <CommentList comment={this.state.comment} />
            </div>
        )
    }
}

export default CommentBox;