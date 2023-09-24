import React, { useState } from "react";

import classes from "./worksList.module.css";
import WorksItem from "./worksItem.jsx";
import Pagination from "./pagination.jsx";
import Adbook from "../../../images/Adbook.png";
import kadee from "../../../images/kadee.png";
import Exchnge from "../../../images/static-exchnge.png";
// import

const worksData = [
  {
    id: "m1",
    name: "Adboöks",
    description:
      "Adboöks operates as a subsidiary of Adlife, specializing in the sale of captivating romance novels. Their website is dedicated to showcasing and offering the top 10 romance books. The website seamlessly integrates the branding of their parent company, 'Adlife,' ensuring a cohesive and recognizable experience for our visitors.",
    website: "https://adbook.onrender.com/",
    imageSrc: Adbook,
  },
  {
    id: "m2",
    name: "Kadee",
    description:
      "Your stylish online boutique for both men and women. Discover the latest trends with easy login, detailed product pages, and a user-friendly cart. Shop effortlessly on any device. Join us for a hassle-free fashion experience where style meets convenience.",
    website: "https://kadee.onrender.com/",
    imageSrc: kadee,
  },
  {
    id: "m3",
    name: "Static Exchnge",
    description:
      "Your premier decentralized crypto platform. Trade, earn, and win on this secure, user-friendly space. Explore various cryptocurrencies and lucrative earning opportunities. Join contests for stellar crypto rewards. Embark on an interstellar journey of financial possibilities today!",
    website: "https://static-exchnge.onrender.com/",
    imageSrc: Exchnge,
  },
];

const WorkList = function (props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevdisable, setPrevDisable] = useState(false);
  const [initdisable, setInitDisable] = useState(false);
  const [fordisable, setForDisable] = useState(false);

  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  // console.log(currentPage);
  // console.log(recordsPerPage);
  // console.log(lastIndex);
  // console.log(firstIndex);
  const records = worksData.slice(firstIndex, lastIndex);
  console.log(records);


  // console.log(npage, numbers);
  // const paginate = () => {
  // console.log(prevState)
  // setCurrentPage(prevState, pageNumber) => (
  //   console.log(prevState);
  // );
  // setCurrentPage((currentPage) => currentPage + 1)
  // };
  // console.log(currentPage);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   console.log('a');
  //   console.log(currentPage)
  // };
  function handleBackClick() {
    console.log("Back clicked");
    if (currentPage === 1) {
      // setPrevDisable(prevdisable => !prevdisable)
      setPrevDisable(true);
      return;
    }
    setForDisable(false);
    setPrevDisable(false);
    setCurrentPage(currentPage - 1);
  }
  function handleNextClick() {
    // console.log('NEXT');
    // console.log(`worksata: ${worksData.length}`);
    // console.log(`curentPage: ${currentPage}`);
    console.log(worksData.length, currentPage);

    if (worksData.length === currentPage) {
      // setForDisable((nextdisable) => !nextdisable);
      setForDisable(true);
      return;
    }
    setPrevDisable(false);
    setForDisable(false);
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className={classes.worksList}>
      {records.map((data) => (
        <WorksItem
          key={data.id}
          id={data.id}
          name={data.name}
          description={data.description}
          website={data.website}
          imageSrc={data.imageSrc}
        />
      ))}
      <Pagination
        postsPerPage={recordsPerPage}
        totalPosts={records.length}
        next={handleNextClick}
        back={handleBackClick}
        currentPage={currentPage}
        nextDisable={fordisable}
        backDisable={prevdisable}
        initdisable={initdisable}
      />
    </div>
  );
};

export default WorkList;
