import React, { Component } from "react";


export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.redirectToLogout = this.redirectToLogout.bind(this);
  }
  redirectToLogout() {
    window.localStorage.setItem("loginState", "0");
    console.log("localStorage:" + window.localStorage.getItem("loginState"));
    window.location.assign("http://localhost:3000");
  }
  render() {
    return <div>{this.redirectToLogout()}</div>;
  }
}

