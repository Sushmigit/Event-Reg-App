import React from 'react'


import './signup.css'

type SocialButtonProps = {
  children: React.ReactNode
  label: string
  onClick?: () => void
  className?: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, label, onClick, className = '' }) => (
  <button
    type="button"
    aria-label={label}
    className={`social-btn ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Signup: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string | null
    const email = data.get('email') as string | null

    // Replace with real API integration later
    window.alert(`Thanks ${name || 'there'}! Check ${email || 'your inbox'} to verify.`)
    form.reset()
  }

  return (
    <div className="signup-page">
      

      <main className="signup-hero">
        <div className="signup-card" role="region" aria-label="Sign up">
          <div className="signup-header">
            <h1 className="signup-title">Create your EventNest account</h1>
            <p className="signup-subtitle">
              Join creators and attendees — discover events, host experiences,
              and connect with your community.
            </p>
          </div>

          <div className="signup-socials">
            <p className="signup-socials-label">Sign up with</p>
            <div className="signup-socials-row">
              <SocialButton label="Sign up with Google" className="google">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path fill="#EA4335" d="M21 12.3c0-.6-.1-1.2-.2-1.8H12v3.4h5.5c-.2 1-1 2.7-2.8 3.6c-1.6.8-3.9 1-5.7.6c-2-.5-3.7-1.9-4.6-3.7c-.9-1.8-.9-3.9 0-5.7c1-1.8 2.7-3.2 4.6-3.7c1.6-.4 3.7-.2 5.1.6c1.3.8 2.3 2 2.7 3.5l-2.8 1.5C17.8 8.1 15.9 7.6 14 8c-1.5.3-2.8 1.3-3.6 2.6c-.8 1.3-.9 2.9-.3 4.3c.6 1.4 1.8 2.6 3.3 3.1c1.9.6 4 .4 5.6-.4c1.7-.9 2.7-2.6 2.9-3.8c.1-.6.2-1.2.2-1.8z"/>
                </svg>
                <span>Google</span>
              </SocialButton>

              <SocialButton label="Sign up with Twitter" className="twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path fill="#1DA1F2" d="M22 5.9c-.6.3-1.3.5-2 .6c.7-.4 1.2-1 1.4-1.7c-.7.4-1.5.6-2.4.8C18.3 4.9 17.2 4.5 16 4.5c-1.9 0-3.5 1.6-3.5 3.5c0 .3 0 .5.1.8C9.3 8.6 6.1 7 4 4.6c-.3.6-.5 1.3-.5 2c0 1.3.7 2.5 1.8 3.2c-.6 0-1.2-.2-1.7-.5c0 1.9 1.3 3.5 3 3.9c-.3.1-.6.1-.9.1c-.2 0-.4 0-.6-.1c.4 1.2 1.6 2.1 3 2.1c-1.1.9-2.6 1.4-4.1 1.4c-.3 0-.7 0-1-.1c1.6 1 3.5 1.6 5.5 1.6c6.6 0 10.2-5.5 10.2-10.3v-.5c.7-.5 1.2-1.1 1.6-1.8c-.6.3-1.2.5-1.9.6z"/>
                </svg>
                <span>Twitter</span>
              </SocialButton>

              <SocialButton label="Sign up with LinkedIn" className="linkedin">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path fill="#0A66C2" d="M6.94 8.7H4.11v9.2h2.83v-9.2zM5.52 6.9c-.9 0-1.6-.7-1.6-1.6c0-.9.7-1.6 1.6-1.6c.9 0 1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zM20 17.9h-2.8v-4.6c0-1.1 0-2.6-1.6-2.6c-1.6 0-1.9 1.3-1.9 2.5v4.7h-2.8v-9.2h2.7v1.3h.1c.4-.8 1.5-1.6 3.1-1.6c3.3 0 3.9 2.2 3.9 5v4.4z"/>
                </svg>
                <span>LinkedIn</span>
              </SocialButton>
            </div>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="label-text">Full name</span>
              <input name="name" required placeholder="Your name" />
            </label>

            <label className="field">
              <span className="label-text">Email</span>
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>

            <label className="field">
              <span className="label-text">Password</span>
              <input name="password" type="password" required placeholder="Create a password" />
            </label>

            <button className="btn btn-primary signup-submit" type="submit">Create account</button>
          </form>

          <p className="signup-legal">
            By signing up you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>

          <p style={{marginTop:'.75rem', color:'var(--color-neutral)'}}>
            Already have an account? <a href="/login" style={{color:'var(--color-primary)'}}>Sign in</a>
          </p>
        </div>
      </main>

      
    </div>
  )
}

export default Signup
