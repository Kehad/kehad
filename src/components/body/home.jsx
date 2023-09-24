import React from "react";
import MyComponent from "./autoType.jsx";
import classes from "./home.module.css";
import Button from "../layout/button.jsx";
import ButtonType2 from "../layout/buttonType2.jsx";
import SocialLinks from "../layout/socialLinks.jsx";

const Home = function () {
  return (
    <div className={classes.home}>
      <h1 className={classes["home__greeting"]}>Hi.</h1>
      <h3 className={classes["home__name"]}>
        I'm  <MyComponent name={"Kehinde Adigun."} />
      </h3>
      <p className={classes["home__text"]}>
        I am a <span>front-end developer</span> who currently seek out <br></br>{" "}
        innovative solution to everyday problems.
        <br />I am a dedicated and creative front-end developer with a strong
        passion for crafting engaging and visually appealing web experiences.
        With a keen eye for design and a mastery of front-end technologies, I
        thrive in the ever-evolving world of web development.
      </p>
      <SocialLinks />
      <div className={classes["home-buttons"]}>
        <Button name={"hire me"} link={"www.kehad.com"} />
        <ButtonType2 name={"about me"} link={"http://kehad.onrender.com"} />
      </div>
      {/* <MusicPlayer /> */}
    </div>
  );
};

export default Home;
