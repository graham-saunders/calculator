import React, { Component } from 'react';
import convertToRoman from '../logic/ConvertToRoman';

export default class Screen extends React.Component {
    getDisplay() {
        var number = this.props.next !== '' && !isNaN(this.props.next)
            ? this.props.next
            : this.props.total;

        if (this.props.isRomanNumeral) {
            var romanNumeral = convertToRoman(number);
            return romanNumeral === '' ? 'Nulla' : romanNumeral;
        } else {
            return number;
        }
    }
    render() {
        return (
            <div className="row collapse">
                <div className="column lg-12">
                    <div className="screen">
                        <div className="total">{this.getDisplay()}</div>
                    </div>
                </div>
            </div>
        );
    }
}