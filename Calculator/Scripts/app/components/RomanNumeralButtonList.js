import React, { Component } from 'react';
import Button from './Button';

export default class ButtonList extends React.Component {
    handleClick(value1) {
        this.props.clickHandler(value1);
    }

    render() {
        return (
            <div className="button-list">
                <div className="row collapse">
                    <div className="column md-8">
                        <Button clickHandler={this.handleClick.bind(this)} display="AC" value="C" classValue="clear" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="+" value="+" classValue="operator" />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="D" value="500" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="M" value="1000" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="/" value="/" classValue="operator" />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="L" value="50" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="C" value="100" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="x" value="X" classValue="operator" />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="V" value="5" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="X" value="10" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="-" value="-" classValue="operator" />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-8">
                        <Button clickHandler={this.handleClick.bind(this)} display="I" value="1" />
                    </div>
                    <div className="column md-4">
                        <Button clickHandler={this.handleClick.bind(this)} display="=" value="=" classValue="operator"  />
                    </div>
                </div>
            </div>
        );
    }
}