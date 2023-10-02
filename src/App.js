import React, { useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';
import { NavigationBar } from './assets/header';
import { SkillSection } from './assets/skills';
import profilePhoto from './assets/profilepic.jpg';
import { ProjectsSection } from './assets/projects';
import { Footer } from './assets/footer';
import { SocialsSection } from './assets/socials';
import anime from 'animejs';
import { AboutMeSection } from './assets/aboutme';

const App = () => {
  const profilePhotoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const sentence = 'ジフルワーロイアドズルジズドフルブキャドフゴプキャエッジドズルクフグズ・ドット・ジャエフホッキー・スリー・';
    const letters = sentence.split('');

    let fontSize = 10;
    const columns = canvas.width / fontSize

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
        duration: 500,
      });

     
    };

    let drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop, i) => {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#FF9490';
        ctx.fillText(text, i * fontSize, drop * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    intervalRef.current = setInterval(draw, 33);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = () => {
    document.getElementById('socials-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavigationBar />
      <header id="profileheader" className="profileheader top-header text-white py-5">
        <div className="canvas-container">
          <canvas ref={canvasRef} id="c"></canvas>
        </div>
        <section className="profile-section">
          <div id="about-container" className="about-container">
            <div className="profile-bio">
              <h3 className="greeting">Hi there 👋, I'm</h3>
              <TypeAnimation
                className="name"
                sequence={['Yaron', 2000, ' ', 100]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              ></TypeAnimation>
              <h3 className="function" id="profile-function">
                Designer & Fullstack Developer
              </h3>
              <p className="quote">
                I am proactive and dedicated fullstack developer and web designer, driven by a genuine passion for
                crafting exceptional web applications. With a solid foundation in both front-end and back-end development,
                I possess the necessary skills and knowledge to bring innovative ideas to life.
              </p>
              <div style={{display: 'inline-flex', alignItems: 'baseline'}}>
                <Button onClick={handleClick} variant="warning" size="lg" className="contact-btn">
                  CONTACT ME
                </Button>
                <div style={{marginLeft: '20px'}}>
                <a href="mailto:yaron.vansteenkiste@telenet.be" target="_blank" rel="noreferrer">Or send me an email.</a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-pic-container">
            <img src={profilePhoto} className="profile-photo" alt="Front Profile" ref={profilePhotoRef} />
          </div>
        </section>
      </header>
      <div className="seperator"></div>
      <AboutMeSection/>
      <div className="separator"></div>
      <SkillSection />
      <div className="separator"></div>
      <ProjectsSection />
      <div className="separator"></div>
      <div id="socials-container"></div>
      <SocialsSection />
      <div className="separator"></div>
      <Footer />
    </div>
  );
}

export default App;
