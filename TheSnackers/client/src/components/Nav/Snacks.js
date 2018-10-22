import React from "react"
import SnackItem from "./SnackItem";


class Snacks extends React.Component {
    state = {
      products: []
    };
  
    componentDidMount() {
      this.loadProducts();
    }
  
    loadBooks = () => {
      API.getProducts()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
                  {this.state.products.map(product => (

                        <SnackItem Name={product.Name} />

                  ) )};
                 
       </div>
      );
    }
  }


export default Snacks;