import React from "react";

import classes from "./works.module.css";
import WorkList from "./worksList";
import NewList from "./worksListcopy";


const Works = function (props) {
 

  // const records = Slice(firstIndex, lastIndex);
  // const npage = Math.ceil(props.data.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className={classes.works}>
      <h1 className={classes["works__greeting"]}>Works</h1>
     
      <WorkList />
     {/* <NewList /> */}
    </div>
  );
};

export default Works;
