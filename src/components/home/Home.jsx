import React from "react";
import Navbar from "../navbars/Navbar";
import Details from "../details/Details";
import Skill from "../skills/Skill";
import Education from "../education/Education";
import Project from "../project/Project";
import Contact from "../contract/Contact";
import Footer from "../footer/Footer";
import Experience from "../experience/Experience";

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <Details/>
            <Skill/>
            <Education/>
            <Experience/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
    }

export default Home;