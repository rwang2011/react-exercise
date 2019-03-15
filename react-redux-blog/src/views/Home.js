import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';

class Home extends Component {
    render() {
        return (
            <div>
                <p>Home列表</p>
                <PreviewList
                    {...this.props.acticleAction}
                    {...this.props.listInfo}
                    push={this.props.push}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("home.js mapStateToProps", state)
    return {
        listInfo: state.home.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        acticleAction: bindActionCreators(actions, dispatch),  //acticleAction是个对象
        push: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);