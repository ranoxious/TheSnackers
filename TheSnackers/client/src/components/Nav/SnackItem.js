import React from "react"

const SnackItem = (props) => (
    <div className="container">
        <h1 className="page-header">Products</h1>
        <ul>
           <li>{props.Name}</li>
        </ul>
    </div>





);

export default SnackItem;