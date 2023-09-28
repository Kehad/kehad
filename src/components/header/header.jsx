import { useState } from 'react';
import MenuBar from '../menubar/menubar';
import classes from './header.module.css';
import Toggle from './toggleMode';
import Backdrop from '../layout/backdrop';

const Header = function (props) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const menuHandler = () => {
      setIsMenuActive(true);
    }
      props.menuActive(isMenuActive);
  
  return (
    <>
      <div className={classes.header}>
        <a href='www.kehad.onrender.com'>
          <div className={classes["header__logo"]}>
          <svg
            width="39"
            height="33"
            viewBox="0 0 39 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <path
                id="Intersect"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8463 6.73581H6.46811C1.84931 6.73581 -1.03743 11.7358 1.27197 15.7358L11.019 32.6182H16.3972C21.016 32.6182 23.9028 27.6182 21.5934 23.6182L11.8463 6.73581Z"
                fill="#07C51A"
              />
              <path
                id="Intersect_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.2743 0.618195H22.8961C18.2773 0.618195 15.3905 5.61819 17.6999 9.61819L27.447 26.5006H32.8252C37.444 26.5006 40.3307 21.5006 38.0213 17.5006L28.2743 0.618195Z"
                fill="#07C51A"
              />
            </g>
          </svg>
          <h1 className={classes["header__logo---text"]}>Kehad</h1>
        </div></a>
        {/* <Toggle /> */}
        <div className={classes["header-icon-close"]}>
          <span onClick={menuHandler} className="material-symbols-outlined">
            menu
          </span>
        </div>

        {/* <MenuBar /> */}
        <div className={classes["header__toggle"]}>
          <Toggle />
        </div>
      </div>

      {isMenuActive && (
        <MenuBar menuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      )}
      {/* {isMenuActive && (
        <Backdrop/>
      )} */}
    </>
  );      
};

export default Header;