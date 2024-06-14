import React from 'react'
import { Link, Route, Router } from 'react-router-dom'
import './main.css'
import GenearlView from '../pages/GenearlView'



function MainNav() {
  return (
    <div className='mainNav fixed d-flex' id='mainNav'>
        <nav>
            <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                   <Link to='/'> Dashboard</Link>
                   </li>

                   <li className='breadcrumb-item'>
                   <Link to='/holiday'> Holidays</Link>
                   </li>

                   <li className='breadcrumb-item'>
                   <Link to="/salarySlip"> Salary Slip</Link>
                   </li>
                  
                   <li className='breadcrumb-item'>
                   <Link to='/auditLog'> Audit Log</Link>
                   </li>
                   <li className='breadcrumb-item'>
                   <Link to='/jd'> Job Description</Link>
                   </li>
            </ul>
      
   

        </nav>
    </div>
  )
}

export default MainNav