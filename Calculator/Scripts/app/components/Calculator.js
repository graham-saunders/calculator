import React, { Component } from 'react';
import StandardButtonList from './StandardButtonList';
import RomanNumeralButtonList from './RomanNumeralButtonList';
import Switch from './Switch';
import Screen from './Screen';

const API_URL = 'http://localhost:50120/api';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            next: '',
            operator: null,
            isRomanNumeral: false
        };
    }

    getCalculation(val) {
        var isDivide = this.state.operator === '/';
        var req = {
            operator: val === '=' || val === '/' && !isDivide && this.state.total !== 0
                ? this.state.operator
                : val,
            total: this.state.total,
            next: this.state.next
        };

        fetch(`${API_URL}/calculator/`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(req)
        }).then((response) => response.json()).then(res => {
            if (res.total || res.total === 0) {
                this.setState({ total: res.total, next: '' });
            }
        });
    }

    updateNextNumber(val) {
        this.setState({
            next: parseFloat(val) === 0 && this.state.next === ''
                ? ''
                : this.state.isRomanNumeral
                    ? (parseFloat(this.state.next === '' ? '0' : this.state.next) + parseFloat(val)).toFixed()
                    : this.state.next + val
        });
    }

    addDecimalPlace(val) {
        this.setState({ next: this.state.next === '' ? '0' + val : this.state.next + val });
    }

    addPlusMinus(val) {
        var number = this.state.next !== '' && !isNaN(this.state.next)
            ? this.state.next
            : this.state.total.toFixed();
        var newNumber = number.indexOf('-') > -1
            ? number.replace('-', '')
            : '-' + number;

        if (parseFloat(number) === this.state.total) {
            this.setState({
                total: newNumber,
                next: '',
                operator: ''
            });
        } else {
            this.setState({
                next: newNumber,
                operator: ''
            });
        }
    }

    getButtonList() {
        return this.state.isRomanNumeral
            ? <RomanNumeralButtonList
                clickHandler={this.handleClick.bind(this)}
            />
            : <StandardButtonList
                clickHandler={this.handleClick.bind(this)}
            />
    }

    handleClick(val) {
        if (!isNaN(val)) {
            this.updateNextNumber(val);
        }
        else if (val === '.') {
            this.addDecimalPlace(val);
        }
        else if (val === '+/-') {
            this.addPlusMinus(val);
        }
        else {
            this.setState({ operator: val });
            this.getCalculation(val);
        }
    }

    handleChange() {
        this.setState({
            isRomanNumeral: !this.state.isRomanNumeral
        });
    }

    render() {
        return (
            <div className="calculator">
                <div className="row collapse">
                    <div className="column md-4">
                        <h1>Calculator</h1>
                    </div>
                    <div className="column md-6">
                        <Switch
                            changeHandler={this.handleChange.bind(this)}
                        />
                    </div>
                </div>
                <Screen
                    total={this.state.total}
                    next={this.state.next}
                    isRomanNumeral={this.state.isRomanNumeral}
                />
                {this.getButtonList()}
            </div>
        );
    }
}