# AGECODE Longevity Clinic — Bild-Prompts für Midjourney (hell & premium, ohne Personen)

Ziel-Anmutung: **hochwertiger, heller Longevity-/Verjüngungs-Center** — Tageslicht, warme Naturtöne (Weiß, helles Eichenholz, Glas, gebürsteter Stahl), aspirational. **Nicht Krankenhaus, nicht Spa, kein Rotstich, keine Personen.** Das CI-Rot lebt in der UI (Buttons/Text), nicht in den Fotos.

**Anwendung:** Motiv-Prompt + Stil-Baustein + Parameter → generieren → unter dem Dateinamen in `website/assets/` ablegen.

**Stil-Baustein (anhängen):**
```
, modern high-end longevity and rejuvenation center, bright airy premium interior, abundant natural daylight, warm neutral palette of white pale oak wood glass and brushed steel, sophisticated and aspirational, architectural editorial photography, photorealistic, sharp focus, highly detailed
```

**Parameter (anhängen):**
```
--style raw --v 6.1 --no people, person, hospital, sterile, spa, candles, red tint, clutter, text, logo
```

**Abwechslung:** bewusst gemischt — Weitwinkel-Interiors, Detail-/Produktaufnahmen (macro), ein abstraktes Wissenschaftsmotiv, Architektur.

| Datei | --ar | Motiv-Prompt | Typ |
|-------|------|--------------|-----|
| `hero.jpg` | 16:9 | wide architectural view of a bright luxurious longevity center lobby with floor to ceiling windows, warm oak wood, glass and a sleek reception, spacious | Interior |
| `diagnostik.jpg` | 4:3 | sleek modern diagnostics laboratory with glass cabinets and warm light, elegant blood analysis workstation and analyzer | Interior |
| `cardio.jpg` | 4:3 | elegant abstract cardiovascular data and ECG visualization glowing on a large sleek wall display in a premium interior | Tech/Display |
| `iv.jpg` | 4:3 | bright premium infusion lounge with a single elegant reclining chair by a large window, warm wood, a slim IV stand | Interior |
| `nad.jpg` | 4:3 | macro close up of an IV drip and a clear droplet, clean minimalist, shallow depth of field, bright | Macro |
| `glutathione.jpg` | 4:3 | macro of elegant glass ampoules and vials on a reflective stone surface, soft daylight | Produkt/Macro |
| `vitaminc.jpg` | 4:3 | minimalist macro of an infusion bag glowing in soft daylight against a warm neutral background | Produkt/Macro |
| `betterage.jpg` | 4:3 | a sleek tablet on a warm wood desk showing an elegant biological age dashboard | Lifestyle/Tech |
| `energy.jpg` | 4:3 | artful abstract 3d render of glowing mitochondria and cells, scientific, elegant, soft depth | Abstrakt/Render |
| `beauty.jpg` | 4:3 | macro close up of a modern aesthetic treatment device head in brushed metal, minimalist | Produkt/Macro |
| `regeneration.jpg` | 4:3 | bright premium regeneration suite with a modern recovery lounger and a large window, spacious and airy | Interior |
| `cryo.jpg` | 4:3 | sleek modern cryotherapy chamber as a design object in a bright minimalist room | Gerät/Architektur |
| `ihht.jpg` | 4:3 | elegant altitude training device and mask presented as a product on a stand in a bright room, minimalist | Produkt |
| `redlight.jpg` | 4:3 | modern red light therapy panel with a warm glow as a sculptural device in a stylish dim room | Gerät |
| `hbot.jpg` | 4:3 | sleek futuristic hyperbaric oxygen pod as a design centerpiece in a bright premium suite | Gerät/Architektur |
| `lymph.jpg` | 4:3 | modern compression therapy boots device on a stylish lounger by a window, minimalist | Produkt |
| `pemf.jpg` | 4:3 | elegant magnetic field therapy mat on a modern lounger in a bright airy room, minimalist | Interior/Produkt |
| `mms.jpg` | 4:3 | sleek electromagnetic muscle stimulation device in brushed metal as a product, minimalist bright | Produkt |
| `pelvic.jpg` | 4:3 | modern therapy chair as a sculptural design object in a bright minimalist room | Gerät/Design |
| `breath.jpg` | 4:3 | elegant respiratory training device on a minimalist wood table in soft daylight | Produkt |
| `bone.jpg` | 4:3 | sleek modern ultrasound bone density scanner device in a bright minimalist room | Gerät |
| `hautanalyse.jpg` | 4:3 | modern skin analysis device with a large screen showing elegant facial skin mapping graphics | Tech/Display |
| `aesthetics.jpg` | 4:3 | bright elegant aesthetic medicine room with a modern treatment chair and a device beside a large window | Interior |
| `suite.jpg` | 4:5 | luxurious private treatment suite with warm oak wood, minimalist art, designer furniture and a large window | Interior |
| `membership.jpg` | 4:3 | elegant private members consultation lounge with designer furniture, warm wood and soft daylight | Interior |
| `about.jpg` | 4:5 | bright architectural reception and interior of a premium longevity center, elegant and welcoming | Interior |
| `frankfurt.jpg` | 4:5 | Frankfurt Germany skyline on a bright clear day, modern glass towers, crisp and premium | Standort |

---

## Beispiel (voll zusammengesetzt) — `hero.jpg`
```
wide architectural view of a bright luxurious longevity center lobby with floor to ceiling windows, warm oak wood, glass and a sleek reception, spacious, modern high-end longevity and rejuvenation center, bright airy premium interior, abundant natural daylight, warm neutral palette of white pale oak wood glass and brushed steel, sophisticated and aspirational, architectural editorial photography, photorealistic, sharp focus, highly detailed --ar 16:9 --style raw --v 6.1 --no people, person, hospital, sterile, spa, candles, red tint, clutter, text, logo
```

### Hinweise
- Hell, hochwertig, aspirational — **nicht Krankenhaus, nicht Spa**, ohne Personen, ohne Rotstich.
- Für mehr Schärfe optional `--q 2`; alternativ `--v 7`.
- Dateinamen exakt beibehalten (`website/assets/<name>.jpg`).
