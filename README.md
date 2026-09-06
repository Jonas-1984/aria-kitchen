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
- Neomorphism: Buttons und Hamburger (Tokens `--neo-*`)
- Social-Media-Buttons im Footer: Uiverse-Stil (talhabangyal) – weiche
  Kachel, beim Hover eingedrückt + nach unten versetzt, Icon skaliert
- Menüleiste: Uiverse-Stil (adamgiebl), Neomorphism-Buttons. Nur Icons,
  keine Beschriftung – Hilfstext als Tooltip (`data-tooltip`), auf Mobil
  als sichtbares Label. Erster Eintrag = Home (`#top`).
- Footer-Widget (Neomorphism), linke Spalte unter den Social-Icons (auf
  deren Breite gestreckt), gegenüber dem Kontaktblock: Uhrzeit, Datum +
  Wochentag auf Persisch (`toLocaleString("fa-IR")`), Wetter für Tehran via
  Open-Meteo (best effort, Zeile wird bei Fehler ausgeblendet)
- Animierte Katze (`.hero-cat`), sitzt auf der Linie unten im Hero:
  `images/cat.svg` = „Black cat by PoPoF" (SMIL-Animation), eingefärbt
  `#1b263b` und viewBox auf die Katze zugeschnitten; Original unter
  `anime/`. Unter 560px ausgeblendet.
- Absende-Button „ارسال پیام": Uiverse-Stil (elijahgummer) mit Bezel-Kante
  und rotierendem Icon, eingefärbt in Palette-Blau (`.styled-button`)
- Footer: links Social-Media (Instagram, LinkedIn, YouTube, Facebook) +
  Info-Widget darunter; rechts der Kontaktblock (Firmenname, Adresse, Mobil,
  E-Mail, Website) mit Icons; Copyright unten. Kein Logo, keine Menü-Links
  im Footer
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
images/logo.svg     Wortmarke „ARIA": Buchstaben mit blauer Liquid-Glass-
                    Füllung (transluzenter Verlauf) + feine Kontur,
                    Rahmen als dünne Linien #0077b6
images/background.jpg  Fixierter Ganzseiten-Hintergrund
```

Logo im Header/Footer als `<img class="brand-logo">` in `.logo-chip` neben
dem Slogan „آمیخته‌ای از هنر چوب و فلز". Der Chip: Liquid Glass (transluzent
+ `backdrop-filter` + oberer Glanz) und neomorpher Schatten (`--neo-out`).
Die Border ist ein konischer Verlauf mit heller Glanz-Sichel, der über
`@property --logo-angle` langsam (10 s) rotiert; per `prefers-reduced-motion`
abgeschaltet. Linienfarben liegen fest im SVG.

Abschnitte: معرفی (Hero) · خدمات · مراحل کار · نمونه‌کارها · درباره ما · تماس

## Lokal ansehen

`index.html` im Browser öffnen, oder ein kleiner Server:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Status

Grundgerüst. Das Design wird schrittweise gemeinsam ausgearbeitet.
