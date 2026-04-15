// ── Unit conversion ───────────────────────────────────────────────────────
App.m2ft = function(m) { return m * 3.28084; };
App.ft2m = function(ft) { return ft / 3.28084; };

// ── Geo projections ───────────────────────────────────────────────────────
App.loc = function(lon, lat) {
  return { x: (lon - App.LON_R) * App.D2M_LON, y: (lat - App.LAT_R) * App.D2M_LAT };
};

App.dst = function(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
};

App.brg = function(a, b) {
  const g = Math.atan2(b.x - a.x, b.y - a.y) * 180 / Math.PI;
  return g < 0 ? g + 360 : g;
};

App.eCol = function(t) {
  return `rgb(${Math.round(60 + (1-t)*150)},${Math.round(100 + t*110)},${Math.round(60 + (1-t)*60)})`;
};

// ── Display value helpers ─────────────────────────────────────────────────
App.dispElevVal = function(m) {
  return App.elevUnit === 'ft' ? Math.round(App.m2ft(m)) : parseFloat(m.toFixed(1));
};
App.elevSuffix = function() { return App.elevUnit === 'ft' ? "'" : 'm'; };
App.dispDistVal = function(m) {
  return App.elevUnit === 'ft' ? Math.round(App.m2ft(m)) : parseFloat(m.toFixed(1));
};
App.distSuffix = function() { return App.elevUnit === 'ft' ? 'ft' : 'm'; };

// ── SVG coordinate conversion ─────────────────────────────────────────────
App.clientToSvgCoords = function(clientX, clientY) {
  const rect = App.svgEl.getBoundingClientRect();
  return {
    svgX: App.vbX + (clientX - rect.left) / rect.width * App.vbW,
    svgY: App.vbY + (clientY - rect.top) / rect.height * App.vbH
  };
};

App.svgCoordsToLatLon = function(svgX, svgY) {
  const wx = (svgX - App.ox) / App.sc + App.mnX;
  const wy = (App.BASE_H - svgY - App.oy) / App.sc + App.mnY;
  return { lat: wy / App.D2M_LAT + App.LAT_R, lon: wx / App.D2M_LON + App.LON_R };
};

App.unrotatePoint = function(svgX, svgY) {
  const cx = App.BASE_W / 2, cy = App.BASE_H / 2;
  const rad = -App.mapRotation * Math.PI / 180;
  const dx = svgX - cx, dy = svgY - cy;
  return {
    x: cx + dx * Math.cos(rad) - dy * Math.sin(rad),
    y: cy + dx * Math.sin(rad) + dy * Math.cos(rad)
  };
};

App.nearestEdgeTo = function(svgX, svgY) {
  let minDist = Infinity, minIdx = 0;
  App.ps.forEach((p, i) => {
    const j = (i + 1) % App.ps.length, q = App.ps[j];
    const ex = q.sx - p.sx, ey = q.sy - p.sy;
    const len2 = ex*ex + ey*ey;
    const t = len2 > 0 ? Math.max(0, Math.min(1, ((svgX - p.sx)*ex + (svgY - p.sy)*ey) / len2)) : 0;
    const dist = Math.hypot(svgX - p.sx - t*ex, svgY - p.sy - t*ey);
    if (dist < minDist) { minDist = dist; minIdx = i; }
  });
  return minIdx;
};

// ── Unified point helpers ─────────────────────────────────────────────────
// Boundary idx >= 0; interior idx = -(i+1)
App.ptByIdx = function(idx) {
  return idx >= 0 ? App.SITE[idx] : App.INTERIOR[-(idx + 1)];
};
App.svgByIdx = function(idx) {
  return idx >= 0 ? App.ps[idx] : App.ips[-(idx + 1)];
};
App.labelByIdx = function(idx) {
  const pt = App.ptByIdx(idx);
  return pt ? pt.label : '?';
};
App.distBetween = function(aIdx, bIdx) {
  const ptA = App.ptByIdx(aIdx), ptB = App.ptByIdx(bIdx);
  if (!ptA || !ptB) return 0;
  return App.dst(App.loc(ptA.lon, ptA.lat), App.loc(ptB.lon, ptB.lat));
};

// ── Scale ratio helpers ───────────────────────────────────────────────────
App.currentRatio = function() {
  const W_px = App.svgEl.getBoundingClientRect().width;
  if (!W_px || !App.sc) return 500;
  const realMPerPx = App.BASE_W / (W_px * App.zoom * App.sc);
  const screenMPerPx = 0.0254 / 96;
  return realMPerPx / screenMPerPx;
};
App.roundedRatio = function(r) {
  if (r < 100)  return Math.round(r / 5) * 5;
  if (r < 500)  return Math.round(r / 10) * 10;
  if (r < 2000) return Math.round(r / 50) * 50;
  return Math.round(r / 100) * 100;
};
App.zoomForRatio = function(R) {
  const W_px = App.svgEl.getBoundingClientRect().width;
  if (!W_px || !App.sc) return App.zoom;
  return App.BASE_W * 96 / (W_px * R * App.sc * 0.0254);
};
