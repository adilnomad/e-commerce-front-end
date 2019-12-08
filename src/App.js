import React from 'react';
import './App.css';
import AnimationOne from './AnimationOne.js';
import AnimationTwo from './AnimationTwo.js';
import SignInButton from './SignInButton.js';
import Popup from './Popup';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    //function bindings
    this.toggleLogIn =  this.toggleLogIn.bind(this);
    
    this.state = {
      LogIn : false,
      isSignedIn: false
    }; 
  }

  toggleLogIn() {
    if (this.state.LogIn)
      this.setState({LogIn : false });
    else
      this.setState({LogIn : true });
  }

  render() {

      return (
        <div className="App">
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
          {this.state.LogIn ? <Popup closePopup={this.toggleLogIn}/> : null}  
        </div>
      )
  }
}

export default App;
