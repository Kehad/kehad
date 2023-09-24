import React, { useState } from "react";

import Button from "../../layout/button";
import Pagination from "./pagination";
import ProjectItem from './projectItem';

import Piccon from "../../../images/Piccon.png";

import classes from "./projectList.module.css";

const projectData = [
  {
    id: "m1",
    name: "Piccon",
    description:
      "Adboöks operates as a subsidiary of Adlife, specializing in the sale of captivating romance novels. Their website is dedicated to showcasing and offering the top 10 romance books. The website seamlessly integrates the branding of their parent company, 'Adlife,' ensuring a cohesive and recognizable experience for our visitors.",
    website: "https://picco.onrender.com/",
    imageSrc: Piccon,
  },
  {
    id: "m2",
    name: "CalcXpert",
    description: 
      "CalcXpert is your trusted source for accurate and user-friendly simple online calculators. Whether you're a student, professional, or simply need a reliable tool for calculations, we have you covered. Say goodbye to distractions and explore the world of precise online calculations with CalcXpert.",
    website: "https://picco.onrender.com/",
    imageSrc: "https://www.w3schools.com/css/img_5terre.jpg",
  },
];

const ProjectList = function (props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevdisable, setPrevDisable] = useState(false);
  const [initdisable, setInitDisable] = useState(false);
  const [fordisable, setForDisable] = useState(false);

  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = projectData.slice(firstIndex, lastIndex);
  console.log(records);
  // const npage = Math.ceil(records.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);
  // console.log(npage, numbers);

  function handleBackClick() {
    console.log("Back clicked");
    if (currentPage === 1) {
      setPrevDisable(true);
      return;
    }
    setForDisable(false);
    setPrevDisable(false);
    setCurrentPage(currentPage - 1);
  }
  function handleNextClick() {
    if (projectData.length === currentPage) {
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
        <ProjectItem
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
        nextDisable={fordisable}
        backDisable={prevdisable}
        initdisable={initdisable}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProjectList;
