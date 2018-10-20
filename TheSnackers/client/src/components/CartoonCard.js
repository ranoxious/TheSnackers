import React from "react";

const CartoonCard = (props) => (

    <div className="card">

        <div >
            <img width="120px" alt="some image" src={props.image} />
        </div>

        <ul>
            <li>Name: {props.name}</li>
            <li>Occupation: {props.occupation}</li>
            <li>Location: {props.location}</li>
        <button onClick={() => props.removeCartoon(props.id)} className="btn btn-danger" >Delete</button>
        </ul>

    </div>

);

export default CartoonCard;

