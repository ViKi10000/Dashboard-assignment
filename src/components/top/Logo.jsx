import React from 'react'
import './logo.css'


function Logo() {

  

  const handleToggleSidebar=()=>{
    document.body.classList.toggle('toggle-sidebar')
} 

  return (
    <div className='d-flex align-items-center justify-content-between'>

<i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSidebar}></i>
    </div>
  )
}

export default Logo