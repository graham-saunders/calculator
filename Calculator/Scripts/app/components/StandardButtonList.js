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
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="AC" value="C" classValue="clear" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="+/-" value="+/-" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="%" value="%" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="/" value="/" classValue="operator" />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="7" value="7" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="8" value="8" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="9" value="9" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="x" value="X" classValue="operator"  />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="4" value="4" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="5" value="5" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="6" value="6" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="-" value="-" classValue="operator"  />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="1" value="1" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="2" value="2" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="3" value="3" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="+" value="+" classValue="operator"  />
                    </div>
                </div>
                <div className="row collapse">
                    <div className="column md-6">
                        <Button clickHandler={this.handleClick.bind(this)} display="0" value="0" />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="." value="." />
                    </div>
                    <div className="column md-3">
                        <Button clickHandler={this.handleClick.bind(this)} display="=" value="=" classValue="operator"  />
                    </div>
                </div>
            </div>
        );
    }
}