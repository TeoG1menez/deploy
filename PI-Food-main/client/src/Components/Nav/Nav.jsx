import React from 'react'
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'
import Orden from '../Ordenar/Orden'

const Nav = () => {
  return (
    <header class="header">
       
           <a href="/Home" className='BotoncitoHome'>
           <div class="logo"></div>
           </a>
        
        <nav>
           <ul class="nav-links">
                <li><SearchBar/></li>
                <li><Orden/></li>
           </ul>            
        </nav>
        <a class="btn" href="https://www.linkedin.com/in/teo-nicolas-gimenez-herrera-209411225/"><button>Contact</button></a>
    </header>
    
  )
}

export default Nav
