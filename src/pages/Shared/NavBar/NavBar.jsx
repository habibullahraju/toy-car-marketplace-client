import React from "react";
import {Link} from "react-router-dom";
import logo from "./../../../assets/logo.jpg";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img className="w-7 h-7" src={logo} alt="logo" />
            <a className="">Glaze Car</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal items-center px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div className=" ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
