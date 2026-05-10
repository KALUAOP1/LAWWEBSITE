import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { practiceAreas, siteData } from "../data/siteData";

export default function PracticePage() {
  return (
    <main>
      <PageHero
        eyebrow="Practice Areas"
        title="Separate pages make the website feel like a real legal service platform."
        text="This dedicated page lets visitors scan services clearly, compare the types of matters handled, and move toward consultation with better context."
        actions={
          <a className="button button-primary" href={siteData.emailHref}>
            Email Your Matter
          </a>
        }
        aside={
          <div className="hero-note">
            <h2>Matters commonly handled</h2>
            <ul>
              <li>Civil recovery and injunction disputes</li>
              <li>Family conflict and settlement work</li>
              <li>Criminal defense and urgent protection</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          eyebrow="Legal Services"
          title="Work areas are now split into focused cards instead of being buried inside one home section."
        />
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className={`practice-card${area.featured ? " featured-card" : ""}`}
            >
              {area.kicker ? <p className="card-kicker">{area.kicker}</p> : null}
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              {area.points ? (
                <ul>
                  {area.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
