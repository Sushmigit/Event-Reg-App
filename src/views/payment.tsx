import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navigation2 from '../components/navigation2'
import Footer1 from '../components/footer1'
import './payment.css'

const Payment: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const registrationData = location.state

  const [form, setForm] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Payment successful!\n' + JSON.stringify(form, null, 2))
    navigate('/') // redirect after payment
  }

  return (
    <div>
        <Navigation2 />
    <div className="payment-page">
      
      <main className="payment-hero">
        <div className="payment-card" role="region" aria-label="Payment details">
          <h1 className="payment-title">Complete your payment</h1>

          {registrationData && (
            <div className="payment-details">
              <p><strong>Event:</strong> {registrationData.eventId}</p>
              <p><strong>Name:</strong> {registrationData.firstName} {registrationData.lastName}</p>
              <p><strong>Email:</strong> {registrationData.email}</p>
              <p><strong>Tickets:</strong> {registrationData.tickets}</p>
            </div>
          )}

          <form className="payment-form" onSubmit={handleSubmit}>
            <label>
              Cardholder Name
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </label>

            <label>
              Card Number
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                maxLength={16}
                required
              />
            </label>

            <div className="two-col">
              <label>
                Expiry
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </label>

              <label>
                CVV
                <input
                  type="password"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength={3}
                  required
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary payment-btn">
              Pay Now
            </button>
          </form>
        </div>
      </main>
      </div>
      <Footer1 />
    </div>
  )
}

export default Payment
