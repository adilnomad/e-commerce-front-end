import React from 'react';  
import './App.css'; 
import { TimelineMax  } from 'gsap'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignIn from './GoogleSignIn';

class Popup extends React.Component { 
  
    componentDidMount() {
        new TimelineMax({repeat: 0}).fromTo(this.title, 0.5, 
            { opacity:0, y: 20 }, { opacity:1, y: 0});
    }

    render() {  
        return (  
            <div className="login">
                <div ref={div => (this.title = div)} className="innerLogIn">
                    <GoogleSignIn> </GoogleSignIn>
                    <br />
                    <Form className="FormLogIn" onSubmit={this.afterSubmition}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label size="sm">Email address</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label size="sm">Password</Form.Label>
                            <Form.Control size="sm" type="password" placeholder="Password" />
                        </Form.Group>
                        <br /> <br />
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>   
            </div>  
        );  
    }  
}  

export default Popup;