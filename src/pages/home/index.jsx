import React from 'react'
import {Row,Col,Button} from 'antd'
import PageTitle from 'page/page-title/index.jsx' 

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            topTitle:"首页"
        })
    }
    render(){
        return(
            <div id='pageWrapper'>
                <PageTitle title={this.state.topTitle}>
                    <Button>
                        test
                    </Button>
                </PageTitle>
                <Row>
                    <Col span={24}>
                        body
                    </Col>
                </Row>
            </div>
        )
    }
}