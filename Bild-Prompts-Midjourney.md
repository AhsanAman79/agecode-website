# AGECODE Longevity Clinic — Bild-Prompts für Midjourney (klinisch, ohne Personen)

Motive für eine **medizinische Klinik für Verjüngung & Lebensverlängerung** — klinisch, präzise, **ohne Ärzte/Personal/Patienten** (nur leere Räume, Geräte, Details).

**Anwendung:** Motiv-Prompt + Stil-Baustein + Parameter zusammensetzen → in Midjourney generieren → unter dem angegebenen **Dateinamen** in `website/assets/` ablegen.

**Stil-Baustein (an jeden Motiv-Prompt anhängen):**
```
, modern high-end private medical clinic, clean clinical design, clinical white with graphite and crimson red accents, bright professional lighting, photorealistic, high-end medical photography, sharp focus, highly detailed
```

**Parameter (anhängen):**
```
--style raw --v 6.1 --no spa, wellness, candles, towels, incense, meditation, flowers, calm pastel, people, person, doctor, patient, hands, face
```

---

## Motive (personenfrei)

| Datei | --ar | Motiv-Prompt |
|-------|------|--------------|
| `hero.jpg` | 16:9 | interior of a modern high-end private longevity and rejuvenation medical clinic, advanced diagnostic technology and an empty examination area, serious and precise |
| `diagnostik.jpg` | 4:3 | advanced medical diagnostics laboratory, blood sample vials, centrifuge and analyzer on clean counters, empty lab |
| `cardio.jpg` | 4:3 | close up of high resolution monitors displaying a cardiovascular scan and ECG waveforms in a clinic, medical technology |
| `iv.jpg` | 4:3 | clinical infusion therapy room with an empty treatment chair, IV stand and patient monitor |
| `nad.jpg` | 4:3 | close up of an intravenous infusion setup, IV bag line and cannula on a sterile tray, medical grade |
| `glutathione.jpg` | 4:3 | medical vials and a syringe arranged on a sterile stainless steel tray in a laboratory |
| `vitaminc.jpg` | 4:3 | high dose vitamin infusion bag on a stand in a clinical treatment room, medical equipment |
| `betterage.jpg` | 4:3 | a medical diagnostic device screen displaying a biological age and longevity assessment in a clinic |
| `energy.jpg` | 4:3 | scientific microscopic visualization of cellular mitochondria and ATP energy production, clinical research imagery |
| `beauty.jpg` | 4:3 | clinical aesthetic dermatology device and equipment in an empty treatment room, professional |
| `regeneration.jpg` | 4:3 | modern regenerative medicine treatment room with advanced medical devices, empty |
| `cryo.jpg` | 4:3 | medical whole body cryotherapy chamber in a modern clinic, empty, professional |
| `ihht.jpg` | 4:3 | hypoxia altitude training medical device with a breathing mask resting on a monitor in a clinic |
| `redlight.jpg` | 4:3 | medical red light therapy device with glowing panels in an empty clinical treatment room |
| `hbot.jpg` | 4:3 | medical hyperbaric oxygen therapy chamber in a modern clinic, empty, professional |
| `lymph.jpg` | 4:3 | medical lymphatic compression therapy device and boots on a treatment bed in a clinic |
| `pemf.jpg` | 4:3 | pulsed magnetic field therapy medical device and mat in a clinical treatment room |
| `mms.jpg` | 4:3 | electromagnetic muscle stimulation medical device in a clinical setting |
| `pelvic.jpg` | 4:3 | pelvic floor magnetic stimulation medical therapy chair in a clinical treatment room |
| `breath.jpg` | 4:3 | respiratory therapy medical monitoring equipment in a clinic |
| `bone.jpg` | 4:3 | bone density measurement medical ultrasound scanner device in a clinic |
| `hautanalyse.jpg` | 4:3 | professional dermatological skin analysis imaging device and screen in a clinic, close up of the device |
| `aesthetics.jpg` | 4:3 | clinical aesthetic medicine treatment room with a medical device and equipment, professional |
| `suite.jpg` | 4:5 | elegant empty private clinical treatment room with an examination table and modern medical equipment |
| `membership.jpg` | 4:3 | elegant empty private medical consultation room in a high end clinic |
| `about.jpg` | 4:5 | modern private medical clinic reception and interior, clean clinical design, empty |
| `frankfurt.jpg` | 4:5 | Frankfurt Germany financial district skyline, modern towers, clear professional daylight, sharp and refined |

---

## Beispiel (voll zusammengesetzt) — `hero.jpg`
```
interior of a modern high-end private longevity and rejuvenation medical clinic, advanced diagnostic technology and an empty examination area, serious and precise, modern high-end private medical clinic, clean clinical design, clinical white with graphite and crimson red accents, bright professional lighting, photorealistic, high-end medical photography, sharp focus, highly detailed --ar 16:9 --style raw --v 6.1 --no spa, wellness, candles, towels, incense, meditation, flowers, calm pastel, people, person, doctor, patient, hands, face
```

### Hinweise
- Bewusst **ohne Personen** — nur Räume, Geräte, Details. Die `--no`-Liste hält Menschen zuverlässig heraus.
- Für mehr Schärfe optional `--q 2`; alternativ `--v 7`.
- Dateinamen exakt beibehalten (`website/assets/<name>.jpg`), damit die Website die Bilder ohne Anpassung übernimmt.
