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
        this.props.onChange(this.state.color)
    }
    onChange(a){
        console.log(a)
    }
    render(){
        return (
            <div>
                <h1>Son</h1>
                <button onClick={(e)=>this.handleClick(e)}>改变颜色</button>
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
    changeColor(co){
        this.setState({
            bgColor:co
        })
    }
    render(){
        return(
            <div style={{background:this.state.bgColor}}>
                <p>父组件颜色</p> 
                <Son onChange={(color) => this.changeColor(color)}/>
            </div>
        )
    }
}

ReactDOM.render(<Father/>,document.getElementById('root'))