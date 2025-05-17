import React, { useState } from 'react';
import './styles.css';
import profileImg from './profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header className="navbar">
        <h1>HELLO THERE!😊 WELCOME TO MY PERSONAL PORTFOLIO WEBSITE ⚡🌐🚀</h1>
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
          <img src={profileImg} alt="Profile" className="avatar" />
          <h3 className="profile-text">SITHUMI GAMAGE</h3>
          <h4 className="profile-text">software engineer👨‍💻</h4>
          <p className="profile-text">Let’s Connect🔍🌍</p>
          

          <div className="social-icons">
              <a 
                    href="https://github.com/sithumigamage" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
              >
                 <i className="ri-github-fill" aria-hidden="true"></i>
              </a>

               <a 
                 href="https://linkedin.com/in/yourusername" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="LinkedIn"
               >
                   <i className="ri-linkedin-box-fill" aria-hidden="true"></i>
              </a>

              <a 
                   href="https://instagram.com/yourusername" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="Instagram"
               >
                 <i className="ri-instagram-line" aria-hidden="true"></i>
                </a>
         </div>



        </div>

        <div id="bio" className="about">
          <h2>About Me💡👨‍💻</h2>
          <p>
              I’m sithumi gamage, a <span className="highlight">Computer Science undergraduate</span> at eastern university
              with a passion for turning complex problems into elegant, scalable solutions.
              My expertise spans full-stack development <b>(React, Node.js, Python)</b> and AI/ML, 
              backed by hands-on experience from internships, hackathons, and open-source contributions. 
              I thrive on collaboration—let’s build something meaningful together!
          </p>
          
          <a href="/cv.pdf" download className="download-btn">Download CV</a>  {/* instead of btn */}

          <div className="grid">
  <div className="box">
    <h3>Interests</h3>
    <ul>
      <li>Full-Stack Development</li>
      <li>DevOps & Scalability</li>
      <li>Open-Source</li>
      <li>problem-solving and innovation</li>
      <li>human-computer interaction</li>
    </ul>
  </div>
  <div className="box">
    <h3>Education</h3>
    <ul>
      <li>PhD AI – Stanford University</li>
      <li>MEng AI – MIT</li>
      <li>BSc AI – MIT</li>
    </ul>
  </div>
</div>
</div>

 
</main>


 {/* PAPERS SECTION */}
<div id="papers" className="papers-section" style={{ marginTop: '3rem' }}>
  <h3>Papers</h3>
  <p>My research explores the intersection of AI innovation and social impact,
     focusing on developing scalable machine learning solutions for real-world challenges.
      Currently, I’m optimizing transformer models for low-resource language processing 
      (92% accuracy) and designing efficient edge AI systems for healthcare, achieving 
      a 40% reduction in inference time for medical imaging tasks. I’m passionate about 
      ethical AI—recently open-sourcing a toolkit to mitigate bias in facial recognition systems. 
      My work prioritizes reproducibility, scalability, and human-centered design, 
      bridging cutting-edge theory with practical deployment. Published at [Conference Name] 
      and collaborating with [Lab/Team].</p>
</div>

{/* PROJECTS SECTION */}
<div id="projects" className="projects-section" style={{ marginTop: '3rem' }}>
  <h3>Projects</h3>
  <p>Details about your development projects, technologies used, and links to
     GitHub or live demos.My research explores the intersection of AI innovation
      and social impact, focusing on developing scalable machine learning solutions
       for real-world challenges. Currently, I’m optimizing transformer models 
       for low-resource language processing (92% accuracy) and designing efficient
        edge AI systems for healthcare, achieving a 40% reduction in inference time 
        for medical imaging tasks. I’m passionate about ethical AI—recently open-sourcing
         a toolkit to mitigate bias in facial recognition systems. My work prioritizes 
         reproducibility, scalability, and human-centered design, bridging cutting-edge
          theory with practical deployment. Published at [Conference Name] and collaborating
           with [Lab/Team].</p>
</div>
    </div>
  );
}

export default App;
