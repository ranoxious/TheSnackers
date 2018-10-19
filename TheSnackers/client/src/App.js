
import React, { Component } from 'react';
import NavigationTabs from "./components/NavigationTabs";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Nav/Home";
import About from "./components/Nav/About";
import Snacks from "./components/Nav/Snacks";
import Cart from "./components/Nav/Cart";
import CartoonCard from './components/CartoonCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <ConditionalRenderer /> */}

<Router>

<div>
      <NavigationTabs />
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} /> 
      <Route exact path="/snacks" Component={Snacks} />
      <Route exact path="/cart" Component={Cart} />

</div>

  


  </Router>
   
          <h1 className="App-title">Snacks-2-Go</h1>  
        </header>

        {/*EMILY- TESTING SECTION ONLY */}
        <Cart />
        {/*END EMILY- TESTING SECTION ONLY */}

        <p className="App-intro">
        
          &copy; The Snackers 2018


        </p>
      </div>
    );
  }
}

export default App;
