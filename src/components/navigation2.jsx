import React from 'react';
import Script from 'dangerous-html/react';
import './navigation.css';

const Navigation2 = () => {
  return (
    <div className="navigation-container1">
      {/* Scripts for animations */}
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes navigation-logo-morph {0%,100% {border-radius: 50% 40% 50% 40%;} 25% {border-radius: 40% 50% 40% 50%;} 50% {border-radius: 50% 40% 60% 40%;} 75% {border-radius: 40% 60% 40% 50%;}}
        @keyframes navigation-logo-spin {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}}
        @keyframes navigation-logo-gradient {0%,100% {background-position: 0% 50%;} 50% {background-position: 100% 50%;}}
        @keyframes navigation-sparkle-pulse {0%,100% {transform: scale(1); opacity: 1;} 50% {transform: scale(1.5); opacity: 0.5;}}
        @keyframes navigation-cta-bounce {0%,100% {transform: translateY(0);} 50% {transform: translateY(-4px);}}
        @keyframes navigation-decoration-float-1 {0%,100% {transform: translate(0,0) rotate(0deg);} 33% {transform: translate(20px,10px) rotate(120deg);} 66% {transform: translate(-10px,20px) rotate(240deg);}}
        @keyframes navigation-decoration-float-2 {0%,100% {transform: translate(0,0) rotate(0deg);} 50% {transform: translate(-15px,15px) rotate(180deg);}}
        @keyframes navigation-decoration-float-3 {0%,100% {transform: translate(0,0) scale(1);} 33% {transform: translate(15px,-10px) scale(1.2);} 66% {transform: translate(-20px,10px) scale(0.8);}}
        </style>`}
          ></Script>
        </div>
      </div>

      <nav id="navigation" className="navigation">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="EventNest Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                {/* SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </g>
                </svg>
              </div>
              <span className="navigation-logo-text">EventNest</span>
              <div className="navigation-logo-sparkle"></div>
            </div>
          </a>

          <div className="navigation-links">
           

            <a href="/profile">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <span className="navigation-link-text">Profile</span>
                <span className="navigation-link-hover-shape"></span>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation2;
