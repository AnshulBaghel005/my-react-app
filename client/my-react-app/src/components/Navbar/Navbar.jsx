import React, { useEffect, useState } from 'react';
import {  NavLink} from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const Navbar = () => {
 // const navigate=useNavigate();
  const navItem = [
    { title: 'Home', path: '/' },
    { title: 'Course', path: '/courses' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState('light');
 useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    const handScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  }, []);

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${sticky ? "shadow-md bg-base-300 dark:bg-slate-600 dark:text-white" : "dark:bg-slate-900 dark:text-white"}`}>
      
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {navItem.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to="/" className="text-2xl font-bold btn btn-ghost">Store</NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-semibold" : ""
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex flex-row gap-3 ">
          <input type="text" placeholder="Search..." className="input text-blue-600 font-medium" />
          <a className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()} >Login</a>
          <Login/>
         
                 <a className="btn" onClick={()=>document.getElementById('signup_modal').showModal()} >Signup</a>
           <Signup/>
           <button className="ml-2" onClick={toggleTheme}>
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
