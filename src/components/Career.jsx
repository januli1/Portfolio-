import { careerPlan } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import './Career.css';

export default function Career() {
  const ref = useReveal();

  return (
    <section className="career section" id="career">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className="section-label">06 — Career Development</p>
          <h2 className="section-title">
            Where I'm <span>heading</span>
          </h2>
        </div>

        <div className="career-roadmap reveal">
          {careerPlan.map((phase, i) => (
            <div key={phase.phase} className="career-phase">
              <div className="phase-header">
                <div className="phase-step">{i + 1}</div>
                <div>
                  <h3>{phase.phase}</h3>
                  <span className="phase-range">{phase.range}</span>
                </div>
              </div>
              <ul className="phase-goals">
                {phase.goals.map((goal) => (
                  <li key={goal}>
                    <span className="goal-check">✓</span>
                    {goal}
                  </li>
                ))}
              </ul>
              {i < careerPlan.length - 1 && <div className="phase-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
