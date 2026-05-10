export default function PageHero({ eyebrow, title, text, actions, aside }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
      <aside className="hero-panel">{aside}</aside>
    </section>
  );
}
