import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footerFloatShape {0%,100% {transform: translate(0, 0) rotate(0deg) scale(1);
border-radius: 50% 40% 60% 50%;}
25% {transform: translate(30px, 20px) rotate(90deg) scale(1.1);
border-radius: 40% 60% 50% 40%;}
50% {transform: translate(-20px, 40px) rotate(180deg) scale(0.9);
border-radius: 60% 50% 40% 60%;}
75% {transform: translate(40px, -10px) rotate(270deg) scale(1.05);
border-radius: 50% 40% 60% 50%;}}@keyframes footerLogoMorph {0%,100% {border-radius: 50% 40% 60% 50%;}
50% {border-radius: 40% 60% 50% 40%;}}@keyframes footerNewsletterBlob {0%,100% {transform: translate(0, 0) rotate(0deg) scale(1);
border-radius: 50% 40% 60% 50%;}
50% {transform: translate(-50px, 50px) rotate(180deg) scale(1.2);
border-radius: 40% 60% 50% 40%;}}@keyframes footerNewsletterIconBounce {0%,100% {transform: translateY(0) scale(1);
border-radius: 50% 40% 60% 50%;}
50% {transform: translateY(-10px) scale(1.05);
border-radius: 40% 60% 50% 40%;}}@keyframes footerHeartBeat {0%,100% {transform: scale(1);}
10%,30% {transform: scale(1.2);}
20%,40% {transform: scale(1);}}@keyframes footerSparkleFloat {0%,100% {opacity: 0;
transform: translateY(0) scale(0);}
50% {opacity: 1;
transform: translateY(-30px) scale(1.5);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-floating-shape, .footer-logo-icon, .footer-newsletter-icon, .footer-sparkle, .footer-heart-icon {
  animation: none;
}
.footer-social-link, .footer-link, .footer-contact-icon {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer-eventnest">
(function(){
  // Enhanced sparkle effect on scroll
  const footer = document.getElementById("footer-eventnest")
  const sparkles = document.querySelectorAll(".footer-sparkle")

  let sparkleTimeout

  function createSparkleEffect() {
    sparkles.forEach((sparkle, index) => {
      const delay = index * 200
      setTimeout(() => {
        sparkle.style.animation = "none"
        void sparkle.offsetWidth // Trigger reflow
        sparkle.style.animation = "footerSparkleFloat 4s ease-in-out"
      }, delay)
    })
  }

  // Intersection Observer for sparkle animation
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          createSparkleEffect()
          // Repeat sparkle effect every 6 seconds while footer is visible
          sparkleTimeout = setInterval(createSparkleEffect, 6000)
        } else {
          clearInterval(sparkleTimeout)
        }
      })
    },
    { threshold: 0.2 }
  )

  if (footer) {
    footerObserver.observe(footer)
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".footer-newsletter-form")
  const newsletterInput = document.getElementById("footer-email-input")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = newsletterInput.value

      if (email) {
        // Create success message
        const successMessage = document.createElement("div")
        successMessage.textContent =
          "✨ Thanks for subscribing! Check your inbox for magic!"
        successMessage.style.cssText = \`
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-primary);
        color: var(--color-on-primary);
        padding: 1rem 1.5rem;
        border-radius: 16px;
        font-size: 0.875rem;
        font-weight: 600;
        box-shadow: 0 8px 24px color-mix(in srgb, var(--color-primary) 30%, transparent);
        z-index: 9999;
        animation: slideInRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      \`

        document.body.appendChild(successMessage)

        // Reset form
        newsletterInput.value = ""

        // Remove success message after 4 seconds
        setTimeout(() => {
          successMessage.style.animation =
            "slideOutRight 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
          setTimeout(() => {
            successMessage.remove()
          }, 400)
        }, 4000)
      }
    })
  }

  // Add bounce animation to social icons on hover
  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.animation =
        "footerSocialBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    })

    link.addEventListener("animationend", function () {
      this.style.animation = ""
    })
  })

  // Add keyframe for social bounce
  const styleSheet = document.styleSheets[0]
  const keyframes = \`
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  @keyframes footerSocialBounce {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) rotate(5deg);
    }
    75% {
      transform: translateY(-5px) rotate(-5deg);
    }
  }
\`

  if (styleSheet) {
    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    } catch (e) {
      // Silently fail if insertRule is not supported
    }
  }

  // Add parallax effect to floating shapes on scroll
  const floatingShapes = document.querySelectorAll(".footer-floating-shape")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const footerTop = footer.offsetTop
    const windowHeight = window.innerHeight

    if (scrolled + windowHeight > footerTop) {
      const scrollDistance = scrolled + windowHeight - footerTop
      floatingShapes.forEach((shape, index) => {
        const speed = 0.1 + index * 0.05
        shape.style.transform = \`translateY(\${scrollDistance * speed}px)\`
      })
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-eventnest" className="footer-main">
        <div className="footer-decorative-top">
          <div className="footer-floating-shape footer-shape-1"></div>
          <div className="footer-floating-shape footer-shape-2"></div>
          <div className="footer-floating-shape footer-shape-3"></div>
        </div>
        <div className="footer-container">
          <div className="footer-content-grid">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-icon">
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
                <h3 className="footer-brand-name">EventNest</h3>
              </div>
              <p className="footer-brand-tagline">
                {' '}
                Creating magical moments, one event at a time
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="Follow us on Twitter"
                    className="footer-social-link"
                  >
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
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Facebook"
                    className="footer-social-link"
                  >
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
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on Instagram"
                    className="footer-social-link"
                  >
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow us on LinkedIn"
                    className="footer-social-link"
                  >
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Browse Events</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Host an event</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Pricing</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Help Center</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Event Guide</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Blog</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Community</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-column">
              <h4 className="footer-column-title">Get in Touch</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <a href="mailto:hello@eventnest.com?subject=">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        hello@eventnest.com
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
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
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                  </div>
                  <a href="tel:+1234567890">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        +1 (234) 567-890
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
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
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      ></path>
                    </svg>
                  </div>
                  <span className="footer-contact-text">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-newsletter-section">
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-header">
                <div className="footer-newsletter-icon">
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
                </div>
                <div className="footer-newsletter-text">
                  <h3 className="footer-newsletter-title">
                    Never Miss an Event
                  </h3>
                  <p className="footer-newsletter-description">
                    {' '}
                    Subscribe to our magical newsletter for exclusive updates
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <form action="#" method="post" className="footer-newsletter-form">
                <input
                  type="email"
                  id="footer-email-input"
                  placeholder="your@email.com"
                  required="true"
                  aria-label="Email address for newsletter"
                  className="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="footer-newsletter-button btn btn-primary"
                >
                  {' '}
                  Subscribe
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom-bar">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  ></path>
                </svg>
                <span className="footer-footer-made-with2">
                  for event lovers
                </span>
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
          </div>
        </div>
        <div aria-hidden="true" className="footer-sparkles">
          <div className="footer-sparkle footer-sparkle-1"></div>
          <div className="footer-sparkle footer-sparkle-2"></div>
          <div className="footer-sparkle footer-sparkle-3"></div>
          <div className="footer-sparkle footer-sparkle-4"></div>
          <div className="footer-sparkle footer-sparkle-5"></div>
          <div className="footer-sparkle footer-sparkle-6"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
