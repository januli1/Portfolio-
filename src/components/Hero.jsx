import { personal } from '../data/portfolio';
import './Hero.css';

const techMarquee = ['React', 'Node.js', 'Java', 'Python', 'MongoDB', 'AWS', 'Firebase', 'AI/ML', 'IoT', 'Android'];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">
          <span className="hero-name-line">{personal.firstName}</span>
          <span className="hero-name-line hero-name-accent">{personal.lastName}</span>
        </h1>

        <p className="hero-title">{personal.title}</p>
        <p className="hero-tagline">{personal.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">9+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Roles</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">SLIIT</span>
            <span className="stat-label">BSc (Hons) IT</span>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <div className="marquee-track">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span key={i} className="marquee-item">
              {tech}
              <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
