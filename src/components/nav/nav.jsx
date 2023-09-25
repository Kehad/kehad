import classes from "./nav.module.css";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = function () {
  // const [newActive, setNewActive] = useState(false);
  // const [skillActive, setSkillActive] = useState(false);
  // const [workActive, setWorkActive] = useState(false);
  // const [sideProjectActive, setProjectActive] = useState(false);
  // const [contactActive, setContactActive] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#07c514" : "#fff",
      fill: isActive ? "#07c514" : "#fff",
    };
  };
  // useEffect(() => {
  //   setNewActive(true);
  // }, [])
  //   const navHandler = (e) => {
  //   e.preventDefault();

  //   console.log('aa')
  //   // setNewActive(newActive => !newActive);
  //   // setNewActive(true);
  // }
  return (
    <nav className={classes.nav}>
      <div className={classes["nav__container"]}>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-arrange1"]}`}
        >
          <NavLink
            className={classes["nav__container---box--link"]}
            style={navLinkStyles}
            to="/home"
          >
            {/* <i
              className={`fa fa-address-book ${["nav__container---box--icon"]}`}
            ></i> */}
            {/* <i className="material-icons">home</i> */}
            <span className="material-symbols-rounded">home</span>
            <span className={classes["nav__container---box--name"]}>Home</span>
          </NavLink>
        </div>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-arrange2"]}`}
        >
          <NavLink
            // className={classes["nav__container---box--link"]}
            className={`${classes["nav__container---box--link"]} ${classes["nav__container---box--link-phone"]}`}
            style={navLinkStyles}
            to="/about-me"
          >
            {/* <i className="fa fa-archive nav__container---box--icon"></i> */}
            <i className="material-icons material-icons-round">person</i>
            <span className={classes["nav__container---box--name"]}>
              About me
            </span>
          </NavLink>
        </div>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-arrange3"]}`}
        >
          <NavLink
            // {/* <div className={classes["nav__container---box"]}> */}
            className={classes["nav__container---box--link"]}
            style={navLinkStyles}
            to="/skills"
          >
            {/* <i className="fa fa-bullseye nav__container---box--icon"></i> */}
            <i className="material-icons material-icons-round">
              integration_instructions
            </i>
            <span className={classes["nav__container---box--name"]}>
              Skills
            </span>
          </NavLink>
        </div>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-arrange4"]}`}
        >
          <NavLink
            className={classes["nav__container---box--link"]}
            style={navLinkStyles}
            to="/works"
          >
            {/* <i className="fa fa-balance-scale  nav__container---box--icon"></i> */}
            <i className="material-icons material-icons-round">work</i>
            <span className={classes["nav__container---box--name"]}>Works</span>
          </NavLink>
        </div>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-arrange5"]}`}
        >
          <NavLink
            className={classes["nav__container---box--link"]}
            style={navLinkStyles}
            to="/side-project"
          >
            {/* <i className="fa fa-car  nav__container---box--icon"></i> */}
            <i className="material-icons material-icons-round">workspaces</i>
            <span className={classes["nav__container---box--name"]}>
              Side project
            </span>
          </NavLink>
        </div>
        <div
          className={`${classes["nav__container---box"]} 
          ${classes["nav__container---box--link-contact"]}`}
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
      </div>
    </nav>
  );
};

export default Nav;

{/* <div className={classes["nav__container---box"]}>
  <NavLink
    className={classes["nav__container---box--link"]}
    style={navLinkStyles}
    to="/home"
  >
    <i className="material-icons material-icons-round">home</i>
    <i className="fa fa-bullseye nav__container---box--icon"></i>
    <span className={classes["nav__container---box--name"]}>Home</span>
  </NavLink>
</div>; */}
