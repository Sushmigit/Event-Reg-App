import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { events } from '../data/events'
import './browse.css'
import Footer1 from '../components/footer1'
import Navigation2 from '../components/navigation2'

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const ev = events.find((e) => e.id === id)
  if (!ev) return (
    <div>
      
      <main style={{padding:'4rem'}}><p>Event not found</p><Link to="/events">Back</Link></main>
      
    </div>
  )

  return (
    <div>
      <Navigation2/>
    <div className="browse-page">
      
      
      <main style={{padding:'2rem'}}>
        <div style={{maxWidth: '80rem', margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 420px', gap:'1.25rem'}}>
            <div>
              <img src={ev.image} alt={ev.title} style={{width:'100%', height:380, objectFit:'cover', borderRadius:12}} />
              <h1 style={{marginTop:'.75rem'}}>{ev.title}</h1>
              <p className="muted">{ev.date}  {ev.location}</p>
              <p style={{marginTop:'.75rem'}}>{ev.long}</p>
            </div>
            <aside>
              <div style={{background:'transparent', padding:'0', borderRadius:12}}>
                <div style={{padding:'1rem'}}>
                  <p><strong>When</strong></p>
                  <p>{ev.date}</p>
                  <p><strong>Where</strong></p>
                  <p>{ev.location}</p>
                  <div style={{marginTop:'1rem'}}>
                    <Link to={`/register?id=${ev.id}`} className="btn btn-primary">Register</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    
      
    </div>
    <Footer1/>
    </div>
  )
}

export default EventDetail
