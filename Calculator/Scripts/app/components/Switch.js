import React, { Component } from 'react';

export default class Switch extends Component {
    handleChange() {
        this.props.changeHandler();
    }

    render() {
        return (
            <label>
                Enable Roman Numerals
                <input
                    type="checkbox"
                    onChange={this.handleChange.bind(this)} />
                <span className="switch"></span>
            </label>
        );
    }
}