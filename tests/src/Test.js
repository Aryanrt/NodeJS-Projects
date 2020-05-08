import React, { Component }  from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in!</h1>;
}
class Greeting extends React.Component
{
	constructor(props) 
	{
	  super(props);
      this.state = {parameter: false};
	  this.changeState = this.changeState.bind(this);
	  
	}
	changeState()
	{
		this.setState({parameter: ! this.state.parameter});
	}
	
	render() {
	  //const isLoggedIn = props.isLoggedIn;
	  let b = <SignUpButton  onClick={() => this.changeState()} parameter={this.state.parameter} />;
	  if (this.state.parameter) {
	    return <div><UserGreeting />{b}{this.state.parameter}</div>;
	  }
	  return <div><GuestGreeting />{b}{this.state.parameter}</div>;
	}
}
class SignUpButton extends React.Component
{
	constructor(props) 
	{
	  super(props);
      this.state = {par: this.props.parameter};
	  //this.foo = this.foo.bind(this);
	  this.signIn = this.signIn.bind(this);
	  this.signOut = this.signOut.bind(this);
	}

	signIn()
	{
		this.setState({par: true});
		this.props.onClick();
		document.getElementsByClassName("App-logo")[0].className= "App-logo-still";
	}
	signOut()
	{
		this.setState({par: false});
		this.props.onClick();
	}
	render()
	{

		if( ! this.state.par)
			return <button onClick={this.signIn}>Sign In</button>;
		else
			return <button onClick={this.signOut}>Sign out</button>;
		
	}
}

export default Greeting;
