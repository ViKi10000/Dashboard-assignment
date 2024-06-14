import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import GenearlView from './GenearlView'

function Dashboard() {

  
  return (
  <>
    <div id='dashboard' className='dashboard'>
    <nav>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <NavLink to='/'>
                General View
               </NavLink>
              
            </li>
            <li className='breadcrumb-item'>
               <NavLink to='/timeline'>
                Timeline View
               </NavLink>
            </li>

        </ol>
    </nav>


    <GenearlView/>
</div>

</>
  )
}

export default Dashboard