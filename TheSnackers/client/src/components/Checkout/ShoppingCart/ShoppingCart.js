import React from "react";
import "./ShoppingCart.css";
import "../../../materialize.css";

/*FILE DESCRIPTION
This file contains the Shopping Cart module.
Shopping cart will be the top section of the Checkout page.

Shopping Cart will receive the list of ids of the items selected from the Storefront as a prop. (If needed, Storefront can render Checkout which renders cart.)
    e.g. <ShoppingCart itemIds={[12345, 34521, 65432, 99932, 75234]} />

Features:
    1) get item details by id from database & display each SnackItem
        a. allow user to remove item from cart
        b. allow user to update quantity

    2) calculate
        a. item total cost (quantity * unit price)
        b. subtotal of all cart items
        c. final order total (adding tax, no delivery fee)

    3) store in state
        a. array of items in cart, including: id, name, quantity
        b. final order total

considerations- should Checkout page actually manage the state of the order (lift cart's state up)

*/


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
            cartItems:[
                {
                    quantity: 2,
                    unitPrice: 5
                },
                {
                    quantity: 3,
                    unitPrice: 4
                },
                {
                    quantity: 1,
                    unitPrice: 5
                },
                {
                    quantity: 5,
                    unitPrice: 4
                }
            
            ],
            //includes calculated cart total, initialized as 0
            calcPrice: 0
        }
    }

    //TODO- ADD HELPER FUNCTION TO CALCULATE TOTAL ITEM PRICE FROM {this.state.cartItems[i].unitPrice}

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
                        <SnackItem quantity={this.state.cartItems[0].quantity} calcPrice={this.state.calcPrice} />
                        <SnackItem quantity={this.state.cartItems[1].quantity} calcPrice={this.state.calcPrice} />
                        <SnackItem quantity={this.state.cartItems[2].quantity} calcPrice={this.state.calcPrice} />
                        <SnackItem quantity={this.state.cartItems[3].quantity} calcPrice={this.state.calcPrice} />
                        {/* TODO- insert mapped quantity imported with "get" route from database */}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ShoppingCart;