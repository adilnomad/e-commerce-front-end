import React from 'react';
import './App.css';


const GOOGLE_BUTTON_ID = 'google-sign-in-button';

class GoogleSignIn extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isSignedIn : false
        }
    }

    componentDidMount() {

    window.gapi.signin2.render(
        GOOGLE_BUTTON_ID,
        {
        width: 300,
        height: 40,
        'theme': 'dark',
        onsuccess: this.onSuccess,
        }
    );

    }


    onSuccess(googleUser) {

        const profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getName());
        this.setState({isSignedIn : true});
    }

    render() {
        return (
            <div id={GOOGLE_BUTTON_ID} />
        );
    }
}


export default GoogleSignIn;