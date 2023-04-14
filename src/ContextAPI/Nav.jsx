import React from 'react';
import './Nav.css'
import { useContext } from 'react';
import { myContext } from './Context';
import {Link}  from 'react-router-dom'

const Nav = () => {

  const {setIsloggedIn} =useContext(myContext)
  return (
    <div className='nav'>
      <div className='title'>
        <h2>Shivam Gaur</h2>
      </div>
      <div className='menu'>
        <Link to="/">Home</Link>
        <Link to="/tech">Technologies</Link>
        <Link to="/product">Product</Link>
        <Link to="contact">Contact</Link>
        <button className='btn' onClick={()=>{setIsloggedIn(false)}}>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
