import React, { useState } from 'react';
import "./Profile.css"

const ProfilePage=async() =>{
  
  let pythonText = "http://127.0.0.1:5000/home"
  const pt = ()=>{
    let data =  fetch(pythonText)
    console.log(data)
  }
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123', // Note: Storing passwords securely requires additional measures
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send updated data to your server or API here
    // Example:
    fetch('/api/update-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log('User data updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };

  return (<>
    <form onSubmit={handleSubmit} className='pform'>
      <label className='plabel' htmlFor="name">Name:</label>
      <input className='pinput' type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
      <br />
      <label className='plabel' htmlFor="email">Email:</label>
      <input className='pinput' type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
      <br />
      <label className='plabel' htmlFor="password">Password:</label>
      <input className='pinput' type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
      <br />
      <button className='pbutton' type="submit">Update Profile</button>
    </form>
    <h1>hello</h1>
    {/* <button className='pbutton' onClick={pt}>pt</button> */}
  </>
  );
}

export default ProfilePage;

// const Profile = () => {
  
//   let pythonText = "http://127.0.0.1:5000/home"
//   const pt = ()=>{
//     let data =  fetch(pythonText)
//     console.log(data)
//   }
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     password: 'password123', // Note: Storing passwords securely requires additional measures
//   });

//   const handleChange = (event) => {
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send updated data to your server or API here
//     // Example:
//     fetch('/api/update-user', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => {
//         console.log('User data updated successfully!');
//       })
//       .catch((error) => {
//         console.error('Error updating user data:', error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className='pform'>
//       <label className='plabel' htmlFor="name">Name:</label>
//       <input className='pinput' type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
//       <br />
//       <label className='plabel' htmlFor="email">Email:</label>
//       <input className='pinput' type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
//       <br />
//       <label className='plabel' htmlFor="password">Password:</label>
//       <input className='pinput' type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
//       <br />
//       <button className='pbutton' type="submit">Update Profile</button>
      
//     </form>
//     <h1>{pt()}</h1>
//     </div>
//   )
// }

// export default Profile
