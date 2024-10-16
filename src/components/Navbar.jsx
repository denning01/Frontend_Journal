import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/updateprofile'}>Update profile</Link></li>
      </ul>
    </nav>
</div>
  )
}

export default Navbar