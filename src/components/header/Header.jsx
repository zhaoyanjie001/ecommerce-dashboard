import React from 'react'
import Data from '../../data/data.json';
const Header = props => {
    const title = Data.data.main.title;
    const text = Data.data.main.text;
    return (
        <header>
            <h1 className="header__title">{ title }</h1>
            <p className="header__text" dangerouslySetInnerHTML={{ __html: text }}></p>
        </header>
    )
}

export default Header