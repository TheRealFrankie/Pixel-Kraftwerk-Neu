---
name: CRM-Systeme Service hinzufuegen
overview: Neuer "CRM-Systeme" Service als 6. Leistung mit globaler Seite (1800-2500 Woerter Topical Authority Content), 50 hyperlokal optimierten regionalen Unterseiten und durchdachter Interlinking-Strategie analog der bestehenden Services.
todos:
  - id: data-layer
    content: "services.ts: SERVICE_SLUGS + SERVICES um crm-systeme erweitern. businessInfo.ts: services-Array + CRM-Keywords ergaenzen."
    status: pending
  - id: view-component
    content: "CrmSysteme.tsx erstellen: 1800-2500 Woerter Topical-Authority-Content mit Hero, Problem/Loesung, Features, Prozess, Zielgruppen, Vergleich, FAQ (8-10 Fragen), CTA. Interne Verlinkung zu 2-4 Stadtseiten + 3-5 verwandten Services im Fliesstext."
    status: pending
  - id: global-route
    content: "src/app/crm-systeme/page.tsx: Metadata mit SEO-Title (60-120 Zeichen), Meta-Description (150-160 Zeichen), Canonical."
    status: pending
  - id: dynamic-routing
    content: "RegionServicePage.tsx switch + SERVICE_TITLE_KEYWORDS in [service]/page.tsx ergaenzen."
    status: pending
  - id: navigation
    content: "Header.tsx + Footer.tsx um CRM-Systeme Link erweitern."
    status: pending
  - id: related-services
    content: "RelatedServices.tsx um CRM erweitern (RELATED_ORDER + allServices)."
    status: pending
  - id: services-overview
    content: "Services.tsx: coreServices + serviceDetails um CRM ergaenzen."
    status: pending
  - id: sitemap-config
    content: "sitemap.ts: buildCoreSitemap + /crm-systeme. next.config.ts: Redirect /crm-lead-management auf /crm-systeme aendern."
    status: pending
  - id: regional-content
    content: "Hyperlokal-Content fuer 13 Core-Staedte erstellen (1200-2200 Woerter): lokale Landmarks, Proximity-Proof, stadtspezifische FAQs (8-10), Wegbeschreibung. Tier-basierte Fallbacks fuer restliche 37 Staedte."
    status: pending
  - id: interlinking-audit
    content: "Interlinking pruefen: RegionPage.tsx Service-Karten um CRM erweitern, Home.tsx practiceExamples + Service-Links um CRM ergaenzen. Kontaktseite pruefen. Anchor-Text-Variation sicherstellen."
    status: pending
  - id: hero-asset
    content: "Hero-Bild fuer CRM-Seite erstellen/beschaffen (public/images/crm-systeme-*.webp)."
    status: pending
isProject: false
---

# CRM-Systeme als neuen Service hinzufuegen

## SEO-Strategie: Topical Authority + Local Authority + Interlinking

Dieser Plan folgt drei SEO-Kernprinzipien:

1. **Topical Authority** -- Die globale CRM-Seite beweist Expertenwissen mit 1800-2500 Woertern uniquem, scannable Content (Hook, Hauptsektionen mit kurzen Absaetzen/Listen/Tabellen, FAQ, CTA)
2. **Local Authority** -- 50 hyperlokal optimierte Unterseiten (`/leistungsgebiete/{stadt}/crm-systeme`) mit stadtspezifischen Landmarks, Proximity-Proof, lokalen Kundenprofilen und Wegbeschreibungen (1200-2200 Woerter fuer Core-Staedte)
3. **Interlinking** -- Gezielte Querverlinkung zwischen Service- und Stadtseiten mit variierenden Anchor-Texten, max. 8-10 Links pro Seite, nur wo es dem Leser hilft

---

## Ausgangslage

Die Seite hat aktuell **5 Services** (`ki-chatbots`, `telefonassistenten`, `automatisierungen`, `webseiten`, `seo-top-3`), die jeweils als:
- **Globale Seite** mit eigenem `page.tsx` + View-Komponente
- **50 regionale Unterseiten** via dynamischem Routing
- inkl. Breadcrumbs, JSON-LD, Sitemap, Navigation

existieren. Der Redirect `/crm-lead-management` -> `/automatisierungen` (in [next.config.ts](next.config.ts) Z.13) wird auf `/crm-systeme` umgeleitet.

