interface SectionPlaceholderProps {
  id: string;
  label: string;
}

export function SectionPlaceholder({ id, label }: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="section-placeholder"
      role="note"
      aria-labelledby={`${id}-heading`}
      data-testid={`section-placeholder-${label.toLowerCase().replace(/ /g, '-')}`}
    >
      <h2 id={`${id}-heading`}>{label}</h2>
      <p>Phase 0 section placeholder.</p>
    </section>
  );
}