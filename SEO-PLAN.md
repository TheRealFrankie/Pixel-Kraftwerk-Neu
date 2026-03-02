# SEO-Plan: Pixel Kraftwerk – Lokale & thematische Autorität

**Stand:** Überarbeiteter Plan für pixelkraftwerk-ai.com  
**Ziel:** Maximale lokale Sichtbarkeit über **12 Städte** (eigene Seiten, untereinander verlinkt) + Topical Authority für KI-Automatisierung, Chatbots, SEO, Terminbuchung, CRM, Content.  
**WICHTIG:** Dies ist nur der Plan – keine Code- oder Content-Änderung ohne Freigabe.

---

## 1. Ausgangslage

| Aspekt | Status |
|--------|--------|
| **Geschäft** | Pixel Kraftwerk – KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites & SEO, Content/Video |
| **Standort** | Groitzsch (Hauptsitz), Einzugsgebiet: Leipzig und Umgebung (12 Städte) |
| **Leistungsgebiete (neu)** | **12 Städte**, jede mit eigener Seite: Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz |
| **Bestehende Seiten** | Home, About, Contact, FAQ, Features, Impressum, Datenschutz, AGB + 6 Service-Seiten (ki-chatbots, telefonassistenten, termine-buchungen, crm-lead-management, website-seo, content-video) |
| **Leistungsgebiete aktuell** | Nur 3: Leipzig, Groitzsch, Sachsen – werden auf **12 Stadt-Seiten** erweitert, alle untereinander verlinkt |
| **NAP** | In `businessInfo.ts`; Footer nutzt NAPInfo; Inkonsistenz (9a vs 9A) bereinigen |
| **Schema** | LocalBusiness, WebSite, Breadcrumb; @type und NAP in allen Quellen vereinheitlichen |
| **Google Maps** | Auf Homepage (GoogleMapsSection) – beibehalten |

---

## 2. Titel & Überschriften (On-Page)

### 2.1 Vorbild (nur Struktur, nicht Branche)

- **Beispiel:** „BEST Physiotherapist Portsmouth – if you're looking for Physiotherapy Services near me or Sports Injuries & Sports Massage near me – Hope Physiotherapy is the place to be“
- **Übertragung:** H1 = **primäre Kategorie + Stadtname**. H2 = **Sekundärkategorien + wichtigste Leistungen** (aus Recherche, z. B. GMB / „in meiner Nähe“-Suchen).

### 2.2 Konkret für Pixel Kraftwerk

- **Primäre Kategorie:** KI-Agentur / KI-Automatisierung.
- **H1-Homepage (Ziel):**
  - z. B. „Beste KI-Agentur Leipzig – Chatbots, Telefonassistenten & SEO in meiner Nähe | Pixel Kraftwerk“
  - Oder: „KI-Agentur Leipzig – Automatisierung, Chatbots & SEO aus Groitzsch“
  - Finale Formulierung nach Keyword-Recherche („KI Agentur Leipzig“, „Chatbot Agentur Leipzig“, „SEO Agentur Leipzig“ usw.).

- **H2 auf der Homepage (To-do):**
  - H2-Blöcke = Sekundärkategorien + wichtigste Services, z. B.:
    - KI-Chatbots & digitale Kundenassistenz (Leipzig / in meiner Nähe)
    - KI-Telefonassistenten & Anrufannahme
    - Terminbuchung & Buchungssysteme
    - Lead-Management & CRM
    - Websites & SEO
    - Content & KI-Videos
  - **Recherche:** GMB/Google („KI Agentur Leipzig“, „Chatbot Leipzig“, „SEO Agentur Leipzig“, „Terminbuchung automatisch“) nutzen und H2 daran anpassen.

- **Title-Tag Homepage (60–120 Zeichen):**  
  „Beste KI-Agentur Leipzig – Chatbots, Telefonassistenten, SEO & Automatisierung | Pixel Kraftwerk“

- **Meta-Description:** Lokale Suchintention + „in meiner Nähe“ + USPs (z. B. „KI-Automatisierung und Chatbots aus Groitzsch für Leipzig und Region. Terminbuchung, CRM, Websites & SEO. Jetzt Beratung sichern.“).

### 2.3 Pro Stadt-Seite (Leistungsgebiete)

