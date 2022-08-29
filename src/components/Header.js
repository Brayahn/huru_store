import React from 'react'
import '/Header.css';
import huru from '/huru.png'

function Header() {
  return (
    <div className='header'>

    <img className='header_logo' src={huru} alt="Huru Logo"/> 


    <div className='header_search'>  
    <input className='header_searchInput' type='text'/>
    </div>

    <div className='header_nav'>
        <div className='header_option'></div>
        <div className='header_option'></div>
        <div className='header_option'></div>
    </div>

    </div>
  )
}

export default Header