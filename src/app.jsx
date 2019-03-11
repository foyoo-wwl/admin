import React from "react";
import ReactDOM from 'react-dom'
import Home from 'page/home/index.jsx'
import Detail from 'page/detail/index.jsx'
import LayOut from 'component/layout/index.jsx'
import Login from 'page/login/index.jsx'
import {HashRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'

import './app.css'

class App extends React.Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
                <Router>                   
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route path='/' render={props =>(
                                <LayOut>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/detail' component={Home} />
                                </LayOut>
                            )}/>
                        </Switch>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>
,document.getElementById('root'))