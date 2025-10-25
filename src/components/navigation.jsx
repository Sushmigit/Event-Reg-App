import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes navigation-logo-morph {0%,100% {border-radius: 50% 40% 50% 40%;}
25% {border-radius: 40% 50% 40% 50%;}
50% {border-radius: 50% 40% 60% 40%;}
75% {border-radius: 40% 60% 40% 50%;}}@keyframes navigation-logo-spin {0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}}@keyframes navigation-logo-gradient {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}@keyframes navigation-sparkle-pulse {0%,100% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.5);
opacity: 0.5;}}@keyframes navigation-cta-bounce {0%,100% {transform: translateY(0);}
50% {transform: translateY(-4px);}}@keyframes navigation-decoration-float-1 {0%,100% {transform: translate(0, 0) rotate(0deg);}
33% {transform: translate(20px, 10px) rotate(120deg);}
66% {transform: translate(-10px, 20px) rotate(240deg);}}@keyframes navigation-decoration-float-2 {0%,100% {transform: translate(0, 0) rotate(0deg);}
50% {transform: translate(-15px, 15px) rotate(180deg);}}@keyframes navigation-decoration-float-3 {0%,100% {transform: translate(0, 0) scale(1);}
33% {transform: translate(15px, -10px) scale(1.2);}
66% {transform: translate(-20px, 10px) scale(0.8);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-logo, .navigation-link, .navigation-toggle, .navigation-mobile-link, .navigation-logo-icon, .navigation-link-icon, .navigation-decoration {
  animation: none;
  transition: none;
}
.navigation-mobile {
  transition: max-height 0.2s ease;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMobile = document.getElementById("navigationMobile")

  if (navigationToggle && navigationMobile) {
    navigationToggle.addEventListener("click", function () {
      const isActive = navigationToggle.classList.toggle("active")
      navigationMobile.classList.toggle("active")
      navigationToggle.setAttribute("aria-expanded", isActive)
    })

    // Close mobile menu when clicking on a link
    const mobileLinks = navigationMobile.querySelectorAll(
      ".navigation-mobile-link"
    )
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navigationToggle.classList.remove("active")
        navigationMobile.classList.remove("active")
        navigationToggle.setAttribute("aria-expanded", "false")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = document
        .getElementById("navigation")
        .contains(event.target)
      if (!isClickInsideNav && navigationMobile.classList.contains("active")) {
        navigationToggle.classList.remove("active")
        navigationMobile.classList.remove("active")
        navigationToggle.setAttribute("aria-expanded", "false")
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav id="navigation" className="navigation">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="EventNest Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
            <a href="/events">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </span>
                <span className="navigation-link-text">Events</span>
                <span className="navigation-link-hover-shape"></span>
              </div>
            </a>
            <a href="/tickets">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"
                    ></path>
                  </svg>
                </span>
                <span className="navigation-link-text">My Tickets</span>
                <span className="navigation-link-hover-shape"></span>
              </div>
            </a>
            <a href="/#process-section">
              <div className="navigation-link">
                <span className="navigation-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </span>
                <span className="navigation-link-text">About us</span>
                <span className="navigation-link-hover-shape"></span>
              </div>
            </a>
            <a href="/#last">
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
  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
  <polyline points="22,6 12,13 2,6"></polyline>
</svg>

                </span>
                <span className="navigation-link-text">Contact</span>
                <span className="navigation-link-hover-shape"></span>
              </div>
            </a>
          
      </div>    
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


          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span className="navigation-navigation-toggle-icon1 navigation-toggle-icon-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigation-toggle-icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div id="navigationMobile" className="navigation-mobile">
          <div className="navigation-mobile-content">
            <a href="#events">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </span>
                <span>Events</span>
              </div>
            </a>
            <a href="#tickets">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"
                    ></path>
                  </svg>
                </span>
                <span>My Tickets</span>
              </div>
            </a>
            <a href="#community">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </g>
                  </svg>
                </span>
                <span>Community</span>
              </div>
            </a>
            <a href="#favorites">
              <div className="navigation-mobile-link">
                <span className="navigation-mobile-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    ></path>
                  </svg>
                </span>
                <span>Favorites</span>
              </div>
            </a>
            
   
  </div>
  </div>
  </nav>
  </div>
  );
}

export default Navigation;
