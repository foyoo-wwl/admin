import React from 'react'
import ReactDOM from 'react-dom'
class Son extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:'red'
        }
    }
    handleClick(){
        this.props.changeSonColor(this.state.color)
    }
    render(){
        return (
            <div>
                <h1>Son</h1>
                <button onClick={(e)=>this.handleClick(e)}>改变son2颜色</button>
            </div>
        )
    }
}
class Son2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:'red'
        }
    }
    render(){
        return (
            <div style={{background:this.props.bgColor}}>
                <h1>Son2</h1>
            </div>
        )
    }
}
class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bgColor:'#ccc'
        }
    }
    changeSon2(co){
        this.setState({
            bgColor:co
        })
    }
    render(){
        return(
            <div>
                <Son changeSonColor={(color)=>this.changeSon2(color)}/>
                <Son2 bgColor={this.state.bgColor}/>
            </div>
        )
    }
}

ReactDOM.render(<Father/>,document.getElementById('root'))