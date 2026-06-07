import { about, modules, photos, personal, assetUrl } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './About.css';

const gallery = [
  { src: photos.hero, alt: 'Professional portrait', label: 'Professional' },
  { src: photos.outdoor, alt: 'Outdoor portrait', label: 'Campus Life' },
  { src: photos.campus, alt: 'SLIIT campus', label: 'At SLIIT' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div ref={ref} className="about-grid reveal">
          <div className="about-left">
            <p className="section-label">01 — About Me</p>
            <h2 className="section-title">
              Crafting <span>impactful</span> technology
            </h2>

            <div className="about-gallery">
              {gallery.map((item) => (
                <figure key={item.src} className="about-gallery-item">
                  <img src={assetUrl(item.src)} alt={`${personal.name} — ${item.alt}`} />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="about-text">
              {about.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-card">
              <div className="about-card-header">
                <span className="card-icon">🎓</span>
                <h3>Academic Modules</h3>
              </div>
              <ul className="module-list">
                {modules.map((mod) => (
                  <li key={mod}>
                    <span className="module-dot" />
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-highlight">
              <div className="highlight-ring">
                <span>AI</span>
              </div>
              <div>
                <h4>Current Focus</h4>
                <p>Smart Cinnamon Growth Monitoring — integrating IoT & machine learning for smart agriculture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
