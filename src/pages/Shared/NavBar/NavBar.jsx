import React, { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "./../../../assets/logo.jpg";
import { AuthContext } from "../../../provider/authProvider/authProvider";

const NavBar = () => {

  const {user, handleLogOut} = useContext(AuthContext);
  const handleLogOutBtn = ()=>{
    handleLogOut()
    .then(()=>{
      console.log('LogOut successfully');
    })
    .catch(error =>{
      console.log(error);
    })
  }

  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">|||</label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
            <NavLink to='/'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Home</NavLink>
            <NavLink to='/blog'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Blog</NavLink>
                {user?
                  <NavLink to='/add-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Add Toy</NavLink>:""}
                {user?
                <NavLink to='/my-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>My Toy</NavLink>:""}
            <NavLink to='/all-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>All Toy</NavLink>
            {user?
              <NavLink onClick={handleLogOutBtn}   className={({ isActive }) =>
              isActive ? "": ""
       }>LogOut</NavLink>:
    <NavLink to='/login'  className={({ isActive }) =>
              isActive ? "text-[#C59D5F] font-bold": ""
       }>Login</NavLink>
            }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-7 h-7" src={logo} alt="logo" />
            <p className="">Glaze Car</p>
          </Link>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal gap-2 items-center px-1">
           
            <NavLink to='/'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Home</NavLink>
            <NavLink to='/blog'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Blog</NavLink>
                {user?
                  <NavLink to='/add-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>Add Toy</NavLink>:""}
                {user?
                <NavLink to='/my-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>My Toy</NavLink>:""}
            <NavLink to='/all-toy'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
               }>All Toy</NavLink>
            {user?
              <NavLink onClick={handleLogOutBtn}   className={({ isActive }) =>
              isActive ? "": ""
       }>LogOut</NavLink>:
    <NavLink to='/login'  className={({ isActive }) =>
              isActive ? "text-[#C59D5F] font-bold": ""
       }>Login</NavLink>
            }
             
            </ul>
          </div>
         {user?
          <div title={user?.displayName} className=" ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
          </div>:''}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
