import React, { useState } from 'react'

import PostPopup from './PostPopup'

const Post = ({postTitle, postBody, postId}) => {

  const [isActive, setActive] = useState(false)

  return (
    <>
      <tr>
        <td onClick={() => setActive(true)}>{postId}</td>
        <td>{postTitle}</td>
        <td>{postBody}</td>
      </tr>
      {isActive && <PostPopup postId={postId} postTitle={postTitle} setActive={setActive} />}
    </>
  )
}

export default Post