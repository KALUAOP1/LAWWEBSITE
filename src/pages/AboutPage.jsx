import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { credibilityItems, siteData } from "../data/siteData";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About The Practice"
        title="A modern advocate website still needs to feel grounded, serious, and trustworthy."
        text="This page gives the practice its own identity, shows how matters are approached, and helps visitors understand how counsel works before they make contact."
        actions={
          <a className="button button-primary" href={siteData.phoneHref}>
            Speak With Counsel
          </a>
        }
        aside={
          <div className="hero-note">
            <h2>Working principles</h2>
            <ul>
              <li>Plain-language legal guidance without confusion.</li>
              <li>Preparation before promises.</li>
              <li>Advice shaped by urgency, record, and legal risk.</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          eyebrow="Practice Character"
          title="The site now explains how the advocate works, not just what services exist."
        />
        <div className="experience-grid">
          {credibilityItems.map((item, index) => (
            <article
              key={item.title}
              className={`experience-card${index === 0 ? " dark-card" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <article className="credentials-card">
            <p className="card-kicker">What clients usually value</p>
            <ul>
              <li>Direct access to counsel</li>
              <li>Structured case review</li>
              <li>Professional drafting support</li>
              <li>Responsive first consultation process</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
