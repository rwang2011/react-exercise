import React from 'react';
import './index.css';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comment = this.props.comment || [];
        return (
            <div className="comment-list">
                {
                    comment.map((vo, index) => {
                        return (
                            <div className="comment-item" key={index}>
                                <div className="comment-content">{vo.content}</div>
                                <div className="comment-footer">{`${vo.publishTime} ${vo.name}`}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CommentList;