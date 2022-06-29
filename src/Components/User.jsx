import React, { useState } from 'react'
import UserPopup from './UserPopup'

const User = ({ userName, userEmail, userId }) => {

    const [isActive, setActive] = useState(false)

  return (
    <>
        <div className='user' onClick={() => setActive(true)}>
        <div className="user__about">
            <div className="user__img">
                a
            </div>
            <div className="user__info">
                {userName}
                <span>{userEmail}</span>
            </div>
        </div>
    </div>
    {isActive && <UserPopup userId={userId} userName={userName} setActive={setActive} />}
    </>
  )
}

export default User