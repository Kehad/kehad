import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./menubar.module.css";
import Toggle from "../header/toggleMode";

const MenuBar = function (props) {
  const { menuActive, setIsMenuActive } = props;

  const cancelHandler = () => {
    setIsMenuActive(!menuActive);
  }
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#07c514" : "#fff",
      fill: isActive ? "#07c514" : "#fff",
    };
  };

  return (
    <div className={classes.menubar}>
      <div className={classes["menu-icon"]}>
        <span onClick={cancelHandler} style={{ fontSize: '36px' }} className="material-symbols-rounded">
          cancel
        </span>
      </div>
      <div
        className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-contact"]}`}
        onClick={cancelHandler}
      >
        <NavLink
          className={classes["nav__container---box--link"]}
          style={navLinkStyles}
          to="/contact-me"
        >
          {/* <i className="fa fa-address-card-o  nav__container---box--icon"></i> */}
          <i className="material-icons material-icons-round">email</i>
          <span className={classes["nav__container---box--name"]}>
            Contact me
          </span>
        </NavLink>
      </div>

      <Toggle onAction={cancelHandler} />
    </div>
  );
};

export default MenuBar;
