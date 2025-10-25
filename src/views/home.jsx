import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'
import '../style.css'
const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Dazzling Clever Rabbit</title>
        <meta property="og:title" content="Dazzling Clever Rabbit" />
      </Helmet>
      <section id="first">
      <Navigation></Navigation></section>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
        @keyframes sparkleFloat {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-8px) rotate(5deg);}}@keyframes floatCard1 {0%,100% {transform: translateY(0);}
50% {transform: translateY(-12px);}}@keyframes floatCard2 {0%,100% {transform: translateY(0);}
50% {transform: translateY(-8px);}}@keyframes floatCard3 {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}@keyframes fadeTranslateUp {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: none;}}@keyframes pulseGlow {0%,100% {box-shadow: 0 0 0 0
        color-mix(in srgb, var(--color-accent) 40%, transparent);}
50% {box-shadow: 0 0 20px 8px
        color-mix(in srgb, var(--color-accent) 20%, transparent);}}@keyframes badgeBounce {0%,100% {transform: scale(1);}
50% {transform: scale(1.06);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<style>
#hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
@media (prefers-reduced-motion: reduce) {
* {
  animation-duration: 0ms !important;
  transition-duration: 0ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="eventnest-homepage">
(function(){
  // Accordion functionality for Resources section
  const accordionHeaders = document.querySelectorAll(".accordion-header")

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const isExpanded = header.getAttribute("aria-expanded") === "true"
      const content = document.getElementById(
        header.getAttribute("aria-controls")
      )

      // Close all accordions
      accordionHeaders.forEach((h) => {
        h.setAttribute("aria-expanded", "false")
        const c = document.getElementById(h.getAttribute("aria-controls"))
        if (c) c.style.maxHeight = "0"
      })

      // Toggle current accordion
      if (!isExpanded) {
        header.setAttribute("aria-expanded", "true")
        content.style.maxHeight = content.scrollHeight + "px"
      }
    })
  })

  // Intersection Observer for entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "none"
      }
    })
  }, observerOptions)

  // Observe animated elements
  const animatedElements = document.querySelectorAll(
    ".feature-card, .process-card, .pricing-card, .testimonial-card, .resource-accordion-card"
  )

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(8px)"
    el.style.transition = \`opacity \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-duration-standard")
      .trim()} \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-curve-primary")
      .trim()}, transform \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-duration-standard")
      .trim()} \${getComputedStyle(document.documentElement)
      .getPropertyValue("--animation-curve-primary")
      .trim()}\`
    observer.observe(el)
  })

  // CTA button micro-interactions
  const ctaButtons = document.querySelectorAll(".btn")

  ctaButtons.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.97)"
    })

    btn.addEventListener("mouseup", () => {
      btn.style.transform = ""
    })

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = ""
    })
  })

  // Video autoplay fallback
  const heroVideo = document.getElementById("hero-bg-video")
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Fallback if autoplay is blocked
      heroVideo.muted = true
      heroVideo.play()
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div id="eventnest-homepage">
        <section
          id="hero-section"
          role="region"
          aria-label="Hero: product value proposition"
          className="hero-section"
        >
          <div className="hero-container">
            <div className="hero-left">
              <div aria-hidden="true" className="hero-sparkle-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              <h1 className="hero-title">
                EventNest — find & register for great events
              </h1>
              <p className="hero-subtitle">
                {' '}
                Discover local and online events—browse, register, and get reminders in seconds.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <a href='/events'>
              <div className="hero-cta-cluster">
                <button
                  aria-label="Browse events"
                  className="btn btn-primary btn-lg"
                >
                  {' '}
                  Browse events
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
                {/* Sign in button removed per request */}
              </div>
              </a>
              <div className="hero-trust-row">
                <div className="trust-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                  <span>Trusted by 10,000+ creators</span>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-visual-container">
                <video
                  id="hero-bg-video"
                  autoPlay="true"
                  loop="true"
                  muted="true"
                  playsInline="true"
                  src="https://videos.pexels.com/video-files/6766158/6766158-hd_1280_720_50fps.mp4"
                ></video>
                <div className="hero-visual-overlay"></div>
                <div className="hero-visual-content">
                  <div className="hero-floating-card hero-card-1">
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
                    <span>247 tickets sold</span>
                  </div>
                  <div className="hero-floating-card hero-card-2">
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
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span>+89 RSVPs today</span>
                  </div>
                  <div className="hero-floating-card hero-card-3">
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
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                    <span>Revenue up 143%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        <section id="process-section" className="process-section">
          <div className="process-container">
            <div className="process-header">
              <h2 className="section-title">Discover — Dream — Delight</h2>
              <p className="section-subtitle">
                {' '}
                Your event journey in three playful steps
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="process-grid">
              <article
                aria-labelledby="step-1"
                tabindex="0"
                className="process-card process-card-hero"
              >
                <div className="process-card-number">
                  <span>01</span>
                </div>
                <div className="process-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
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
                <h3 id="step-1">Spark Discovery</h3>
                <p>
                  {' '}
                  Tell us the vibe. Choose a whimsical template, sketch your
                  guest list, or import from your favorite apps — our smart
                  assistant sketches a sparkling event plan in seconds.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </article>
              <div className="process-cards-grid">
                <article
                  aria-labelledby="step-2"
                  tabindex="0"
                  className="process-card"
                >
                  <div className="process-card-number">
                    <span>02</span>
                  </div>
                  <div className="process-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
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
                  <h3 id="step-2">Discover &amp; Register</h3>
                  <p>
                    {' '}
                    Browse event listings, RSVP instantly, and save tickets to your account.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </article>
                <article
                  aria-labelledby="step-3"
                  tabindex="0"
                  className="process-card"
                >
                  <div className="process-card-number">
                    <span>03</span>
                  </div>
                  <div className="process-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="m19 9l-5 5l-4-4l-3 3"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 id="step-3">Manage &amp; Shine</h3>
                  <p>
                    {' '}
                    Run the day with a live dashboard that feels like a fantasy
                    workshop. Real-time analytics and effortless reports.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </article>
                
              </div>
            </div>
          </div>
        </section>
        <section id="pricing-section" className="pricing-section">
          <div className="pricing-container">
            <div className="pricing-header">
              <h2 className="section-title">Plans that spark delight</h2>
              <p className="section-subtitle">
                {' '}
                Simple, scalable pricing for events that feel like magic
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Sprout</h3>
                  <div className="pricing-price">
                    <span className="price-amount">Free</span>
                  </div>
                </div>
                <p className="pricing-description">
                  {' '}
                  Perfect for attendees exploring new events and casual meetups
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Register for up to 100 free events</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Simple ticket purchases</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>One-tap ticket access</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Email support</span>
                  </li>
                </ul>
                <button
                  aria-label="Start registering"
                  className="btn btn-outline"
                >
                  {' '}
                  Start registering
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div
                aria-current="true"
                className="pricing-card pricing-card-featured"
              >
                <div className="pricing-badge">
                  <span>Most Popular</span>
                </div>
                <div className="pricing-card-header">
                  <h3>Blossom</h3>
                  <div className="pricing-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">29</span>
                    <span className="price-period">/mo</span>
                  </div>
                </div>
                <p className="pricing-description">
                  {' '}
                  For frequent attendees and power users who want premium access
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Everything in Sprout (attendee features)</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Priority support & early access to premium events</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Advanced tickets &amp; promo codes</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Analytics dashboard</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Priority email support</span>
                  </li>
                </ul>
                <button
                  aria-label="Try Blossom plan"
                  className="btn btn-primary"
                >
                  {' '}
                  Try Blossom
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <h3>Festival</h3>
                  <div className="pricing-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">99</span>
                    <span className="price-period">/mo</span>
                  </div>
                </div>
                <p className="pricing-description">
                  {' '}
                  For production teams and recurring experiences
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <ul className="pricing-features">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>All Blossom features</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>White-labeling</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Multi-event management</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>CRM integrations</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>Dedicated success manager</span>
                  </li>
                </ul>
                <button
                  aria-label="Start Festival plan"
                  className="btn btn-outline"
                >
                  {' '}
                  Start Festival
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="pricing-footer-grid">
              <div className="pricing-info-card">
                <h4>What you get with every plan</h4>
                <p>
                  {' '}
                  Fast mobile registration, secure payments, delightful
                  ticketing UX, instant analytics, and 24/7 event-day support.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="pricing-info-card">
                <h4>No surprises. Transparent billing.</h4>
                <p>
                  {' '}
                  Monthly and annual terms with discounts for yearly prepay.
                  Upgrade or pause anytime — your events, your rhythm.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            
          </div>
        </section>
        <section
          id="features-section"
          role="region"
          aria-labelledby="features-heading"
          className="features-section"
        >
          <div className="features-container">
            <div className="features-header">
              <h2 id="features-heading" className="section-title">
                {' '}
                Effortless Registration, Playfully Powerful
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <p className="section-subtitle">
                {' '}
                Turn every sign-up into a seamless experience with EventNest. From stylish registration pages to lightning-fast check-ins, our tools make attending events easy, fun, and reliable.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="features-grid">
              <div className="features-left">
                <div
                  role="group"
                  aria-label="Smart Ticketing"
                  className="feature-card"
                >
                  <div className="feature-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
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
                  </div>
                  <h3>Smart Ticketing</h3>
                  <p>
                    {' '}
                    Flexible ticket types, promo codes, waitlists, and group
                    passes. Real-time inventory and automated refunds keep
                    finances tidy.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div
                  role="group"
                  aria-label="Automations &amp; Reminders"
                  className="feature-card"
                >
                  <div className="feature-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                      ></path>
                    </svg>
                  </div>
                  <h3>Automations &amp; Reminders</h3>
                  <p>
                    {' '}
                    Schedule whimsical email and SMS nudges, drip sequences, and
                    attendee segmentation that boost turnout without busywork.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div
                  role="group"
                  aria-label="Privacy &amp; Security"
                  className="feature-card"
                >
                  <div className="feature-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                  </div>
                  <h3>Privacy &amp; Security</h3>
                  <p>
                    {' '}
                    From encrypted data to controlled access, EventNest keeps your event information secure and stress-free.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="features-right">
                <div
                  role="group"
                  aria-label="Magic Forms"
                  className="feature-card-primary"
                >
                  <img
                    src="https://images.pexels.com/photos/5715242/pexels-photo-5715242.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                    alt="Colorful confetti representing joyful registration experience"
                    loading="lazy"
                  />
                  <div className="feature-primary-content">
                    <div className="feature-card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
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
                    <h3>Fast Registrations</h3>
                    <p>
                      {' '}
                      Register for events in seconds with fast, mobile-friendly flows and playful themes—hassle-free and secure
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <button
                      aria-label="Try Fast Registration"
                        className="btn btn-primary"
                      >
                        {' '}
                        Register now
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div
                  role="group"
                  aria-label="Seamless Check-In"
                  className="feature-card"
                >
                  <div className="feature-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                  </div>
                  <h3>Seamless Check-In</h3>
                  <p>
                    {' '}
                    One-tap mobile check-in, QR scanning, and offline mode.
                    Visual dashboards make crowd control feel like choreography.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
                       
        <section
          id="testimonials-section"
          role="region"
          aria-labelledby="testimonials-heading"
          className="testimonials-section"
        >
          <div className="testimonials-container">
            <h2 id="testimonials-heading" className="section-title">
              {' '}
              Loved by attendees worldwide
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <div className="testimonials-grid">
              <div className="testimonial-flagship">
                <img
                  src="https://images.pexels.com/photos/796605/pexels-photo-796605.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Colorful celebration confetti background"
                  loading="lazy"
                />
                <div className="flagship-content">
                  <div className="quote-accent"></div>
                  <blockquote>
                    <span style={{ color: 'white' }}>
                      {' '}
                      &quot;I found events I actually wanted to attend and booking was a breeze. My tickets were in my wallet in under a minute.&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </blockquote>
                  <cite>
                    <span className="home-text91">Lila Moreno</span>
                    <span>Event attendee</span>
                  </cite>
                </div>
              </div>
              <div className="testimonials-cards">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                        ></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <strong>Raj Patel</strong>
                      <span>Co-founder, GlowMarket</span>
                    </div>
                  </div>
                  <p>
                    {' '}
                    &quot;Registering was a breeze! I signed up in seconds and the mobile-friendly flow made it so easy.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <div
                    aria-label="Investor verified"
                    className="testimonial-badge"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 6L9 17l-5-5"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Investor-backed
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                        ></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <strong>Simone Clarke</strong>
                      <span>Venue Manager</span>
                    </div>
                  </div>
                  <p>
                    {' '}
                    &quot;The process was fun and engaging. I loved how quickly I could RSVP and get my ticket&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                        ></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <strong>Theo Ramos</strong>
                      <span>Head of Marketing</span>
                    </div>
                  </div>
                  <p>
                    {' '}
                    &quot;Everything was smooth and enjoyable. Checking in at the event was instant, and I shared the experience with friends!&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                        ></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <strong>Hana Yu</strong>
                      <span>Product &amp; Events Lead</span>
                    </div>
                  </div>
                  <p>
                    {' '}
                    &quot;I appreciated how effortless it was to join. EventNest made attending feel personal and fun, not just another registration.&quot;
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id = "last">
      <Footer></Footer>
      </section>
    </div>
  )
}

export default Home
