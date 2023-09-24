import { useState } from "react";
import classes from "./not.module.css";

const Not = function (props) {
    const [isCancel, setIsCancel] = useState(false);

    const cancelHandler = (event) => {
      event.preventDefault();

      setIsCancel(true);
    };
  return (
    <div className={classes.notify}>
      <div className={classes['notify__header']}>
        {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
        <strong className="me-auto">{props.head}</strong>
         <small onClick={cancelHandler}>X</small>
      </div>
      <div className={classes["notify__text"]}>
        {props.text}
      </div>
    </div>
  );
};

export default Not;
