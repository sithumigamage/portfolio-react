import React, { useState } from 'react';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header className="navbar">
        <h2>Your Name</h2>
        <nav>
          <a href="#bio">Bio</a>
          <a href="#papers">Papers</a>
          <a href="#projects">Projects</a>
          <button onClick={toggleTheme}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="container">
        <div className="profile">
          <img src="https://via.placeholder.com/120" alt="Profile" className="avatar" />
          <h3>Chien Shiung Wu</h3>
          <p>Chief Scientist</p>
          <p>OpenAI</p>
          <div className="socials">
            <a href="#"><i>GitHub</i></a>
            <a href="#"><i>LinkedIn</i></a>
            <a href="#"><i>Instagram</i></a>
          </div>
        </div>

        <div className="about">
          <h3>About Me</h3>
          <p>
            I’m sithumi gamage, a Computer Science undergraduate at eastern university 
            with a passion for turning complex problems into elegant, scalable solutions.
            My expertise spans full-stack development (React, Node.js, Python) and AI/ML, 
            backed by hands-on experience from internships, hackathons, and open-source contributions. 
            I thrive on collaboration—let’s build something meaningful together!
          </p>
          <a href="/cv.pdf" download className="btn">Download CV</a>

          <div className="two-column">
            <div>
              <h4>Interests</h4>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Computational Linguistics</li>
                <li>Information Retrieval</li>
              </ul>
            </div>
            <div>
              <h4>Education</h4>
              <ul>
                <li>PhD AI – Stanford University</li>
                <li>MEng AI – MIT</li>
                <li>BSc AI – MIT</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
