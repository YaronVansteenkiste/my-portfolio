import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export function Footer() {

    return (
        <footer className="footer">
            <div className="footer-bottom text-center">
                <p>© {new Date().getFullYear()} Yaron Vansteenkiste. All rights reserved.</p>
            </div>
        </footer>
    );
}