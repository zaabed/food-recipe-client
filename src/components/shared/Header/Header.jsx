import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo1.jpg';
import { AuthContext } from '../../../providers/AuthProvider';
// import { FaLocationArrow, FaUserCircle } from "react-icons/fa";
import ActiveLink from '../../../ActiveLink/ActiveLink';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-amber-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to='aboutUs'>About Us</Link>
                            <Link to='blogs'>Blogs</Link>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-25 h-14 rounded-md' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <ActiveLink to='/' className='mx-3 hover:hover:bg-amber-100 p-2 rounded'>Home</ActiveLink>
                        <ActiveLink to='aboutUs' className='mx-3 hover:hover:bg-amber-100 p-2 rounded'>AboutUs</ActiveLink>
                        <ActiveLink to='blogs' className='mx-3 hover:hover:bg-amber-100 p-2 rounded'>Blogs</ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end flex items-start">

                    <div className='mx-2'>
                        {user &&
                            <span>

                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <button><img className='w-12 h-12 rounded-md' src={user.photoURL} alt="" /></button>
                                </div>
                            </span>
                        }
                    </div>

                    <div>
                        {
                            user ?
                                <button onClick={handleLogOut} className="btn bg-amber-300">LogOut</button> :
                                <Link to='/login'><button className="btn bg-amber-300">Login</button>
                                </Link>

                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;