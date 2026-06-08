import { createContext, useContext, useState, useEffect } from 'react';
import { resume, assetUrl } from '../data/portfolio';
import './ResumeModal.css';

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [open, setOpen] = useState(false);
  const cvUrl = assetUrl(resume.file);

  const openResume = () => setOpen(true);
  const openResumeNewWindow = () => window.open(cvUrl, '_blank', 'noopener,noreferrer');

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
    <ResumeContext.Provider value={{ openResume, openResumeNewWindow }}>
      {children}

      {open && (
        <div className="resume-modal" role="dialog" aria-modal="true" aria-label="Resume">
          <button
            type="button"
            className="resume-modal-backdrop"
            onClick={() => setOpen(false)}
            aria-label="Close resume viewer"
          />
          <div className="resume-modal-panel">
            <header className="resume-modal-header">
              <h3>{resume.title}</h3>
              <div className="resume-modal-toolbar">
                <button type="button" className="resume-toolbar-btn" onClick={openResumeNewWindow}>
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
            <iframe src={cvUrl} title={resume.title} className="resume-modal-frame" />
          </div>
        </div>
      )}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error('useResume must be used within ResumeProvider');
  return ctx;
}
