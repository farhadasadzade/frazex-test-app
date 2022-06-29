import React from 'react'

const Comment = ({userName, commentBody}) => {
  return (
    <div className='post'>
        <h2>User: {userName}</h2>
        <p>{commentBody}</p>
    </div>
  )
}

export default Comment