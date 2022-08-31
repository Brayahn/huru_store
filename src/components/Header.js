import React from 'react'
import './Header.css';
import huru from './huru.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <div className='header'>

    <img className='header_logo' src={huru} alt="Huru Logo"/> 


    <div className='header_search'>  
    <input className='header_searchInput' type='text'/>
    <SearchIcon className='header_searchIcon' />
    </div>

    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'> Hello </span>
            <span className='header_optionLineTwo'> Sign In  </span>
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'> Returns </span>
            <span className='header_optionLineTwo'>  Orders </span>
        </div>

        <div className='header_option'>
        <span className='header_optionLineOne'> your  </span>
            <span className='header_optionLineTwo'> Prime </span>
        </div>

        <div className='header_optionBasket'>
            <ShoppingBasketIcon className='shopping_basket'/>
            <span className='header_optionLineTwo header_basketCount'>0</span>
         </div>


    </div>

    </div>
  )
}

export default Header