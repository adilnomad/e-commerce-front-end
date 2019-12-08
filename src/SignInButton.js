import React from 'react';
import './App.css';
import { TimelineMax  } from 'gsap';
import Button from 'react-bootstrap/Button';

class SignInButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status : true
        };
    }

    componentDidMount() {

        new TimelineMax({repeat: 0}).fromTo(this.title, 1, 
            { opacity:0, y: 20 }, { opacity:1, y: 0, delay: 2});
            
    }

    render() {
        return (
            <div ref={div => (this.title = div)} className="button" >
                <Button className="button" variant="primary" 
                onClick={this.props.toggle}>Log In</Button>
            </div>
        );
    }
}

export default SignInButton;