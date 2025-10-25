import React from 'react'


import './login.css'

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email') as string | null
    window.alert(`Welcome back! We'll sign you in as ${email || 'user'}`)
    e.currentTarget.reset()
  }

  const [forgot, setForgot] = React.useState(false)

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email') as string | null
    window.alert(`Password reset link sent to ${email || 'your email'}`)
    e.currentTarget.reset()
    setForgot(false)
  }

  return (
    <div className="signup-page">
    

      <main className="signup-hero">
        <div className="signup-card" role="region" aria-label="Sign in">
          <div className="signup-header">
            <h1 className="signup-title">Welcome back</h1>
            <p className="signup-subtitle">Sign in to your EventNest account</p>
          </div>

          {forgot ? (
            <form className="signup-form" onSubmit={handleReset}>
              <label className="field">
                <span className="label-text">Enter your email to reset password</span>
                <input name="email" type="email" required placeholder="you@example.com" />
              </label>
              <div style={{display:'flex', gap:'.75rem'}}>
                <button className="btn btn-outline" type="button" onClick={() => setForgot(false)}>Back</button>
                <button className="btn btn-primary" type="submit">Send reset link</button>
              </div>
            </form>
          ) : (
            <form className="signup-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="label-text">Email</span>
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>

            <label className="field">
              <span className="label-text">Password</span>
              <input name="password" type="password" required placeholder="Your password" />
            </label>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <label style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                <input type="checkbox" name="remember" />
                <span className="label-text">Remember me</span>
              </label>
              <button type="button" className="btn btn-outline" onClick={() => setForgot(true)} style={{ padding: '0.25rem 0.6rem' }}>Forgot?</button>
            </div>
            <button className="btn btn-primary signup-submit" type="submit">Sign in</button>
          </form>
          )}

          <p className="signup-legal">New here? <a href="/signup">Create an account</a></p>
        </div>
  </main>

  
    </div>
    
  )
}

export default Login
