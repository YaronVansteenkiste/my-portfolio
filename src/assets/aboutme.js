import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function AboutMeSection() {
  return (
    <div
      id="aboutme-container"
      className="section-container container text-center mt-5"
    >
      <div className="row">
        <div className="col">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <p>"I am a passionate full-stack developer and web designer dedicated to crafting unique and user-centric applications. With a focus on ReactJS, I bring a wealth of expertise to the table, allowing me to create engaging and interactive web experiences. My goal is to combine creativity and technical proficiency to deliver applications that not only meet but exceed the expectations of my clients. I thrive on the challenge of turning ideas into functional and aesthetically pleasing digital solutions that enhance the overall customer experience.</p>
        </div>
      </div>
    </div>
  );
}
