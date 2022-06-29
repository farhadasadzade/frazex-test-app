import React, { useState } from 'react'

import PostPopup from './PostPopup'

const Post = ({postTitle, postBody, postId}) => {

  const [isActive, setActive] = useState(false)

  return (
    <>
      <div className='post' onClick={() => setActive(true)}>
        <h2>{postTitle}</h2>
        <p>{postBody}</p>
      </div>
      {isActive && <PostPopup postId={postId} postTitle={postTitle} setActive={setActive} />}
    </>
  )
}

export default Post