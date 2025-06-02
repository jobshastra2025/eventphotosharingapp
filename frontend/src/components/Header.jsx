import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useLogout from '../hooks/useLogout';
import { MdKeyboardArrowDown } from "react-icons/md";

const Header=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authUser } = useAuthContext();
  const {loading,logout}=useLogout();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-[#FE505A]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold">
              Logo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to={"/"} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to={"/"}  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Events
              </Link>
              <Link to={"/"} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link to={"/"} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Photos
              </Link>
         {authUser ? <div className="flex flex-row items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm font-medium">
          <span className='text-white'>{authUser?.username}</span> <img src={authUser?.profilePic} width={35} height={35}/><MdKeyboardArrowDown className='cursor-pointer' color='white' size={18}/></div> 
          :   <Link to={"/"} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Login
              </Link>}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-red-400">
              <Link to={"/"} className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to={"/user/events"}  className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Events
              </Link>
              <Link to={"/"} className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Services
              </Link>
              <Link to={"/"} className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                Photos
              </Link>
              <button disabled={loading} onClick={logout}  className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                 {loading ? "Logging out" : "Logout"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


export default Header;