import React, { Component } from 'react';

class Preview extends Component {
    render() {
        const data = this.props.data || {};
        return (
            <div>
                <p>
                    <a href={`/detail/${data.id}`} onClick={this.handleClcik.bind(this, data.id)}>
                        {data.title}
                    </a>
                </p>
                <p>{data.date}</p>
                <p>{data.description}</p>
            </div>
        )
    }

    handleClcik = (id, e) => {
        e && e.preventDefault();
        this.props.push(`/detail/${id}`);
    }
}

export default Preview;