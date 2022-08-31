import React from 'react'
import './Header.css';
import huru from './huru.png'

function Header() {
  return (
    <div className='header'>

    <img className='header_logo' src={huru} alt="Huru Logo"/> 


    <div className='header_search'>  
    <input className='header_searchInput' type='text'/>
    </div>

    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'> Hello </span>
            <span className='header_optionLineOne'> Sign In  </span>
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'> Returns </span>
            <span className='header_optionLineOne'>  Orders </span>
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'> your  </span>
            <span className='header_optionLineOne'> Prime </span>
        </div>

    </div>

    </div>
  )
}

export default Header