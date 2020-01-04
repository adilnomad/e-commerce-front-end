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
import AnimationFour from './AnimationFour.js';
import PastOrd from './PastOrd.js';


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
    this.val = this.val.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.appendPrductList = this.appendPrductList.bind(this);
    this.orderItem = this.orderItem.bind(this);
    this.pastOrders = this.pastOrders.bind(this);
    
    this.state = {
      LogIn : false,
      isSignedIn: true,
      demoToken: null,
      input : null,
      products : [],
      pastOrd : [],
      searchKeyword : "",
      page : 0
    }; 

  }


  componentDidMount() {

    window.addEventListener('storage', this.localStorageUpdated);
    this.urlPath = 'http://ec2-13-57-210-181.us-west-1.compute.amazonaws.com:8000/getItems?';

    if (localStorage.getItem('userName')) {
      this.setState({isSignedIn : false});
    }

    this.setState({searchKeyword : "shirt"});
    this.getProductList();
    this.orderItem('-1');
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

  val(event) {
    this.setState({searchKeyword : event.target.value});
  }

  getProductList() {
    this.setState({products : []});
    fetch(this.urlPath + 'productName=' + this.state.searchKeyword + '&page=' + 0)
      .then(res => res.json())
      .then(res => this.setState({products : this.state.products.concat(res)}))
      .then(console.log(this.state.products))
      .catch(er => console.log(er))

    this.forceUpdate();
  }

  appendPrductList() {
    this.setState({page : this.state.page + 1});
    fetch(this.urlPath + 'productName=' + this.state.searchKeyword + '&page=' + this.state.page)
      .then(res => res.json())
      .then(res => this.setState({products : this.state.products.concat(res)}))
      .catch(er => console.log(er))
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

  orderItem(item_id) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://ec2-13-57-210-181.us-west-1.compute.amazonaws.com:8000/placeOrder', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('token=' + localStorage.getItem('token') + '&product=' + item_id);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        this.setState({pastOrd : JSON.parse(xhr.response)});
        console.log(this.state.pastOrd);
      }
    }
  }
  
  pastOrders() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://ec2-13-57-210-181.us-west-1.compute.amazonaws.com:8000/pastOrders', true);
    xhr.send();
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
            <AnimationFour>
            </AnimationFour>
            {this.state.LogIn ? <Popup upd={this.upd}  guestLogin={this.guestLogin} closePopup={this.toggleLogIn} /> : null}  
          </div>
        )
      } else {
        return (
          <div>
            <nav class="navbar navbar-dark bg-blue">
              <Form class="form-inline my-2 my-lg-0">
                <Row>
                  <Col>
                  <FormControl type="text"  onChange={this.val}
                    placeholder="Search product" className="mr-lg-2" size="sm" style={{width: 300}} />
                  </Col>
                  <Col>
                  <Button variant="outline-info" className="mr" size="sm" 
                    onClick={this.getProductList}> Search</Button>
                  </Col>
                </Row>
              </Form>
              <p className="greetUser"> Hi, {localStorage.getItem('userName')} </p>
              <SignOutWrapper signOut={this.signOut} /> 
            </nav>
              <div className="contentWrapperItems">
                {this.state.products.map(item => <ItemEntry imgs={item.image} id={item.id} order={this.orderItem}
                description={item.description} title={item.product_name} price={item.retail_price}> 
                </ItemEntry>)}
                <Button className="loadMore" size="sm" variant="primary" onClick={this.appendPrductList}> Load More </Button>
              </div>
              <div className="contentWrapperPastOrders">
                <h4> Past Orders </h4>
                  {this.state.pastOrd.map(item => <PastOrd title={item.product_name} price={item.retail_price}> </PastOrd>)} 
              </div>
          </div>
        )
      }
  }
}

export default App;