- **H1:** Primäre Kategorie + Stadtname, z. B. „KI-Agentur Leipzig“, „KI-Automatisierung Markkleeberg“, „Chatbots & SEO in Zwenkau“.
- **Title/Meta:** Stadt-spezifisch („KI-Agentur Leipzig – …“, „KI-Automatisierung Borna – …“).
- **H2:** Wie Homepage – Sekundärkategorien + relevante Leistungen für die Region; pro Stadt leicht angepasst (gleiche Struktur, lokale Formulierung).

---

## 3. NAP (Name, Address, Phone)

### 3.1 Ziele

- **Einheitliche NAP** auf der gesamten Seite und identisch mit Google Business Profile (GBP).
- NAP **sichtbar auf der Homepage** (oder GBP-Landing) **und im Footer auf jeder Unterseite**.
- Keine Abweichungen (z. B. „9a“ vs „9A“, Komma, PLZ, Ort).

### 3.2 To-do

1. **Festlegung:** Eine offizielle NAP-Zeile (z. B. „Pixel Kraftwerk – Franke & Brause GbR, Neuer Weg 9a, 04539 Groitzsch, +49 178 5844460“).
2. **Prüfung:** Alle Vorkommen (index.html, businessInfo, Impressum, Datenschutz, Schema, GBP) auf exakte Übereinstimmung; in der Umsetzung anpassen.
3. **Sichtbarkeit:** NAP auf der Homepage klar lesbar (z. B. Hero oder direkt unter/neben der Karte), nicht nur im Footer.

---

## 4. Google Business Profile (GBP) & Karte

### 4.1 Ziele

- GBP mit **exakt derselben NAP** wie auf der Webseite.
- **Landing-URL:** Homepage mit NAP + eingebetteter Karte.
- **Karte auf der Homepage** (GoogleMapsSection) beibehalten.

### 4.2 To-do

1. GBP prüfen/claimen; Kategorie z. B. „Softwareunternehmen“, „IT-Dienstleistung“, „Marketingagentur“.
2. NAP im GBP exakt wie in `businessInfo.ts` (nach NAP-Bereinigung).
3. **Service-Bereich:** Groitzsch, Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz (alle 12 Städte + Hauptsitz).
4. Leistungen eintragen (Chatbots, Telefonassistenten, Terminbuchung, CRM, Website, SEO, Content/Video).
5. Homepage als Website-URL; Karte auf Homepage beibehalten.

---

## 5. Schema (Structured Data)

### 5.1 Ziele

- **LocalBusiness** mit NAP, Geo, Öffnungszeiten, Service-Liste.
- **@type:** Ein Typ oder Array (z. B. `ProfessionalService` oder `["ProfessionalService", "SoftwareApplication"]`), kein komma-getrennter String.
- **areaServed:** Alle 12 Städte + Groitzsch in Schema aufnehmen.
- **FAQPage** wo sinnvoll (FAQ-Seite, Service-Seiten mit FAQ).
- Optional: **Service**-Schema pro Leistung; Breadcrumbs (bereits auf Service-Seiten).

### 5.2 To-do

1. LocalBusiness @type bereinigen (ein Wert oder Array).
2. NAP in allen JSON-LD-Quellen vereinheitlichen.
3. **areaServed** um alle 12 Städte erweitern (Leipzig, Markkleeberg, Zwenkau, Borna, Böhlen, Rötha, Neukieritzsch, Pegau, Lucka, Meuselwitz, Regis-Breitingen, Elstertrebnitz) + Groitzsch.
4. Pro Service-Seite: FAQ-Bereich prüfen → ggf. FAQPage-Schema ergänzen.
5. Optional: Service-Schema pro Leistungsseite.
6. **Schema-Generator:** https://technicalseo.com/tools/schema-markup-generator/ für Anpassungen nutzen.

---

## 6. Seitenstruktur & Hierarchie

### 6.1 Ziel-Hierarchie

- **RANK 1:** Landing = **Homepage** (KI-Agentur Leipzig / Groitzsch).
- **RANK 2:**
  - **Kategorie:** „Leistungen“ = **/services** (Hub für alle Services).
  - **Kernleistungen (je eigene Seite):**  
    /ki-chatbots, /telefonassistenten, /termine-buchungen, /crm-lead-management, /website-seo, /content-video.
  - **Leistungsgebiete-Hub:** **/leistungsgebiete** (Übersicht aller 12 Städte).
  - **Stadt-Seiten (RANK 2):** Pro Stadt eine Seite unter `/leistungsgebiete/[stadt]` (z. B. `/leistungsgebiete/leipzig`, `/leistungsgebiete/markkleeberg`, …).
