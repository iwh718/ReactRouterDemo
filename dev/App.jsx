import * as ReactDom from "react-dom";

import React from "react";
import {Router, Route, Link, IndexRoute} from 'react-router'
import {C1, C2, C3, C_error, C_index} from "./coms";

/**
 * 应用初始化渲染,demo使用的路由库已经过时
 */

class MainApp extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="nav">
                    <div className="nav-li"><Link to="/">ReactRouterDemo</Link></div>
                    <div className="nav-li"><Link to="/com_r1" activeClassName="nav-li-active">打开组建1</Link></div>
                    <div className="nav-li"><Link to="/com_r2" activeClassName="nav-li-active">打开组件2</Link></div>
                    <div className="nav-li"><Link to="/com_r3" activeClassName="nav-li-active">打开组件3</Link></div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

ReactDom.render(
    <Router>
        <Route path="/" component={MainApp}>
            <IndexRoute component={C_index}/>
            <Route path="com_r1" component={C1} title="Hi~ o(*￣▽￣*)ブ"/>
            <Route path="com_r2" component={C2}/>
            <Route path="com_r3" component={C3}/>
            {/**
             这里用的带参数的导航
             **/}
            <Route path="com_error/:flagJson" component={C_error}/>
        </Route>
    </Router>
    , document.getElementById('app'));