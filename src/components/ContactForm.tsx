'use client';

import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { INK, BODY, MUTED, PETROL, BORDER, SURFACE } from '@/lib/theme';

interface ContactFormProps {
  inline?: boolean;
  service?: string;
  heading?: string;
  subheading?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ inline, service, heading, subheading }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    telephone: '',
    company: '',
    tasksToAutomate: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const response = await fetch('https://hook.eu2.make.com/ur8wvevt3a3f4rdtv73hdg4n6h3jl8oc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: service || 'allgemein',
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error(`Fehler: ${response.statusText}`);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', telephone: '', company: '', tasksToAutomate: '', privacyAccepted: false });
    } catch (error) {
      setSubmitSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: '#fff',
    border: `1px solid ${BORDER}`,
    color: INK,
    borderRadius: '0.75rem',
    padding: '0.875rem',
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: INK,
    fontWeight: 600,
    marginBottom: '0.375rem',
    fontSize: '0.875rem',
  };

  const formContent = (
    <>
      {submitSuccess === true ? (
        <div
          className="p-6 rounded-xl animate-fade-in"
          style={{ background: 'rgba(14,124,114,0.08)', border: `1px solid rgba(14,124,114,0.3)` }}
        >
          <h3 className="text-lg font-heading font-bold mb-2" style={{ color: PETROL }}>
            Vielen Dank!
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: BODY }}>
            Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24h mit konkreten Vorschlägen.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" style={labelStyle}>
                Name <span style={{ color: PETROL }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="Max Mustermann"
                onFocus={(e) => (e.target.style.borderColor = PETROL)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                E-Mail <span style={{ color: PETROL }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="max@beispiel.de"
                onFocus={(e) => (e.target.style.borderColor = PETROL)}
                onBlur={(e) => (e.target.style.borderColor = BORDER)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="telephone" style={labelStyle}>
              Telefon <span style={{ color: MUTED, fontWeight: 400 }}>(optional – für schnellere Antwort)</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone || ''}
              onChange={handleChange}
              style={inputStyle}
              placeholder="0178 1234567"
              onFocus={(e) => (e.target.style.borderColor = PETROL)}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
          </div>

          <div>
            <label htmlFor="company" style={labelStyle}>
              Unternehmen <span style={{ color: PETROL }}>*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Ihr Unternehmen"
              onFocus={(e) => (e.target.style.borderColor = PETROL)}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
          </div>

          <div>
            <label htmlFor="tasksToAutomate" style={labelStyle}>
              Wobei können wir helfen? <span style={{ color: PETROL }}>*</span>
            </label>
            <textarea
              id="tasksToAutomate"
              name="tasksToAutomate"
              value={formData.tasksToAutomate}
              onChange={handleChange}
              required
              maxLength={300}
              rows={4}
              style={{ ...inputStyle, resize: 'none' }}
              placeholder="Kurze Beschreibung Ihres Anliegens – z.B. Chatbot, Telefonassistent, neue Webseite, SEO …"
              onFocus={(e) => (e.target.style.borderColor = PETROL)}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
            <p className="text-xs mt-1 text-right" style={{ color: MUTED }}>
              {formData.tasksToAutomate.length}/300
            </p>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              required
              className="mt-0.5 w-4 h-4 rounded cursor-pointer flex-shrink-0"
              style={{ accentColor: PETROL }}
            />
            <label htmlFor="privacyAccepted" className="text-xs leading-relaxed cursor-pointer" style={{ color: MUTED }}>
              Ich habe die{' '}
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer" style={{ color: PETROL }} className="underline">
                Datenschutzerklärung
              </a>{' '}
              gelesen und akzeptiert. <span style={{ color: PETROL }}>*</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.privacyAccepted}
            className="w-full py-4 px-6 rounded-xl font-heading font-bold text-base transition-all duration-300 focus:outline-none min-h-[52px]"
            style={{
              background: isSubmitting || !formData.privacyAccepted ? '#9ED4CE' : PETROL,
              color: '#FAFAF9',
              cursor: isSubmitting || !formData.privacyAccepted ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(14,124,114,0.2)',
            }}
          >
            {isSubmitting ? 'Wird gesendet…' : 'Kostenlose Erstberatung anfragen'}
          </button>

          {submitSuccess === false && (
            <div
              className="p-4 rounded-lg text-sm"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', color: '#B91C1C' }}
            >
              {errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}
            </div>
          )}
        </form>
      )}
    </>
  );

  if (inline) {
    return (
      <div
        className="rounded-2xl p-6 md:p-8 h-full shadow-card border"
        style={{ background: '#fff', borderColor: BORDER }}
      >
        <h2 className="text-xl font-heading font-bold mb-1" style={{ color: INK }}>
          {heading || 'Jetzt anfragen'}
        </h2>
        <p className="text-sm mb-6" style={{ color: MUTED }}>
          {subheading || 'Wir antworten innerhalb von 24 Stunden.'}
        </p>
        {formContent}
      </div>
    );
  }

  return (
    <section id="contact" data-section-label="Kontakt" className="py-20 md:py-28" style={{ background: SURFACE }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: INK }}>
            {heading || 'Jetzt starten'}
          </h2>
          <p className="mb-10 leading-relaxed" style={{ color: BODY }}>
            <strong style={{ color: INK }}>
              {subheading || 'Lassen Sie uns besprechen, wie wir Ihr Unternehmen entlasten können.'}
            </strong>
            <br />
            Einfach kurz ausfüllen – wir melden uns zeitnah mit konkreten Vorschlägen.
          </p>
          <div className="rounded-2xl border p-6 md:p-8 shadow-card" style={{ background: '#fff', borderColor: BORDER }}>
            {formContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
