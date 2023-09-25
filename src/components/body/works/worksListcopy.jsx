import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './worksLfffd.css';
import classes from "./worksItem.module.css";
import Adbook from "../../../images/Adbook.png";
import kadee from "../../../images/kadee.png";
import Exchnge from "../../../images/static-exchnge.png";
// 

const worksData = [
  {
    id: "m1",
    name: "Adboöks",
    description:
      "Adboöks operates as a subsidiary of Adlife, specializing in the sale of captivating romance novels. Their website is dedicated to showcasing and offering the top 10 romance books. The website seamlessly integrates the branding of their parent company, 'Adlife,' ensuring a cohesive and recognizable experience for our visitors.",
    website: "https://adbook.onrender.com/",
    // imageSrc: Adbook,
  },
  {
    id: "m2",
    name: "Kadee",
    description:
      "Your stylish online boutique for both men and women. Discover the latest trends with easy login, detailed product pages, and a user-friendly cart. Shop effortlessly on any device. Join us for a hassle-free fashion experience where style meets convenience.",
    website: "https://kadee.onrender.com/",
    // imageSrc: kadee,
  },
  {
    id: "m3",
    name: "Static Exchnge",
    description:
      "Your premier decentralized crypto platform. Trade, earn, and win on this secure, user-friendly space. Explore various cryptocurrencies and lucrative earning opportunities. Join contests for stellar crypto rewards. Embark on an interstellar journey of financial possibilities today!",
    website: "https://static-exchnge.onrender.com/",
    // imageSrc: Exchnge,
  },
];


function NewList() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className={classes.worksItem}>
          <div className={classes["worksItem__box"]}>
            <div className={classes["worksItem__box---textCont"]}>
              <h2 className={classes["worksItem__box---textCont--title"]}>
                Adboöks
              </h2>
              <p className={classes["worksItem__box---textCont--text"]}>
                Adboöks operates as a subsidiary of Adlife, specializing in the
                sale of captivating romance novels. Their website is dedicated
                to showcasing and offering the top 10 romance books. The website
                seamlessly integrates the branding of their parent company,
                'Adlife,' ensuring a cohesive and recognizable experience for
                our visitors.
              </p>
            </div>
            <div className={classes["worksItem__box--imgCont"]}>
              <img
                src={Adbook}
                className={classes["worksItem__box--imgCont-img"]}
                alt="The Landing"
              />
            </div>
          </div>
          <a href="" target="_blank">
            View Website
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.worksItem}>
          <div className={classes["worksItem__box"]}>
            <div className={classes["worksItem__box---textCont"]}>
              <h2 className={classes["worksItem__box---textCont--title"]}>
                Kadee
              </h2>
              <p className={classes["worksItem__box---textCont--text"]}>
                "Your stylish online boutique for both men and women. Discover
                the latest trends with easy login, detailed product pages, and a
                user-friendly cart. Shop effortlessly on any device. Join us for
                a hassle-free fashion experience where style meets
                convenience.",
              </p>
            </div>
            <div className={classes["worksItem__box--imgCont"]}>
              <img
                src={kadee}
                className={classes["worksItem__box--imgCont-img"]}
                alt="The Landing"
              />
            </div>
          </div>
          <a href="" target="_blank">
            View Website
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.worksItem}>
          <div className={classes["worksItem__box"]}>
            <div className={classes["worksItem__box---textCont"]}>
              <h2 className={classes["worksItem__box---textCont--title"]}>
                Static Exchnge
              </h2>
              <p className={classes["worksItem__box---textCont--text"]}>
                "Your premier decentralized crypto platform. Trade, earn, and
                win on this secure, user-friendly space. Explore various
                cryptocurrencies and lucrative earning opportunities. Join
                contests for stellar crypto rewards. Embark on an interstellar
                journey of financial possibilities today!",
              </p>
            </div>
            <div className={classes["worksItem__box--imgCont"]}>
              <img
                src={Exchnge}
                className={classes["worksItem__box--imgCont-img"]}
                alt="The Landing"
              />
            </div>
          </div>
          <a href="" target="_blank">
            View Website
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default NewList;
