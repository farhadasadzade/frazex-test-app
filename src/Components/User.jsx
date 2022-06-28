import React from 'react'

const User = ({ userName, userEmail }) => {
  return (
    <div className='user'>
        <div className="user__about">
            <div className="user__img">
                a
            </div>
            <div className="user__info">
                {userName}
                <span>{userEmail}</span>
            </div>
        </div>
        <div className="user__posts">
            0
        </div>
    </div>
  )
}

export default User