**Bestehende Interlinking-Infrastruktur** (wird automatisch fuer CRM aktiv sobald `SERVICE_SLUGS` erweitert):
- `RegionServiceLinksBlock` -- 8 Regional-Service-Links pro globaler Service-Seite
- `ServicedRegionsBlock` -- 5 Stadtlinks pro globaler Service-Seite
- `RelatedServices` -- Karten zu den anderen Services (aktuell 4, wird 5)
- `RegionPage.tsx` -- Service-Karten pro Stadt (aktuell 5, wird 6 -- iteriert ueber `SERVICES`)
- `Home.tsx` -- Service-Links im Fliesstext + `practiceExamples` (manuell, muss erweitert werden)

---

## Teil A: Topical Authority -- Globale CRM-Seite `/crm-systeme`

### Content-Anforderungen (1800-2500 Woerter)

Die View-Komponente `CrmSysteme.tsx` folgt dem bestehenden Sektionsmuster, aber mit SEO-optimiertem Copy:

- **H1** mit Primaer-Keyword ("CRM-Systeme fuer Unternehmen in Leipzig & Region")
- **Hook + Versprechen** im Intro (Warum CRM, Was loest es)
- **Hauptsektionen** (H2-H3) mit kurzen Absaetzen, Bullet-Listen, 1-2 Vergleichstabellen:
  - Problem: Kundendaten in Excel, verlorene Leads, fehlender Ueberblick
  - Loesung: Zentrale Kundenverwaltung, Lead-Pipeline, automatische Follow-ups
  - Features: Kontaktverwaltung, Deal-Tracking, Reporting, Integration mit Chatbot/Telefon/Automatisierungen
  - Prozess: 4 Schritte (Analyse, Einrichtung, Migration, Betreuung)
  - Zielgruppen: Handwerk, Praxen, Dienstleister, Agenturen, Haendler
  - Vergleich: Excel/Notizen vs. professionelles CRM (Tabelle)
  - "Warum Pixel Kraftwerk" / E-E-A-T-Signale
- **Interne Links im Fliesstext** (4-7 Stellen, variierte Anchor-Texte):
  - "...automatisch an unsere [Automatisierungen fuer Anfragen & Termine](/automatisierungen) uebergeben..."
  - "...kombiniert mit unserer [digitalen Kundenassistenz](/ki-chatbots)..."
  - "...Unternehmen in [Leipzig](/leistungsgebiete/leipzig) und [Borna](/leistungsgebiete/borna)..."
  - "...auf einer [modernen Website](/webseite) eingebettet..."
- **FAQ** (8-10 Fragen) -- z.B. "Was kostet ein CRM-System?", "Kann ich mein bestehendes CRM migrieren?", "Wie lange dauert die Einrichtung?"
- **CTA** am Ende + Scroll zu `#contact`

### SEO-Elemente fuer `page.tsx`

- **SEO-Title** (60-120 Zeichen): "CRM-Systeme Groitzsch & Leipzig -- wenn Sie nach CRM-System, Kundenverwaltung oder Lead-Management in meiner Naehe suchen -- Pixel Kraftwerk"
- **Meta-Description** (150-160 Zeichen): Unique, CTA-orientiert
- **Canonical**: `https://pixelkraftwerk-ai.com/crm-systeme`
- **JSON-LD**: `Service`-Schema + `FAQPage`-Schema (via `ServiceJsonLd`)
- **Breadcrumbs**: Startseite > CRM-Systeme (sichtbar + Schema)

### Schema-Markup

```
Service: {
  name: "CRM-Systeme",
  serviceType: "CRM System Implementation",
  description: "...",
  areaServed: [13 Core-Staedte]
}
FAQPage: { 8-10 mainEntity items }
BreadcrumbList: [Startseite, CRM-Systeme]
```

---

## Teil B: Local Authority -- 50 Regionale Unterseiten

### Hyperlokal-Content-Strategie

Jede regionale Seite `/leistungsgebiete/{stadt}/crm-systeme` bekommt stadt-spezifischen Content ueber `getRegionServiceContent()`:

**Fuer 13 Core-Staedte** (leipzig, markkleeberg, zwenkau, borna, boehlen, roetha, neukieritzsch, pegau, lucka, meuselwitz, regis-breitingen, elstertrebnitz, groitzsch):
- `metaDescription`: Hyperlokal mit Stadtname
- `intro`: Stadtspezifischer Hook (z.B. "In Leipzig gehen taeglich dutzende Kundenanfragen ein...")
- `paragraphs`: 3-4 Absaetze mit lokalen Referenzen (Gewerbegebiete, lokale Wirtschaftsstruktur, typische Branchen)
- `localHook`: Einzeiler unter H1 ("Fuer Unternehmen im Sueden von Leipzig")
- `localSection`: 1-3 Absaetze Hyperlokal-Content (Landmarks, Erreichbarkeit, lokale Besonderheiten)
- `localFaqs`: 3-4 stadtspezifische Zusatz-FAQs ("Bieten Sie CRM-Beratung vor Ort in Leipzig an?")
- `highlights`: 4 stadtbezogene USPs

