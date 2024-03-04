import React from 'react'
import Data from '../../data/data.json';
import ParentCom  from './ParentCom';
import ParentCom1 from './ParentCom1';
import { Component } from 'react/cjs/react.production.min';
class Header extends Component {
     title = Data.data.main.title;
     text = Data.data.main.text;

    componentWillUnmount(){
        console.log("Header:componentWillUnmount");
    }
    render(){
    return (
        <header>
            <ParentCom></ParentCom>
            <h1 className="header__title">{ this.title }</h1>
            <p className="header__text" dangerouslySetInnerHTML={{ __html: this.text }}></p>
            <ParentCom1></ParentCom1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </header>
    );}
}

export default Header