import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  const mobnavtog = () => { window.innerWidth <= 997 && document.querySelector('.navbar-collapse').classList.remove('show') }
  return (
    <div>
{/* "rounded-pill" ............... img get circle ............*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
        <div className=" container">
          <Link className="navbar-brand" to="/">Farmfrnd</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mymenu">
              {/* <li className="nav-item"
                style={{ display: window.innerWidth <= 997 ? 'block' : 'none' }}
              >
                <Link className="nav-link" aria-current="page" to="/">Ritik Jaiswal</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/" onClick={mobnavtog}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/croprecommendation" onClick={mobnavtog}>Crop Recommendation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diseasedetection" onClick={mobnavtog}>Disease Detection</Link>
              </li>
              <li className="nav-item" onClick={mobnavtog}>
                <Link className="nav-link" to="/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile" onClick={mobnavtog}>Profile</Link>
              </li>
            </ul>
            
          </div>
          <h3 className='profile-name' style={{ color:"white" }}>Ritik Jaiswal</h3>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