- **RANK 3 (optional):** Weitere Service-Unterseiten (z. B. „Chatbot für Handwerker“, „Terminbuchung für Praxen“), von RANK-2-Seiten verlinkt und untereinander verlinkt.

### 6.2 Die 12 Stadt-URLs (Leistungsgebiete)

| Stadt | Slug (Vorschlag) | URL |
|------|------------------|-----|
| Leipzig | leipzig | /leistungsgebiete/leipzig |
| Markkleeberg | markkleeberg | /leistungsgebiete/markkleeberg |
| Zwenkau | zwenkau | /leistungsgebiete/zwenkau |
| Borna | borna | /leistungsgebiete/borna |
| Böhlen | boehlen | /leistungsgebiete/boehlen |
| Rötha | roetha | /leistungsgebiete/roetha |
| Neukieritzsch | neukieritzsch | /leistungsgebiete/neukieritzsch |
| Pegau | pegau | /leistungsgebiete/pegau |
| Lucka | lucka | /leistungsgebiete/lucka |
| Meuselwitz | meuselwitz | /leistungsgebiete/meuselwitz |
| Regis-Breitingen | regis-breitingen | /leistungsgebiete/regis-breitingen |
| Elstertrebnitz | elstertrebnitz | /leistungsgebiete/elstertrebnitz |

**Hinweis:** Groitzsch (Hauptsitz) kann als zusätzliche Seite `/leistungsgebiete/groitzsch` bestehen bleiben oder in die 12 integriert werden – je nach gewünschter Gewichtung.

---

## 7. Topical Authority (Service-Seiten)

### 7.1 Ziele

- **Themenfeld abdecken:** KI-Automatisierung, Chatbots, Telefonassistenten, Terminbuchung, CRM, Websites, SEO, Content/Video.
- Pro **Kernleistung** eine eigene Seite mit **1.000–2.500 Wörtern**, eigenem H1/H2/H3, lokalem Bezug (Leipzig, Groitzsch, die 12 Städte), FAQs und interner Verlinkung.

### 7.2 Struktur

- Homepage → **/services** → Service 1, 2, 3 …
- Klar erkennbar: „KI-Agentur / Leistungen / [Leistung X]“.

### 7.3 Content-Brief / Prompt (Service-Seiten)

Copywriter-Prompt für einheitliche Qualität (Beispiel für eine Leistung):

- **Rolle:** Erfahrener lokaler SEO-Copywriter für **KI-Automatisierung / IT-Dienstleister**.
- **Auftrag:** Service-Seite (1.800–2.500 Wörter) für z. B. „KI-Chatbots für Unternehmen in Leipzig und Region“.
- **Zielgruppe:** KMU in Leipzig, Markkleeberg, Zwenkau usw., die Automatisierung/Kundenservice verbessern wollen.
- **Keywords:** Primär z. B. „KI Chatbot Leipzig“, sekundär „Chatbot Agentur“, „digitale Kundenassistenz“.
- **Struktur:** Intro → zentrale Konzepte → lokale Szene → Empfehlungen/Tipps → FAQs; H1–H3 klar, E-E-A-T, interne Verlinkung (4–7 Stellen), 6–10 FAQs, CTA.
- **Am Ende:** SEO-Title, Meta-Description, H1-Vorschlag, Alt-Texte für Bilder, kurze Schema-Empfehlung (LocalBusiness/FAQ).

---

## 8. Local Authority – „Gebiete, die wir bedienen“

### 8.1 Ziele

- Klar kommunizieren: **„Wir bedienen Leipzig, Markkleeberg, Zwenkau, …“** (alle 12 Städte).
- **Eine Übersichtsseite** „Leistungsgebiete“ (**/leistungsgebiete**) + **eine Unterseite pro Stadt**.
- Suchanfragen wie „[KI-Agentur] [Stadt]“, „Chatbot [Stadt]“, „SEO [Stadt]“ abdecken.

### 8.2 Struktur

- **Navigation:** Link „Leistungsgebiete“ → **/leistungsgebiete**.
- **Übersichtsseite:** Auflistung der 12 Städte mit Kurztext und Links zu den Stadt-Seiten.
- **Stadt-Seiten:** Pro Stadt eine Seite mit hyperlokalen Inhalten (s. unten).

### 8.3 Inhalt pro Stadt-Seite

