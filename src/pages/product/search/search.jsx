import React,{Fragment}from 'react'
import {Row,Col} from 'antd';
export default class ProductSearch extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Row style={{marginTop:20}}>
                    <Col span={10} offset={2}>
                        <h2>{this.props.match.params.id}</h2>
                    </Col>              
                </Row>              
            </Fragment>
        );
    }
}
