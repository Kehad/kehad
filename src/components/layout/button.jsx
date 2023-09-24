import React from "react";

import classes from "./button.module.css";

const Button = function (props) {
  return (
    <div className={classes.button}>
      <div className={classes["button__link---box"]}>
        <a
          href={props.link}
          onClick={props.action}
          className={classes["button__profile"]}
          download={props.download}
          target={props.target}
        >
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default Button;
