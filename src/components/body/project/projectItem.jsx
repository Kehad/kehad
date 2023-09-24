import React, { useState } from "react";

import Button from "../../layout/button";
import classes from "./projectItem.module.css";

const ProductItem = function (props) {
  return (
    <div className={classes.productItem}>
      <div className={classes["productItem__box"]}>
        <div className={classes["productItem__box---textCont"]}>
          <h2 className={classes["productItem__box---textCont--title"]}>
            {props.name}
          </h2>
          <p className={classes["productItem__box---textCont--text"]}>
            {props.description}
          </p>
        </div>
        <div className={classes["productItem__box--imgCont"]}>
          <img
            className={classes["projectItem__box--imgCont-img"]}
            src={props.imageSrc}
            alt="The Landing Page"
          />
        </div>
      </div>
        <Button
          link={props.website}
          target={"_blank"}
          name={"Visit Website"}
        />
    </div>
  );
};

export default ProductItem;
