 import React, { Component } from "react"
 import "../forms.css";

 //login 
	 class Login extends React.Component {

		constructor(props) {
 		super(props);
		//Propeties are set once  when an individual object is created and it doesn't need to be changed
 		this.loginTitle = props.mytitle;
 		console.log(JSON.stringify(props));
		this.state = {
 			email: "",
 			password: ""
 		};
 		// React says: I'm sorry, but you have to set THIS to THIS
 		this.handleInputUpdate = this.handleInputUpdate.bind(this);
 	}

 	handleSubmit() {
 		alert("You are attempting to login with state " + JSON.stringify(this.state));
 	}

 	handleInputUpdate(event) {
 		//alert("hey cant touch this - dah dah dah - " + event.target.id);
 		const name = event.target.id;
 		let value = event.target.value;
		if (name === "email") {
			 //If any data is entedered, then
			 alert("")
			 	//Does user exist?
			 		//If user doesn't exist, show pop-up errror message
					//if user exists - this.setState runs
 			this.setState({
 				email: event.target.value
 			});
 		} else if (name === "password") {
			 //If any data is entered, then
				 //Does password match the user's email stored in the state
					 //If password doesn't match, pop-up invalid user name or password
					 //If password matches, then run the setState and log user in with an alert "successfully logged in"
 			this.setState( {
 				password: event.target.value
 			});
 		}
	 }
	 
	 //LOGIN PAGE==============================================================================================
 	render() {
 		return  (
 			<div id="login" className="col s12">
 				<form className="col s12">
 					<div className="form-container">
 						<h3 className="teal-text">{this.loginTitle}</h3>
 						<div className="row"> 
						 	{/* Enter in E-mail */}
 							<div className="input-field col s12">
							 <label for="email">E-mail</label>
						 	 <input id="email" type="email" class="validate" onChange={this.handleInputUpdate}
 								value={this.state.email}/>
							</div>
 						<br/>
 						<br/>
						 	{/* Enter in the Password */}
							<div className="input-field col s12">
							 <label for="password">Password</label>
							 <input id="password" type="password" class="validate" onChange={this.handleInputUpdate}
 								value={this.state.password}/>
							</div>
 						<br/>
 						<br/>
 							</div>
 							<button className="btn btn-default" type="submit" name="action"
 							// calls Login.handleSubmit upon clicking this button
 							 onClick={
 								() => {
 									this.setState({email: document.getElementById("email").textContent });
 									this.handleSubmit();
 								}
 							}>SIGN IN
 						</button>
						<br/>
 						<br/>
						 <button className="btn btn-default" type="submit" name="action">REGISTER
						 </button>
 					</div>
 				</form>
 			</div>
		//END OF LOGIN PAGE==================================================================================================
		
		//




 		);
	 }
	 

 };

 



 export default Login;