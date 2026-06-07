import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">JS</span>
          <div>
            <p className="footer-name">{personal.name}</p>
            <p className="footer-edu">{personal.education}</p>
          </div>
        </div>

        <p className="footer-tagline">
          Software Engineering · Data Engineering · AI
        </p>

        <p className="footer-copy">
          © {year} {personal.firstName} Samaraweera. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}