- **Umfang:** ca. 1.200–2.200 Wörter.
- **Inhalte:**
  - Warum Pixel Kraftwerk für diese Stadt/Region relevant ist (Nähe von Groitzsch, Erfahrung, Kunden).
  - NAP + Hinweis auf Hauptsitz + ggf. Karte („So finden Sie uns“).
  - Kurz die Leistungen für diese Region.
  - Lokale Anker (Stadt, Umgebung, Verkehr), **ohne** falsche Zweigstellen zu behaupten.
  - FAQs mit lokalem Bezug (z. B. „Betreut ihr auch Kunden in Markkleeberg?“).
- **Prompt:** Hyperlocal-Keyword pro Stadt (z. B. „KI-Agentur Leipzig“, „KI-Automatisierung Borna“); gleicher Aufbau wie bei Hope-Physiotherapy-Vorbild: H1 = Kategorie + Stadt, H2 = Services/Leistungen.

### 8.4 Hyperlocal-Prompt (Stadt-Seiten)

- **Rolle:** Lokaler SEO-Spezialist für Single-Location-Business.
- **Auftrag:** Hyperlokale Landing-Page (1.200–2.200 Wörter) für **Pixel Kraftwerk**, Standort **Groitzsch**, Einzugsgebiet **[STADT]** (z. B. Leipzig, Markkleeberg).
- **Ziel:** Ranken für „KI-Agentur [Stadt]“, „Chatbot [Stadt]“, „SEO [Stadt]“.
- **Fakten:** NAP (aus businessInfo), Entfernung/Nähe zu [Stadt], USPs (KI-Chatbots, Telefonassistenten, Terminbuchung, CRM, SEO, Content).
- **Struktur:** Lokaler Einstieg → Warum wir für [Stadt] passen → Leistungen für die Region → Anfahrtsinfo / Karte → FAQs (8–10) → CTA.
- **Am Ende:** SEO-Title, Meta-Description, Schema (LocalBusiness + areaServed mit [Stadt]), Alt-Texte, 5–7 interne Links (Services, andere Städte, Kontakt).

---

## 9. Interlinking

### 9.1 Grundregel

- **Nur Links setzen, die dem Leser nutzen.** Kein erzwungenes Verlinken. Einfach halten: wenige, hilfreiche Links pro Seite.

---

### 9.2 Step 2: Wo die Links hinkommen

**Auf Service-Seiten** (z. B. KI-Chatbots, Terminbuchung, Website-SEO):

- **Im Fließtext:** 1–3 kurze Sätze, in denen eine Stadt/Region erwähnt wird – mit Link zur passenden Stadt-Seite.  
  *Beispiel:* „Wir unterstützen viele Kunden in Leipzig und der Region.“ → Link zur Seite [Leistungsgebiete Leipzig](/leistungsgebiete/leipzig).
- **Am Seitenende:** Kleine Liste **„Diese Gebiete bedienen wir außerdem“** mit 3–5 Links zu Stadt-Seiten (z. B. Leipzig, Markkleeberg, Borna, Zwenkau, Pegau).

**Auf Stadt-Seiten** (z. B. Leipzig, Markkleeberg, Borna):

- **Im Fließtext:** 2–4 kurze Sätze, in denen eine Leistung erwähnt wird – mit Link zur Service-Seite.  
  *Beispiel:* „Sie brauchen schnelle Unterstützung? Schauen Sie sich unseren Service KI-Chatbots an.“ → Link zur Seite [KI-Chatbots](/ki-chatbots).
- **Mitte oder gegen Ende der Seite:** Abschnitt **„Leistungen, die wir hier anbieten“** (oder „Services vor Ort“) mit 3–5 Links zu den wichtigsten Service-Seiten.

**Auf Homepage und Kontaktseite:**

- Kleiner Abschnitt **„Gebiete, die wir bedienen“** mit Links zu **allen** Stadt-Seiten (alle 12).
- Kleiner Abschnitt **„Unsere Hauptleistungen“** mit Links zu den wichtigsten Service-Seiten (z. B. KI-Chatbots, Terminbuchung, Website & SEO).

---

### 9.3 Step 3: Linktexte (Anchor Text)

- Natürliche Formulierungen, wie ein echter Nutzer sie sagen würde. Beispiele:
  - „unser Service KI-Chatbots“
  - „Leistungen in Leipzig“
  - „Terminbuchung in Ihrer Nähe“
  - „mehr zu Website & SEO“
- **Nicht immer denselben Text verwenden.** Formulierungen leicht variieren (z. B. mal „in Leipzig“, mal „für die Region Leipzig“, mal „Leistungsgebiet Leipzig“).

