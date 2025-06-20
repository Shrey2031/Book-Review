import { useState } from 'react';
import { FaBookOpen, FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

 

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 flex items-center">
                <FaBookOpen className="mr-2" /> BookNook
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Home
              </button>
              <button  onClick={() => navigate('/books')}  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Browse Books
              </button>
              <button  onClick={() => navigate('/review')} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Write Review
              </button>
              <button   onClick={() => navigate('/profile')}  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                My Profile
              </button>
            </div>
            
            {/* Auth Button */}
            <div className="flex items-center justify-between space-x-4">
               <button
              type="button"
              className="bg-white border  text-indigo-600 hover:bg-sky-50  text-sm  font-medium rounded-md px-4 py-2 transition"
              onClick={() => navigate('/signup')} // Navigate to Sign Up page
            >
              Sign Up
            </button>
              <button onClick={() => navigate('/login')}  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition flex items-center">
                <FaUser className="mr-2" /> Log In
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Home
            </button>
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Browse Books
            </button>
            <button    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Write Review
            </button>
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              My Profile
            </button>
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-indigo-100 text-indigo-600">
              Sign Up
            </button>
              <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-indigo-100 text-indigo-600">
              log In
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
