'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Minus, ArrowRight, Zap, MessageCircle, Workflow, Globe, Search, MapPin } from 'lucide-react';
import { LEISTUNGSGEBIETE_CITIES } from '../data/leistungsgebiete';
import { BackgroundPaths } from '../components/ui/background-paths';
import ContactForm from '../components/ContactForm';
import GoogleMapsSection from '../components/GoogleMapsSection';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import WebSiteSchema from '../components/WebSiteSchema';

const Home: React.FC = () => {
  const [openExample, setOpenExample] = React.useState<number | null>(null);

  const toggleExample = (index: number) => {
    setOpenExample(openExample === index ? null : index);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('problem-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const practiceExamples = [
    {
      icon: <MessageCircle size={32} strokeWidth={1.5} />,
      title: "Digitale Kundenassistenz",
      vorher: "Kunden stellen immer wieder dieselben Fragen per Website, E-Mail oder Social Media. Außerhalb der Öffnungszeiten bleiben Anfragen unbeantwortet.",
      nachher: "Die digitale Kundenassistenz beantwortet Fragen automatisch, nimmt Anliegen auf und reagiert individuell auf Nachrichten – rund um die Uhr.",
      ergebnis: "Schnellere Antworten für Kunden. Weniger Unterbrechungen im Arbeitsalltag."
    },
    {
      icon: <Workflow size={32} strokeWidth={1.5} />,
      title: "Telefonische Kundenassistenz",
      vorher: "Anrufe gehen verloren oder unterbrechen ständig die Arbeit. Außerhalb der Geschäftszeiten ist niemand erreichbar.",
      nachher: "Die telefonische Kundenassistenz nimmt Anrufe entgegen, beantwortet Fragen und nimmt Termine automatisch an.",
      ergebnis: "Keine verpassten Anrufe mehr. Ruhigerer Arbeitsalltag."
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Automatisierungen für Anfragen, Vertrieb & Terminplanung",
      vorher: "Anfragen gehen unter, Termine werden per Hin-und-Her koordiniert, Follow-ups werden vergessen. Alles verteilt in E-Mails, Notizen und Excel.",
      nachher: "Anfragen werden automatisch erfasst, sortiert und zugewiesen. Termine buchen Kunden selbst, Bestätigung und Reminder laufen automatisch. Nichts geht mehr verloren.",
      ergebnis: "Mehr Überblick, weniger Stress, schnelle Reaktion – ohne dass jemand dran denken muss."
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: "Websites & SEO",
      vorher: "Die Website ist online, bringt aber kaum Anfragen. Viele Kunden finden das Unternehmen nicht.",
      nachher: "Eine moderne Website, die verständlich aufgebaut ist und bei Suchmaschinen besser sichtbar wird.",
      ergebnis: "Mehr Besucher. Mehr Anfragen."
    },
  ];

  const services = [
    "KI-Chatbots (digitale Kundenassistenz)",
    "KI-Telefonassistent",
    "Automatisierungen (Anfragen, Vertrieb & Terminplanung)",
    "Webseiten",
    "SEO: Top 3 in Google"
  ];

  return (
    <div className="bg-dark-500">
      <LocalBusinessSchema pageType="homepage" />
      <WebSiteSchema />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-500 overflow-hidden">
        <BackgroundPaths />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-500/80 z-[1]" aria-hidden />

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-light-100 font-heading font-extrabold tracking-tight mb-4 -mt-8 drop-shadow-[0_0_24px_rgba(0,179,166,0.15)]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              >
                KI-Agentur Leipzig
              </motion.span>
            </h1>
            <h2 className="sr-only">
              Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites &amp; SEO – KI-Automatisierung für Leipzig und Region
            </h2>
            <p className="space-y-1 text-xl md:text-2xl lg:text-3xl text-light-200 font-heading mb-6">
              <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Klare Abläufe.</motion.span>
              <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>Mehr Anfragen.</motion.span>
              <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>Weniger Stress.</motion.span>
            </p>
            <motion.p
              className="text-lg md:text-xl text-light-200 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Wir automatisieren Unternehmen in Leipzig und Region mit Systemen, die Kundenanfragen automatisch bearbeiten, Termine selbstständig koordinieren und interne Abläufe dank künstlicher Intelligenz spürbar vereinfachen.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 1.8 }}
            >
              <button
                onClick={scrollToContactForm}
                className="inline-flex w-full sm:w-auto justify-center items-center px-5 py-3 rounded-lg bg-primary-500 text-dark-500 font-heading font-semibold sm:font-bold text-sm sm:text-base shadow-lg shadow-primary-500/20 hover:bg-primary-400 hover:shadow-primary-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 min-h-[44px]"
              >
                <ArrowRight className="mr-2" size={18} />
                Kostenloses Erstgespräch sichern
              </button>
            </motion.div>
          </div>
        </div>

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-primary-500 hover:text-primary-400 transition-colors duration-300 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 rounded-lg py-2 min-h-[44px]"
          aria-label="Nach unten scrollen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.4 }}
        >
          <span className="text-xs font-heading font-medium text-light-300">Scroll</span>
          <ChevronDown size={24} />
        </motion.button>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem-section" className="section-padding bg-dark-400 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                Der Alltag vieler Unternehmen sieht <span className="text-primary-500">heute so aus:</span>
              </h2>

              <div className="space-y-4 text-left max-w-2xl mx-auto mb-12">
                {[
                  "Kundenanfragen kommen unregelmäßig und ungeordnet rein.",
                  "Termine müssen ständig manuell abgestimmt werden.",
                  "E-Mails, Telefonate und Rückfragen unterbrechen die Arbeit.",
                  "Viele Aufgaben bleiben direkt beim Inhaber hängen.",
                  "Organisation und Marketing fühlen sich chaotisch an."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Minus className="text-red-400 mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={2.5} />
                    <p className="text-light-200 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-xl md:text-2xl text-light-100 font-bold"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Das kostet <span className="text-red-400">Zeit, Geld und Nerven.</span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className="section-padding bg-dark-500 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-light-100">
                So arbeitet ein <span className="text-primary-500">sauber automatisierter</span> Betrieb:
              </h2>

              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  "Kundenanfragen werden automatisch entgegengenommen und beantwortet.",
                  "Termine werden selbstständig gebucht, bestätigt und erinnert.",
                  "Mitarbeiter arbeiten mit klaren, verlässlichen Abläufen.",
                  "Der Betrieb läuft ruhiger, strukturierter und planbarer.",
                  "Der Inhaber gewinnt Zeit und Fokus für das Kerngeschäft zurück."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-light-200 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES HUB SECTION */}
      <section className="section-padding relative bg-dark-400 border-t border-dark-200/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-primary-500/5 pointer-events-none" aria-hidden />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-100 mb-4">
                Unsere Leistungen im Überblick
              </h2>
              <p className="text-lg text-light-200 max-w-3xl mx-auto mb-4">
                Digitale Lösungen, die Ihr Unternehmen entlasten und den Arbeitsalltag deutlich vereinfachen.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Leistungsakachel mit Bild: KI-Chatbots */}
              <motion.a
                href="/ki-chatbots"
                className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                  <Image
                    src="/images/ki-chatbot-digitale-kundenassistenz.webp"
                    alt="Digitale Kundenassistenz: KI-Chatbot auf Laptop und Smartphone, Kundenanfragen in Sekunden beantworten"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                    <MessageCircle size={20} strokeWidth={1.5} className="flex-shrink-0" />
                    <span className="text-sm font-heading font-bold">Rund um die Uhr</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    KI-Chatbots
                  </h3>
                  <p className="text-light-300 text-base leading-relaxed mb-4">
                    Eine digitale Assistenz, die Kundenanfragen beantwortet, Nachrichten entgegennimmt und Anliegen automatisch verarbeitet – auf Ihrer Website und in sozialen Netzwerken, rund um die Uhr.
                  </p>
                  <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                    KI-Chatbots für Ihre Website
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>

              {/* Leistungsakachel mit Bild: Telefonassistent */}
              <motion.a
                href="/telefonassistenten"
                className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                  <Image
                    src="/images/ki-telefonassistent.webp"
                    alt="KI-Telefonassistent: Anrufe entgegennehmen, Leads qualifizieren, Termine buchen – 24/7"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                    <Workflow size={20} strokeWidth={1.5} className="flex-shrink-0" />
                    <span className="text-sm font-heading font-bold">Nie wieder verpasste Anrufe</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    KI-Telefonassistent
                  </h3>
                  <p className="text-light-300 text-base leading-relaxed mb-4">
                    Eine telefonische Assistenz, die für Sie ans Telefon geht, Fragen beantwortet und Termine annimmt – auch dann, wenn gerade niemand erreichbar ist.
                  </p>
                  <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                    Telefonassistenz rund um die Uhr
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>

              {/* Leistungsakachel mit Bild: Webseiten */}
              <motion.a
                href="/webseite"
                className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                  <Image
                    src="/images/webseiten-mietmodell-agentur.webp"
                    alt="Moderne Websites: verkaufsstark, suchmaschinenoptimiert, in Tagen statt Wochen"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                    <Globe size={20} strokeWidth={1.5} className="flex-shrink-0" />
                    <span className="text-sm font-heading font-bold">In Tagen statt Wochen</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    Webseiten
                  </h3>
                  <p className="text-light-300 text-base leading-relaxed mb-4">
                    Moderne Webseiten, die leicht verständlich sind und bei Suchmaschinen sichtbar werden, damit Kunden Sie schneller finden und direkt Kontakt aufnehmen können.
                  </p>
                  <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                    Moderne Webseiten im Mietmodell
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>

              {/* Leistungskachel mit Bild: Automatisierungen */}
              <motion.a
                href="/automatisierungen"
                className="group block rounded-2xl bg-dark-500/95 backdrop-blur-sm border border-dark-200/80 shadow-card hover:border-primary-500/40 hover:shadow-card-hover hover:shadow-primary-500/10 overflow-hidden transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-400">
                  <Image
                    src="/images/automatisierungen-anfragen-vertrieb-terminplanung.webp"
                    alt="Automatisierungen: Anfrage, Sortierung, Zuweisung, Follow-up, Termin und CRM – durchgängige Prozessautomatisierung"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent pointer-events-none" aria-hidden />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-primary-400">
                    <Zap size={20} strokeWidth={1.5} className="flex-shrink-0" />
                    <span className="text-sm font-heading font-bold">Abläufe laufen von selbst</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-light-100 mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    Automatisierungen für Anfragen, Vertrieb & Terminplanung
                  </h3>
                  <p className="text-light-300 text-base leading-relaxed mb-4">
                    Anfragen automatisch erfassen, sortieren und zuweisen. Termine buchen, bestätigen und erinnern – ohne Hin-und-Her. Damit Abläufe von selbst laufen.
                  </p>
                  <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                    Automatisierungen für Anfragen &amp; Termine
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>

              {/* Premium-Rechteck-Kachel: Top 3 in Google – Bild links, Inhalt rechts */}
              <motion.a
                href="/seo-top-3-in-google"
                className="group block lg:col-span-2 rounded-2xl relative overflow-hidden border border-dark-200/80 bg-dark-500/95 shadow-card hover:border-primary-500/50 hover:shadow-[0_0_48px_-12px_rgba(0,179,166,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[300px] lg:min-h-[320px]">
                  {/* Bildbereich – Laptop mit Google-Suchergebnissen „Maler in Leipzig“, Top-3-Badge */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-dark-400 order-2 lg:order-1">
                  <Image
                    src="/images/seo-top-3-google-local-pack.webp"
                      alt="Top 3 in Google: Google-Suchergebnisse für Maler in Leipzig mit Karte und lokalen Einträgen – Ihr Unternehmen sichtbar."
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center lg:object-right-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-500/60 lg:to-dark-500/80 pointer-events-none" aria-hidden />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-400 lg:hidden">
                      <Search size={20} strokeWidth={1.5} className="flex-shrink-0" />
                      <span className="text-sm font-heading font-bold">Top 3 in 90 Tagen</span>
                    </div>
                  </div>
                  {/* Inhalt – fester Hintergrund für optimale Lesbarkeit */}
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 order-1 lg:order-2 relative bg-dark-500 border-l-0 lg:border-l border-dark-200/50">
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <span className="inline-flex items-center rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 px-3 py-1.5 text-xs font-heading font-bold tracking-wide">
                        Fokus-Leistung
                      </span>
                    </div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/20 text-primary-400 mb-5 flex-shrink-0 shadow-inner border border-primary-500/20">
                      <Search size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-light-100 mb-3 group-hover:text-primary-400 transition-colors duration-200 pr-24">
                      Top 3 in Google in 90 Tagen
                    </h3>
                    <p className="text-light-200 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                      Lokales SEO mit Fokus auf Top-Platzierungen für die Suchbegriffe, die Ihnen wirklich Kunden bringen – mit klarer Strategie und transparenten Ergebnissen.
                    </p>
                    <div className="flex items-center text-primary-500 text-sm font-heading font-bold group-hover:text-primary-400 transition-colors duration-200">
                      In 90 Tagen in die Top 3 bei Google
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </motion.a>

            </div>
            <p className="text-center mt-10 text-light-200">
              <a href="/leistungen" className="text-primary-400 hover:underline font-heading font-bold">Alle Leistungen ansehen</a>
              {' · '}
              <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">Unsere Leistungsgebiete</a>
            </p>
          </div>
        </div>
      </section>

      {/* PRACTICE EXAMPLES SECTION */}
      <section className="section-padding bg-dark-500 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500">Praxisbeispiele</span>
            </motion.h2>

            <div className="space-y-3">
              {practiceExamples.map((example, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => toggleExample(index)}
                    className="w-full flex items-center justify-between py-5 text-left border-b border-dark-200 hover:border-primary-500/50 transition-all duration-300 rounded-lg"
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-lg font-heading font-bold text-light-100 flex items-center">
                      <motion.div
                        animate={{ rotate: openExample === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mr-4"
                      >
                        <ChevronDown className="text-primary-500" size={24} />
                      </motion.div>
                      <span className="text-primary-500 mr-3">{example.icon}</span>
                      {example.title}
                    </span>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openExample === index ? 'auto' : 0,
                      opacity: openExample === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 pl-12 space-y-6">
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Vorher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.vorher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Nachher:</p>
                        <p className="text-light-200 text-sm leading-relaxed">{example.nachher}</p>
                      </div>
                      <div>
                        <p className="text-light-100 font-bold mb-2 text-base">Ergebnis:</p>
                        <p className="text-light-100 font-bold border-l-4 border-primary-500 pl-3 text-sm leading-relaxed">{example.ergebnis}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-padding bg-dark-400 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-16 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Was wir <span className="text-primary-500">konkret umsetzen</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center rounded-xl bg-dark-500/90 p-5 border border-dark-200 shadow-card hover:border-primary-500/50 hover:bg-dark-400 hover:shadow-card-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <CheckCircle className="text-primary-500 mr-4 flex-shrink-0" size={24} />
                  <p className="text-light-100 font-heading font-bold">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-padding bg-dark-400 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-20 text-light-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unser <span className="text-primary-500">Prozess</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { num: "01", title: "Erstgespräch", desc: "Ziele und Potenziale klären" },
                { num: "02", title: "Planung", desc: "Individuelles Konzept entwickeln" },
                { num: "03", title: "Umsetzung", desc: "Saubere technische Integration" },
                { num: "04", title: "Betreuung", desc: "Langfristige Unterstützung" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="text-primary-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-5xl font-heading font-bold mb-2">{step.num}</div>
                      <div className="h-1 w-16 bg-primary-500"></div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-light-100 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-light-200 text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-dark-500 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-10 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns Ihren Betrieb <span className="text-primary-500">entlasten.</span>
            </motion.h2>

            <motion.button
              onClick={scrollToContactForm}
              className="inline-flex items-center px-10 py-4 rounded-xl bg-primary-500 text-dark-500 font-heading font-bold text-lg shadow-lg shadow-primary-500/20 hover:bg-primary-400 hover:shadow-primary-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 min-h-[44px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ArrowRight className="mr-2" size={24} />
              Kostenloses Erstgespräch
            </motion.button>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="section-padding bg-dark-500 border-t border-dark-200/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold mb-6 text-light-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Gebiete, die wir <span className="text-primary-500">bedienen</span>
            </motion.h2>
            <p className="text-light-200 mb-10 max-w-2xl mx-auto">
              Von unserem Sitz in Groitzsch aus betreuen wir Unternehmen in Leipzig, im Landkreis Leipzig und darüber hinaus – persönlich, regional und mit kurzen Wegen.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {LEISTUNGSGEBIETE_CITIES.map((city) => (
                <motion.a
                  key={city.slug}
                  href={`/leistungsgebiete/${city.slug}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-400/80 border border-dark-200/50 text-light-100 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-200 text-sm font-heading"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                  {city.name}
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-light-300 text-sm">
              <a href="/leistungsgebiete" className="text-primary-400 hover:underline font-heading font-bold">Alle 13 Leistungsgebiete ansehen</a>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* GOOGLE MAPS */}
      <GoogleMapsSection />
    </div>
  );
};

export default Home;
