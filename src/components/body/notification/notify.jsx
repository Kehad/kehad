import { useState } from "react";
import classes from "./notify.module.css";
import Not from "./not";

const Notify = function (props) {
  const [isCancel, setIsCancel] = useState(false);

  const cancelHandler = (event) => {
    event.preventDefault();

    setIsCancel(true)
  }
  const notify = (
    <div className={classes.notify}>
      <div className={classes["notify__header"]}>
        <strong className="me-auto">{props.head}</strong>
        <small onClick={cancelHandler}>X</small>
      </div>
      <div className={classes["notify__text"]}>{props.text}</div>
    </div>
  );

  
  return (
    <>

      {!isCancel ? notify : ''}
    </>
  );
};

export default Notify;
