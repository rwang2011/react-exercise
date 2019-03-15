import React, { Component } from 'react';
import Nav from './Nav';

class Frame extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Frame;