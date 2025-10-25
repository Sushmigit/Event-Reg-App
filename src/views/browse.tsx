import React from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data/events' // Ensure this has at least 4 events
import Footer1 from '../components/footer1'

import './browse.css'
import Navigation2 from '../components/navigation2'

const Browse: React.FC = () => {
  return (
    <div>
    <Navigation2/>
    <div className="browse-page">
      <header className="browse-hero">
        <h1>Browse Events</h1>
        <p>Check out upcoming events near you and online.</p>
      </header>

      <main className="browse-list">
        <div className="cards-grid">
          {events.slice(0, 4).map((ev) => (
            <article className="event-card" key={ev.id}>
              <img src={ev.image} alt={ev.title} className="card-thumb" />
              <h3>{ev.title}</h3>
              <p className="muted">{ev.date} · {ev.location}</p>
              <Link to={`/events/${ev.id}`} className="btn btn-outline">
                View Details
              </Link>
            </article>
          ))}
        </div>
      </main>
      </div>
      <Footer1/>
    </div>
  )
}

export default Browse
