import React from 'react';
import './App.css';
import { Row, Col }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class PastOrd extends React.Component {

    render() {
        return (
            <div className="itemBox" >
                <Row>
                    <div className="productInfo">
                        <p> {this.props.title} </p>
                        <br/>
                    </div>
                    <div className="price">
                        <h4> ${this.props.price}  </h4>
                    </div>
                </Row>
            </div>
        );
    }

}

export default PastOrd;