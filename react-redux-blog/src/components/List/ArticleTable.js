import React, { Component } from 'react';
import { Table } from 'antd';
// import { } from 'redux-form-utils';


class ArticleTable extends Component {
   
    componentWillMount() {
        this._columns = [
            { title: '标题', dataIndex: 'title', key: 'title' },
            { title: '日期', dataIndex: 'date', key: 'date' },
            { title: '描述', dataIndex: 'descrption', key: 'descrption' }
        ];
    }

    componentDidMount() {
        this.props.search();
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        placeholder="输入题目关键词"
                        value={this.props.query}
                        onChange={this.props.changeQuery}
                    />
                    <button onClick={this.props.search}>查询</button>
                </div>
                <Table
                    rowKey="id"
                    dataSource={this.props.articleList}
                    columns={this._columns}
                />
            </div>
        )
    }
}

export default ArticleTable;