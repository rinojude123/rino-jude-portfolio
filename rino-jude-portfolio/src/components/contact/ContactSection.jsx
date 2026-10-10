import { useId, useState } from "react";
import { site } from "../../data/site.js";
import { submitContactForm } from "../../lib/submitContactForm.js";
import { HandDrawnButton } from "../common/HandDrawnButton.jsx";
import { Section, SectionHeading } from "../common/Section.jsx";

const initial = { name: "", email: "", message: "" };

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading kicker="SIGNAL / 06" title="Contact" />
      <div className="contact-grid">
        <div>
          <p>If you want to talk about a build, an internship, or a collaboration, write directly.</p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedinUrl} rel="noreferrer" target="_blank">
              LinkedIn ↗
            </a>
            <a href={site.githubUrl} rel="noreferrer" target="_blank">
              GitHub ↗
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const statusId = useId();

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("Sending…");
    try {
      await submitContactForm({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      setStatusMessage("Message sent. Thank you.");
      setValues(initial);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message || "The message could not be sent.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label htmlFor={nameId}>
        Name
        <input
          id={nameId}
          name="name"
          autoComplete="name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
        />
      </label>
      {errors.name ? (
        <p id={`${nameId}-error`} className="form-status" data-state="error">
          {errors.name}
        </p>
      ) : null}

      <label htmlFor={emailId}>
        Email
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
        />
      </label>
      {errors.email ? (
        <p id={`${emailId}-error`} className="form-status" data-state="error">
          {errors.email}
        </p>
      ) : null}

      <label htmlFor={messageId}>
        Message
        <textarea
          id={messageId}
          name="message"
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
        />
      </label>
      {errors.message ? (
        <p id={`${messageId}-error`} className="form-status" data-state="error">
          {errors.message}
        </p>
      ) : null}

      <HandDrawnButton type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "SENDING…" : "SEND →"}
      </HandDrawnButton>
      <p id={statusId} className="form-status" data-state={status} aria-live="polite">
        {statusMessage}
      </p>
    </form>
  );
}
