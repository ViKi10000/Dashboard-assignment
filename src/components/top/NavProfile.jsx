import React from 'react'
import profileImg from '../images/Logo.jpg'

function NavProfile() {
  return (
    <li className='nav-item dropdown pe-3'>
    <a className='nav-link nav-profile d-flex align-items-center pe-0 ' href='#' data-bs-toggle='dropdown'>
        
        <img src={profileImg} alt='profile' className='rounded-circle'/>
        
    </a>
<ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
    <li className='dropdown-header'>
    <img src={profileImg} alt='profile' className='rounded-circle'/>
        
     <h6>viki</h6>
     <span>Web Developer</span>
    </li>
<li>
    <hr className='dropdown-divider'/>
</li>
</ul>

    </li>
  )
}

export default NavProfile