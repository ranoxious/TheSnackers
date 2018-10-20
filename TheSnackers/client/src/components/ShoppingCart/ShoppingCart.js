import React from "react";
import "./ShoppingCart.css";
import "../../materialize.css";

//STATIC GLOBAL VARIABLES FOR TESTING
//array representing the data for three selected items to be purchased
//using dummy data to set up features, real data will need to be imported properly from database later
const cartItems = [
    {

    }
]
//END STATIC GLOBAL VARIABLES FOR TESTING




//SnackItem 
//single line entry component
class SnackItem extends React.Component {

    render() {
      return (
        <tr className="SnackItem row">
            <td className="col s5">
                <img className="responsive-img" src="./assets/images/donuts.jpg" alt="donut" />
                Donut
            </td>
            <td className="col s2">
                <input type="number" name="itemCount" value={this.props.quantity} />
            </td>
            <td className="col s4"> 
                ${this.props.calcPrice}
            </td>
            <td className="col s1">
                <button>X</button>
            </td>
        </tr>
      );
    }
  }
//END SnackItem 


//Shopping Cart
//assembled component, contains multiple line entries, imports array of selected items as state
class ShoppingCart extends React.Component {
    //constructor builds state, state includes list of selected items from database
    constructor(props) {
        super(props);
        this.state = {
            cartItems: cartItems,
            //includes calculated cart total, initialized as 0
            calcPrice: 0
        }
    }

    render() {
        return (
    
            <div className="ShoppingCart">
                <h3 className="page-header">Your Order:</h3>
                <table className="highlight">
                    <thead className="row">
                        <th className="col s5 cart-header">
                            Snack
                        </th>
                        <th className="col s2 cart-header">
                            #
                        </th>
                        <th className="col s4 cart-header">
                            Price
                        </th>
                        <th className="col s1 cart-header">
                            {/* blank because above cart remove button column */}
                        </th>
                    </thead>
                    <tbody>
                        {/* Each row will be a "dumb component" item listing, receiving props from ShoppingCart */}
                        <SnackItem quantity="2" calcPrice={this.state.calcPrice} />
                        <SnackItem quantity="2" calcPrice={this.state.calcPrice} />
                        <SnackItem quantity="2" calcPrice={this.state.calcPrice} />
                        <SnackItem quantity="2" calcPrice={this.state.calcPrice} />
                        {/* TODO- insert mapped quantity imported with "get" route from database */}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ShoppingCart;