**Fuer Tier 1-4 Staedte** (37 restliche):
- Generischer aber trotzdem individueller Content ueber die bestehende Tier-Logik in `regionServiceContentTier*.ts`
- Fallback-Texte mit `{regionName}` Platzhaltern

### Interlinking auf regionalen Seiten

Jede regionale CRM-Seite verlinkt:
- Zurueck zur globalen `/crm-systeme` Seite (bereits im Pattern bei `Automatisierungen.tsx` Z.959)
- Zur Stadt-Uebersicht `/leistungsgebiete/{stadt}` (bereits im Pattern)
- Zu 6 anderen Staedten mit CRM-Service (bereits via `otherRegions`-Pattern)
- Zu verwandten Services in derselben Stadt (implizit ueber `RegionPage` Verlinkung)

---

## Teil C: Interlinking-Strategie

### Bestandsanalyse: Was existiert bereits

| Verknuepfung | Mechanismus | Automatisch fuer CRM? |
|---|---|---|
| Service -> 8 Staedte (regional-service) | `RegionServiceLinksBlock` | Ja, via `serviceSlug` prop |
| Service -> 5 Staedte (uebersicht) | `ServicedRegionsBlock` | Ja, statisch |
| Service -> andere Services | `RelatedServices` | Nein, muss manuell ergaenzt werden |
| Stadtseite -> alle Services | `SERVICES.map()` in `RegionPage.tsx` | Ja, iteriert ueber `SERVICES` |
| Stadtseite -> Service-Detail | Service-Karten in `RegionPage.tsx` | Ja, aber `altMap` + Karten-Hardcoding pruefen |
| Homepage -> Services (Text) | Hardcoded Links in `Home.tsx` Z.103-108 | Nein, muss manuell ergaenzt werden |
| Homepage -> Services (Beispiele) | `practiceExamples` in `Home.tsx` | Nein, muss manuell ergaenzt werden |
| Homepage -> Leistungsgebiete | Link in `Home.tsx` Z.407 | Ja, existiert bereits |
| Header/Footer -> Services | Hardcoded Arrays | Nein, muss manuell ergaenzt werden |

### Was manuell angepasst werden muss

1. **[src/components/RelatedServices.tsx](src/components/RelatedServices.tsx)** -- `RELATED_ORDER` + `allServices` um `crm-systeme` erweitern
2. **[src/views/Home.tsx](src/views/Home.tsx)** -- Zwei Stellen:
   - Z.103-108: CRM-Link in die Service-Aufzaehlung einfuegen (z.B. "[CRM-Systeme](/crm-systeme)")
   - `practiceExamples`: Neuen Eintrag fuer CRM hinzufuegen (Vorher/Nachher/Ergebnis)
3. **[src/views/RegionPage.tsx](src/views/RegionPage.tsx)** -- `altMap` um CRM-Eintrag erweitern (Z.143-154), ggf. Service-Karten-Rendering pruefen (aktuell `if (s.slug === 'ki-chatbots')` etc.)
4. **[src/components/Header.tsx](src/components/Header.tsx)** + **[src/components/Footer.tsx](src/components/Footer.tsx)** -- CRM zu Navigation hinzufuegen
5. **[src/views/services/CrmSysteme.tsx](src/views/services/CrmSysteme.tsx)** -- Im Fliesstext 4-7 kontextuelle Links zu anderen Services + 2-4 Links zu Stadtseiten

### Interlinking-Regeln (aus Plan)

- Max. 8-10 Links pro Seite (aktuell eingehalten: `LINK_COUNT = 8` in `RegionServiceLinksBlock`)
- Variierte Anchor-Texte (bereits via `linkTextVariants` in `services.ts`)
- Nur Links die dem Leser helfen
- Nicht alle Links im Footer konzentrieren
- Jede wichtige Seite braucht mindestens ein paar eingehende Links

---

## Betroffene Dateien (20+ Dateien)

### 1. Zentrale Daten-Dateien

- **[src/data/services.ts](src/data/services.ts)** -- `SERVICE_SLUGS` um `'crm-systeme'` erweitern, neuen `SERVICES`-Eintrag:
  ```
  { slug: 'crm-systeme', label: 'CRM-Systeme',
    linkTextVariants: ['CRM-Systeme in', 'Kundenverwaltung fuer Unternehmen in', 'CRM-Loesungen fuer'] }
  ```
