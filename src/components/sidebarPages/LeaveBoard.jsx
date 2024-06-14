import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './leaveBoard.css';
import LeaveStatus from './LeaveStatus';

function LeaveBoard() {

  
  return (
  <>
    <div id='leaveBoard' className='leaveBoard'>
    <nav>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <NavLink to='/'>
                Leave Status
               </NavLink>
              
            </li>
            <li className='breadcrumb-item'>
               <NavLink to='/leaveReq'>
                Leave Request
               </NavLink>
            </li>

        </ol>
    </nav>

<LeaveStatus/>
    
</div>

</>
  )
}

export default LeaveBoard;