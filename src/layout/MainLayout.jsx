import React, { Component } from "react";
import "./main-layout.scss";
import { Outlet, Route, Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import AppContext from "../AppContext";


class MainLayout extends React.PureComponent {
  renderContent() {
    if(window.someValue1 ==='9'){
      return '<Sidebar />   <div className="main"> <div className="main__content"> <TopNav /> <Outlet /> </div> </div>';
    } else {
      return <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/list">List</Link></li>
      </ul>
    </nav>;
    }

  }
  render() {
    return (
      <>
        {
          console.log("someValue1:"+ window.someValue1)
        }
        <AppContext.Consumer>
          {
            (value) => 
            <div>
                {console.log(value)}
               
            </div>
          }
        </AppContext.Consumer>
       {this.renderContent()}
         
      </>
    );
  }
}
export default MainLayout;
