import React, { Component }  from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  let b = <SignUpButton parameter={isLoggedIn}  />;
  if (isLoggedIn) {
    return <div><UserGreeting />{b}</div>;
  }
  return <div><GuestGreeting />{b}</div>;
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
	foo(props)
	{
		if( ! this.state.par)
			return <button onClick={this.signIn}>Sign Up</button>;
		return;
		
	}
	signIn()
	{
		this.setState({par: true});
	}
	signOut()
	{
		this.setState({par: false});
	}
	render()
	{
	 //let x = this.foo();
	 //return (<div>{x}</div>);
		if( ! this.state.par)
			return <button onClick={this.signIn}>Sign In</button>;
		else
			return <button onClick={this.signOut}>Sign out</button>;
	}
}

export default Greeting;
