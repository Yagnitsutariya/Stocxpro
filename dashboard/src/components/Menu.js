import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropdownOpen, setisProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const handleProfileClick = () => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const menuClassActive = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectedMenu === 0 ? menuClassActive : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectedMenu === 1 ? menuClassActive : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectedMenu === 2 ? menuClassActive : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectedMenu === 3 ? menuClassActive : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => {
                handleMenuClick(4);
              }}
            >
              <p className={selectedMenu === 4 ? menuClassActive : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => {
                handleMenuClick(5);
              }}
            >
              <p className={selectedMenu === 5 ? menuClassActive : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
