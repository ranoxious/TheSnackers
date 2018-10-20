 import React, { Component } from "react"

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
 			//alert("What is the new email " + value);
 			//alert(this);
 			this.setState({
 				email: event.target.value
 			});
 		} else if (name === "password") {
 			//alert("What is the password " + value);
 			//alert(this);
 			this.setState( {
 				password: event.target.value
 			});
 		}
 	}
 	render() {
 		return  (
		

 			<div id="login" className="col s12">
 				<form className="col s12">
 					<div className="form-container">
 						<h3 className="teal-text">{this.loginTitle}</h3>
 						<div className="row"> 
 						<div className="input-field col s12">
 							<label for="email">E-Mail: </label>
 							<input id="email" type="email" className="validate" onChange={this.handleInputUpdate}
 								value={this.state.email}/>
 							<br/>
 							<br/>
 							<label for="password">Password: </label>
 							<input id="password" type="password" className="validate" onChange={this.handleInputUpdate}
 								value={this.state.password}/>
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
 							}>
 						Submit
 						</button>

 					</div>
 					</div>
 				</form>
 			</div>
			
			
 		);
	 }
	 

 };

 


 


 export default Login;