// ── Mutable working data ──────────────────────────────────────────────────
// Copied from defaults; loadFromStorage() will overwrite if stored data exists.
App.SITE = App.DEFAULT_SITE.map(function(n) { return Object.assign({}, n); });
App.INTERIOR = App.DEFAULT_INTERIOR.map(function(n) { return Object.assign({}, n); });
App.VA_IDX = App.DEFAULT_VA_IDX;

// ── Layer visibility ──────────────────────────────────────────────────────
App.showLen = true;
App.showElev = true;
App.showLabels = true;
App.showInterior = true;
App.showContours = true;
App.showContourLabels = true;
App.showHighLow = true;
App.showAngles = false;

// ── Interaction mode flags ────────────────────────────────────────────────
App.measureMode = false;
App.addNodeMode = false;
App.addInteriorMode = false;
App.toolbarCollapsed = false;
App.isFullscreen = false;

// ── Selection / measurement state ─────────────────────────────────────────
App.selNodes = [];
App.measurements = [];
App.selectedNodeIdx = null;
App.editOriginal = null;
App.deleteConfirmPending = false;
App.selectedInteriorIdx = null;
App.interiorEditOriginal = null;
App.deleteInteriorConfirmPending = false;

// ── Mobile tooltip state ──────────────────────────────────────────────────
App.activeTooltip = null;  // { type: 'node'|'interior'|'edge', idx }

// ── Display preferences ───────────────────────────────────────────────────
App.elevUnit = 'ft';
App.scaleBarMode = 'bar';
App.scaleMeterVal = 20;
App.mapRotation = 0;

// ── View state ────────────────────────────────────────────────────────────
App.vbX = 0;
App.vbY = 0;
App.vbW = App.BASE_W;
App.vbH = App.BASE_H;
App.zoom = 1;

// ── Drag / pan state ──────────────────────────────────────────────────────
App.dragStart = null;
App.wasDragged = false;
App.lastTouchDist = 0;
App.lastTouchAngle = null;
App.lastTouchCenter = null;
App.isPinching = false;

// ── Compass drag state ────────────────────────────────────────────────────
App.compassDragActive = false;
App.compassDragStartAngle = 0;
App.compassDragStartRot = 0;

// ── Inline scale edit state ───────────────────────────────────────────────
App.scaleInlineActive = false;

// ── Debounce timers ───────────────────────────────────────────────────────
App.savedFlashTimer = null;
App.rotSaveTimer = null;

// ── Derived state (populated by App.recompute()) ──────────────────────────
App.pl = [];
App.elevs = [];
App.minE = 0;
App.maxE = 0;
App.hiIdx = 0;
App.loIdx = 0;
App.mnX = 0;
App.mxX = 0;
App.mnY = 0;
App.mxY = 0;
App.sc = 1;
App.ox = 0;
App.oy = 0;
App.ps = [];
App.edges = [];
App.dists = [];
App.area = 0;
App.perim = 0;
App.labelOffsets = [];
App.isCWPoly = false;
App.interiorAngles = [];
App.ipl = [];
App.ips = [];
App.globalMinE = 0;
App.globalMaxE = 0;

// ── DOM references ────────────────────────────────────────────────────────
// Scripts are loaded at end of body, so these elements already exist.
App.svgEl = document.getElementById('map');
App.mapWrap = document.getElementById('mapWrap');
