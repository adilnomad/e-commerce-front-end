(this["webpackJsonpe-commerce-shop"]=this["webpackJsonpe-commerce-shop"]||[]).push([[0],{16:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/person.ef959644.png"},27:function(e,t,a){e.exports=a.p+"static/media/fashon.b09f2104.png"},28:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),i=a.n(s),o=a(6),c=a(7),l=a(10),u=a(8),m=a(11),p=a(9),d=(a(16),a(14)),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,1,{opacity:0,y:20},{opacity:1,y:0,delay:.2})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.title=t}},r.a.createElement("h4",{className:"titleBold"},"Welcome to E-commerce Shop."))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,1,{opacity:0,y:20},{opacity:1,y:0,delay:1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.title=t}},r.a.createElement("p",null,"Wide variety of products. Seamless shopping experience."))}}]),t}(r.a.Component),f=a(24),b=a.n(f),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,1,{opacity:0,x:0},{opacity:1,x:20,delay:2})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.title=t},className:"personAnim"},r.a.createElement("img",{alt:"animation",src:b.a,width:150,height:200}))}}]),t}(r.a.Component),O=a(12),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:!0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,1,{opacity:0,y:20},{opacity:1,y:0,delay:2})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.title=t},className:"button"},r.a.createElement(O.a,{className:"button",variant:"primary",onClick:this.props.toggle},"Log In"))}}]),t}(r.a.Component),E=a(15),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSuccess=a.onSuccess.bind(Object(m.a)(a)),a.update=a.update.bind(Object(m.a)(a)),a.state={isSignedIn:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gapi.signin2.render("google-sign-in-button",{width:300,height:40,theme:"dark",onsuccess:this.onSuccess})}},{key:"update",value:function(){this.props.refresh(),this.forceUpdate()}},{key:"onSuccess",value:function(e){var t=e.getBasicProfile();localStorage.setItem("userName",t.getGivenName()),localStorage.setItem("token",e.getAuthResponse().id_token);var a=new XMLHttpRequest;a.open("POST","http://ec2-13-57-58-131.us-west-1.compute.amazonaws.com:3001/logIn",!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send("token="+e.getAuthResponse().id_token+"&name="+t.getGivenName()),this.update()}},{key:"render",value:function(){return r.a.createElement("div",{id:"google-sign-in-button"})}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).refresh=a.refresh.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,.5,{opacity:0,y:20},{opacity:1,y:0})}},{key:"refresh",value:function(){console.log("something"),this.forceUpdate(),this.props.upd()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{ref:function(t){return e.title=t},className:"innerLogIn"},r.a.createElement(j,{refresh:this.refresh}," "),r.a.createElement("br",null),r.a.createElement(E.a,{className:"FormLogIn",onSubmit:this.afterSubmition},r.a.createElement(E.a.Group,{controlId:"formGroupEmail"},r.a.createElement(E.a.Label,{size:"sm"},"Email address"),r.a.createElement(E.a.Control,{size:"sm",type:"email",placeholder:"Enter email"})),r.a.createElement(E.a.Group,{controlId:"formGroupPassword"},r.a.createElement(E.a.Label,{size:"sm"},"Password"),r.a.createElement(E.a.Control,{size:"sm",type:"password",placeholder:"Password"})),r.a.createElement("br",null),r.a.createElement(O.a,{className:"demoButton",variant:"primary",size:"sm",onClick:this.props.guestLogin},"Adding register option soon! Use Google sign in for now!"),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(O.a,{size:"sm",variant:"success",type:"submit"},"Submit"),r.a.createElement(O.a,{size:"sm",onClick:this.props.closePopup,className:"closeButton",variant:"success",type:"submit"},"Close"))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{variant:"primary",className:"signOut",size:"sm",onClick:this.props.signOut},"Sign Out"))}}]),t}(r.a.Component),w=a(40),I=a(26),L=a(17),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"itemBox"},r.a.createElement(w.a,null,r.a.createElement("div",null,r.a.createElement("img",{className:"imgSize",alt:this.props.id,src:this.props.imgs})),r.a.createElement("div",{className:"productInfo"},r.a.createElement("p",null," ",r.a.createElement("b",null," ",this.props.title," ")," "),r.a.createElement("br",null),r.a.createElement("p",null," ",this.props.description," ")),r.a.createElement("div",{className:"price"},r.a.createElement("h4",null," ",r.a.createElement("b",null," $",this.props.price," ")," "),r.a.createElement(O.a,{variant:"success",size:"sm",onClick:function(){return e.props.order(e.props.id)}},"Order"))))}}]),t}(r.a.Component),C=a(27),P=a.n(C),z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){new d.a({repeat:0}).fromTo(this.title,1,{opacity:0,y:20},{opacity:1,y:0,delay:1.85})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.title=t},className:"fashonAnim"},r.a.createElement("img",{alt:"animation",src:P.a,width:400,height:360}))}}]),t}(r.a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"itemBox"},r.a.createElement(w.a,null,r.a.createElement("div",{className:"productInfo"},r.a.createElement("p",null," ",this.props.title," "),r.a.createElement("br",null)),r.a.createElement("div",{className:"price"},r.a.createElement("h4",null," $",this.props.price,"  "))))}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleLogIn=a.toggleLogIn.bind(Object(m.a)(a)),a.signOut=a.signOut.bind(Object(m.a)(a)),a.localStorageUpdated=a.localStorageUpdated.bind(Object(m.a)(a)),a.refresh=a.refresh.bind(Object(m.a)(a)),a.upd=a.upd.bind(Object(m.a)(a)),a.guestLogin=a.guestLogin.bind(Object(m.a)(a)),a.val=a.val.bind(Object(m.a)(a)),a.getProductList=a.getProductList.bind(Object(m.a)(a)),a.appendPrductList=a.appendPrductList.bind(Object(m.a)(a)),a.orderItem=a.orderItem.bind(Object(m.a)(a)),a.pastOrders=a.pastOrders.bind(Object(m.a)(a)),a.state={LogIn:!1,isSignedIn:!0,demoToken:null,input:null,products:[],pastOrd:[],searchKeyword:"",page:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("storage",this.localStorageUpdated),this.urlPath="http://ec2-13-57-58-131.us-west-1.compute.amazonaws.com:3001/getItems?",localStorage.getItem("userName")&&this.setState({isSignedIn:!1}),this.setState({searchKeyword:"shirt"}),this.getProductList(),this.orderItem("-1")}},{key:"upd",value:function(){console.log("something else!!!"),this.forceUpdate(),this.setState({LogIn:!this.state.LogIn})}},{key:"localStorageUpdated",value:function(){console.log("show something"),this.setState({state:this.state})}},{key:"guestLogin",value:function(){localStorage.setItem("userName","Guest"),this.setState({isSignedIn:!1}),this.setState({demoToken:"abc"})}},{key:"val",value:function(e){this.setState({searchKeyword:e.target.value})}},{key:"getProductList",value:function(){var e=this;this.setState({products:[]}),fetch(this.urlPath+"productName="+this.state.searchKeyword+"&page=0").then((function(e){return e.json()})).then((function(t){return e.setState({products:e.state.products.concat(t)})})).then(console.log(this.state.products)).catch((function(e){return console.log(e)})),this.forceUpdate()}},{key:"appendPrductList",value:function(){var e=this;this.setState({page:this.state.page+1}),fetch(this.urlPath+"productName="+this.state.searchKeyword+"&page="+this.state.page).then((function(e){return e.json()})).then((function(t){return e.setState({products:e.state.products.concat(t)})})).catch((function(e){return console.log(e)}))}},{key:"toggleLogIn",value:function(){this.state.LogIn?this.setState({LogIn:!1}):this.setState({LogIn:!0})}},{key:"signOut",value:function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){console.log("User signed out.")})),this.setState({isSignedIn:!0}),localStorage.clear()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"orderItem",value:function(e){var t=this,a=new XMLHttpRequest;a.open("POST","http://ec2-13-57-58-131.us-west-1.compute.amazonaws.com:3001/placeOrder",!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send("token="+localStorage.getItem("token")+"&product="+e),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(t.setState({pastOrd:JSON.parse(a.response)}),console.log(t.state.pastOrd))}}},{key:"pastOrders",value:function(){var e=new XMLHttpRequest;e.open("GET","http://ec2-13-57-58-131.us-west-1.compute.amazonaws.com:3001/pastOrders",!0),e.send()}},{key:"render",value:function(){var e=this;return localStorage.getItem("userName")?r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-dark bg-blue"},r.a.createElement(E.a,{class:"form-inline my-2 my-lg-0"},r.a.createElement(w.a,null,r.a.createElement(I.a,null,r.a.createElement(L.a,{type:"text",onChange:this.val,placeholder:"Search product",className:"mr-lg-2",size:"sm",style:{width:300}})),r.a.createElement(I.a,null,r.a.createElement(O.a,{variant:"outline-info",className:"mr",size:"sm",onClick:this.getProductList}," Search")))),r.a.createElement("p",{className:"greetUser"}," Hi, ",localStorage.getItem("userName")," "),r.a.createElement(S,{signOut:this.signOut})),r.a.createElement("div",{className:"contentWrapperItems"},this.state.products.map((function(t){return r.a.createElement(N,{imgs:t.image,id:t.id,order:e.orderItem,description:t.description,title:t.product_name,price:t.retail_price})})),r.a.createElement(O.a,{className:"loadMore",size:"sm",variant:"primary",onClick:this.appendPrductList}," Load More ")),r.a.createElement("div",{className:"contentWrapperPastOrders"},r.a.createElement("h4",null," Past Orders "),this.state.pastOrd.map((function(e){return r.a.createElement(M,{title:e.product_name,price:e.retail_price}," ")})))):r.a.createElement("div",{className:"App"},this.state.isSignedIn?null:r.a.createElement(S,{signOut:this.signOut}),r.a.createElement("div",{className:"Title"},r.a.createElement(h,null),r.a.createElement("div",{className:"Desc"},r.a.createElement(g,null))),r.a.createElement(y,{toggle:this.toggleLogIn}),r.a.createElement(v,null),r.a.createElement(z,null),this.state.LogIn?r.a.createElement(k,{upd:this.upd,guestLogin:this.guestLogin,closePopup:this.toggleLogIn}):null)}}]),t}(r.a.Component);i.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.03a5e2ed.chunk.js.map