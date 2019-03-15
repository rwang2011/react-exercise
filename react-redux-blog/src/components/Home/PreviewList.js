import React from 'react';
import Preview from './Preview';

class PreviewList extends React.Component {

    componentDidMount() {
        this.props.loadArticles();
    }
    render() {
        const { articleList, loading, error, push } = this.props;

        if (error) {
            return <div>there is something wrong!</div>
        }

        if (loading) {
            return <div>loading。。。</div>
        }

        return (
            <div>
                {
                    articleList.map((item, index) => <Preview data={item} key={index} push={push} />)
                }
            </div>
        )
    }
}

export default PreviewList;