import React from 'react'
import ReactDOM from 'react-dom'
class Son extends React.Component{
    //构造函数
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = ({
            name:'xq'
        })
    }
    //组件将要加载
    componentWillMount(){
        console.log('componentWillMount')
    }
    //组件加载完成
    componentDidMount(){
        console.log('componentDidMount')
    }
    //处理点击事件
    handleClick(){
        console.log('更新数据')
        this.setState({
            name:this.props.wwl
        })
    }
    //将要接受父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    //子组件是否应该更新
    shouldComponentUpdate(){ 
        console.log("shouldComponentUpdate")
        return true
    }
    //组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    //组件更新完成
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    //组件销毁
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    //渲染
    render(){
        console.log('render')
        return(
            <div>
                {this.state.name}
                <button onClick={this.handleClick.bind(this)}>更新组件</button>
            </div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            age:20,
            hasChild:true
        })
    }
    changeAge(){
        console.log('更新props')
        this.setState({
            age:23
        })
    }
    deleteSon(){
        console.log('删除子组件')
        this.setState({
            hasChild:false
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.hasChild?<Son wwl={this.state.age}/>:null
                }             
                <button onClick={()=>this.changeAge()}>改变props</button>
                <button onClick={()=>this.deleteSon()}>删除子组件</button>
            </div>
            
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))