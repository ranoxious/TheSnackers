import React from "react";
import "./ShoppingCart.css";
import "../../../materialize.css";

/*FILE DESCRIPTION
This file contains the Shopping Cart module.
Shopping cart will be the top section of the Checkout page.

Shopping Cart will receive the list of item ids and quantities selected from the Storefront/Checkout as a prop.
    e.g. <ShoppingCart items={ordered:[
        {id: 12345, quantity: 1},
        {id: 75234, quantity: 5},
        {id: 99876, quantity: 3},
        {id: 22333, quantity: 2},
        {id: 08087, quantity: 2}
    ]} />

Features:
    1) get item details by id from database & display each SnackItem
        a. allow user to remove item from cart
        b. allow user to update quantity

    2) calculate
        a. item total cost (quantity * unit price)
        b. subtotal of all cart items
        c. final order total (adding tax, no delivery fee)

    3) store in state (for now)
        a. array of items in cart, including: id, name, quantity
        b. final order total

TODO- once this module is complete, modify so Checkout page will manage the state of the order (lift cart's state up)

TODO- research sessions so cart data persists

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
            <td className="col s2"> 
                ${this.props.unitPrice}
            </td>
            <td className="col s2 bold"> 
                ${this.props.calcPrice}
                {/* $5.00 */}
                {/* placeholder above while writing calculation function for calcPrice */}
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
                    unitPrice: 2.50
                },
                {
                    quantity: 3,
                    unitPrice: 4.00
                },
                {
                    quantity: 1,
                    unitPrice: 3.25
                },
                {
                    quantity: 5,
                    unitPrice: 4.50
                }
            
            ],
            //includes calculated cart total, initialized as 0
            subtotalPrice: 0
        }
    }

    //TODO- ADD HELPER FUNCTION TO CALCULATE TOTAL ITEM PRICE
    // calcPriceHandler = (priceEach) => {
    //     // this is probably a standard function, look up online
    //     // convert decimals to integers
    //     // multiply unit price by quantity
    //     // convert back to decimals
    // }

    //function to render each line item
    renderItem = (i) => {
        let priceEach = this.state.cartItems[i].unitPrice;
        let finalPrice = 0;

        const calcPriceHandler = (priceEach) => {
            // this is proably a standard function, look up online
            // convert decimals to integers
            // multiply unit price by quantity
            // convert back to decimals
            return "PLACEHOLDER";
        }

        finalPrice = calcPriceHandler(priceEach);

        return <SnackItem quantity={this.state.cartItems[i].quantity} unitPrice={this.state.cartItems[i].unitPrice} 
        calcPrice={finalPrice} id={i} key={i} />;
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
                            Quantity
                        </th>
                        <th className="col s2 cart-header">
                            x Price for Each =
                        </th>
                        <th className="col s2 cart-header">
                            Total
                        </th>
                        <th className="col s1 cart-header">
                            {/* blank because above cart remove button column */}
                        </th>
                    </thead>
                    <tbody>
                        {/* Each row will be a "dumb component" item listing, receiving props from ShoppingCart */}
                        {/* <SnackItem quantity={this.state.cartItems[0].quantity} 
                        unitPrice={this.state.cartItems[0].unitPrice} 
                        calcPrice={this.calcPriceHandler(this.state.cartItems[0].unitPrice)} /> */}
                        {this.renderItem(0)}
                        {this.renderItem(1)}
                        {this.renderItem(2)}
                        {this.renderItem(3)}

                        {/* <SnackItem quantity={this.state.cartItems[1].quantity} unitPrice={this.state.cartItems[1].unitPrice} /> */}
                        {/* <SnackItem quantity={this.state.cartItems[2].quantity} unitPrice={this.state.cartItems[2].unitPrice} /> */}
                        {/* <SnackItem quantity={this.state.cartItems[3].quantity} unitPrice={this.state.cartItems[3].unitPrice} /> */}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ShoppingCart;