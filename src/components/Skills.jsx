import { skills, certificates } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const skillGroups = [
  { key: 'languages', label: 'Languages', icon: '{ }' },
  { key: 'web', label: 'Web Technologies', icon: '◉' },
  { key: 'databases', label: 'Databases', icon: '▦' },
  { key: 'tools', label: 'Tools & Platforms', icon: '⚙' },
  { key: 'soft', label: 'Soft Skills', icon: '✦' },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="section-label">04 — Skills & Competencies</p>
          <h2 className="section-title">
            My technical <span>arsenal</span>
          </h2>
        </div>

        <div className="skills-layout reveal">
          {skillGroups.map((group) => (
            <div key={group.key} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skill-chips">
                {skills[group.key].map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certificates reveal">
          <h3 className="certificates-title">Certificates & Courses</h3>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert} className="certificate-card">
                <span className="cert-badge">✓</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
