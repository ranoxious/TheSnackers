
import React, { Component } from 'react';
import NavigationTabs from "./components/NavigationTabs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import Snacks from "./components/Nav/Snacks";
import Cart from "./components/Nav/Cart";
//import CartoonCard from './components/CartoonCard';
//pulls the Login component from the Login
import Login from "./components/Login/Login";
//pulls the Delivery component from the login from the Checkout
// import Delivery from "./Checkout/Delivery.js";
//pulls the Billingcomponent from the Checkout



class App extends Component {
  render() {
    return (
      <div className="App">
      {/*Tells to display forms component here */}
      <div><Login /></div>
        {/* <div><Delivery /></div> */}
        <header className="App-header">
        {/* <ConditionalRenderer /> */}

<Router>
<div>
  <NavigationTabs/>
      <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} /> 
      <Route exact path="/snacks" component={Snacks} />
      <Route exact path="/cart" component={Cart} />
      </switch >
</div>


  </Router>
   
          <h1 className="App-title">Snacks-2-Go</h1>  
        </header>
        <p className="App-intro">
        

        </p>
      </div>
    );
  }
}

export default App;
