import React from "react";
import {Link} from 'react-router'
/**
 * 子组件
 */
function C_index() {
    return (
        <div className="c_index com">
            <p>我是默认页面</p>
        </div>
    )
}

/**
 * 子组件
 */
function C1(props) {
    return (
        <div className="c1 com"><p>我是组件1:注入的：{props.route.title}</p></div>
    )
}

function C2() {
    return (
        <div className="c2 com"><p>我是组件2</p></div>
    )
}

function C3() {
    return (
        <div className="c3 com">
            <p>我是组件3</p>
            <Link to='com_error/{"flag":"1","content":"我是传递来的json数据！"}' ><p>点击导航错误页！</p></Link>
        </div>
    )
}
class C_error extends React.Component{
  
    constructor(props){
        super(props);
       // console.log(props.params.flagJson);
        this.state = {
            flag:JSON.parse(props.params.flagJson),
            history:props.history
        }
    }
    render(){
        return (
            <div className="c_error com "><p>这是错误页面！传过来一个JSON，代替多个参数：{`标志：flag:${this.state.flag.flag},content:${this.state.flag.content}`}</p><h2 className="back" onClick={()=>{
                //使用代码动态导航
                this.state.history.goBack()
            }}>返回</h2></div>
        )
    }
}

export {
    C1, C2, C3, C_index,C_error
}


