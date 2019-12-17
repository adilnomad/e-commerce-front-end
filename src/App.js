import React from 'react';
import './App.css';
import AnimationOne from './AnimationOne.js';
import AnimationTwo from './AnimationTwo.js';
import SignInButton from './SignInButton.js';
import Popup from './Popup';
//import Button from 'react-bootstrap/Button';
import SignOutWrapper from './SignOutWrapper.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    //function bindings
    this.toggleLogIn =  this.toggleLogIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.localStorageUpdated = this.localStorageUpdated.bind(this);
    this.refresh = this.refresh.bind(this);
    this.upd = this.upd.bind(this);
    
    this.state = {
      LogIn : false,
      isSignedIn: true,
      demoToken: null
    }; 
  }


  componentDidMount() {
    window.addEventListener('storage', this.localStorageUpdated);

    if (localStorage.getItem('userName')) {
      this.setState({isSignedIn : false});
      console.log("check");
    }

  }

  upd() {
    console.log("something else!!!");
    this.forceUpdate();
    this.setState({LogIn : !this.state.LogIn});
  }

  localStorageUpdated() {
    console.log("show something");
    this.setState({state: this.state});
  }

  toggleLogIn() {
    if (this.state.LogIn)
      this.setState({LogIn : false });
    else
      this.setState({LogIn : true });
  }

  signOut() {
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
    this.setState({isSignedIn : true});
    localStorage.clear();
  }

  refresh() {
    this.forceUpdate();
  }

  render() {

      if (!localStorage.getItem('userName')) {
        return (
          <div className="App">
            {this.state.isSignedIn ? null : <SignOutWrapper signOut={this.signOut} /> }
            <div className="Title">
                <AnimationOne>
                </AnimationOne>
              <div className="Desc">
                <AnimationTwo>
                </AnimationTwo>
              </div>        
            </div>
            <SignInButton toggle={this.toggleLogIn}>
            </SignInButton>
            {this.state.LogIn ? <Popup upd={this.upd} closePopup={this.toggleLogIn} /> : null}  
          </div>
        )
      } else {
        return (
          <div> 
            <SignOutWrapper signOut={this.signOut} /> 
          </div>
        )
      }
  }
}

export default App;
