# Dev Log — 2026-04-14

## Fix: Angle Arc Sweep Flag

**File:** `mapping-project/site-base-map-v4.html` (also applied in `js/render.js`)

The angle arcs were rendering on the exterior of the polygon instead of the interior. The sweep flag logic was inverted.

**Root cause:** For a CW polygon in SVG's Y-down coordinate system, a convex vertex requires a CW arc (`sweep=1`) to stay on the interior. The old code was using `sweep=0` (CCW) for convex CW vertices, which arcs around the outside.

**Fix (line ~1241):**
```js
// Before (wrong):
const sweepFlag = isCWPoly ? (isReflex ? 1 : 0) : (isReflex ? 0 : 1);

// After (correct):
const sweepFlag = isCWPoly ? (isReflex ? 0 : 1) : (isReflex ? 1 : 0);
```

The bisector label logic was already correct — for reflex vertices it flips the bisector to point inward, which still works after the sweep fix.

---

## Refactor: Split Monolithic HTML into Multi-File Structure

Split `site-base-map-v4.html` (2,380 lines) into a clean multi-file project:

```
mapping-project/
├── index.html
├── css/styles.css
├── js/ (14 module files)
├── old/ (v1–v3 archived)
└── README.md
```

**Approach:** Global `window.App` namespace. All modules attach to and read from `App`. Plain `<script src="...">` tags in dependency order — no bundler, no ES modules, works from `file://`.

**Key modules created:**
- `config.js` — constants and default site data
- `state.js` — all mutable state, DOM refs
- `geo.js` — projection math, display helpers, scale ratio helpers
- `labels.js` — node label layout with collision resolution
- `compute.js` — full recompute() pipeline
- `delaunay.js` — Bowyer-Watson triangulation
- `contours.js` — contour extraction and chaining
- `render.js` — `App.el()` helper + decomposed render pipeline (8 sub-functions)
- `hud.js` — compass, legend, scale bar
- `interactions.js` — zoom/pan/touch/wheel/drag
- `edit-panels.js` — node and interior point editing, add/delete
- `ui-controls.js` — toggles, fullscreen, compass drag, inline scale
- `persistence.js` — localStorage auto-save/load
- `io.js` — JSON export/import + data panel

**Also removed:** `root-cause-analysis/` folder (unrelated project).

localStorage keys unchanged — existing saved data loads correctly.
