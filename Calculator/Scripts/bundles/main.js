webpackJsonp([0],{

/***/ 0:
/*!****************************!*\
  !*** ./Scripts/app/App.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _calculator = __webpack_require__(/*! ./components/calculator */ 168);
	
	var _calculator2 = _interopRequireDefault(_calculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_calculator2.default, null), document.getElementById('root'));

/***/ },

/***/ 168:
/*!**********************************************!*\
  !*** ./Scripts/app/components/calculator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _StandardButtonList = __webpack_require__(/*! ./StandardButtonList */ 169);
	
	var _StandardButtonList2 = _interopRequireDefault(_StandardButtonList);
	
	var _RomanNumeralButtonList = __webpack_require__(/*! ./RomanNumeralButtonList */ 171);
	
	var _RomanNumeralButtonList2 = _interopRequireDefault(_RomanNumeralButtonList);
	
	var _Switch = __webpack_require__(/*! ./Switch */ 172);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	var _Screen = __webpack_require__(/*! ./Screen */ 173);
	
	var _Screen2 = _interopRequireDefault(_Screen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var API_URL = 'http://localhost:50120/api';
	var API_HEADERS = {
	    'Content-Type': 'application/json'
	};
	
	var Calculator = function (_Component) {
	    _inherits(Calculator, _Component);
	
	    function Calculator(props) {
	        _classCallCheck(this, Calculator);
	
	        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));
	
	        _this.state = {
	            total: 0,
	            next: '',
	            operator: null,
	            isRomanNumeral: false
	        };
	        return _this;
	    }
	
	    _createClass(Calculator, [{
	        key: 'getCalculation',
	        value: function getCalculation(val) {
	            var _this2 = this;
	
	            var isDivide = this.state.operator === '/';
	            var req = {
	                operator: val === '=' || val === '/' && !isDivide && this.state.total !== 0 ? this.state.operator : val,
	                total: this.state.total,
	                next: this.state.next
	            };
	
	            fetch(API_URL + '/calculator/', {
	                method: 'post',
	                headers: API_HEADERS,
	                body: JSON.stringify(req)
	            }).then(function (response) {
	                return response.json();
	            }).then(function (res) {
	                if (res.total || res.total === 0) {
	                    _this2.setState({ total: res.total, next: '' });
	                }
	            });
	        }
	    }, {
	        key: 'updateNextNumber',
	        value: function updateNextNumber(val) {
	            this.setState({
	                next: parseFloat(val) === 0 && this.state.next === '' ? '' : this.state.isRomanNumeral ? (parseFloat(this.state.next === '' ? '0' : this.state.next) + parseFloat(val)).toFixed() : this.state.next + val
	            });
	        }
	    }, {
	        key: 'addDecimalPlace',
	        value: function addDecimalPlace(val) {
	            this.setState({ next: this.state.next === '' ? '0' + val : this.state.next + val });
	        }
	    }, {
	        key: 'addPlusMinus',
	        value: function addPlusMinus(val) {
	            var number = this.state.next !== '' && !isNaN(this.state.next) ? this.state.next : this.state.total.toFixed();
	            var newNumber = number.indexOf('-') > -1 ? number.replace('-', '') : '-' + number;
	
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
	    }, {
	        key: 'getButtonList',
	        value: function getButtonList() {
	            return this.state.isRomanNumeral ? _react2.default.createElement(_RomanNumeralButtonList2.default, {
	                clickHandler: this.handleClick.bind(this)
	            }) : _react2.default.createElement(_StandardButtonList2.default, {
	                clickHandler: this.handleClick.bind(this)
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(val) {
	            if (!isNaN(val)) {
	                this.updateNextNumber(val);
	            } else if (val === '.') {
	                this.addDecimalPlace(val);
	            } else if (val === '+/-') {
	                this.addPlusMinus(val);
	            } else {
	                this.setState({ operator: val });
	                this.getCalculation(val);
	            }
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange() {
	            this.setState({
	                isRomanNumeral: !this.state.isRomanNumeral
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'calculator' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(
	                            'h1',
	                            null,
	                            'Calculator'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-6' },
	                        _react2.default.createElement(_Switch2.default, {
	                            changeHandler: this.handleChange.bind(this)
	                        })
	                    )
	                ),
	                _react2.default.createElement(_Screen2.default, {
	                    total: this.state.total,
	                    next: this.state.next,
	                    isRomanNumeral: this.state.isRomanNumeral
	                }),
	                this.getButtonList()
	            );
	        }
	    }]);
	
	    return Calculator;
	}(_react.Component);
	
	exports.default = Calculator;

/***/ },

/***/ 169:
/*!******************************************************!*\
  !*** ./Scripts/app/components/StandardButtonList.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(/*! ./Button */ 170);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonList = function (_React$Component) {
	    _inherits(ButtonList, _React$Component);
	
	    function ButtonList() {
	        _classCallCheck(this, ButtonList);
	
	        return _possibleConstructorReturn(this, (ButtonList.__proto__ || Object.getPrototypeOf(ButtonList)).apply(this, arguments));
	    }
	
	    _createClass(ButtonList, [{
	        key: 'handleClick',
	        value: function handleClick(value1) {
	            this.props.clickHandler(value1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'button-list' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'AC', value: 'C', classValue: 'clear' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '+/-', value: '+/-' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '%', value: '%' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '/', value: '/', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '7', value: '7' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '8', value: '8' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '9', value: '9' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'x', value: 'X', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '4', value: '4' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '5', value: '5' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '6', value: '6' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '-', value: '-', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '1', value: '1' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '2', value: '2' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '3', value: '3' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '+', value: '+', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-6' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '0', value: '0' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '.', value: '.' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-3' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '=', value: '=', classValue: 'operator' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ButtonList;
	}(_react2.default.Component);
	
	exports.default = ButtonList;

/***/ },

/***/ 170:
/*!******************************************!*\
  !*** ./Scripts/app/components/Button.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }
	
	    _createClass(Button, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.clickHandler(this.props.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'button',
	                {
	                    onClick: this.handleClick.bind(this),
	                    value: this.props.value,
	                    className: this.props.classValue },
	                this.props.display
	            );
	        }
	    }]);
	
	    return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ },

/***/ 171:
/*!**********************************************************!*\
  !*** ./Scripts/app/components/RomanNumeralButtonList.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(/*! ./Button */ 170);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonList = function (_React$Component) {
	    _inherits(ButtonList, _React$Component);
	
	    function ButtonList() {
	        _classCallCheck(this, ButtonList);
	
	        return _possibleConstructorReturn(this, (ButtonList.__proto__ || Object.getPrototypeOf(ButtonList)).apply(this, arguments));
	    }
	
	    _createClass(ButtonList, [{
	        key: 'handleClick',
	        value: function handleClick(value1) {
	            this.props.clickHandler(value1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'button-list' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-8' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'AC', value: 'C', classValue: 'clear' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '+', value: '+', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'D', value: '500' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'M', value: '1000' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '/', value: '/', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'L', value: '50' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'C', value: '100' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'x', value: 'X', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'V', value: '5' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'X', value: '10' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '-', value: '-', classValue: 'operator' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-8' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: 'I', value: '1' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'column md-4' },
	                        _react2.default.createElement(_Button2.default, { clickHandler: this.handleClick.bind(this), display: '=', value: '=', classValue: 'operator' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ButtonList;
	}(_react2.default.Component);
	
	exports.default = ButtonList;

/***/ },

/***/ 172:
/*!******************************************!*\
  !*** ./Scripts/app/components/Switch.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Switch = function (_Component) {
	    _inherits(Switch, _Component);
	
	    function Switch() {
	        _classCallCheck(this, Switch);
	
	        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
	    }
	
	    _createClass(Switch, [{
	        key: "handleChange",
	        value: function handleChange() {
	            this.props.changeHandler();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "label",
	                null,
	                "Enable Roman Numerals",
	                _react2.default.createElement("input", {
	                    type: "checkbox",
	                    onChange: this.handleChange.bind(this) }),
	                _react2.default.createElement("span", { className: "switch" })
	            );
	        }
	    }]);
	
	    return Switch;
	}(_react.Component);
	
	exports.default = Switch;

/***/ },

/***/ 173:
/*!******************************************!*\
  !*** ./Scripts/app/components/Screen.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ConvertToRoman = __webpack_require__(/*! ../logic/ConvertToRoman */ 174);
	
	var _ConvertToRoman2 = _interopRequireDefault(_ConvertToRoman);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Screen = function (_React$Component) {
	    _inherits(Screen, _React$Component);
	
	    function Screen() {
	        _classCallCheck(this, Screen);
	
	        return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
	    }
	
	    _createClass(Screen, [{
	        key: 'getDisplay',
	        value: function getDisplay() {
	            var number = this.props.next !== '' && !isNaN(this.props.next) ? this.props.next : this.props.total;
	
	            if (this.props.isRomanNumeral) {
	                var romanNumeral = (0, _ConvertToRoman2.default)(number);
	                return romanNumeral === '' ? 'Nulla' : romanNumeral;
	            } else {
	                return number;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'row collapse' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'column lg-12' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'screen' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'total' },
	                            this.getDisplay()
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Screen;
	}(_react2.default.Component);
	
	exports.default = Screen;

/***/ },

/***/ 174:
/*!*********************************************!*\
  !*** ./Scripts/app/logic/ConvertToRoman.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = convertToRoman;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function convertToRoman(value) {
	    var uni = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	    var dec = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	    var cen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	    var mil = ["", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMMM"];
	    var res = [];
	
	    if (value / 1000 > 0) {
	        res = res.concat(mil[Math.floor(value / 1000)]);
	    }
	
	    if (value / 100 > 0) {
	        res = res.concat(cen[Math.floor(value % 1000 / 100)]);
	    }
	
	    if (value / 10 > 0) {
	        res = res.concat(dec[Math.floor(value % 1000 % 100 / 10)]);
	    }
	
	    res = res.concat(uni[Math.floor(value % 1000 % 100 % 10)]);
	    return res.join('');
	}

/***/ }

});
//# sourceMappingURL=main.js.map