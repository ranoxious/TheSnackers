import React, {Component} from "react"
import SnackItem from "./SnackItem";
import API from "../../utils/API";
import snacks from "../../snacks.json";


class Snacks extends Component {
    state = {
      snacks
    };
  
    componentDidMount() {
      //this.loadSnacks();
    }
  
    loadSnacks = () => {
      API.getProducts()
        .then(res => this.setState({ products: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
                  {this.state.snacks.map(product => (

                        <SnackItem Quantity={product.quanity} Key={product.id} Image={product.image} Price={product.price} Name={product.name} />

                  ) )};
                 
       </div>
      );
    }
  }


export default Snacks;