import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { events } from '../data/events'
import './register.css'
import Footer1 from '../components/footer1'
import Navigation2 from '../components/navigation2'

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    tickets: 1,
    notes: '',
    agree: false,
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target as any
    if (type === 'checkbox') {
      setForm((s) => ({ ...s, [name]: (e.target as HTMLInputElement).checked }))
    } else if (type === 'number') {
      setForm((s) => ({ ...s, [name]: Number(value) }))
    } else {
      setForm((s) => ({ ...s, [name]: value }))
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // For now just show the collected data (replace with API call)
    // eslint-disable-next-line no-alert
    alert('Registration submitted:\n' + JSON.stringify(form, null, 2))
    // reset partial
    setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', tickets: 1, notes: '', agree: false })
  }

  // read event id from query string and find matching event
  const location = useLocation()
  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const eventId = params.get('id')
  const event = events.find((e) => e.id === eventId)

  return (
    <div>
      <Navigation2/>
    <div className="register-page">
      

      <section className="register-hero">
        <div className="register-hero-inner">
          <h1>{event ? `Register — ${event.title}` : 'Register for an event'}</h1>
          <p>{event ? `${event.date}  ${event.location}` : 'Fill your details below to secure your spot. We\u2019ll send a confirmation to your email.'}</p>
        </div>
      </section>

      <main className="register-main">
        <div className="register-panel">
          <form className="register-form" onSubmit={onSubmit}>
            <div className="form-row two-col">
              <label>
                First name
                <input name="firstName" value={form.firstName} onChange={onChange} required />
              </label>
              <label>
                Last name
                <input name="lastName" value={form.lastName} onChange={onChange} required />
              </label>
            </div>

            <div className="form-row two-col">
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={onChange} required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" value={form.phone} onChange={onChange} />
              </label>
            </div>

            <div className="form-row two-col">
              <label>
                Company / Organization
                <input name="company" value={form.company} onChange={onChange} />
              </label>
              <label>
                Tickets
                <select name="tickets" value={form.tickets} onChange={onChange}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>
                Additional notes
                <textarea name="notes" value={form.notes} onChange={onChange} rows={4} />
              </label>
            </div>

            <div className="form-row consent">
              <label className="consent-label">
                <input name="agree" type="checkbox" checked={form.agree} onChange={onChange} /> I agree to receive email updates and ticketing info.
              </label>
            </div>

            <div className="form-row actions">
              <button type="submit" className="btn btn-primary">Complete registration</button>
              <button type="button" className="btn btn-outline" onClick={() => setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', tickets: 1, notes: '', agree: false })}>Reset</button>
            </div>
          </form>
          
          <aside className="summary" aria-label="Event summary">
            <h4>Event summary</h4>
            {event ? (
              <>
                <p className="summary-sub">{event.title}  {event.date}</p>
                <p className="summary-text">{event.location}</p>
              </>
            ) : (
              <>
                <p className="summary-sub">Midnight Jazz Night  Nov 6, 2025</p>
                <p className="summary-text">The Lantern Hall  In-person</p>
              </>
            )}

            <div className="summary-block">
              <h5>Tickets</h5>
              <p className="summary-text">{form.tickets} × General admission</p>
            </div>

            <div className="summary-block">
              <h5>Notes</h5>
              <p className="summary-text">Please arrive 15 minutes early. Doors open at 7:00 PM.</p>
            </div>

            <div className="summary-actions">
              <button className="btn btn-outline" type="button" onClick={() => alert('More event info')}>More info</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
    <Footer1/>
    </div>
  )
}

export default Register
