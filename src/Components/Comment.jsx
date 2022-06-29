import React from 'react'

const Comment = ({userName, commentBody, id}) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{userName}</td>
        <td>{commentBody}</td>
    </tr>
  )
}

export default Comment