import React from "react";
import {Switch,Route,Redirect} from 'react-router-dom'

import ProductList from 'page/product/index/index.jsx'
import ProductSearch from 'page/product/search/search.jsx'

export default class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/product/index' component={ProductList}/>
                <Route path='/product/index/:id' component={ProductSearch}/>
                {/* <Redirect form='/product' to='/product/index'/> */}
            </Switch>
        )
    }
}