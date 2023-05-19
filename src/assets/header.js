import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NavigationBar() {
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("profileheader");
      const about = document.getElementById("about-container");
      const skills = document.getElementById("skills-container");
      const projects = document.getElementById("projects-container");
      const socials = document.getElementById("socials-container");

      const homeTop = home.offsetTop;
      const aboutTop = about.offsetTop;
      const skillsTop = skills.offsetTop;
      const projectsTop = projects.offsetTop;
      const socialsTop = socials.offsetTop;

      const scrollTop = window.pageYOffset + window.innerHeight / 2;

      if (scrollTop >= homeTop && scrollTop < aboutTop) {
        setSelected("home");
      } else if (scrollTop >= aboutTop && scrollTop < skillsTop) {
        setSelected("about");
      } else if (scrollTop >= skillsTop && scrollTop < projectsTop) {
        setSelected("skills");
      } else if (scrollTop >= projectsTop && scrollTop < socialsTop) {
        setSelected("projects");
      } else if (scrollTop >= socialsTop) {
        setSelected("socials");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(`${id}-container`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar className='bg-dark' variant="dark">
      <Nav className="w-100 justify-content-end navigationbar">
        <Nav.Link active={selected === "about"} onClick={() => handleClick("about")}>About</Nav.Link>
        <Nav.Link active={selected === "skills"} onClick={() => handleClick("skills")}>Skills</Nav.Link>
        <Nav.Link active={selected === "projects"} onClick={() => handleClick("projects")}>Projects</Nav.Link>
        <Nav.Link active={selected === "socials"} onClick={() => handleClick("socials")}>Socials</Nav.Link>
      </Nav>
    </Navbar>
  );
}
