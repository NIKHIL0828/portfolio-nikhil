import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg'; 
import './home.css';

const Home = () => {
  return (
    <section className="home-section">
      <img src={profilePhoto} alt="Nikhil Sonkar" className="profile-photo" />
      <h1 className="home-title">Nikhil Sonkar</h1>
      <p className="home-tagline">Full-Stack Developer | React Enthusiast | Lifelong Learner | Competitive Programmer | DSA
        <br />
          Passionate about building scalable web applications and exploring new technologies.
      </p>
    </section>
  );
};

export default Home;