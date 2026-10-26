"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="form-done" role="status">
        <h3>Thanks, we have your message.</h3>
        <p>We reply within two business days.</p>
      </div>
    );
  }

  const err = state.errors ?? {};
  const val = state.values ?? {};

  return (
    <form className="form" action={action} noValidate>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          autoComplete="name"
          defaultValue={val.name}
          aria-invalid={!!err.name}
          aria-describedby={err.name ? "cf-name-err" : undefined}
          required
        />
        {err.name && (
          <p className="field-err" id="cf-name-err">
            {err.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={val.email}
          aria-invalid={!!err.email}
          aria-describedby={err.email ? "cf-email-err" : undefined}
          required
        />
        {err.email && (
          <p className="field-err" id="cf-email-err">
            {err.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-company">Company or site</label>
        <input
          id="cf-company"
          name="company"
          autoComplete="organization"
          defaultValue={val.company}
          aria-invalid={!!err.company}
          aria-describedby={err.company ? "cf-company-err" : undefined}
        />
        {err.company && (
          <p className="field-err" id="cf-company-err">
            {err.company}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-message">How can we help?</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          defaultValue={val.message}
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "cf-message-err" : undefined}
          required
        />
        {err.message && (
          <p className="field-err" id="cf-message-err">
            {err.message}
          </p>
        )}
      </div>

      {/* Honeypot, hidden from people and assistive tech. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message && (
        <p className="form-err" role="alert">
          {state.message}
        </p>
      )}

      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
