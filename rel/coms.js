"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.C_error = exports.C_index = exports.C3 = exports.C2 = exports.C1 = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 子组件
 */
function C_index() {
    return _react2.default.createElement(
        "div",
        { className: "c_index com" },
        _react2.default.createElement(
            "p",
            null,
            "\u6211\u662F\u9ED8\u8BA4\u9875\u9762"
        )
    );
}

/**
 * 子组件
 */
function C1(props) {
    return _react2.default.createElement(
        "div",
        { className: "c1 com" },
        _react2.default.createElement(
            "p",
            null,
            "\u6211\u662F\u7EC4\u4EF61:\u6CE8\u5165\u7684\uFF1A",
            props.route.title
        )
    );
}

function C2() {
    return _react2.default.createElement(
        "div",
        { className: "c2 com" },
        _react2.default.createElement(
            "p",
            null,
            "\u6211\u662F\u7EC4\u4EF62"
        )
    );
}

function C3() {
    return _react2.default.createElement(
        "div",
        { className: "c3 com" },
        _react2.default.createElement(
            "p",
            null,
            "\u6211\u662F\u7EC4\u4EF63"
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { to: "com_error/{\"flag\":\"1\",\"content\":\"\u6211\u662F\u4F20\u9012\u6765\u7684json\u6570\u636E\uFF01\"}" },
            _react2.default.createElement(
                "p",
                null,
                "\u70B9\u51FB\u5BFC\u822A\u9519\u8BEF\u9875\uFF01"
            )
        )
    );
}

var C_error = function (_React$Component) {
    _inherits(C_error, _React$Component);

    function C_error(props) {
        _classCallCheck(this, C_error);

        var _this = _possibleConstructorReturn(this, (C_error.__proto__ || Object.getPrototypeOf(C_error)).call(this, props));

        console.log(props.params.flagJson);
        console.log(_typeof(_this.props.params.flagJson));
        _this.state = {
            flag: JSON.parse(props.params.flagJson),
            history: props.history
        };
        return _this;
    }

    _createClass(C_error, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "c_error com " },
                _react2.default.createElement(
                    "p",
                    null,
                    "\u8FD9\u662F\u9519\u8BEF\u9875\u9762\uFF01\u4F20\u8FC7\u6765\u4E00\u4E2AJSON\uFF0C\u4EE3\u66FF\u591A\u4E2A\u53C2\u6570\uFF1A",
                    "\u6807\u5FD7\uFF1Aflag:" + this.state.flag.flag + ",content:" + this.state.flag.content
                ),
                _react2.default.createElement(
                    "h2",
                    { className: "back", onClick: function onClick() {
                            //使用代码动态导航
                            _this2.state.history.goBack();
                        } },
                    "\u8FD4\u56DE"
                )
            );
        }
    }]);

    return C_error;
}(_react2.default.Component);

exports.C1 = C1;
exports.C2 = C2;
exports.C3 = C3;
exports.C_index = C_index;
exports.C_error = C_error;