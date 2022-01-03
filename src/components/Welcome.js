import React from 'react'
import logo from '../assets/twitter.svg'

function Welcome() {
    return (
        <div className='welcome'>
            <img src={logo} alt="logo" />
            <h2>Add Users to see their recent Tweets</h2>
        </div>
    )
}

export default Welcome
