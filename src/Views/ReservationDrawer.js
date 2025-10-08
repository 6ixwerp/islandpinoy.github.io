import React, { useEffect, useState } from "react";
import "./ReservationDrawer.css";

const EMAIL = "islandpinoycatering@gmail.com";
const PHONE_TEL = "+17605867062";
const PHONE_DISPLAY = "(760) 586-7062";

/**
 * A slide-in drawer shown on every page.
 * Opens when a CustomEvent('open-reservation') is dispatched (see SiteHeader/TopFold).
 */
export default function ReservationDrawer() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    location: "",
    message: "",
  });

  // Listen for the open event from any button
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-reservation", onOpen);
    return () => window.removeEventListener("open-reservation", onOpen);
  }, []);

  // Escape to close + lock background scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const canSend = form.name && (form.phone || form.email);

  const submit = (e) => {
    e.preventDefault();
    const subject = `Reservation request from ${form.name}${form.date ? ` – ${form.date}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Date: ${form.date || "-"}`,
      `Time: ${form.time || "-"}`,
      `Guests: ${form.guests || "-"}`,
      `Occasion: ${form.occasion || "-"}`,
      `Location: ${form.location || "-"}`,
      "",
      form.message ? `Notes:\n${form.message}` : "",
    ].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setOpen(false);
  };

  return (
    <>
      {open && <div className="resv-backdrop" onClick={() => setOpen(false)} />}
      <aside
        className={`resv-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resv-title"
        aria-hidden={!open}
      >
        <header className="resv-header">
          <h2 id="resv-title">Let's book your event!</h2>
          <button className="resv-close" type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
        </header>

        <form className="resv-form" onSubmit={submit}>
          <div className="field">
            <label>Name *</label>
            <input name="name" value={form.name} onChange={onChange} required />
          </div>

          <div className="field two">
            <div>
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} inputMode="tel" />
            </div>
            <div>
              <label>Email</label>
              <input name="email" value={form.email} onChange={onChange} type="email" />
            </div>
          </div>

          <div className="field two">
            <div>
              <label>Date</label>
              <input name="date" value={form.date} onChange={onChange} type="date" />
            </div>
            <div>
              <label>Time</label>
              <input name="time" value={form.time} onChange={onChange} type="time" />
            </div>
          </div>

          <div className="field two">
            <div>
              <label>Guests</label>
              <input name="guests" value={form.guests} onChange={onChange} type="number" min="1" placeholder="e.g., 40" />
            </div>
            <div>
              <label>Occasion</label>
              <input name="occasion" value={form.occasion} onChange={onChange} placeholder="Birthday, office party…" />
            </div>
          </div>

          <div className="field">
            <label>Location</label>
            <input name="location" value={form.location} onChange={onChange} placeholder="Address / City" />
          </div>

          <div className="field">
            <label>Notes</label>
            <textarea name="message" value={form.message} onChange={onChange} rows="4" placeholder="Menu ideas, allergies, budget…"/>
          </div>

          <div className="resv-actions">
            <button className="resv-submit" type="submit" disabled={!canSend}>Send Request</button>
            <button className="resv-call" type="button" onClick={() => window.open(`tel:${PHONE_TEL}`)}>
              Call {PHONE_DISPLAY}
            </button>
          </div>

          <p className="resv-fine">We’ll email or call back to confirm availability and pricing.</p>
        </form>
      </aside>
    </>
  );
}
