export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className={`section-heading${lead ? " split-heading" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
