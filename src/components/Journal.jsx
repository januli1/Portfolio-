import { journal } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './Journal.css';

export default function Journal() {
  const ref = useReveal();

  return (
    <section className="journal section" id="journal">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="section-label">05 — Reflective Journal</p>
          <h2 className="section-title">
            Professional <span>growth</span>
          </h2>
          <p className="journal-intro">
            Key learnings from the Professional Practice and Work module — building communication,
            professionalism, and career readiness.
          </p>
        </div>

        <div className="journal-grid reveal">
          {journal.map((entry, i) => (
            <article key={entry.title} className="journal-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="journal-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
