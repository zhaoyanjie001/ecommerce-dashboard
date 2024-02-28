import React from 'react'
import Data from '../data/data.json';
const List = () => {
    const title = Data.data.header.title;
    const text = Data.data.header.text;
    return (
        <div>
            This is a List page
            <h1 className="header__title">{ title }</h1>
            <p className="header__text" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}

export default List
