import React from 'react'

import { Switch } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = ({theme, setTheme}) => {

    const handleChange = () => {
        setTheme(!theme)
    }

  return (
    <header className='header'>
        <div className="container">
            <div className="header__content">
                <div className="header__nav">
                    <Link to='/users'>Users</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/comments'>Comments</Link>
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