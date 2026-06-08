import { createContext, useContext, useState, useEffect } from 'react';
import { certificatesDoc, assetUrl } from '../data/portfolio';
import './ResumeModal.css';

const CertificatesContext = createContext(null);

export function CertificatesProvider({ children }) {
  const [open, setOpen] = useState(false);
  const docUrl = assetUrl(certificatesDoc.file);

  const openCertificates = () => setOpen(true);
  const openCertificatesNewWindow = () => window.open(docUrl, '_blank', 'noopener,noreferrer');

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <CertificatesContext.Provider value={{ openCertificates, openCertificatesNewWindow }}>
      {children}

      {open && (
        <div className="resume-modal" role="dialog" aria-modal="true" aria-label="Certificates">
          <button
            type="button"
            className="resume-modal-backdrop"
            onClick={() => setOpen(false)}
            aria-label="Close certificates viewer"
          />
          <div className="resume-modal-panel">
            <header className="resume-modal-header">
              <h3>{certificatesDoc.title}</h3>
              <div className="resume-modal-toolbar">
                <button type="button" className="resume-toolbar-btn" onClick={openCertificatesNewWindow}>
                  Open in New Window
                </button>
                <button
                  type="button"
                  className="resume-toolbar-btn resume-toolbar-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </header>
            <iframe src={docUrl} title={certificatesDoc.title} className="resume-modal-frame" />
          </div>
        </div>
      )}
    </CertificatesContext.Provider>
  );
}

export function useCertificates() {
  const ctx = useContext(CertificatesContext);
  if (!ctx) throw new Error('useCertificates must be used within CertificatesProvider');
  return ctx;
}
