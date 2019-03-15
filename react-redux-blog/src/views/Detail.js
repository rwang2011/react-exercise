import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../components/Detail/Content';
import { actions } from './DetailRedux';

class Detail extends Component {
    render() {
        return (
            <Content
                {...this.props.detailInfo}
                {...this.props.detailAction}
                routeParams={this.props.routeParams}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        detailInfo: state.detail.detailInfo,
        routing: state.routing
    }
}

function mapDispatchToProps(dispatch) {
    return {
        detailAction: bindActionCreators(actions, dispatch),
        // push: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);