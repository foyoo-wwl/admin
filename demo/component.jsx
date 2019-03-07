import React from 'react'
import ReactDOM from 'react-dom'

class Es6Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"wwl"
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({name:'jaychou'})
        },3000)
        return <h1>i am {this.props.name}</h1>
    }
}
ReactDOM.render(<Es6Component name='wwll'/>,document.getElementById('root'))