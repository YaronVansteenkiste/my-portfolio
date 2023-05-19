import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Contact</h3>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:yaron.vansteenkiste@telenet.be">yaron.vansteenkiste@telenet.be</a>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Mechelen, Belgium</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>© {new Date().getFullYear()} Yaron Vansteenkiste. All rights reserved.</p>
            </div>
        </footer>
    );
}