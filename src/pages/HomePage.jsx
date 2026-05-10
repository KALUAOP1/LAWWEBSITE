import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import TrustStrip from "../components/TrustStrip";
import SectionHeading from "../components/SectionHeading";
import { metrics, practiceAreas, siteData, trustItems } from "../data/siteData";

export default function HomePage() {
  const featuredAreas = practiceAreas.slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Professional Legal Representation"
        title="Clear legal strategy for disputes, defense, documentation, and court matters."
        text="Advocate Deepika represents clients with disciplined preparation, direct advice, and structured follow-through across litigation, family matters, criminal defense, property issues, and legal documentation."
        actions={
          <>
            <NavLink className="button button-primary" to="/contact">
              Schedule Consultation
            </NavLink>
            <a className="button button-secondary" href={siteData.phoneHref}>
              Call Now
            </a>
          </>
        }
        aside={
          <>
            <div className="hero-panel-head">
              <p className="eyebrow">Consultation Desk</p>
              <span className="status-pill">Accepting New Matters</span>
            </div>
            <div className="contact-quick-grid">
              <article>
                <span>Office</span>
                <strong>{siteData.office}</strong>
              </article>
              <article>
                <span>Phone</span>
                <a href={siteData.phoneHref}>{siteData.phone}</a>
              </article>
              <article>
                <span>Email</span>
                <a href={siteData.emailHref}>{siteData.email}</a>
              </article>
              <article>
                <span>Hours</span>
                <strong>{siteData.hours}</strong>
              </article>
            </div>
            <div className="hero-metrics hero-metrics-panel">
              {metrics.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </>
        }
      />

      <TrustStrip items={trustItems} />

      <section className="section">
        <SectionHeading
          eyebrow="Core Services"
          title="A strong first impression backed by real legal service categories."
          lead="The home page now introduces the practice and routes visitors to dedicated pages instead of forcing everything into one long screen."
        />
        <div className="practice-grid">
          {featuredAreas.map((area) => (
            <article
              key={area.title}
              className={`practice-card${area.featured ? " featured-card" : ""}`}
            >
              {area.kicker ? <p className="card-kicker">{area.kicker}</p> : null}
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
