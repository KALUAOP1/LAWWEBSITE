import ConsultationForm from "../components/ConsultationForm";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { siteData } from "../data/siteData";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Consultation Intake"
        title="Start with a proper enquiry instead of a vague message."
        text="This React page keeps the consultation flow separate and usable, so the website can work more like a real intake system even before a backend is connected."
        actions={
          <>
            <a className="button button-primary" href={siteData.phoneHref}>
              Call Now
            </a>
            <a className="button button-secondary" href={siteData.emailHref}>
              Email Office
            </a>
          </>
        }
        aside={
          <div className="contact-quick-grid">
            <article>
              <span>Phone</span>
              <a href={siteData.phoneHref}>{siteData.phone}</a>
            </article>
            <article>
              <span>Email</span>
              <a href={siteData.emailHref}>{siteData.email}</a>
            </article>
            <article>
              <span>Office</span>
              <strong>{siteData.office}</strong>
            </article>
            <article>
              <span>Hours</span>
              <strong>{siteData.hours}</strong>
            </article>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          eyebrow="Consultation Form"
          title="This page is now dedicated to enquiries, which makes the experience feel more professional."
          lead="The form prepares WhatsApp and email handoff from user input, and it is ready to be connected to a real backend later."
        />

        <div className="consultation-layout">
          <aside className="consultation-sidebar">
            <article>
              <span>Preferred matters</span>
              <p>Civil, criminal, family, property, drafting, and urgent consultation support.</p>
            </article>
            <article>
              <span>Meeting options</span>
              <p>Phone call, in-person chamber meeting, or video consultation.</p>
            </article>
            <article>
              <span>Recommended preparation</span>
              <p>Bring notices, FIR copies, agreements, title papers, orders, and a short case timeline.</p>
            </article>
          </aside>

          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
