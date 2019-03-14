import React,{Fragment} from "react";
import ReactDOM from 'react-dom'
import Home from 'page/home/index.jsx'
import Detail from 'page/detail/index.jsx'
import LayOut from 'component/layout/index.jsx'
import Login from 'page/login/index.jsx'
import ErrorPage from 'page/error/index.jsx'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import './app.css'

class App extends React.Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
                <BrowserRouter>      
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/' render={() =>(
                            <LayOut>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/detail' component={Detail} />
                                    <Route component={ErrorPage} />
                                </Switch>
                            </LayOut>
                        )}/>            
                                            
                    </Switch>                                                                                                     
                </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>
,document.getElementById('root'))