# AGECODE Longevity Clinic — Website

Exklusive, mehrseitige Website für die **AGECODE Longevity Clinic**, Frankfurt am Main (Schmidtstr. 51). Statisches HTML/CSS/JS, keine Build-Tools nötig.

## Marke & Positionierung
- **Name:** AGECODE Longevity Clinic (Wortmarke „AGE·CODE" — Anspielung auf Gene/Code/biologisches Alter).
- **Design:** Helles, klinisch-präzises Precision-/Biohacking-/Future-Theme. Cyan→Indigo-Akzent, DNA-Helix- und Molekül-Motive, technische Typografie: Space Grotesk (Display) + Inter (Text) + IBM Plex Mono (Daten-/Code-Labels).
- **Tonalität:** Precision Health, Healthspan, Biomarker, Genomics, Human Performance — ärztlich, wissenschaftlich, zukunftsgerichtet.
- **Zielgruppe:** Selbstzahler & Privatpatienten (PKV) — Profisport, Executives, internationale Gäste.

> Hinweis: Der Namensbestandteil „Clinic" wurde auf ausdrücklichen Kundenwunsch gewählt. Wettbewerbs-/werberechtliche Prüfung (UWG/HWG, „Klinik"-Bezeichnung ohne stationäre Betten) vor Livegang empfohlen.

## Seitenstruktur
| Datei | Inhalt |
|-------|--------|
| `index.html` | Startseite: Hero (DNA-Helix + Frankfurt-Skyline), Ansatz, Leistungen, Klientel, Standort, CTA, JSON-LD |
| `diagnostik.html` | Longevity-Diagnostik & biologisches Alter |
| `cardiovascular-twin.html` | Signature: KI-Herz-Kreislauf-Analyse (VasioCore® / inMediq) |
| `infusionstherapie.html` | IV-Infusionstherapie / Micronutrient Lounge |
| `regeneration.html` | Regenerative Medizin & Biohacking (NAD⁺, HBOT, Kryo, IHHT, Rotlicht, Peptide) |
| `aesthetik.html` | Ästhetische Medizin (nicht-invasiv) |
| `membership.html` | Private Membership & Concierge |
| `ueber-uns.html` | Philosophie & Führung (kaufm. + ärztliche Leitung) |
| `kontakt.html` | Kontaktformular (Demo-Frontend) & Anfahrt |
| `impressum.html`, `datenschutz.html` | Rechtstexte mit Platzhaltern |
| `styles.css`, `script.js` | Design-System & Interaktionen |

## Wichtige Hinweise vor dem Livegang
- **Texte:** Vollständig original verfasst (keine Übernahme fremder Website-Inhalte).
- **Bilder:** KI-generiert (Pollinations.ai, schlüssellos, kommerziell nutzbar) und lokal in `assets/` gespeichert — also eigene Assets, keine Fremd-Lizenz. Themenpassend im Elfenbein-/Salbeigrün-Stil. Für den finalen Launch empfiehlt sich zusätzlich ein professionelles Shooting der echten Räume/Geräte.
- **inMediq/VasioCore:** Transparenzhinweis integriert (derzeit kein MDR-Medizinprodukt, Klasse IIa in Vorbereitung). Kooperation/Freigabe mit inMediq klären.
- **Impressum/Datenschutz:** Platzhalter (`.ph`) durch verbindliche GmbH-Daten ersetzen; wegen Gesundheitsdaten (Art. 9 DSGVO) anwaltlich prüfen lassen.
- **Werbung:** HWG-bewusst formuliert (keine Heilversprechen).
- **Kontaktformular:** Reines Frontend; an DSGVO-konformen Versand-/CRM-Dienst anbinden.
- **Domain/SEO:** Canonicals/OG zeigen auf Beispiel-Domain `www.agecode.de` — bei finaler Domain anpassen.

## Lokale Vorschau
```
cd website
py -m http.server 8080
# http://localhost:8080
```
