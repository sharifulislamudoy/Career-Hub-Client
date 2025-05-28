import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/job-seeking.json';
import { FaUserCircle, FaSignOutAlt, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ user, handleLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuOpen]);


    const navLinks = (
        <>
            <li><NavLink to="/" className="font-medium" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/jobs" className="font-medium" onClick={() => setMobileMenuOpen(false)}>Jobs</NavLink></li>
            <li><NavLink to="/about" className="font-medium" onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" className="font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
        </>
    );

    return (
        <motion.div
            className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
        >
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button
                    className="btn btn-ghost text-xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/* Left - Logo */}
            <div className="navbar-start flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10">
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                    <span className="text-xl font-bold text-primary">CareerHub</span>
                </Link>
            </div>

            {/* Center - Navigation (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {/* Right - Auth & Mobile Menu Toggle */}
            <div className="navbar-end flex gap-2">
                <ThemeToggle></ThemeToggle>

                {/* User Controls */}
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar tooltip"
                            data-tip={user.name || 'Profile'}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || <FaUserCircle></FaUserCircle>} alt="User Avatar" />
                            </div>
                        </div>
                        {dropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li>
                                    <button className="flex items-center gap-2 text-error" onClick={handleLogout}>
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <div className='flex gap-2'>
                        <Link to="/login" className="btn btn-outline btn-sm flex gap-2 items-center">
                            <FaSignInAlt /> Login
                        </Link>
                        <Link to="/sign-up" className="btn hidden  btn-outline border-blue-900 text-primary btn-sm lg:flex gap-2 items-center">
                            <FaSignInAlt /> Sign Up
                        </Link>
                    </div>

                )}
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-full left-0 w-full bg-base-100 shadow-lg z-40 lg:hidden"
                    >
                        <ul className="menu menu-vertical p-4 space-y-2">
                            {navLinks}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    );
};

export default Navbar;
