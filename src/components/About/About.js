// src/components/About/About.js

import React from 'react';
import './About.css'; // Add your styling here

const About = ({ showMore }) => {
  return (
    <div className="about-section">
      <h2>About IdleKP</h2>
      <p>
        Hey there! I'm Parakram, the mastermind behind IdleKP. This is where I spill the beans on my wild thoughts, crazy experiences, and everything in between. Buckle up for a ride through the weird and wonderful world inside my head!
      </p>
      {showMore && (
        <>
          <h3>Why I Write</h3>
          <p>
            Ever had a brainwave at 3 AM? That's me, all the time. Writing is my way of capturing those eureka moments and sharing them with you. From epic fails to brilliant wins, I put it all out there hoping to spark a smile, a laugh, or a thought.
          </p>
          <h3>My Journey</h3>
          <p>
            Life's been a rollercoaster – one moment I'm conquering mountains, the next I'm tripping over my own shoelaces. This blog is my diary, my scrapbook, my therapy session – a peek into the adventures and misadventures that make up my life.
          </p>

        </>
      )}
      {!showMore && (
        <a href="/about" className="read-more">Read more</a>
      )}
    </div>
  );
};

export default About;
