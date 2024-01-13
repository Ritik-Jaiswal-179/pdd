import React from 'react'
import { Link } from 'react-router-dom'

const Userfeedback = () => {
  return (
    <div>
        <div className="sidebar">
                    <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
                    <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
                    <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
                    <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
                    <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
                </div>
      Feedback
    </div>
  )
}

export default Userfeedback
