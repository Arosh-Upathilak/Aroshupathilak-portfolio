import React from "react";
import Navbar from "../navbars/Navbar";
import Details from "../details/Details";
import Skill from "../skills/Skill";
import Education from "../education/Education";
import Project from "../project/Project";
import Contact from "../contract/Contact";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <Details/>
            <Skill/>
            <Education/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
    }

export default Home;