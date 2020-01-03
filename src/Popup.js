import React from 'react';  
import './App.css'; 
import { TimelineMax  } from 'gsap'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleSignIn from './GoogleSignIn';

class Popup extends React.Component { 

    constructor(props) {
        super(props);

        this.refresh = this.refresh.bind(this);
    }
  
    componentDidMount() {
        new TimelineMax({repeat: 0}).fromTo(this.title, 0.5, 
            { opacity:0, y: 20 }, { opacity:1, y: 0});
    }

    refresh() {
        console.log("something");
        this.forceUpdate();
        this.props.upd();
    }

    render() {  
        return (  
            <div className="login">
                <div ref={div => (this.title = div)} className="innerLogIn">
                    <GoogleSignIn refresh={this.refresh}> </GoogleSignIn>
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
                        <br /> 
                        <Button className="demoButton" variant="primary" size="sm" onClick={this.props.guestLogin}> 
                            Hey there! :-) Currently migratting from http to https and 
                            some content might not show up temporarily. Please, check-in in 2 days! :-) 
                        </Button>
                        <br /> <br />
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                        <Button size="sm" onClick={this.props.closePopup} className="closeButton" 
                                variant="success" type="submit">
                            Close
                        </Button>
                    </Form>
                </div>   
            </div>  
        );  
    }  
}  

export default Popup;