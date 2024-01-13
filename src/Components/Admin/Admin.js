import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom';

const Admin = () => {
    

    return (
        <>

            <div className='adminpage'>

                <div className="sidebar">
                    <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
                    <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
                    <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
                    <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
                    <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
                </div>

                <div className="main">

                    <div className="box">
                        <div className="name">
                            Users
                        </div>
                        {/* <hr/> */}
                        <Link className="text"  to={{ pathname: '/admin/users', state: { data: "Hello" } }}>
                            View all 
                        </Link>
                    </div>

                    <div className="box">
                        <div className="name">
                            Crops
                        </div>
                        <Link className="text" to={{ pathname: '/admin/crops', state: { data: "Crops" } }}>
                            View all --
                        </Link>
                    </div>

                    <div className="box">
                        <div className="name">
                            Feedback
                        </div>
                        {/* <hr/> */}
                        <Link className="text" to={"/admin/feedback"}>
                            View all --
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Admin
