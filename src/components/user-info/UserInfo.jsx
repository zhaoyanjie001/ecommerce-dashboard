import React from 'react'
import './user-info.scss'

const UserInfo = ({ user }) => {
    let userLoginInfo = window.localStorage.getItem('user');
    return (
        <div className='user-info'>
            <div className="user-info__img">
                {/* <img src={user.img} alt="" /> */}
            </div>
            <div className="user-info__name">
                <span>{userLoginInfo}</span>
            </div>
        </div>
    )
}

export default UserInfo
