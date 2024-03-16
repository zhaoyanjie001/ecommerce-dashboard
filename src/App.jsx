import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route,withRouter  ,  } from "react-router-dom";
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
          
            <Route path="/login">
              {window.someValue1 === '9' ? this.props.history.push('/') : <Login />}
            </Route>
            <Route path="/" element={<MainLayout />}>
                {window.someValue1 === '9' ? this.props.history.push('/') : <Login />}
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
    );
  }
}
export default App;
