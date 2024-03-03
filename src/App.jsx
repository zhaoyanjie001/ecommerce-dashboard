import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Blank from "./pages/Blank";
import List from "./pages/List";
import Login from "./components/login/Login";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import { Component } from "react";

class App extends Component {



  state = {
    getChildValue1: "",
  };

  getChildValue1(value) {
    this.setState({
      getChildValue1: value,
    });
  }

  goHome(value){
    console.log(value);
  }

  render() {
    return (
        <BrowserRouter>
          <Routes>
            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="/" element={<Navigate to="/login" /> }> */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} /> 
              <Route path="login" element={<Login />} />
              <Route path="products" element={<Blank />} />
              <Route path="order" element={<Blank />} />
              <Route path="customers" element={<Blank />} />
              <Route path="settings" element={<Blank />} />
              <Route path="stats" element={<Blank />} />
              <Route path="list" element={<List />} />
            </Route>
          </Routes>
        </BrowserRouter>
      
// <div>
// <Login onValue={this.getChildValue1.bind(this)}></Login>
// <h1>父组件</h1>
// <div>子组件过来的值为1：{this.state.getChildValue1}</div>
//     this.goHome(this.state.getChildValue1);

// </div>
    );
  }
}
export default App;
