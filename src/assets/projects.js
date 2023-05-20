import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './project.css';
import weatherPreview from './previews/weather.png'
import calculatorPreview from './previews/calculator.png'
import hivePreview from './previews/hive.png';
import gymPreview from './previews/gymtrack.png';

export function ProjectsSection() {
  const projects = [
    {
      name: 'Weather App',
      description: 'A weather application to get current weather conditions.',
      image: weatherPreview,
      link: 'https://github.com/YaronVansteenkiste/weather-app',
    },
    {
      name: 'Electron Calculator',
      description: 'A calculator built using Electron framework.',
      image: calculatorPreview,
      link: 'https://github.com/YaronVansteenkiste/electron-calculator',
    },
    {
      name: 'Hive Connect',
      description: 'An application to connect people built in ReactJS.',
      image: hivePreview,
      link: 'https://github.com/YaronVansteenkiste/hive-connect',
    },
    {
      name: 'GymTrack',
      description: 'A fitness tracking app built in ReactJS to monitor workout progress and set goals.',
      image: gymPreview,
      link: 'https://github.com/YaronVansteenkiste/gymtrack',
    },
    {
      name: 'CosmicBrand',
      description: 'A webshop built in Spring.',
      image: `repeating-radial-gradient(red, yellow 10%, green 20%)`,
      link: 'https://github.com/YaronVansteenkiste/weather-app',
    },
  ];
  
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let animationFrameId = null;
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.pageX - wrapper.offsetLeft);
      setScrollLeft(wrapper.scrollLeft);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - wrapper.offsetLeft;
      const scrollX = x - startX;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = wrapper.scrollWidth - containerWidth;
      const maxScrollLeft = scrollWidth > 0 ? scrollWidth : 0;
      const newScrollLeft = Math.max(0, Math.min(scrollLeft - scrollX, maxScrollLeft));
      wrapper.scrollTo({ left: newScrollLeft, behavior: 'auto' }); // Changed behavior to 'auto' for immediate movement

  
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        wrapper.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      });
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    wrapper.addEventListener('mousedown', handleMouseDown);
    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseup', handleMouseUp);
  
    return () => {
      wrapper.removeEventListener('mousedown', handleMouseDown);
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging, startX, scrollLeft]);


  return (
    <div
      id='projects-container'
      className="projects-container section-container container text-center mt-5"
      ref={containerRef}
    >
      <div className="row">
        <div className="col">
          <h2>Check Out My Awesome Projects!</h2>
        </div>
      </div>
      <div className="projects-wrapper" ref={wrapperRef}>
        {projects.map((project, index) => (
          <Card key={index} className="custom-card" style={{ backgroundImage: `url(${project.image})` }}>
            <Card.Body className="card-content">
              <Card.Title>{project.name}</Card.Title>
              <Card.Text className="card-description">{project.description}</Card.Text>
              <Button onClick={() => window.open(project.link)} className='cardButton' variant="primary">Github</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}