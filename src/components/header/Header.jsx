import React from 'react'

const Header = props => {
    const titleText = Data.data.header.title;
    const descriptionText = Data.data.header.text;
    return (
        <header className="header">
            <h1 className="header__title">{ title }</h1>
            <p className="header__text" dangerouslySetInnerHTML={{ __html: text }}></p>
        </header>
    )
}

export default Header