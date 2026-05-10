import { useMemo, useState } from "react";
import { siteData } from "../data/siteData";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  matter: "",
  mode: "",
  urgency: "",
  message: "",
};

export default function ConsultationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const whatsappLink = useMemo(() => {
    const text = [
      "Consultation Request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Matter Type: ${form.matter}`,
      `Preferred Mode: ${form.mode}`,
      `Urgency: ${form.urgency}`,
      `Matter Summary: ${form.message}`,
    ].join("\n");

    return `${siteData.whatsappHref}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const emailLink = useMemo(() => {
    const subject = encodeURIComponent(
      `Consultation Request - ${form.matter || "New Matter"}`
    );
    const body = encodeURIComponent(
      [
        "Consultation Request",
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Matter Type: ${form.matter}`,
        `Preferred Mode: ${form.mode}`,
        `Urgency: ${form.urgency}`,
        `Matter Summary: ${form.message}`,
      ].join("\n")
    );

    return `${siteData.emailHref}?subject=${subject}&body=${body}`;
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "Request prepared. You can now send it directly on WhatsApp or through your email app."
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Client name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="+91"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Matter Type
          <select name="matter" required value={form.matter} onChange={handleChange}>
            <option value="">Select matter type</option>
            <option value="Civil Litigation">Civil Litigation</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Family Law">Family Law</option>
            <option value="Property Matter">Property Matter</option>
            <option value="Documentation / Drafting">Documentation / Drafting</option>
            <option value="General Consultation">General Consultation</option>
          </select>
        </label>
        <label>
          Preferred Mode
          <select name="mode" required value={form.mode} onChange={handleChange}>
            <option value="">Select consultation mode</option>
            <option value="Phone Call">Phone Call</option>
            <option value="In-Person Meeting">In-Person Meeting</option>
            <option value="Video Consultation">Video Consultation</option>
          </select>
        </label>
        <label>
          Urgency
          <select name="urgency" required value={form.urgency} onChange={handleChange}>
            <option value="">Select urgency</option>
            <option value="Urgent within 24 hours">Urgent within 24 hours</option>
            <option value="Within this week">Within this week</option>
            <option value="Routine consultation">Routine consultation</option>
          </select>
        </label>
      </div>

      <label>
        Matter Summary
        <textarea
          name="message"
          rows="6"
          placeholder="Briefly explain the legal issue, important dates, and what help is needed."
          required
          value={form.message}
          onChange={handleChange}
        ></textarea>
      </label>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          Prepare Consultation Request
        </button>
        <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
          Send via WhatsApp
        </a>
        <a className="button button-secondary" href={emailLink}>
          Send via Email
        </a>
      </div>

      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
