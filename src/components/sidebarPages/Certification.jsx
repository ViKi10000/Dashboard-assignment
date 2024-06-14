import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './certification.css';
import Training from './Training';


function Certification() {

  
  return (
  <>
    <div id='certificate' className='certificate'>
    <nav>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <NavLink to='/'>
                Dashboard
               </NavLink>
              
            </li>
            <li className='breadcrumb-item'>
               <NavLink to='#'>
                Training
               </NavLink>
            </li>
            <li className='breadcrumb-item'>
               <NavLink to='#'>
                Certificate
               </NavLink>
            </li>

        </ol>
    </nav>

<Training/>
    
</div>

</>
  )
}

export default Certification;