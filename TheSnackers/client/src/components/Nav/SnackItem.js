import React from "react"

const SnackItem = (props) => (
    <div>
        <h1 className="page-header">{props.Name}</h1>
        <ul>
          
           <li>Price : {props.Price}</li>
           <li><img src={props.Image}></img></li>
           <li>Quantity : {props.Quantity}</li>
           <li><button>Add to Cart</button></li>
        </ul>
    </div>





);

export default SnackItem;