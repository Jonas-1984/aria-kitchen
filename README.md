# ARIA Küchen · آریا کابینت

Website für einen Handwerksbetrieb, der Küchenschränke **herstellt und aufbaut**
(کابینت آشپزخانه – ساخت و نصب).

- Sprache: **Persisch (fa)**, Schreibrichtung **RTL**
- Eine lange Single-Page-Seite, Navigation per Scrollen
- Fester Header oben, Footer unten, jeder Abschnitt durch eine dünne Trennlinie getrennt
- Fixierter Ganzseiten-Hintergrund: `images/background.jpg` (Steintextur) mit
  halbtransparenter `#0d1b2a`-Überlagerung (`body::before`)

## Schriftart

**Dana** (Persisch), geladen über `fonts.cdnfonts.com`. Fallback-Kette:
`Dana → IRANSans → IRANSansX → Vazirmatn → Tahoma → system-ui`.

Für eine lizenzierte, lokal gehostete Dana/IRANSans: Dateien nach `fonts/` legen
und den `@font-face`-Block oben in `css/styles.css` aktivieren.

## Farben

| Zweck                 | Wert      |
| --------------------- | --------- |
| Firmenfarbe / Akzent  | `#0077b6` |
| Hintergrund           | `#0d1b2a` |
| Text / helle Elemente | `#f8f9fa` |

## Struktur

```
index.html        Seiteninhalt (Header, Abschnitte, Footer) – lang="fa" dir="rtl"
css/styles.css    Styles, Farb-Tokens als CSS-Variablen, Dana-Import
js/main.js        Mobiles Menü, aktive Navigation, Footer-Jahr (persische Ziffern)
```

Abschnitte: معرفی (Hero) · خدمات · مراحل کار · نمونه‌کارها · درباره ما · تماس

## Lokal ansehen

`index.html` im Browser öffnen, oder ein kleiner Server:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Status

Grundgerüst. Das Design wird schrittweise gemeinsam ausgearbeitet.
