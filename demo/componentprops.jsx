import React from 'react'
import ReactDOM from 'react-dom'
class Xq extends React.Component{
    render(){
        return(
            <h1>xq</h1>
        )
    }
}
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(props){
        return <h1>{this.props.title}</h1>
    }
}
class App extends React.Component{
    render(){
        return(
            <div className='wwl'>
                
                <Title title='jaychou'/>
                {/* 单纯组件 */}
                <Xq/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))