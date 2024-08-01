import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className='Header'>
     <h3>TODO LIST📅 </h3>
     <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;