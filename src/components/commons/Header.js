import React from 'react';
import { Link } from 'react-router'

const Header = (props) => (
  <header className="header">
    <h1>React Raw Simple Forms</h1>
    <hr/>

    <Link to='/' className='btn btn-primary'>Home</Link>
    <Link to='about' className='btn btn-primary'>About</Link>
    <Link to='courses' className='btn btn-primary'>Courses</Link>
  </header>
);

export default Header;
