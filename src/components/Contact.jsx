import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { madarsaInfo } from "../data/madarsaInfo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /** -----------------------------------------------------------------------
   *  Submit – opens WhatsApp with a pre‑filled message that contains all form
   *  fields. The phone number used is the Madarsa’s WhatsApp number from the
   *  data module. After opening the link we show a success UI for a few seconds.
   * ----------------------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Build the WhatsApp text payload
    const textLines = [
      `*New Inquiry from Madarsa Website*`,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      formData.phone ? `*Phone/WhatsApp:* ${formData.phone}` : null,
      `*Course:* ${formData.course}`,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappNumber = madarsaInfo.contact.whatsapp.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${923111587772}?text=${encodeURIComponent(
      textLines
    )}`;

    // Open a new window/tab (user‑initiated, so no popup blocker)
    window.open(waUrl, "_blank");

    // Show temporary success UI
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="heading-secondary">Contact &amp; Location Details</h2>
          <p className="section-subtitle">
            Reach out to our administrative team for course inquiries,
            enrollment procedures, or campus visits.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column – Textual Info */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Madarsa Information</h3>
            <p className="panel-intro">
              We welcome students, parents, and community members to visit or
              contact us directly.
            </p>

            <div className="info-cards-list">
              {/* Address */}
              <div className="info-card">
                <div className="info-icon-box">
                  <MapPin size={22} className="info-icon" />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Address / Location</span>
                  <p className="info-value">
                    {madarsaInfo.contact.address.line1}
                    <br />
                    {madarsaInfo.contact.address.line2}
                    <br />
                    {madarsaInfo.contact.address.city},{" "}
                    {madarsaInfo.contact.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="info-icon-box">
                  <Phone size={22} className="info-icon" />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Phone Number</span>
                  <a
                    href={`tel:${madarsaInfo.contact.phone.replace(
                      /[^0-9+]/g,
                      ""
                    )}`}
                    className="info-link"
                  >
                    {madarsaInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="info-card">
                <div className="info-icon-box">
                  <MessageSquare size={22} className="info-icon" />
                </div>
                <div className="info-text-box">
                  <span className="info-label">WhatsApp Contact</span>
                  <a
                    href={`https://wa.me/${madarsaInfo.contact.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-link whatsapp-link"
                  >
                    Chat on WhatsApp ({madarsaInfo.contact.whatsapp})
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="info-card">
                <div className="info-icon-box">
                  <Clock size={22} className="info-icon" />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Office Hours</span>
                  <p className="info-value">{madarsaInfo.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Form */}
          <div className="contact-form-panel">
            <h3 className="panel-title">Send an Inquiry</h3>
            <p className="panel-intro">
              Complete the form below and an admissions officer will respond
              promptly.
            </p>

            {submitted ? (
              <div className="form-success-box animate-fade-in" role="alert">
                <CheckCircle size={44} className="success-icon" />
                <h4 className="success-title">Message Sent via WhatsApp</h4>
                <p className="success-desc">
                  Thank you! We’ve opened a WhatsApp chat with your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000‑0000"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="course" className="form-label">
                    Interested Course / Program
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Quran Reading & Qaida">
                      Quran Reading &amp; Qaida (Nazira)
                    </option>
                    <option value="Tajweed & Recitation Excellence">
                      Tajweed &amp; Recitation Excellence
                    </option>
                    <option value="Hifz-ul-Quran Memorization">
                      Hifz‑ul‑Quran Memorization
                    </option>
                   
                    <option value="Islamic Studies & Hadith">
                      Islamic Studies &amp; Hadith
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your questions or notes here..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-emerald form-submit-btn">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS – keep it in the component for quick copy‑paste */}
      <style>{`
        .contact-section { background-color: var(--color-sand); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 3rem;
        }
        .contact-info-panel,
        .contact-form-panel {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .panel-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-emerald-darkest);
          margin-bottom: .35rem;
        }
        .panel-intro {
          font-size: .9375rem;
          color: var(--color-text-muted);
          margin-bottom: 1.75rem;
        }
        .info-cards-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .info-card {
          display: flex; gap: 1rem; align-items: flex-start;
          padding: 1rem;
          background-color: var(--color-ivory);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
        }
        .info-icon-box {
          width: 42px; height: 42px;
          border-radius: var(--radius-sm);
          background-color: var(--color-emerald-subtle);
          display: flex; align-items: center; justify-content: center;
        }
        .info-icon { color: var(--color-emerald-primary); }
        .info-label {
          font-size: .78125rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: .2rem;
        }
        .info-value { font-size: .9375rem; color: var(--color-text-main); line-height: 1.5; }
        .info-link {
          font-size: .9875rem;
          font-weight: 600;
          color: var(--color-emerald-primary);
          transition: color var(--transition-fast);
        }
        .info-link:hover { color: var(--color-gold); text-decoration: underline; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: .4rem; }
        .form-label {
          font-size: .875rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }
        .form-input, .form-select, .form-textarea {
          width: 100%; padding: .75rem 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background-color: var(--color-ivory);
          font-size: .9375rem;
          color: var(--color-text-main);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--color-emerald-primary);
          box-shadow: 0 0 0 3px rgba(20,73,58,.12);
        }
        .form-submit-btn { margin-top: .5rem; width: 100%; }
        .form-success-box {
          padding: 3rem 1.5rem;
          text-align: center;
          background-color: var(--color-emerald-subtle);
          border: 1px solid rgba(20,73,58,.2);
          border-radius: var(--radius-md);
          display: flex; flex-direction: column; align-items: center; gap: .75rem;
        }
        .success-icon { color: var(--color-emerald-primary); }
        .success-title {
          font-size: 1.35rem; font-weight: 700;
          color: var(--color-emerald-darkest);
        }
        .success-desc { font-size: .9375rem; color: var(--color-text-main); max-width: 360px; }
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) {
          .contact-info-panel,
          .contact-form-panel { padding: 1.5rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}