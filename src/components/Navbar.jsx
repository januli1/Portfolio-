import { useEffect, useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { useCertificates } from '../context/CertificatesContext';
import './Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openResume } = useResume();
  const { openCertificates } = useCertificates();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo">
          <span className="logo-mark">JS</span>
          <span className="logo-text">Januli</span>
        </a>

        <div className="navbar-end">
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button type="button" className="navbar-cv" onClick={() => { openResume(); setMenuOpen(false); }}>
              View CV
            </button>
            <button type="button" className="navbar-cv" onClick={() => { openCertificates(); setMenuOpen(false); }}>
              Certificates
            </button>
            <a href="#contact" className="navbar-cta">Let's Talk</a>
          </div>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
