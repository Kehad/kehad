// import { useState } from 'react'
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Nav from './components/nav/nav';

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/body/home';
import AboutMe from './components/body/aboutMe';
import Skills from './components/body/skills';
import Works from './components/body/works/works';
import Contact from './components/body/contact';  
import Project from './components/body/project/project';
import MenuBar from './components/menubar/menubar';

function App() {
    // const params = useParams("/");
    // console.log(params);

  return (
    <>
      <Layout>
        <Header />
        {/* <MenuBar /> */}
        <div className="centered">
          <Nav />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/side-project" element={<Project />} />
              <Route path="/contact-me" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App
