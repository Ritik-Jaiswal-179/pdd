import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    return (
        <div className='adminpage'>
            <div className="sidebar">
                <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
                <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
                <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
                <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
                <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
            </div>
            <div className="users">

                {/* <table>
                    <tr>
                        <td>Sr No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Feedback</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                    </tr>
                    <tr>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                    </tr>
                </table> */}
                <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Reg no</th>
                            <th>Student Name</th>
                            <th>Specialization</th>
                            <th>Registration Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
