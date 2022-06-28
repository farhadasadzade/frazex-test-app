import React from 'react'

import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {

    const handleChange = () => {
        
    }

  return (
    <header className='header'>
        <div className="container">
            <div className="header__content">
                <div className="header__nav">
                    <Link to='/users'>Users</Link>
                    <Link to='/posts'>Posts</Link>
                </div>
                <div className="header__dark">
                    Light
                    <Switch
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    Dark
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header