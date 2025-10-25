import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './views/home'
import Signup from './views/signup.tsx'
import Login from './views/login'
import Browse from './views/browse'
import EventDetail from './views/event-detail'
import Register from './views/register'
import Ticket from './views/ticket.tsx'
import Footer from './components/footer'
import Profile from './views/profile.tsx'
import Payment from './views/payment.tsx'


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/events" element={<Browse />} />
  <Route path="/events/:id" element={<EventDetail />} />
  <Route path="/register" element={<Register />} />
   <Route path="/tickets" element={<Ticket />} />
   <Route path="/footer" element={<Footer />} />
<Route path="/profile" element={<Profile />} />
<Route path="/payment" element={<Payment />} />
      {/* Example redirect: old path → home */}
      <Route path="/old-path" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
