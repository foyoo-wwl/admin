import React from 'react'
import ReactDOM from 'react-dom'

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'wwl',
            age:18
        }
    }
    addAge(){
        console.log(123)
        this.setState({
            age:this.state.age+1
        })
    }
    valueChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(
            <div>
                <p>i am {this.state.name}</p> 
                <p>i am {this.state.age}</p> 
                <input type="text" onChange={(e)=>{this.valueChange(e)}}/>
                <button onClick={this.addAge.bind(this)}>加一岁</button>
                <button onClick={(e)=>{this.addAge(e)}}>加2岁</button>
            </div>
        )
    }
}
ReactDOM.render(<Component/>,document.getElementById('root'))