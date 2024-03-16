import React, { Component,  useContext } from "react";
import Field from "./Field";
import Button from "./Button";
import Dashboard from '../../pages/Dashboard';
import { Message } from "@arco-design/web-react";
import { Switch, Route,Routes, HashRouter, redirect, Link, History,Navigate} from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import List from '../list/List';



export default class App extends Component {
  username = React.createRef();
  password = React.createRef();

  vTop(value) {
    console.log(value);
    // this.props.onValue(value);
  }
  test(value) {
    console.log(value);
  }
  

  constructor(props) {
    super(props);
    this.state = { value: '' };
    // this.state = { value1: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ 
      value:  event.target.value
     });
    //  this.setState({ 
    //   value1: event.target.value1
    //  });
    console.log(this.state);
    console.log(event.target.value);
  }
  updateGlobalVariable(event) {
    
    window.someValue1 = event.target.value;
    console.log(window.someValue1);
  };
  render() {
    return (
      
      <div>
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="text" value={this.state.value1} onChange={this.updateGlobalVariable} />
          
        </div>
        {/* <AppContext.Consumer>
          {
            (value) => 
            <div>
                {console.log(value)}
            </div>
          }
        </AppContext.Consumer> */}

         
        <h2>登录页面</h2>
        <Field label="用户名" type="text" ref={this.username}></Field>
        <Field label="密码" type="password" ref={this.password}></Field>


        <div style={{ display: "flex", marginLeft: "110px" }}>

          <Button
            type="button"
            value="登录"
            event={() => {
              // console.log(
              //  this.props,
              //   this.username.current.state.value,
              //   this.password.current.state.value
              // );

              if (
                this.username.current.state.value === "123" &&
                this.password.current.state.value === "123"
              ) {
                Message.success("登陆成功");
                console.log("登陆成功");
                // this.test("test");
                // this.vTop('0');
      
              } else {
                // 处理登录逻辑
                console.log("登录");
                <Navigate to="/login" />
              }
              
            }}
          />
          <Button
            type="button"
            value="重置"
            event={() => {
              this.username.current.clear();
              this.password.current.clear();
            }}
          />
        </div>
      </div>
    );
  }
}
