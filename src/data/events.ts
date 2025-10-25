export type EventItem = {
  id: string
  title: string
  date?: string
  location?: string
  image: string
  short: string
  long?: string
}

export const events: EventItem[] = [
  {
    id: '1',
    title: 'Music Festival 2025',
    date: 'Nov 6, 2025',
    location: 'The Lantern Hall',
    image: 'https://th.bing.com/th/id/R.7a63bbe693e2c8d6f864d5d7ed619ce2?rik=kHnZbVi6r2f7ig&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1533174072545-7a4b6ad7a6c3%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8MXx8bXVzaWMlMjBmZXN0aXZhbHx8MHx8fHwxNjE5MzAyNTk3%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=t48duKoUdBRXNmyarCm6VqQDNC9WlIl31WTZT0pR26w%3d&risl=&pid=ImgRaw&r=0',
    short: 'Enjoy a weekend of live music, food trucks, and art installations.',
    long: 'Join us to enjoy the live music,food and art installations.'
  },
  {
    id: '2',
    title: 'Design Futures Conference',
    date: 'Dec 2, 2025',
    location: 'Conference Center',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=80&auto=format&fit=crop',
    short: 'A day of talks and workshops about product design and ethics.',
    long: 'Leading designers share case studies and hands-on sessions to help you shape products that matter.'
  },
  {
    id: '3',
    title: 'Outdoor Film Festival',
    date: 'Aug 21, 2025',
    location: 'Riverside Park',
    image: 'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt45743c0bc7b70072/66707d2872750a7c98f9c6dc/picnic-group.jpg?q=70&width=3840&auto=webp',
    short: 'Family-friendly screenings under the stars.',
    long: 'Picnic, popcorn, and a curated selection of short and feature films for all ages.'
  },
  {
    id: '4',
    title: 'Startup Pitch Night',
    date: 'Oct 12, 2025',
    location: 'Innovation Hub',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format&fit=crop',
    short: 'Early-stage founders pitch to investors and mentors.',
    long: 'Watch fast-paced pitches and connect with founders, mentors, and angels.'
  }
]
