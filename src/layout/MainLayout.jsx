import React, { Component } from "react";
import "./main-layout.scss";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";


class MainLayout extends React.PureComponent {


  loginTo(value) {
    console.log("login:"+value);
    if (value === "1") {
      return (
        <>

          <Sidebar />
          <div className="main">
            <div className="main__content">
              <TopNav />
              <Outlet />
            </div>
          </div>
        </>
      );
    } else {
      return (
        
          <Navigate to="/login" />

        
      );
    }
  }
  render() {
    return <div>{this.loginTo(window.localStorage.getItem('loginState'))}</div>;
  }
}
export default MainLayout;
