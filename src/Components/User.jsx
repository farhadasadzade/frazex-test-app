import React, { useState } from 'react'
import UserPopup from './UserPopup'

const User = ({ userName, userEmail, userId }) => {

    const [isActive, setActive] = useState(false)

  return (
    <>
        <tr>
            <td onClick={() => setActive(true)}>{userId}</td>
            <td>{userName}</td>
            <td>{userEmail}</td>
        </tr>
        {isActive && <UserPopup userId={userId} userName={userName} setActive={setActive} />}
    </>
  )
}

export default User