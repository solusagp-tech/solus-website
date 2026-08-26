"use client";

import { useRef, useState, type FormEvent } from "react";

const FORM_ACTION = "https://formspree.io/f/xjybnpbz";

type Status = { type: "success" | "error"; text: string } | null;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const markTouched = (name: string) => setTouched((prev) => new Set(prev).add(name));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Honeypot: if a bot filled this hidden field, silently drop the submission.
    const gotcha = form.elements.namedItem("_gotcha") as HTMLInputElement | null;
    if (gotcha?.value) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(FORM_ACTION, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ type: "success", text: "Thanks — we'll be in touch within one business day." });
        form.reset();
        setTouched(new Set());
      } else {
        const data = await response.json().catch(() => null);
        const detail = data?.errors?.map((e: { message: string }) => e.message).join(", ");
        setStatus({
          type: "error",
          text: detail || "Something went wrong sending that. Email us directly at solusagp@gmail.com.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Something went wrong sending that. Email us directly at solusagp@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (name: string) => (touched.has(name) ? "field touched" : "field");

  return (
    <form ref={formRef} id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
      {status && (
        <div className={`form-message ${status.type}`} role="status" aria-live="polite">
          {status.text}
        </div>
      )}

      <div className={fieldClass("name")}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required onBlur={() => markTouched("name")} />
      </div>

      <div className={fieldClass("email")}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          onBlur={() => markTouched("email")}
        />
      </div>

      <div className={fieldClass("practice")}>
        <label htmlFor="practice">Practice name</label>
        <input id="practice" name="practice" type="text" autoComplete="organization" />
      </div>

      <div className={fieldClass("message")}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required onBlur={() => markTouched("message")} />
      </div>

      <input type="hidden" name="_subject" value="New inquiry — Solus website" />
      <input type="text" name="_gotcha" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className={`btn btn-primary btn-submit${loading ? " is-loading" : ""}`} disabled={loading}>
        <span className="btn-label">Send message</span>
        <span className="btn-spinner" aria-hidden="true" />
      </button>
    </form>
  );
}
