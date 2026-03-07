'use client';

import React, { useState } from 'react';
import { ContactFormData } from '../types';

interface ContactFormProps {
  inline?: boolean;
}

const inputClass =
  'w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 text-sm focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200 placeholder:text-light-400/50';

const labelClass = 'block text-light-100 font-heading font-medium mb-1.5 text-sm';

const ContactForm: React.FC<ContactFormProps> = ({ inline }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
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
        body: JSON.stringify({ ...formData, source: 'website-contact-form', timestamp: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`Fehler: ${response.statusText}`);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', tasksToAutomate: '', privacyAccepted: false });
    } catch (error) {
      setSubmitSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <>
      {submitSuccess === true ? (
        <div className="p-6 rounded-xl border border-primary-500/50 bg-primary-500/10 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-primary-400 mb-2">Vielen Dank!</h3>
          <p className="text-light-200 text-sm leading-relaxed">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24h mit konkreten Vorschlägen.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-primary-500">*</span>
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Max Mustermann" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                E-Mail <span className="text-primary-500">*</span>
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="max@beispiel.de" />
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>
              Unternehmen <span className="text-primary-500">*</span>
            </label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className={inputClass} placeholder="Ihr Unternehmen" />
          </div>

          <div>
            <label htmlFor="tasksToAutomate" className={labelClass}>
              Wobei können wir helfen? <span className="text-primary-500">*</span>
            </label>
            <textarea
              id="tasksToAutomate"
              name="tasksToAutomate"
              value={formData.tasksToAutomate}
              onChange={handleChange}
              required
              maxLength={300}
              rows={4}
              className={inputClass + ' resize-none'}
              placeholder="Kurze Beschreibung Ihres Anliegens – z.B. Chatbot, Telefonassistent, neue Webseite, SEO …"
            />
            <p className="text-light-400 text-xs mt-1 text-right">{formData.tasksToAutomate.length}/300</p>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              required
              className="mt-0.5 w-4 h-4 rounded bg-dark-300 border border-dark-200 text-primary-500 focus:ring-2 focus:ring-primary-500/50 cursor-pointer flex-shrink-0"
            />
            <label htmlFor="privacyAccepted" className="text-light-300 text-xs leading-relaxed cursor-pointer">
              Ich habe die{' '}
              <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                Datenschutzerklärung
              </a>{' '}
              gelesen und akzeptiert. <span className="text-primary-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.privacyAccepted}
            className={`w-full py-4 px-6 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-base shadow-lg shadow-primary-500/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 min-h-[52px] ${
              isSubmitting || !formData.privacyAccepted ? 'opacity-60 cursor-not-allowed' : 'hover:bg-primary-400 hover:shadow-primary-glow'
            }`}
          >
            {isSubmitting ? 'Wird gesendet…' : 'Kostenlose Erstberatung anfragen'}
          </button>

          {submitSuccess === false && (
            <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
              {errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}
            </div>
          )}
        </form>
      )}
    </>
  );

  if (inline) {
    return (
      <div className="bg-dark-400 rounded-xl border border-dark-200/50 p-6 md:p-8 h-full">
        <h2 className="text-xl font-heading font-bold text-light-100 mb-1">Jetzt anfragen</h2>
        <p className="text-light-400 text-sm mb-6">Wir antworten innerhalb von 24 Stunden.</p>
        {formContent}
      </div>
    );
  }

  return (
    <section id="contact" className="section-padding bg-dark-500 border-t border-dark-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500">
            Jetzt starten
          </h2>
          <p className="text-light-200 mb-8 leading-relaxed">
            <strong>Lassen Sie uns besprechen, wie wir Ihr Unternehmen entlasten können.</strong><br />
            Einfach kurz ausfüllen – wir melden uns zeitnah mit konkreten Vorschlägen.
          </p>
          {formContent}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
