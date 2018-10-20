import React, { Component } from "react";
import "../forms.css";




 class Delivery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                address: '',
                phone: '',
                deliveryNotes: '',
                deliveryTime: ''
            }
        }
    };

    render () {
        return (
            <div class="container">
                <div className="row">
                    <div className="col m10 offset-m1 s12">
                        <h2 class="center-align">Delivery Form</h2>
                    <div className="row">
                       <form className="col s12">
                        <div className="row">
                            <div className="input-field col12">
                            {/* Customer's Name */}
                            <input id="name" type="text" class="validate"/>
                            <label for="name">Name</label>
                            </div>
                            <br/>
                            {/*Customer's Address */}
                            <div className="input-field col12">
                            <input id="address" type="text" class="validate"/>
                            <label for="address">Address</label>
                            </div>
                            <br/>
                            {/*Customer's Phone */}
                            <div className="input-field col12">
                            <input id="phone" type="number" class="validate"/>
                            <label for="phone">Phone</label>
                            </div>
                            <br/>
                            {/*Delivery Notes*/}
                            <div class="input-block textarea">
                            <label for="">Delivery Notes</label>
                            <textarea rows="3" type="text" class="form-control"></textarea>
                            </div>
                            <br/>
                            {/*Delivery Time - Need to create to radio nuttons for choice 1=ASAP AND CHOICE2 = time input field*/}
                            <div class="input-field col12">
                            <label for="time">Current Time</label>
	                        <input id="time" type="text" class="timepicker"/>   
                            </div>
                            <br/>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>  
                        </div>
                       </form>
                        </div>                
                    </div>
                </div>
            </div>

        )
    }
};

 
export default Delivery;