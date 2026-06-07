import { experience } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

export default function Experience() {
  const ref = useReveal();

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="section-label">02 — Work Experience</p>
          <h2 className="section-title">
            Where I've <span>built</span> & led
          </h2>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <div key={i} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="timeline-marker">
                <span className="marker-dot" />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-responsibilities">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-learnings reveal">
          <h4>Key Learnings</h4>
          <p>
            These experiences helped me develop workplace professionalism, teamwork, effective communication,
            real-world software development practices, analytical thinking, problem-solving, and managing
            responsibilities in dynamic environments.
          </p>
        </div>
      </div>
    </section>
  );
}
