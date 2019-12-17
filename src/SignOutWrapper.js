import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

class SignOutWrapper extends React.Component {

    render() {
        return(
            <div>
                <Button variant="outline-secondary" 
                className="signOut" size="sm" onClick={this.props.signOut}> 
                    Sign Out
                </Button>
            </div>
        );
    }
}

export default SignOutWrapper;
