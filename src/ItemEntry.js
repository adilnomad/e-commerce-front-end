import React from 'react';
import './App.css';
import { Row, Col }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class ItemEntry extends React.Component {

    render() {
        return (
            <div className="itemBox" >
                <Row>
                    <Col xs>
                       <img className="imgSize" alt={this.props.id} src={this.props.imgs} />
                    </Col>
                    <Col xs>
                        <p> <b> {this.props.title} </b> </p>
                        <br/>
                        <p> {this.props.description} </p>
                    </Col>
                    <Col xs className="price">
                        <h4> <b> ${this.props.price} </b> </h4>
                        <Button variant="success" size="sm">Order</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ItemEntry;