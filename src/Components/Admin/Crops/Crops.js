import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Crops = (props) => {
  const location = useLocation();
  console.log(location)
  console.log(location.state)
  // console.log(location.state.data)

  return (
    <div>
      <div className="sidebar">
                    <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
                    <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
                    <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
                    <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
                    <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
                </div>
      Hello crops
    </div>
  )
}

export default Crops
