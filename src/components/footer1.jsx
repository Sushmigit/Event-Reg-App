import React from 'react';
import './footer.css';

const Footer1 = () => {
  return (
    <footer className="footer-bottom-bar">
      <div className="footer-bottom-content">
        <p className="footer-copyright">
          <span className="footer-copyright-year">2025 EventNest.</span>
          <span className="footer-footer-made-with1">Made with</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="footer-footer-heart-icon"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
            ></path>
          </svg>
          <span className="footer-footer-made-with2">for event lovers</span>
        </p>
        <div className="footer-legal-links">
          <a href="#">
            <div className="footer-legal-link">
              <span>Privacy Policy</span>
            </div>
          </a>
          <span className="footer-legal-separator">•</span>
          <a href="#">
            <div className="footer-legal-link">
              <span>Terms of Service</span>
            </div>
          </a>
          <span className="footer-legal-separator">•</span>
          <a href="#">
            <div className="footer-legal-link">
              <span>Cookie Policy</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
