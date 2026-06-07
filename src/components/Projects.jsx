import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

export default function Projects() {
  const ref = useReveal();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="section-label">03 — Project Highlights</p>
          <h2 className="section-title">
            Things I've <span>created</span>
          </h2>
        </div>
      </div>

      <div className="featured-projects reveal">
        {featured.map((project, i) => (
          <article key={project.title} className={`featured-card ${i % 2 === 1 ? 'reverse' : ''}`}>
            <div className="featured-visual">
              <div className="featured-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="featured-glow" />
              {project.ongoing && <span className="ongoing-badge">Ongoing Research</span>}
            </div>
            <div className="featured-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="projects-grid reveal">
          {rest.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-top">
                <span className="project-icon">◈</span>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag tag-sm">{tag}</span>
                  ))}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
