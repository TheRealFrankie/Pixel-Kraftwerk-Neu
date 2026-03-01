# Interlinks und Schema: Local Authority + Topical Authority

## WICHTIG: Things NOT to do

- **Nicht mehr als 8–10 Links pro Seite.** Zu viele Links pro Seite wirken spammy und verwässern die Gewichtung.
- **Nicht immer denselben Linktext verwenden.** Linktexte variieren (z. B. „Leistungsgebiete“, „Alle Gebiete“, „Regionen“), aber sinnvoll und thematisch passend.
- **Keine themenfremden Links.** Jeder Link muss inhaltlich zur Seite passen (keine künstlichen Verlinkungen).
- **Nicht alle Links nur in den Footer packen.** Links in Content-Bereichen (z. B. nach Abschnitten, in „Das könnte Sie auch interessieren“, in Regionen-Blöcken) einbauen, nicht ausschließlich im Footer.

---

## Zielstruktur (anhand deiner Beispiele)

**Local Authority (Ort/Gebiet)**
- Stufe 1: **Pixel Kraftwerk** (Startseite)
- Stufe 2: **Pixel Kraftwerk – Leistungsgebiete** (Übersicht Orte)
- Stufe 3a: **Pixel Kraftwerk – [Stadt]** (z. B. Leipzig)
- Stufe 3b: **Pixel Kraftwerk – [Stadt] – [Leistung]** (z. B. Leipzig – KI-Chatbots)

**Topical Authority (Thema/Leistung)**
- Stufe 1: **Pixel Kraftwerk** (Startseite)
- Stufe 2: **Pixel Kraftwerk – Leistungen** (Übersicht /services)
- Stufe 3: **Pixel Kraftwerk – [Leistung]** (z. B. Digitale Kundenassistenz, SEO: Top 3 in Google)

Deine Inhalte: 5 Leistungen (KI-Chatbots, Telefonassistenten, Automatisierungen, Webseiten, SEO Top 3), 13 Orte (Leipzig, Markkleeberg, Zwenkau, … Groitzsch); Region-Service-URLs: `/leistungsgebiete/[region]/[service]`, globale Leistungen: `/ki-chatbots`, `/telefonassistenten`, `/automatisierungen`, `/webseite`, `/seo-top-3-in-google`.

---

## 1. Breadcrumb-Schema: Namensschema anpassen

### 1.1 Topical – Leistungsseiten (BreadcrumbSchema.tsx)

Aktuell: `Startseite` → `Alle Leistungen` → `[serviceName]`.

Anpassung auf Brand–Kategorie–Spezifisch:
- Position 1: **Name** `"Pixel Kraftwerk"`, **item** `baseUrl/`
- Position 2: **Name** `"Pixel Kraftwerk – Leistungen"`, **item** `baseUrl/services`
- Position 3: **Name** `"Pixel Kraftwerk – [serviceName]"`, **item** wie bisher (z. B. `baseUrl/ki-chatbots`)

### 1.2 Local – Region-Service-Seiten (BreadcrumbSchemaRegionService.tsx)

Aktuell: `Startseite` → `Leistungsgebiete` → `[regionName]` → `[serviceName]`.

Anpassung:
- Position 1: **Name** `"Pixel Kraftwerk"`, **item** `baseUrl/`
- Position 2: **Name** `"Pixel Kraftwerk – Leistungsgebiete"`, **item** `baseUrl/leistungsgebiete`
- Position 3: **Name** `"Pixel Kraftwerk – [regionName]"`, **item** `regionUrl`
- Position 4: **Name** `"Pixel Kraftwerk – [regionName] – [serviceName]"`, **item** `serviceUrl` (aktuelle Seite)

---

## 2. Fehlende Breadcrumb-Schema auf Ortseiten

### 2.1 Leistungsgebiete-Übersicht (Leistungsgebiete.tsx)

Seite `/leistungsgebiete` hat aktuell **kein** BreadcrumbList-Schema.

- Position 1: **Name** `"Pixel Kraftwerk"`, **item** `baseUrl/`
- Position 2: **Name** `"Pixel Kraftwerk – Leistungsgebiete"`, **item** `baseUrl/leistungsgebiete`

Entweder neue **BreadcrumbSchemaLeistungsgebiete** oder **BreadcrumbSchema** um Modus „onlyHomeAndOne“ erweitern.

### 2.2 Einzelne Ortseite (RegionPage.tsx)

Seiten wie `/leistungsgebiete/leipzig` haben **kein** BreadcrumbList-Schema.

- Position 1: **Name** `"Pixel Kraftwerk"`, **item** `baseUrl/`
- Position 2: **Name** `"Pixel Kraftwerk – Leistungsgebiete"`, **item** `baseUrl/leistungsgebiete`
- Position 3: **Name** `"Pixel Kraftwerk – [Stadtname]"`, **item** `baseUrl/leistungsgebiete/[region]`

Entweder **BreadcrumbSchemaRegion** oder flexible Breadcrumb-Komponente mit `variant="region"`.

---

## 3. Interne Verlinkung prüfen und ergänzen

| Von | Sollte verlinken zu (u. a.) |
|-----|-----------------------------|
| Startseite | `/services`, `/leistungsgebiete` |
| `/services` | `/leistungsgebiete`, alle 5 Leistungsseiten |
| Jede Leistungsseite | `/services`, `/leistungsgebiete`, ggf. 1–2 Beispiel-Region-Service-Links |
| `/leistungsgebiete` | `/services`, alle 13 Regionen |
| Jede Regionseite | `/leistungsgebiete`, `/services`, alle 5 Region-Service-Seiten für diese Region |
| Jede Region-Service-Seite | `/leistungsgebiete`, Regionseite, **globale Leistungsseite**, andere Region-Service-Links |

**Konkret:**
- **Home (Home.tsx)**: Links zu `/leistungsgebiete` und `/services` ergänzen.
- **RegionServicePage (RegionServicePage.tsx)**: Link zur jeweiligen globalen Leistungsseite hinzufügen (z. B. „Alle Infos zu [Leistung]“).

**Beim Setzen von Links:** Max. 8–10 pro Seite, abwechslungsreiche Linktexte, nur themenrelevante Links, nicht nur im Footer platzieren.

---

## 4. Zusammenfassung der Änderungen

- **BreadcrumbSchema.tsx**: Namen auf „Pixel Kraftwerk“, „Pixel Kraftwerk – Leistungen“, „Pixel Kraftwerk – [serviceName]“ (Topical).
- **BreadcrumbSchemaRegionService.tsx**: Namen auf „Pixel Kraftwerk“, „Pixel Kraftwerk – Leistungsgebiete“, „Pixel Kraftwerk – [regionName]“, „Pixel Kraftwerk – [regionName] – [serviceName]“ (Local).
- **Neue Breadcrumb-Variante** für Leistungsgebiete-Übersicht (zwei Ebenen).
- **Neue Breadcrumb-Variante** für Region ohne Service (drei Ebenen).
- **Leistungsgebiete.tsx**: Breadcrumb-Schema einbinden.
- **RegionPage.tsx**: Breadcrumb-Schema einbinden.
- **Home.tsx**: Links zu `/services` und `/leistungsgebiete` ergänzen (unter Beachtung der „Things NOT to do“).
- **RegionServicePage.tsx**: Link zur globalen Leistungsseite ergänzen.
