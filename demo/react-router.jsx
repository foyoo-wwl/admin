import React from "react";
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link,Switch } from "react-router-dom";

class CustomLinkExample extends React.Component{
    render(){
        return (
            <Router>
              <div>
                <Wrapper></Wrapper>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </Router>
        )
    }

}
class Wrapper extends React.Component{
    render(){
        return(
            <div>
                <Link to="/home" >home</Link><br/>
                <Link to="/home/123" >home/123</Link><br/>
                <Link to="/home/sub" >sub</Link><br/>
                <Link to="/about" label="About">About</Link>
            </div>

        )
    }
}
class Home extends React.Component{
    render(){
        return (
            <div>
                <h2>Home</h2> 
                <Switch>                        
                    <Route 
                        exact
                        path={`${this.props.match.path}`}                         
                        render={()=>{
                            return <p>不带参数</p>
                        }}                       
                    />
                    <Route 
                        path={`${this.props.match.path}/sub`} 
                        render={()=>{
                            return <p>参数是sub</p>
                        }}                    
                    />
                    <Route 
                        path={`${this.props.match.path}/:id`} 
                        render={(route)=>{
                            return <p>参数是{route.match.params.id}</p>
                        }}                    
                    />
                </Switch>
            </div>
        );
    }

}

class About extends React.Component{
    render(){
        return (
            <div>
              <h2>About</h2>
            </div>
        );
    }

}
ReactDOM.render(
    <CustomLinkExample/>
,document.getElementById('root'))