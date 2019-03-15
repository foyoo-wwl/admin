import React from "react";
import {Switch,Route,Redirect} from 'react-router-dom'

import ProductList from 'page/product/index/index.jsx'

export default class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path='/product/index' component={ProductList}/>
                {/* <Redirect form='/product' to='/product/index'/> */}
            </Switch>
        )
    }
}