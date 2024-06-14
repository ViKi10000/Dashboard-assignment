import React from 'react'
import { NavLink } from 'react-router-dom';
import "./sideNav.css"

import AttendanceTable from '../sidebarPages/AttendanceTable'

function SideNav() {
  return (
    <>
    <div className='sideNav fixed d-flex'>
      
    <nav>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <NavLink to='#'>
                Attendance Board
               </NavLink>
              
            </li>
            <li className='breadcrumb-item'>
               <NavLink to='#'>
                Today Status
               </NavLink>
            </li>

            <li className='breadcrumb-item'>
               <NavLink to='#'>
                Conflicted Punch
               </NavLink>
            </li>


        </ol>
    </nav>
    </div>
    <AttendanceTable/>
    </>
  )
}

export default SideNav;