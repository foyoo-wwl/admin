import React from "react";
import ReactDOM from 'react-dom'
import Home from 'page/home/index.jsx'
import Detail from 'page/detail/index.jsx'
import LayOut from 'component/layout/index.jsx'
import {HashRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'

import './app.css'

class App extends React.Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
                <Router>
                    <LayOut>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/detail' component={Detail} />
                            <Redirect from="*" to='/' />
                        </Switch>
                    </LayOut>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>
,document.getElementById('root'))