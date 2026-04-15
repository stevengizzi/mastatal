# Site Base Map — Rancho Mastatal PDC

An offline SVG mapping tool for the Rancho Mastatal permaculture design course site. Displays boundary nodes, elevation contours, interior elevation points, measurements, and angle arcs. All data persists in browser localStorage.

## How to open

Just open `index.html` directly in a browser — no server, no build step required:

```
open index.html          # macOS
# or double-click index.html in Finder / Explorer
```

Works fully offline. Tested in Chrome and Safari.

## Features

- Interactive pan/zoom/rotate map
- Boundary polygon with elevation-coloured nodes and edge length labels
- Delaunay-triangulated elevation contours with index contour labels
- Interior elevation points (add, edit, delete)
- Measure mode — click two points to record a distance
- Angle arcs at boundary vertices (toggle via Layers)
- Fullscreen mode with touch support (pinch-zoom, two-finger rotate)
- Export/import site data as JSON
- Auto-saves to localStorage on every change

## File structure

```
mapping-project/
├── index.html          — HTML shell; loads CSS and scripts in order
├── css/
│   └── styles.css      — All styles
├── js/
│   ├── config.js       — Default SITE data, constants (LAT_R, BASE_W, etc.)
│   ├── state.js        — All mutable app state; DOM references
│   ├── geo.js          — Geometry utilities: loc(), dst(), brg(), unit helpers
│   ├── labels.js       — Node label layout and collision resolution
│   ├── compute.js      — recompute(): derives ps, edges, contour data, etc.
│   ├── delaunay.js     — Bowyer-Watson triangulation
│   ├── contours.js     — Contour level extraction and chain building
│   ├── render.js       — SVG render pipeline; App.el() helper
│   ├── hud.js          — Compass, legend, and scale bar HUD
│   ├── interactions.js — Zoom/pan/touch/wheel/drag event handlers
│   ├── edit-panels.js  — Node and interior point edit panels; add/delete
│   ├── ui-controls.js  — Toggles, toolbar, fullscreen, compass drag, inline scale
│   ├── persistence.js  — localStorage auto-save and load
│   └── io.js           — JSON export, import, and data panel controls
├── old/
│   ├── site-base-map-v1.html   — archived
│   ├── site-base-map-v2.html   — archived
│   └── site-base-map-v3.html   — archived
└── site-base-map-v4.html       — monolithic source (pre-refactor reference)
```

## Export / import data

Use the **Data** section at the bottom of the page to export a JSON snapshot of all boundary nodes, interior points, and measurements. Import the same JSON on any machine to restore the session. The JSON format is self-describing and human-readable.

## localStorage keys

| Key | Content |
|-----|---------|
| `mastatal_site` | Boundary node array |
| `mastatal_interior` | Interior point array |
| `mastatal_va_idx` | Vehicle access node index |
| `mastatal_measurements` | Saved measurement pairs |
| `mastatal_elev_unit` | `ft` or `m` |
| `mastatal_map_rotation` | Map bearing in degrees |
