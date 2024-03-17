import React, { Component } from "react";


export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.redirectToLogout = this.redirectToLogout.bind(this);
  }
  redirectToLogout() {
    window.localStorage.setItem("loginState", "0");
    console.log("localStorage:" + window.localStorage.getItem("loginState"));
    window.location.assign("http://138.138.0.111:84");
  }
  render() {
    return <div>{this.redirectToLogout()}</div>;
  }
}

