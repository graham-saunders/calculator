import React, { Component } from 'react';

export default class Button extends Component {
    handleClick () {
        this.props.clickHandler(this.props.value);
    }
    render() {
        return (
            <button
                onClick={this.handleClick.bind(this)}
                value={this.props.value}
                className={this.props.classValue}>
                {this.props.display}
            </button>
        );
    }
}