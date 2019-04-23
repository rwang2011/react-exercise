import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArticleTable from '../components/List/ArticleTable';
import AddModal from '../components/List/AddModal';
import { tableActions, modalActions } from './ListRedux';

@connect(
    state => ({
        tableInfo: state.list.tableInfo,
        modalInfo: state.list.modalInfo
    }),
    dispatch => ({
      tableActions: bindActionCreators(tableActions, dispatch),
      modalActions: bindActionCreators(modalActions, dispatch)
    })
  )
class List extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.modalActions.showModal}>新增</button>
                <ArticleTable {...this.props.tableInfo} {...this.props.tableActions} />
                <AddModal {...this.props.modalInfo} {...this.props.modalActions} />
            </div>
        )
    }
}

export default List;

