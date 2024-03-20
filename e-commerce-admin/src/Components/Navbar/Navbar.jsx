import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar_id'>JAKL</p>
      <p className='admin_panel'>ADMIN PANEL</p>


      
      {/* <img src={navlogo} className='nav-logo' alt="" /> */}
      {/* <img src={navprofileIcon} className='nav-profile' alt="" /> */}
    </div>
  )
}

export default Navbar
