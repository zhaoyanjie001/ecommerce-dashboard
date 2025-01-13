import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route,withRouter  ,  } from "react-router-dom";
import Blank from "./pages/Blank";
import List from "./pages/List";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import { Component } from "react";
import Logout from "./components/logout/Logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getChildValue1(value) {
    
  }

  goHome(value){
    console.log(value);
  }

  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Blank />} />
              <Route path="order" element={<Blank />} />
              <Route path="customers" element={<Blank />} />
              <Route path="settings" element={<Blank />} />
              <Route path="stats" element={<Blank />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    );
  }
}
export default App;
