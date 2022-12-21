import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-sky-700 text-white font-bold">
            <div className="navbar-start">
                <Link to='/'><button className='btn btn-active btn-ghost'>Home</button></Link>
            </div>
            <div className="navbar-middle">
                <Link to='/projects'><button className='btn btn-ghost'>Projects</button></Link>
            </div>
            <div className="navbar-end">
                <a href="https://form.jotform.com/223540103762446" target="_blank"><button className='btn btn-ghost'>Contact Me</button></a>

            </div>
        </div>
    );
};
export default Navbar;