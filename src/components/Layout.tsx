import { Outlet, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState } from 'react';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

export function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className="layout">
      <header className="fixed-header">
        <div className="header-left">
          <Link to="/" className="header-name">
            <h1>Albert Lin</h1>
          </Link>
          <div className="nav-divider"></div>
          <nav className="main-nav">
            <Link to="/about">About</Link>
            <div className="nav-divider"></div>
            <Link to="/projects">Projects</Link>
            <div className="nav-divider"></div>
            <Link to="/blog">Blog</Link>
            <div className="nav-divider"></div>
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-button"
            >
              Resume
            </a>
          </nav>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {isDarkTheme ? <BsSun /> : <BsMoon />}
        </button>
      </header>

      <div className="content-wrapper">
        <aside className="profile-sidebar">
          <div className="profile-image">
            <img src={profileImage} alt="Albert Lin" />
          </div>
          <div className="profile-info">
            <h3>Albert Lin 🇹🇼🇺🇸</h3>
            <p className="profile-title">Quantitative Researcher</p>
            <p className="profile-bio">
              Passionate about building elegant solutions to complex problems.
              Currently working on exciting projects in Quantitative Finance.
            </p>
            <hr className="profile-divider" />
            <div className="profile-links">
              <a href="https://github.com/AlbertLin0327" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className="profile-icon" />
              </a>
              <a href="https://www.linkedin.com/in/albert-hk-lin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin className="profile-icon" />
              </a>
              <a href="mailto:linhsinkai@gmail.com" title="Email">
                <MdEmail className="profile-icon" />
              </a>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 