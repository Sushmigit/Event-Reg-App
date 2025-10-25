import React from 'react';
import Footer1 from '../components/footer1';
import { tickets } from '../data/tickets';
import './ticket.css';
import Navigation2 from '../components/navigation2';

const Tickets: React.FC = () => {
  return (
    <div>
      <Navigation2 />
      <div className="tickets-page">
        <header className="tickets-hero">
          <h1>My Tickets</h1>
          <p>View your upcoming events and reserved seats.</p>
        </header>

        <main className="tickets-list">
          {tickets.map((ticket) => (
            <div className="ticket-card" key={ticket.id}>
              <div className="ticket-left">
                <img src={ticket.image} alt={ticket.title} />
              </div>
              <div className="ticket-right">
                <h3>{ticket.title}</h3>
                <p>{ticket.date} · {ticket.location}</p>
                <p>Seats: {ticket.seat}</p>
                <p>Quantity: {ticket.quantity}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer1 />
    </div>
  );
};

export default Tickets;
