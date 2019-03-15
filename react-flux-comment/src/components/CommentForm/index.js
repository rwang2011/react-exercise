import React from 'react';
import Actions from '../../actions/CommentActions';
import './index.css';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="在这里输入..."
                />
                <button onClick={this.handleSubmit}>发布</button>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({ value: e && e.currentTarget && e.currentTarget.value || '' });
    }

    handleSubmit = (e) => {
        //添加
        if (this.state.value) {
            Actions.addComment(this.state.value);
            //清空文本框
            this.handleChange();
        }
    }
}

export default CommentForm;