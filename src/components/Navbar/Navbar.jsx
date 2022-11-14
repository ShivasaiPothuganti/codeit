import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <div className="navbar" >
        <div className="navbar_logo">
            <h2>Code It</h2>
        </div>
        <div className="navbar_links">
          <div className="navbar_links_wrapper">
            <Link to="/" >Home</Link>
            <Link to="/codes" > Codes </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar;