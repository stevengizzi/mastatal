// ── App namespace ─────────────────────────────────────────────────────────
var App = window.App = {};

// ── Default site boundary data ────────────────────────────────────────────
App.DEFAULT_SITE = [
  { label: "W",   lon: -84.37507, lat: 9.67310, elev: 275.81 },
  { label: "NW",  lon: -84.37478, lat: 9.67368, elev: 277.22 },
  { label: "N",   lon: -84.37448, lat: 9.67376, elev: 277.57 },
  { label: "NE",  lon: -84.37429, lat: 9.67363, elev: 278.08 },
  { label: "ENE", lon: -84.37430, lat: 9.67347, elev: 278.06 },
  { label: "E",   lon: -84.37459, lat: 9.67319, elev: 277.24 },
  { label: "ESE", lon: -84.37460, lat: 9.67290, elev: 276.15 },
  { label: "SE",  lon: -84.37469, lat: 9.67241, elev: 274.46 },
  { label: "SW",  lon: -84.37509, lat: 9.67236, elev: 272.98 },
];

App.DEFAULT_INTERIOR = [];
App.DEFAULT_VA_IDX = 1;

// ── Geo constants ─────────────────────────────────────────────────────────
App.LAT_R = 9.673;
App.LON_R = -84.375;
App.D2M_LAT = 110574;
App.D2M_LON = 110574 * Math.cos(App.LAT_R * Math.PI / 180);

// ── SVG canvas constants ──────────────────────────────────────────────────
App.BASE_W = 600;
App.BASE_H = 600;
App.PAD = 65;
App.NS = 'http://www.w3.org/2000/svg';

// ── Zoom limits ───────────────────────────────────────────────────────────
App.MIN_ZOOM = 0.5;
App.MAX_ZOOM = 4;
