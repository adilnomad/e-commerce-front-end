import React from 'react';
import './App.css';


const GOOGLE_BUTTON_ID = 'google-sign-in-button';

class GoogleSignIn extends React.Component {

    constructor(props) {
        super(props);
        
        this.onSuccess = this.onSuccess.bind(this);
        this.update = this.update.bind(this);

        this.state = {
            isSignedIn : false
        };
    }

    componentDidMount() {

        window.gapi.signin2.render( 
            GOOGLE_BUTTON_ID,
            {
                width: 300,
                height: 40,
                'theme': 'dark',
                onsuccess: this.onSuccess,
            }, 
        );
    }

    update() {

        this.props.refresh();
        this.forceUpdate();
        
    }

    onSuccess(googleUser) {

        const profile = googleUser.getBasicProfile();
        localStorage.setItem('userName', profile.getGivenName());
        localStorage.setItem('token', googleUser.getAuthResponse().id_token);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://ec2-13-57-210-181.us-west-1.compute.amazonaws.com:8000/logIn', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('token=' + googleUser.getAuthResponse().id_token + '&name=' + profile.getGivenName());
        this.update();

    }

    render() {
        return ( 
            <div id={GOOGLE_BUTTON_ID} />
        );
    }
}


export default GoogleSignIn;