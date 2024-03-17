import React from 'react'

const Blank = () => {
    console.log(window.localStorage.getItem('loginState'));
    if("1" !== window.localStorage.getItem('loginState')){
        window.location.assign('http://138.138.0.111:84');
    }
    return (
        <div>
            This is a blank page
        </div>
    )
}

export default Blank
