import React from 'react';

class Content extends React.Component {
    componentDidMount() {
        this.props.loadDetail(this.props.routeParams.id);
    }

    render() {
        const { loading, error, articleInfo } = this.props;
        const data = articleInfo || {};

        if (loading) {
            return <div>loading....</div>
        }

        if (error) {
            return <div>there is something wrong</div>
        }

        return (
            <div>
                <h4>{data.title}</h4>
                <p>{data.date}</p>
                <p>摘要：{data.description}</p>
                <div>{data.content}</div>
            </div>
        )
    }
}

export default Content;