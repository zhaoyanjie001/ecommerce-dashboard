import React from "react";
import ChildCom1 from "./ChildCom1.jsx";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Dashboard from "../../pages/Dashboard";
import Blank from "../../pages/Blank";
import List from "../../pages/List";
class ParentCom1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("ParentCom1:constructor");
  }
  componentWillMount(){
    console.log("ParentCom1:componentWillMount");
  }

  componentDidUpdate(){
    console.log("ParentCom1:componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("ParentCom1:componentWillUnmount");
  }
  state = {
    getChildValue: "",
    getChildValue1: "",
  };
  getChildValue(value) {
    this.setState({
      getChildValue: value,
    });
  }
  getChildValue1(value){
    this.setState({
      getChildValue1:value,
    });
  }
  getredir() {
    if(this.state.getChildValue1 === '333') {

    }
  }
  render() {
    return (
      <div>
        
        <ChildCom1 onValue={this.getChildValue.bind(this)} />
        <br/>
        <ChildCom1 onValue={this.getChildValue1.bind(this)} />
        <br/>
        <h1>父组件</h1>
        <div>子组件过来的值为：{this.state.getChildValue}</div>
        <br/>
        <div>子组件过来的值为1：{this.state.getChildValue1}</div>
        
        <Routes>
          <Route path="/home" element={<MainLayout />}>
          </Route>
        </Routes>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}
export default ParentCom1;
