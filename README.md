# ARIA Küchen

Website für einen Handwerksbetrieb, der Küchenschränke **herstellt und aufbaut**.

Eine lange Single-Page-Seite, die per Scrollen navigiert wird. Fester Header oben,
Footer unten, jeder Abschnitt durch eine dünne Trennlinie getrennt.

## Farben

| Zweck                    | Wert      |
| ------------------------ | --------- |
| Firmenfarbe / Akzent     | `#0077b6` |
| Hintergrund              | `#0d1b2a` |
| Text / helle Elemente    | `#f8f9fa` |

## Struktur

```
index.html        Seiteninhalt (Header, Abschnitte, Footer)
css/styles.css    Styles, Farb-Tokens als CSS-Variablen
js/main.js        Mobiles Menü, aktive Navigation, Footer-Jahr
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder ein kleiner Server:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Status

Grundgerüst. Das Design wird schrittweise gemeinsam ausgearbeitet.
