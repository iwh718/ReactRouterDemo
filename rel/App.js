"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require("react-dom");

var ReactDom = _interopRequireWildcard(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _coms = require("./coms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 应用初始化渲染,demo使用的路由库已经过时
 */

var MainApp = function (_React$Component) {
    _inherits(MainApp, _React$Component);

    function MainApp() {
        _classCallCheck(this, MainApp);

        return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
    }

    _createClass(MainApp, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "app" },
                _react2.default.createElement(
                    "div",
                    { className: "nav" },
                    _react2.default.createElement(
                        "div",
                        { className: "nav-li" },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/" },
                            "ReactRouterDemo"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "nav-li" },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/com_r1", activeClassName: "nav-li-active" },
                            "\u6253\u5F00\u7EC4\u5EFA1"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "nav-li" },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/com_r2", activeClassName: "nav-li-active" },
                            "\u6253\u5F00\u7EC4\u4EF62"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "nav-li" },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/com_r3", activeClassName: "nav-li-active" },
                            "\u6253\u5F00\u7EC4\u4EF63"
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return MainApp;
}(_react2.default.Component);

ReactDom.render(_react2.default.createElement(
    _reactRouter.Router,
    null,
    _react2.default.createElement(
        _reactRouter.Route,
        { path: "/", component: MainApp },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _coms.C_index }),
        _react2.default.createElement(_reactRouter.Route, { path: "com_r1", component: _coms.C1, title: "Hi~\xA0o(*\uFFE3\u25BD\uFFE3*)\u30D6" }),
        _react2.default.createElement(_reactRouter.Route, { path: "com_r2", component: _coms.C2 }),
        _react2.default.createElement(_reactRouter.Route, { path: "com_r3", component: _coms.C3 }),
        _react2.default.createElement(_reactRouter.Route, { path: "com_error/:flagJson", component: _coms.C_error })
    )
), document.getElementById('app'));