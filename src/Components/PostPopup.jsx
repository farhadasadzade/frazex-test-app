import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const PostPopup = ({setActive, postTitle}) => {
  return (
    <div className='popup'>
        <div className="popup__back"></div>
        <div className="popup__block">
            <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} />
            <h2>{postTitle}'s comments</h2>
            <div className="popup__content">
              
            </div>
        </div>
    </div>
  )
}

export default PostPopup