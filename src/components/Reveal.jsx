import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
