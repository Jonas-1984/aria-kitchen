# ARIA Holz · آورده‌های چوبی آریا

Website für eine Tischlerei / einen Holzbetrieb: **Innenausbau, Einbauschränke,
Küchenschränke und Sonderkonstruktionen aus Holz** – Planung, Fertigung und
Montage aus einer Hand (دکوراسیون داخلی، کمد دیواری، کابینت آشپزخانه و سازه‌های چوبی سفارشی).

- Sprache: **Persisch (fa)**, Schreibrichtung **RTL**
- Eine lange Single-Page-Seite, Navigation per Scrollen
- Fester Header oben, Footer unten; Trennlinien zwischen den Parts blenden zu
  beiden Seiten aus (Token `--divider`, Gradient-Linie auf 1px-Pseudo-Elementen)
- Glassmorphism: Header, Footer, die drei „خدمات"-Karten, die Icon-Badges in
  „مراحل کار" und alle „تماس"-Formularfelder (Tokens `--glass-*`)
- Neomorphism: alle Buttons, das Menü (neomorphe Pille + Hamburger) und die
  Social-Media-Icons im Footer (Tokens `--neo-*`)
- Footer: Social-Media (Instagram, LinkedIn, YouTube, Facebook) direkt unter
  der Trennlinie, linksbündig
- „مراحل کار" ohne Nummerierung – Icon-Badge (Lucide `step-back`) statt Zahl
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
index.html          Seiteninhalt (Header, Abschnitte, Footer) – lang="fa" dir="rtl"
css/styles.css      Styles, Farb-Tokens als CSS-Variablen, Dana-Import
js/main.js          Mobiles Menü, aktive Navigation, Footer-Jahr (persische Ziffern)
images/logo.svg     Wortmarke „ARIA" (aus CAD-SVG bereinigt: enger viewBox,
                    Buchstaben + Rahmen als Flächen gefüllt in #0077b6)
images/background.jpg  Fixierter Ganzseiten-Hintergrund
```

Logo im Header/Footer als `<img class="brand-logo">` neben dem Slogan
„آمیخته‌ای از هنر چوب و فلز". Füllfarbe liegt fest im SVG (`#0077b6`).

Abschnitte: معرفی (Hero) · خدمات · مراحل کار · نمونه‌کارها · درباره ما · تماس

## Lokal ansehen

`index.html` im Browser öffnen, oder ein kleiner Server:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Status

Grundgerüst. Das Design wird schrittweise gemeinsam ausgearbeitet.
