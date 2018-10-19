import React from "react"

//construct Square
class SnackItem extends React.Component {

    render() {
      return (
        <tr className="SnackItem">
            <td>
                <img src="./assets/images/donuts.jpg" alt="donut" />
                Donut
            </td>
            <td>

            </td>
            <td>

            </td>
            <td>
                <button>X</button>
            </td>
        </tr>
      );
    }
  }

class ShoppingCart extends React.Component {
    //constructor builds state, state includes list of all selected items from database


    render() {
        return (
    
            <div className="ShoppingCart">
                <h1 className="page-header">Your Order:</h1>
                <table>
                    <thead>
                        <th className="col s6 cart-header">
                            Snack
                        </th>
                        <th className="col s2 cart-header">
                            #
                        </th>
                        <th className="col s3 cart-header">
                            Price
                        </th>
                        <th className="col s1 cart-header">
                            {/* blank because above cart remove button column */}
                        </th>
                    </thead>
                    <tbody>
                        {/* Each row will be a "dumb component" item listing, receiving props from ShoppingCart */}
                        <SnackItem />
                    </tbody>

                </table>
            </div>
        );
    }
}

export default ShoppingCart;