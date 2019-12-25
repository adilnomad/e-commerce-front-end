import React from 'react';
import './App.css';
import AnimationOne from './AnimationOne.js';
import AnimationTwo from './AnimationTwo.js';
import AnimationThree from './AnimationThree.js';
import SignInButton from './SignInButton.js';
import Popup from './Popup';
import SignOutWrapper from './SignOutWrapper.js';
import  Form from 'react-bootstrap/Form';
import { Row, Col }  from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ItemEntry from './ItemEntry.js';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    //function bindings
    this.toggleLogIn =  this.toggleLogIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.localStorageUpdated = this.localStorageUpdated.bind(this);
    this.refresh = this.refresh.bind(this);
    this.upd = this.upd.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    
    this.state = {
      LogIn : false,
      isSignedIn: true,
      demoToken: null,
      input : null
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

  guestLogin() {
    localStorage.setItem('userName', 'Guest');
    this.setState({isSignedIn : false});
    this.setState({demoToken : 'abc'});
  }

  val() {
    console.log(this.state.input);
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
            <AnimationThree>
            </AnimationThree>
            {this.state.LogIn ? <Popup upd={this.upd}  guestLogin={this.guestLogin} closePopup={this.toggleLogIn} /> : null}  
          </div>
        )
      } else {
        return (
          <div>
            <nav class="navbar navbar-dark bg-dark">
              <Form class="form-inline my-2 my-lg-0">
                <Row>
                  <Col>
                  <FormControl type="text"  inputref={ref => this.setState({input : ref}) } 
                    placeholder="Search product" className="mr-lg-2" size="sm" style={{width: 300}} />
                  </Col>
                  <Col>
                  <Button variant="outline-info" className="mr" size="sm" 
                  onClick={this.val.bind(this)}> Search</Button>
                  </Col>
                </Row>
              </Form>
              <p className="greetUser"> Hi, {localStorage.getItem('userName')} </p>
              <SignOutWrapper signOut={this.signOut} /> 
            </nav>
              <div className="contentWrapper">
                <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                 <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                 <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                 <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                 <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                 <ItemEntry imgs="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                id='1' title="image" description="texadsfaslf" price="50"> </ItemEntry>
                <Button className="loadMore" size="sm" variant="primary"> Load More</Button>
              </div>
          </div>
        )
      }
  }
}

export default App;
