import React from 'react'

function NavNotice() {
  return (
   <li className='nav-item dropdown'>
    <a className='nav-link nav-icon ' href='#' data-bs-toggle='dropdown'>
        <i className='bi bi-bell'></i>
        <span className='badge bg-primary badge-number'></span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
    <li className='dropdown-header'>
    <i className='bi bi-bell'></i>
    <span className='badge rounded-pill bg-primary p-2 ms-2'>Notifications</span>
    </li>
    </ul>
   </li>
  )
}

export default NavNotice