import React, { useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';
import { NavigationBar } from './assets/header';
import { SkillSection } from './assets/skills';
import profilePhoto from './assets/profile.png';
import anime from 'animejs/lib/anime.es.js';
import { ProjectsSection } from './assets/projects';
import { Footer } from './assets/footer';

function App() {
  const profilePhotoRef = useRef(null);
  const profileBackPhotoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (centerX - clientX) / centerX * 10;
      const moveY = (centerY - clientY) / centerY * 10;

      anime({
        targets: profilePhotoRef.current,
        translateX: moveX * 6,
        translateY: moveY * 6,
        easing: 'easeOutQuad',
        duration: 500
      });

      anime({
        targets: profileBackPhotoRef.current,
        translateX: moveX * 2,
        translateY: moveY * 2,
        easing: 'easeOutQuad',
        duration: 500
      })
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="App">
      <NavigationBar />
      <header id='profileheader' className="profileheader top-header text-white py-5">
        <section className="profile-section">
          <div id='about-container' className="about-container">
            <div className="profile-bio">
              <h3 className="greeting">Hi there 👋, I'm</h3>
              <TypeAnimation className='name' sequence={[
                'Yaron',
                1000,
              ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              ></TypeAnimation>
              <h3 className="function" id='profile-function'>Designer & Fullstack Developer</h3>
              <p className="quote">
                I am an experienced and dedicated fullstack developer and designer, driven by a genuine passion for crafting exceptional web applications. With a solid foundation in both front-end and back-end development, I possess the necessary skills and knowledge to bring innovative ideas to life.
              </p>
              <Button variant="warning" size="lg" className="contact-btn">CONTACT ME</Button>
            </div>
          </div>
          <div className="profile-pic-container">
            <img src={profilePhoto} className="profile-photo" alt="profile-photo" ref={profilePhotoRef} />
            <img className="square" ref={profileBackPhotoRef}></img>
          </div>
        </section>
      </header>
      <div className="separator"></div>
      <SkillSection />
      <div className="separator"></div>
      <ProjectsSection />
      <div className="separator"></div>
      <div id="socials-container"></div>
      socials
      <div className="separator"></div>
      <Footer />
    </div>
  );
}

export default App;
