import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { lawClasses, siteData } from "../data/siteData";

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal Masterclasses"
        title="Elevate your legal acumen with practical courses for students and young professionals."
        text="Practical, intensive classes taught by senior advocates that focus on courtroom skills, documentation, rights, and real case practice."
        actions={
          <a className="button button-primary" href={siteData.whatsappHref} target="_blank" rel="noreferrer">
            Request Enrollment
          </a>
        }
        aside={
          <div className="hero-note">
            <h2>What you will gain</h2>
            <ul>
              <li>Practical clarity on statutes, procedure, and litigation strategy.</li>
              <li>Real-world drafting, petition preparation, and case analysis.</li>
              <li>Confidence to handle legal matters, court practice, and client advice.</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <SectionHeading
          eyebrow="Course Catalogue"
          title="Choose the masterclass that fits your legal goals."
        />

        <div className="practice-grid law-classes-grid">
          {lawClasses.map((course) => (
            <article key={course.title} className="practice-card law-class-card">
              <div className="card-heading">
                <h3>{course.title}</h3>
                <span className="class-level">{course.level}</span>
              </div>
              <p>{course.description}</p>

              <div className="law-class-meta">
                <div>
                  <strong>Instructor</strong>
                  <p>{course.instructor}</p>
                </div>
                <div>
                  <strong>Duration</strong>
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="law-class-meta law-class-meta-low">
                <div>
                  <strong>Schedule</strong>
                  <p>{course.schedule}</p>
                </div>
                <div>
                  <strong>Fee</strong>
                  <p>{course.fee}</p>
                </div>
              </div>

              <a className="button button-primary" href={siteData.whatsappHref} target="_blank" rel="noreferrer">
                Request Enrollment
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
