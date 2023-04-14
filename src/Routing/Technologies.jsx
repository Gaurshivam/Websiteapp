import React from 'react';
import  './Technologies.css'
import { Link,Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='tech'>
    <div className='leftTech'>
      <Link to='html'>HTML</Link>
      <Link to='css'>CSS</Link>
      <Link to='js'>JAVASCRIPT</Link>
      <Link to='react'>REACT</Link>
    </div>

    <div className='rightTech'>
      <Outlet />
    </div>
    </div>
  );
}

export default Profile;
