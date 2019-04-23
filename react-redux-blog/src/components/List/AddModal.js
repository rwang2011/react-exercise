import React, { Component } from 'react';
import { Modal } from 'antd';
import { createForm } from 'redux-form-utils';

@createForm({
    form: 'addModal',
    fields: ['title', 'date', 'description']
})
class AddModal extends Component {

    render() {
        const { title, date, description } = this.props.fields;
        return (
            <Modal
                visible={this.props.visible}
                onOk={this.props.addArticle}
                onCancel={this.props.hideModal}
            >
                <div>
                    <div>
                        <label>标题</label>
                        <input type="text"  {...title}/>
                    </div>
                    <div>
                        <label>描述</label>
                        <input type="text" {...description}/>
                    </div>
                    <div>
                        <label>发布日期</label>
                        <input type="text" {...date}/>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default AddModal;