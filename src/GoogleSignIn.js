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

    update() {
        console.log("success!!!!!");
        this.props.refresh();
        this.forceUpdate();
        
    }

    onSuccess(googleUser) {

        const profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getGivenName());
        console.log("Token: " + googleUser.getAuthResponse().id_token);
        localStorage.setItem('userName', profile.getGivenName());
        localStorage.setItem('token', googleUser.getAuthResponse().id_token);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3001/logIn', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('token=' + googleUser.getAuthResponse().id_token + '&name=' + profile.getGivenName());

        this.update();

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

    render() {
        return ( 
            <div id={GOOGLE_BUTTON_ID} />
        );
    }
}


export default GoogleSignIn;