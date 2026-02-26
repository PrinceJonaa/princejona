interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({
  title,
  className = "",
}: SectionTitleProps) {
  return (
    <h2 className={`portfolio-section-title ${className}`.trim()}>
      {"// "}
      {title}
    </h2>
  );
}
