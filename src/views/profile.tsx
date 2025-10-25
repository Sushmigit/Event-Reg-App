import React, { useState } from 'react';
import Navigation2 from '../components/navigation2';
import Footer1 from '../components/footer1';
import './profile.css';

interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  profilePic: string;
}

interface Review {
  id: number;
  event: string;
  rating: number;
  comment: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    city: 'Chennai',
    country: 'India',
    profilePic: 'https://plus.unsplash.com/premium_photo-1675198764187-3bf124a00a2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User>(user);

  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, event: 'Music Concert', rating: 5, comment: 'Amazing experience!' },
    { id: 2, event: 'Art Workshop', rating: 4, comment: 'Very informative.' },
  ]);

  const [newReview, setNewReview] = useState<{ rating: number; comment: string }>({
    rating: 0,
    comment: '',
  });

  const handleLogout = () => alert('Logged out!'); // Replace with actual logout logic
  const handleEditToggle = () => { setIsEditing(!isEditing); setFormData(user); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSave = () => { setUser(formData); setIsEditing(false); alert('Profile updated!'); };

  const handleNewReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleAddReview = () => {
    if (newReview.rating && newReview.comment.trim()) {
      const review: Review = { id: reviews.length + 1, event: 'New Event', ...newReview };
      setReviews([review, ...reviews]);
      setNewReview({ rating: 0, comment: '' });
    } else alert('Provide rating and comment');
  };

  return (
    <div>
        <Navigation2 />
    <div className="profile-page">
      
      <div className="profile-container two-col-layout">
        {/* Profile Card */}
        <div className="profile-left">
          <div className="profile-card event-card">
            <img src={user.profilePic} alt="Profile" className="profile-image card-thumb" />
            <h2>{user.name}</h2>
            <p className="muted">{user.email}</p>

            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Country:</strong> {user.country}</p>

            <div className="profile-actions">
              <button className="edit-btn btn-outline" onClick={handleEditToggle}>
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
              <button className="logout-btn btn-outline" onClick={handleLogout}>
                Logout
              </button>
            </div>

            {isEditing && (
              <div className="edit-modal">
                <h3>Edit Profile</h3>
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                  {['name','email','phone','city','country'].map((field) => (
                    <label key={field}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                      <input type="text" name={field} value={(formData as any)[field]} onChange={handleChange} />
                    </label>
                  ))}
                  <button type="submit" className="save-btn btn-outline">Save Changes</button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Card */}
        <div className="profile-right">
          <div className="profile-reviews event-card">
            <h3>My Reviews</h3>

            <div className="add-review">
              <label>
                Rating (1-5):
                <input type="number" name="rating" value={newReview.rating} min={1} max={5} onChange={handleNewReviewChange} />
              </label>
              <label>
                Comment:
                <textarea name="comment" value={newReview.comment} onChange={handleNewReviewChange}></textarea>
              </label>
              <button className="save-btn btn-outline" onClick={handleAddReview}>Add Review</button>
            </div>

            <div className="reviews-list">
              {reviews.map((r) => (
                <div key={r.id} className="review-card event-card">
                  <p><strong>{r.event}</strong></p>
                  <p>Rating: {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</p>
                  <p>{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Profile;
