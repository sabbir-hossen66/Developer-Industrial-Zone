import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css'

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  const { user, logOut, } = useContext(AuthContext)


  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }


  const navLinks = <>
    <li className="head-section font-semibold"><NavLink to={'/'}>Home</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/contact'}>Contact</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/up-profile'}>UserProfile</NavLink></li>
    {/* <li><NavLink to={'/login'}>Login</NavLink></li> */}
  </>

  return (
    <div data-aos="fade-down" className="navbar bg-indigo-50 rounded-md sticky top-0 z-50 pt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <p className="text-sm md:text-xl lg:text-3xl font-bold cursor-pointer "><span className="text-violet-600">Dev Industrial</span>_ <span className="text-fuchsia-600">Zone</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
            <div className="flex justify-center items-center">

              {/* dropdwon */}

              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar ">
                  <div className="w-10 rounded-full hover:relative">
                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] mb-2 menu p-2 shadow bg-indigo-400 font-semibold rounded-box w-40 text-white">
                  <li>Name- {user.displayName}</li>
                  <Link to={'/another-upProfile'}><li className="underline">See UpdatedProfile</li></Link>
                </ul>
              </div>

              <div>
                <button onClick={handleLogOut} type="button" className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">LogOut
                </button>
              </div>

            </div>
            :
            <div>
              <Link to='/login'>
                <button type="button" className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login

                </button>
              </Link>
            </div>
        }

      </div>
    </div>
  );
};

export default Header;


{/* <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 relative">
  Hover me
  < span class="hidden absolute top-full left-0 bg-gray-800 text-white px-2 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" >
    Hidden Text
  </ >
</button > */}