---

### 9.4 Step 4: Checkliste pro Seitentyp

| Seitentyp | Pflicht | Zusätzlich |
|-----------|---------|------------|
| **Jede Service-Seite** | 2–4 Links zu Stadt-Seiten im Text oder in einer Liste | Am Ende: kurze Liste „Diese Gebiete bedienen wir“ (3–5 Stadt-Links) |
| **Jede Stadt-Seite** | 3–6 Links zu Service-Seiten (im Text + Liste) | Abschnitt „Leistungen hier“ / „Services vor Ort“ mit 3–5 Service-Links |
| **Homepage + Kontaktseite** | Links zu allen (oder fast allen) Stadt-Seiten | Abschnitt „Unsere Hauptleistungen“ mit Links zu den wichtigsten Service-Seiten |

---

### 9.5 Step 5: Abschluss-Checks

- Sicherstellen, dass **jede wichtige Seite** mindestens einige eingehende Links hat (von Home, Services, anderen Stadt- oder Service-Seiten).
- **Manuell testen:** Links durchklicken und prüfen, ob sie auf die richtige Seite führen.
- **Kundenkommunikation:** Dem Kunden mitteilen: „Wir haben hilfreiche Verlinkungen ergänzt, damit Kunden und Suchmaschinen alles leichter finden.“

---

### 9.6 Dinge, die man vermeiden soll (Things NOT to do)

- **Nicht mehr als 8–10 Links auf einer Seite** setzen (Ausnahme: Homepage/Kontakt mit „Alle Gebiete“ kann mehr haben, dann übersichtlich gruppieren).
- **Nicht immer denselben Linktext** verwenden – Variation nutzen.
- **Keine Links**, die thematisch nichts mit der Seite zu tun haben.
- **Nicht alle Links nur im Footer** bündeln – Links im Inhalt und in den beschriebenen Abschnitten („Gebiete, die wir bedienen“, „Leistungen hier“) setzen.

---

### 9.7 Kurzüberblick Verlinkung (zur Orientierung)

- **Homepage** → /services, Kontakt, **/leistungsgebiete**, Abschnitt „Gebiete, die wir bedienen“ (alle 12 Städte), „Unsere Hauptleistungen“ (wichtigste Services).
- **/services** → alle 6 Service-Seiten + **/leistungsgebiete**.
- **/leistungsgebiete** → alle **12 Stadt-Seiten** (+ ggf. Groitzsch).
- **Stadt-Seiten** → /services, 3–6 Service-Seiten, Kontakt; untereinander zu benachbarten Städten; Abschnitt „Leistungen, die wir hier anbieten“.
- **Service-Seiten** → untereinander, /services, Kontakt, 2–4 Stadt-Seiten im Text, am Ende „Diese Gebiete bedienen wir“ (3–5 Stadt-Links).
- **Kontaktseite** → wie Homepage: „Gebiete, die wir bedienen“ (alle Städte), „Unsere Hauptleistungen“ (wichtigste Services).

---

## 10. Technik & Sitemap

### 10.1 Bereits gut

- Canonical auf pixelkraftwerk-ai.com.
- Zentrale `businessInfo` für NAP und Meta.
- Google Maps auf Homepage.
- Breadcrumb-Schema auf Service-Seiten.
- Route **/leistungsgebiete** und dynamische Route **/leistungsgebiete/[region]** vorhanden – für **12 Städte** erweitern (Slugs/Inhalte anpassen).

### 10.2 To-do

1. **Leistungsgebiete:** 12 Städte in Daten/Config eintragen; `generateStaticParams` (oder Äquivalent) für alle 12 Slugs; Inhalte pro Stadt (oder aus CMS/Data).
2. **Route /services:** Sicherstellen, dass /services erreichbar ist und in Sitemap enthalten ist.
3. **Sitemap:** Alle URLs aufnehmen: Home, About, Contact, FAQ, /services, alle 6 Service-URLs, **/leistungsgebiete**, **alle 12 Stadt-URLs** (/leistungsgebiete/leipzig … /leistungsgebiete/elstertrebnitz), Impressum, Datenschutz, AGB; fehlerhafte/veraltete Einträge entfernen.
4. **Schema:** LocalBusiness @type, NAP und areaServed (12 Städte + Groitzsch) wie in Abschnitt 5 umsetzen.

---

## 11. Zusammenfassung der Maßnahmen (Priorität)