- **[src/data/businessInfo.ts](src/data/businessInfo.ts)** -- `services` um "CRM-Systeme & Lead-Management" erweitern + Keywords: "CRM System Leipzig", "CRM Agentur", "Kundenverwaltung Leipzig", "Lead-Management", "CRM Groitzsch"

### 2. Neue Dateien

- **`src/app/crm-systeme/page.tsx`** (NEU)
- **`src/views/services/CrmSysteme.tsx`** (NEU) -- 1800-2500 Woerter Content

### 3. Routing & Dynamische Seiten

- **[src/views/RegionServicePage.tsx](src/views/RegionServicePage.tsx)** -- `case 'crm-systeme'` + Import
- **[src/app/leistungsgebiete/[region]/[service]/page.tsx](src/app/leistungsgebiete/[region]/[service]/page.tsx)** -- `SERVICE_TITLE_KEYWORDS['crm-systeme']`

### 4. Navigation

- **[src/components/Header.tsx](src/components/Header.tsx)** -- `serviceLinks` erweitern
- **[src/components/Footer.tsx](src/components/Footer.tsx)** -- `serviceLinks` erweitern

### 5. SEO, Schema & Cross-Linking

- **[src/components/RelatedServices.tsx](src/components/RelatedServices.tsx)** -- CRM in `RELATED_ORDER` + `allServices`
- **[src/lib/sitemap.ts](src/lib/sitemap.ts)** -- `buildCoreSitemap()` um `/crm-systeme`
- **[src/views/Services.tsx](src/views/Services.tsx)** -- `coreServices` + `serviceDetails` um CRM

### 6. Interlinking-Updates (bestehende Seiten)

- **[src/views/Home.tsx](src/views/Home.tsx)** -- Service-Links Z.103-108 + `practiceExamples` um CRM
- **[src/views/RegionPage.tsx](src/views/RegionPage.tsx)** -- `altMap` um CRM-Alt-Text

### 7. Konfiguration

- **[next.config.ts](next.config.ts)** -- Redirect `/crm-lead-management` -> `/crm-systeme`

### 8. Regionaler Content

- **[src/data/regionServiceContent.ts](src/data/regionServiceContent.ts)** -- Custom-Content fuer Leipzig + ggf. weitere Core-Staedte
- **Tier-Dateien** (`regionServiceContentTier1.ts` etc.) -- CRM-Fallback-Content fuer alle Tiers

### 9. Assets

- **`public/images/crm-systeme-*.webp`** (NEU) -- Hero-Bild + ggf. Feature-Bilder

---

## Automatische Seiteneffekte (durch `SERVICE_SLUGS`-Erweiterung)

- **50 neue regionale Seiten** via `generateStaticParams`
- **Regionale Sitemap** +50 URLs via `buildRegionalSitemap`
- **Breadcrumb-Schemas** korrekt via `getServiceBySlug`
- **RegionPage Service-Karten** zeigen CRM automatisch (iteriert ueber `SERVICES`)
- **RegionServiceLinksBlock** auf globaler CRM-Seite zeigt automatisch 8 Stadt-Links

**Neue Seiten:** 1 global + 50 regional = **51 neue Seiten**
**Gesamt:** 315 + 51 = **366 Seiten**

---

## Reihenfolge der Umsetzung

1. **Daten-Schicht** (services.ts, businessInfo.ts) -- Fundament, alles andere importiert davon
2. **View-Komponente** (CrmSysteme.tsx) -- 1800-2500 Woerter Topical-Authority-Content
3. **Routing** (page.tsx, RegionServicePage.tsx, SERVICE_TITLE_KEYWORDS) -- Seite erreichbar machen
4. **Navigation** (Header, Footer) -- Seite auffindbar machen
5. **SEO & Cross-Linking** (RelatedServices, Services-Uebersicht, Sitemap, next.config)
6. **Interlinking bestehender Seiten** (Home.tsx CRM-Links, RegionPage altMap)
7. **Hyperlokal-Content** (regionServiceContent fuer Core-Staedte + Tier-Fallbacks)
8. **Assets** (Hero-Bild erstellen/einbinden)
9. **Interlinking-Audit** -- Finale Pruefung: Jede CRM-Seite hat 4-7 ausgehende kontextuelle Links, jede bestehende Service-Seite verlinkt wo passend auf CRM, Anchor-Texte variieren
