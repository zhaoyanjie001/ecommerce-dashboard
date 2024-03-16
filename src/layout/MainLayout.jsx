import React, { Component } from "react";
import "./main-layout.scss";
import { Outlet, Route, Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import AppContext from "../AppContext";


class MainLayout extends React.PureComponent {

    render() {
        return (
          <>
            <AppContext.Consumer>
              {
                (value) => 
                <div>
                    {console.log(value)}
                  
                </div>
              }
            </AppContext.Consumer>
            <Sidebar />
            <div className="main">
              <div className="main__content">
                <TopNav />
                <Outlet /> 
              </div> 
            </div>
                  </>
        );
      }

}
export default MainLayout;
