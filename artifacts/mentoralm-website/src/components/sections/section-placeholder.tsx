interface SectionPlaceholderProps {
  label: string;
}

export function SectionPlaceholder({ label }: SectionPlaceholderProps) {
  return (
    <div
      className="section-placeholder"
      role="note"
      data-testid={`section-placeholder-${label.toLowerCase().replace(/ /g, '-')}`}
    >
      Section placeholder / {label}
    </div>
  );
}