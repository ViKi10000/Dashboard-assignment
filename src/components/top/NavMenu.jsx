import React from 'react'

function NavMenu() {
  return (
    <div>
         <li className='nav-item dropdown'>
    <a className='nav-link nav-icon ' href='#' data-bs-toggle='dropdown'>
        <i className='bi bi-grid-3x3-gap-fill'></i>
        <span className='badge bg-primary badge-number'></span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
    <li className='dropdown-header '>
      <h4><input type='search'></input></h4>
      <h4><i className='bi bi-stopwatch '></i>Time & Attendance</h4>
    <h4><i className='bi bi-airplane'></i>Leave Management</h4>
    <h4><i className='bi bi-hand-thumbs-up'></i>Corporate-LMS</h4>
    <h4> <i className='bi bi-compass'></i>My Page</h4>
    
    
   
    
    </li>
    </ul>
   </li>
    </div>
  )
}

export default NavMenu