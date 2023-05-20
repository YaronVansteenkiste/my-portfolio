import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function SocialsSection() {
    const socials = [
        { name: 'yaron-vansteenkiste', icon: FaLinkedin, url: 'https://www.linkedin.com/in/yaron-vansteenkiste/' },
        { name: 'YaronVansteenkiste', icon: FaGithub, url: 'https://github.com/YaronVansteenkiste' },
        { name: 'YaronVSK', icon: FaInstagram, url: 'https://www.instagram.com/yaronvsk' },
    ];

    return (
        <div id='socials-container' className='section-container container text-center mt-5'>
            <div className="row">
                <div className="col">
                    <h2>Message me here!</h2>
                </div>
            </div>
            <div className="row">
                {socials.map((social, index) => (
                    <div key={index} className="col-sm-4">
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <div className="social-icon">
                                <social.icon size={50} />
                                <span>{social.name}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