| Prio | Maßnahme |
|------|----------|
| 1 | NAP vereinheitlichen (9a einheitlich; index.html + GBP prüfen). |
| 2 | H1 Homepage: Primäre Kategorie + Stadt (z. B. „KI-Agentur Leipzig“); H2 an Sekundärkategorien + Services anpassen (nach Keyword-Recherche). |
| 3 | **12 Stadt-Seiten** unter /leistungsgebiete/[stadt] anlegen; Übersichtsseite /leistungsgebiete mit allen 12 Städten und Interlinking. |
| 4 | Route /services prüfen/aktivieren; Sitemap um alle Seiten inkl. 12 Städte erweitern. |
| 5 | LocalBusiness-Schema: @type, NAP, **areaServed** (12 Städte + Groitzsch) bereinigen/erweitern. |
| 6 | Service-Seiten: Umfang 1.000–2.500 Wörter, H1/H2/FAQs, lokale Keywords; Copywriter-Prompt nutzen. |
| 7 | Stadt-Seiten: 1.200–2.200 Wörter, Hyperlocal-Prompt; NAP/Karte, lokale FAQs, interne Verlinkung. |
| 8 | **Interlinking nach Plan (Abschn. 9):** Service-Seiten: 2–4 Stadt-Links + „Diese Gebiete bedienen wir“ (3–5 Links). Stadt-Seiten: 3–6 Service-Links + „Leistungen hier“. Homepage + Kontakt: „Gebiete, die wir bedienen“ (alle Städte) + „Unsere Hauptleistungen“. Natürliche Anchor-Texte, max. 8–10 Links pro Seite, Links im Inhalt (nicht nur Footer). |
| 9 | FAQ-Schema auf Seiten mit FAQ-Bereich; optional Service-Schema pro Leistung. |

---

## 11a. On-Page SEO – Stadtseite Leipzig (Leistungsgebiet)

- **SEO Title (Leipzig)**  
  `KI-Agentur Leipzig – Automatisierung, Chatbots & SEO | Pixel Kraftwerk`

- **Meta Description (Leipzig)**  
  `KI-Chatbots, Telefonassistenz, Automatisierungen und SEO für Leipzig. Pixel Kraftwerk aus Groitzsch – regional, verständlich, messbar.`

- **Primary Keyword (Leipzig)**  
  - Haupt-Keyword: `KI-Agentur Leipzig`  
  - Ergänzende Varianten im Text: `Automatisierung Leipzig`, `KI-Chatbot Leipzig`, `Telefonassistenz Leipzig`, `Local SEO Leipzig`

- **Schema-Empfehlung (Leipzig-Seite)**  

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "name": "Pixel Kraftwerk",
  "telephone": "+491785844460",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Neuer Weg 9a",
    "postalCode": "04539",
    "addressLocality": "Groitzsch",
    "addressCountry": "DE"
  },
  "areaServed": [
    { "@type": "City", "name": "Leipzig" }
  ]
}
```

- **Image Alt-Texte (Leipzig, sachlich)**  
  - „KI-Agentur für Leipzig – Pixel Kraftwerk“  
  - „KI-Chatbot für Website in Leipzig“  
  - „Telefonische Kundenassistenz für Leipziger Unternehmen“  
  - „Automatisierung von Terminbuchung und Lead-Workflows in Leipzig“  
  - „Webseite im Mietmodell für Unternehmen in Leipzig“  
  - „Local SEO und Google-Sichtbarkeit in Leipzig“

---

## 12. Nächste Schritte (ohne sofortige Code-Änderung)

1. **Keyword-/Recherche:** „KI Agentur Leipzig“, „Chatbot Leipzig“, „SEO Agentur [Stadt]“ für alle 12 Städte prüfen; Konkurrenz-H1/H2 ansehen; GMB/„in meiner Nähe“ einbeziehen.
2. **Festlegung:** Finale H1/H2 für Homepage; exakte NAP-Zeile; Bestätigung der 12 Städte und Slugs (Umlaute: z. B. Rötha → roetha, Böhlen → boehlen).
3. **Content-Briefs:** Pro Service-Seite und pro Stadt-Seite Briefs (inkl. Copywriter- und Hyperlocal-Prompt) für 1.000–2.500 bzw. 1.200–2.200 Wörter.
4. **Umsetzung:** Erst nach Freigabe dieses Plans technische und redaktionelle Änderungen schrittweise umsetzen.

---

*Ende des SEO-Plans. Keine Code- oder Content-Änderung ohne Freigabe.*
