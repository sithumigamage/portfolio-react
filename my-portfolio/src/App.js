import React, { useState } from 'react';
import './styles.css';
import profileImg from './ga.jpeg';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header className="navbar">
        <h1>HELLO THERE!😊 WELCOME TO MY PERSONAL PORTFOLIO WEBSITE ⚡🌐🚀</h1>
        <nav>
          <a href="#bio">Bio</a>
          <a href="#papers">Who am i</a>
          <a href="#projects">Projects</a>
          <button onClick={toggleTheme}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="container">
        <div className="profile">
          <img src={profileImg} alt="profile" className="avatar" />
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
      <li>
  Bachelor of Computer Science
  <div>(Undergraduate)</div>
  <div>Eastern University Of Sri Lanka.</div>
  present<br />
</li>


      <li>G.C.E. Advanced Level Examination 
        <div>(2020)</div>
         <div>Combined Maths:B</div>
          <div>Chemistry: B</div>
           <div>Physics: B</div>
        </li>

      <li>Completed diploma in English
      <div>Diploma Level</div>
      <div>Esoft Metro campus</div>
          </li>
    </ul>
  </div>
</div>
</div>

 
</main>


 {/* PAPERS SECTION */}
<div id="papers" className="section papers-section">
   <div className="papers-container">
    
 
   

  <h1>Who I Am</h1>
  <p>
  I am a passionate and detail-oriented<br />
  Computer Science undergraduate at Eastern University of Sri Lanka,<br />
  with a strong interest in software development, artificial intelligence,<br />
  and problem-solving. Throughout my academic journey, I’ve worked on<br />
  innovative projects such as AI-based disease detection systems and<br />
  responsive web applications, combining deep learning with modern web<br />
  technologies like React and FastAPI. I take pride in my ability to<br />
  learn quickly, work collaboratively, and build solutions that have<br />
  real-world impact. Alongside my technical skills, I bring strong communication,<br />
  teamwork, and time management abilities that help me thrive in dynamic environments.<br />
  I am always eager to explore new technologies, grow professionally,<br />
  and contribute meaningfully to the tech community.
</p>


      <h3>✅ Soft Skills</h3>
  <p>These highlight your personality, work ethic, and collaboration ability:</p>
  <ul>
    <li>Communication – Effectively conveying ideas in team settings.</li>
    <li>Problem Solving – Thinking logically to resolve technical challenges.</li>
    <li>Time Management – Prioritizing tasks and meeting deadlines.</li>
    <li>Teamwork – Collaborating on group projects or development teams.</li>
    <li>Adaptability – Learning new tools, frameworks, or languages quickly.</li>
    <li>Critical Thinking – Evaluating solutions and choosing the best approach.</li>
    <li>Attention to Detail – Spotting bugs or flaws in code or design.</li>
    <li>Creativity – Designing user-friendly interfaces or unique solutions.</li>
    <li>Work Ethic – Staying consistent and committed to goals.</li>
    <li>Leadership – Taking initiative or guiding team members in projects.</li>
  </ul>

  <h3>🎓 External Qualifications / Certifications</h3>
  <p>These add credibility to your skills and show initiative in continuous learning:</p>

  <h4>💻 Programming & Development</h4>
  <ul>
    <li>Selenium WebDrive with Java - Basics to Advanced + Frameworks
      <div>Udemy (Issued: March 2025)</div>
        </li>

    <li>Python for Beginners
      <div>Department of Computer Science & Engineering</div>
      <div>Faculty of Engineering, University of Moratuwa</div>
      <div>(Issued: March 2024)</div>
        </li>

    <li>Front-end Web Development
      <div>Department of Information Technology</div>
      <div>Faculty of Information Technology of Moratuwa</div>
      <div>(Issued: March 2024)</div>
       </li>

    <li>Department of Information Technology, 
      <div>Faculty of Information Technology of Moratuwa</div>
      <div>(Issued: March 2024)</div>
      </li>
    
  </ul>

  <h4>🔍 AI & Data Science</h4>
  <ul>
    <li>AI for Everyone </li>
    <li>Machine Learning</li>
    <li>Data Analysis with Python</li>
  </ul>

  <h4>🛡️ Cybersecurity & Networking</h4>
  <ul>
    
    <li>Introduction to Cybersecurity (Cisco Networking Academy)</li>
  </ul>

  <h4>📈 Tools & Software</h4>
  <ul>
    <li>Git & GitHub</li>
  <li>Agile Project Management </li>
  <li>UI/UX Design Specialization </li>
  <li>React.js – Frontend library for building interactive user interfaces</li>
  <li>FastAPI – Modern Python web framework for backend development</li>
  <li>TensorFlow / Keras – Deep learning frameworks for model building</li>
  <li>Python – General-purpose programming language</li>
  <li>Java – OOP language used in academic projects</li>
  <li>HTML & CSS – Core web technologies for structuring and styling</li>
  <li>JavaScript – Dynamic behavior in web applications</li>
  <li>VS Code – Code editor used for development</li>
  <li>Figma – Design tool for UI/UX prototyping</li>
  <li>Postman – API testing and debugging tool</li>
  </ul>


      <img src="/pic2.jpg" alt="Right" className="papers-img" />
      <img src="/pic1.jpg" alt="Left" className="papers-img" />
   

      </div>
</div>

{/* PROJECTS SECTION */}

  <div id="projects" className="section projects-section">
  <div className="projects-container">
  <h1>Projects</h1>
 

  <article className="project-item">
    <h3>Portfolio Website</h3>
    <p>Personal responsive portfolio with dark/light theme toggle</p>
    <ul>
      <li>Designed and developed a responsive React-based portfolio site</li>
      <li>Implemented theme toggle, download CV functionality, and section navigation</li>
      <li><strong>Technologies:</strong> React.js, Tailwind CSS, JavaScript</li>
    </ul>
  </article>

  <article className="project-item">
    <h3>Pneumonia Detection from Chest X-Rays</h3>
    <p>Deep learning-based medical image classification system</p>
    <ul>
      <li>Built a Convolutional Neural Network (CNN) using TensorFlow/Keras with 91% accuracy</li>
      <li>Integrated image preprocessing and augmentation for improved model performance</li>
      <li>Developed a FastAPI backend and a React.js frontend for web deployment</li>
      <li><strong>Technologies:</strong> Python, TensorFlow, FastAPI, React.js</li>
    </ul>
  </article>

  <article className="project-item">
    <h3>Currency Converter Web Application</h3>
    <p>Real-time currency exchange tool using public API</p>
    <ul>
      <li>Integrated the Frankfurter API for live currency rates and conversion</li>
      <li>Designed a responsive UI using React.js and Tailwind CSS</li>
      <li>Focused on clean UI/UX with responsive design principles</li>
      <li>Implemented localStorage to save favorite currencies</li>
      <li><strong>Technologies:</strong> React.js, Tailwind CSS, REST API</li>
    </ul>
  </article>

  <article className="project-item">
    <h3>Real-Time Weather App</h3>
    <p>React-based weather information application using OpenWeatherMap API</p>
    <ul>
      <li>Developed a responsive frontend with React.js and custom CSS for real-time weather updates</li>
      <li>Integrated OpenWeatherMap API to fetch temperature, wind speed, humidity, and weather icons</li>
      <li>Applied React best practices using state management and component reusability</li>
      <li><strong>Technologies:</strong> React.js, JavaScript, OpenWeatherMap API, HTML, CSS</li>
    </ul>
  </article>

           </div>
      </div>
      </div>
  );
}

export default App;
