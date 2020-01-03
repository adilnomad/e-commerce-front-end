import React from 'react';
import './App.css';
import { Row, Col }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class ItemEntry extends React.Component {

    render() {
        return (
            <div className="itemBox" >
                <Row>
                    <div>
                       <img className="imgSize" alt={this.props.id} src={this.props.imgs} />
                    </div>
                    <div className="productInfo">
                        <p> <b> {this.props.title} </b> </p>
                        <br/>
                        <p> {this.props.description} </p>
                    </div>
                    <div className="price">
                        <h4> <b> ${this.props.price} </b> </h4>
                        <Button variant="success" size="sm" onClick={() => this.props.order(this.props.id)}>Order</Button>
                    </div>
                </Row>
            </div>
        );
    }

}

export default ItemEntry;