'use client';

import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    tasksToAutomate: '',
    privacyAccepted: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send form data to webhook
      const response = await fetch('https://hook.eu2.make.com/ur8wvevt3a3f4rdtv73hdg4n6h3jl8oc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website-contact-form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Fehler bei der Übermittlung: ${response.statusText}`);
      }

      // Handle success
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        tasksToAutomate: '',
        privacyAccepted: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'Ein unerwarteter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark-500 border-t border-dark-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-500">
            Jetzt starten
          </h2>
          <p className="text-light-200 mb-8 leading-relaxed">
            <strong>Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen gezielt entlasten können.</strong><br />
            Einfach kurz ausfüllen – wir melden uns zeitnah mit konkreten Vorschlägen.
          </p>

          {submitSuccess === true ? (
            <div className="p-6 rounded-xl border border-primary-500/50 bg-primary-500/10 animate-fade-in">
              <h3 className="text-xl font-heading font-bold text-primary-400 mb-2">Vielen Dank!</h3>
              <p className="text-light-100 leading-relaxed">
                Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-light-100 font-heading font-medium mb-2 text-sm">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light-100 font-heading font-medium mb-2 text-sm">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-light-100 font-heading font-medium mb-2 text-sm">
                  Unternehmen <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="tasksToAutomate" className="block text-light-100 font-heading font-medium mb-2 text-sm">
                  Wobei können wir Sie unterstützen? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="tasksToAutomate"
                  name="tasksToAutomate"
                  value={formData.tasksToAutomate}
                  onChange={handleChange}
                  required
                  maxLength={300}
                  rows={3}
                  className="w-full rounded-lg bg-dark-300 border border-dark-200 text-light-100 p-3.5 focus:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 transition-all duration-200 resize-vertical"
                  placeholder="Hier können Sie alles eintragen, wobei Sie Unterstützung benötigen – von Automatisierung über Online-Marketing bis hin zu Websites oder individuellen Softwarelösungen."
                />
                <p className="text-light-300 text-xs mt-1">
                  {formData.tasksToAutomate.length}/300 Zeichen
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
                  className="mt-1 w-4 h-4 rounded bg-dark-300 border border-dark-200 text-primary-500 focus:ring-2 focus:ring-primary-500/50 cursor-pointer"
                />
                <label htmlFor="privacyAccepted" className="text-light-200 text-sm">
                  Ich habe die{' '}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 underline"
                  >
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und akzeptiert <span className="text-red-500">*</span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.privacyAccepted}
                  className={`w-full py-4 px-6 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-lg shadow-lg shadow-primary-500/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 min-h-[44px] ${
                    isSubmitting || !formData.privacyAccepted ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-400 hover:shadow-primary-glow'
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Lösungsmöglichkeiten anfordern'}
                </button>
              </div>
              
              {submitSuccess === false && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
                  {errorMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;