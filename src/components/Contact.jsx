import { personal } from '../data/portfolio';
import { useResume } from '../context/ResumeContext';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();
  const { openResume, openResumeNewWindow } = useResume();

  return (
    <section className="contact section" id="contact">
      <div className="contact-bg">
        <div className="contact-orb" />
      </div>

      <div className="container">
        <div ref={ref} className="contact-inner reveal">
          <div className="contact-left">
            <p className="section-label">07 — Contact</p>
            <h2 className="section-title">
              Let's build something <span>great</span>
            </h2>
            <p className="contact-desc">
              I'm prepared to contribute positively to the IT industry and continue lifelong learning.
              Whether it's a project, opportunity, or collaboration — I'd love to hear from you.
            </p>
          </div>

          <div className="contact-right">
            <a href={`mailto:${personal.email}`} className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">{personal.email}</span>
              <span className="contact-arrow">→</span>
            </a>
            <a href={`tel:${personal.phone}`} className="contact-link">
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">{personal.phone}</span>
              <span className="contact-arrow">→</span>
            </a>
            <a
              href={`https://linkedin.com/in/${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">{personal.linkedin}</span>
              <span className="contact-arrow">→</span>
            </a>
            <button type="button" className="contact-link" onClick={openResume}>
              <span className="contact-link-label">Resume</span>
              <span className="contact-link-value">View CV</span>
              <span className="contact-arrow">→</span>
            </button>
            <button type="button" className="contact-link" onClick={openResumeNewWindow}>
              <span className="contact-link-label">Resume</span>
              <span className="contact-link-value">Open CV in New Window</span>
              <span className="contact-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
