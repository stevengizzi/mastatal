App.recompute = function() {
  App.pl = App.SITE.map(s => App.loc(s.lon, s.lat));
  App.elevs = App.SITE.map(s => s.elev);
  App.minE = Math.min(...App.elevs);
  App.maxE = Math.max(...App.elevs);
  App.hiIdx = App.elevs.indexOf(App.maxE);
  App.loIdx = App.elevs.indexOf(App.minE);

  const xs = App.pl.map(p => p.x), ys = App.pl.map(p => p.y);
  App.mnX = Math.min(...xs); App.mxX = Math.max(...xs);
  App.mnY = Math.min(...ys); App.mxY = Math.max(...ys);
  App.sc = Math.min((App.BASE_W - App.PAD*2) / (App.mxX - App.mnX), (App.BASE_H - App.PAD*2) / (App.mxY - App.mnY));
  App.ox = (App.BASE_W - (App.mxX - App.mnX) * App.sc) / 2;
  App.oy = (App.BASE_H - (App.mxY - App.mnY) * App.sc) / 2;

  const svgPt = p => ({ sx: App.ox + (p.x - App.mnX) * App.sc, sy: App.BASE_H - (App.oy + (p.y - App.mnY) * App.sc) });
  App.ps = App.pl.map(svgPt);

  App.edges = App.pl.map((_, i) => {
    const j = (i + 1) % App.pl.length;
    const dm = App.dst(App.pl[i], App.pl[j]);
    return { from: App.ps[i], to: App.ps[j], distM: dm, distFt: App.m2ft(dm), bearing: App.brg(App.pl[i], App.pl[j]) };
  });

  App.dists = [];
  for (let i = 0; i < App.pl.length; i++) {
    App.dists[i] = [];
    for (let j = 0; j < App.pl.length; j++) App.dists[i][j] = App.dst(App.pl[i], App.pl[j]);
  }

  App.area = 0;
  for (let i = 0; i < App.pl.length; i++) {
    const j = (i + 1) % App.pl.length;
    App.area += App.pl[i].x * App.pl[j].y - App.pl[j].x * App.pl[i].y;
  }
  App.area = Math.abs(App.area) / 2;
  App.perim = App.edges.reduce((s, e) => s + e.distM, 0);

  // Determine polygon winding in SVG coords (Y-down).
  // Shoelace sum > 0 means CW in SVG (standard for geographic polygons in this projection).
  let sgnPolyArea = 0;
  for (let i = 0; i < App.ps.length; i++) {
    const j = (i + 1) % App.ps.length;
    sgnPolyArea += App.ps[i].sx * App.ps[j].sy - App.ps[j].sx * App.ps[i].sy;
  }
  App.isCWPoly = sgnPolyArea > 0;

  // Use outward normals of adjacent edges at each vertex for label placement.
  App.labelOffsets = App.ps.map((p, i) => {
    const n = App.ps.length;
    const prev = App.ps[(i - 1 + n) % n];
    const next = App.ps[(i + 1) % n];
    const e1x = p.sx - prev.sx, e1y = p.sy - prev.sy;
    const len1 = Math.sqrt(e1x * e1x + e1y * e1y) || 1;
    const e2x = next.sx - p.sx,  e2y = next.sy - p.sy;
    const len2 = Math.sqrt(e2x * e2x + e2y * e2y) || 1;
    let n1x, n1y, n2x, n2y;
    if (App.isCWPoly) {
      n1x = e1y / len1;  n1y = -e1x / len1;
      n2x = e2y / len2;  n2y = -e2x / len2;
    } else {
      n1x = -e1y / len1; n1y =  e1x / len1;
      n2x = -e2y / len2; n2y =  e2x / len2;
    }
    let nx = n1x + n2x, ny = n1y + n2y;
    const nlen = Math.sqrt(nx * nx + ny * ny) || 1;
    nx /= nlen; ny /= nlen;
    const odx = Math.round(nx * 20), ody = Math.round(ny * 20);
    const a = nx > 0.4 ? 'start' : nx < -0.4 ? 'end' : 'middle';
    return { dx: odx, dy: ody, a, nx, ny };
  });

  // Interior angles at each boundary vertex (degrees, 1 decimal place).
  App.interiorAngles = App.ps.map((p, i) => {
    const n = App.ps.length;
    const prev = App.ps[(i - 1 + n) % n];
    const next = App.ps[(i + 1) % n];
    const v1x = prev.sx - p.sx, v1y = prev.sy - p.sy;
    const v2x = next.sx - p.sx, v2y = next.sy - p.sy;
    const len1 = Math.sqrt(v1x * v1x + v1y * v1y) || 1;
    const len2 = Math.sqrt(v2x * v2x + v2y * v2y) || 1;
    const cross = v1x * v2y - v1y * v2x;
    const cosA = Math.max(-1, Math.min(1, (v1x * v2x + v1y * v2y) / (len1 * len2)));
    const angleDeg = Math.acos(cosA) * 180 / Math.PI;
    // For CW polygon in SVG, reflex vertex has cross > 0; for CCW, cross < 0.
    const isReflex = App.isCWPoly ? cross > 0 : cross < 0;
    return parseFloat((isReflex ? 360 - angleDeg : angleDeg).toFixed(1));
  });

  // Interior points
  App.ipl = App.INTERIOR.map(s => App.loc(s.lon, s.lat));
  App.ips = App.ipl.map(p => ({
    sx: App.ox + (p.x - App.mnX) * App.sc,
    sy: App.BASE_H - (App.oy + (p.y - App.mnY) * App.sc)
  }));

  // Global elevation range across all points
  const allElevs = [...App.elevs, ...App.INTERIOR.map(s => s.elev)];
  App.globalMinE = Math.min(...allElevs);
  App.globalMaxE = Math.max(...allElevs);
};
