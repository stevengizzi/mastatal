App.inCircumcircle = function(pts, ai, bi, ci, pi) {
  const ax = pts[ai].x, ay = pts[ai].y;
  const bx = pts[bi].x, by = pts[bi].y;
  const cx = pts[ci].x, cy = pts[ci].y;
  const px = pts[pi].x, py = pts[pi].y;
  const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(D) < 1e-10) return false;
  const a2 = ax*ax + ay*ay, b2 = bx*bx + by*by, c2 = cx*cx + cy*cy;
  const ux = (a2*(by-cy) + b2*(cy-ay) + c2*(ay-by)) / D;
  const uy = (a2*(cx-bx) + b2*(ax-cx) + c2*(bx-ax)) / D;
  const r2 = (ax-ux)*(ax-ux) + (ay-uy)*(ay-uy);
  const d2 = (px-ux)*(px-ux) + (py-uy)*(py-uy);
  return d2 < r2 + 1e-10;
};

App.bowyerWatson = function(inputPts) {
  const n = inputPts.length;
  if (n < 3) return [];

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of inputPts) {
    if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
  }
  const span = Math.max(maxX - minX, maxY - minY) * 3 + 10;
  const midX = (minX + maxX) / 2, midY = (minY + maxY) / 2;

  const pts = [
    ...inputPts,
    { x: midX - span * 20, y: midY - span },
    { x: midX,             y: midY + span * 20 },
    { x: midX + span * 20, y: midY - span }
  ];
  const st0 = n, st1 = n + 1, st2 = n + 2;
  let triangles = [{ a: st0, b: st1, c: st2 }];

  for (let i = 0; i < n; i++) {
    const bad = triangles.filter(t => App.inCircumcircle(pts, t.a, t.b, t.c, i));

    const polygon = [];
    for (const tri of bad) {
      for (const edge of [[tri.a, tri.b], [tri.b, tri.c], [tri.c, tri.a]]) {
        let shared = false;
        for (const other of bad) {
          if (other === tri) continue;
          if (
            (other.a===edge[0]&&other.b===edge[1]) || (other.b===edge[0]&&other.c===edge[1]) || (other.c===edge[0]&&other.a===edge[1]) ||
            (other.a===edge[1]&&other.b===edge[0]) || (other.b===edge[1]&&other.c===edge[0]) || (other.c===edge[1]&&other.a===edge[0])
          ) { shared = true; break; }
        }
        if (!shared) polygon.push(edge);
      }
    }

    triangles = triangles.filter(t => !bad.includes(t));
    for (const edge of polygon) triangles.push({ a: edge[0], b: edge[1], c: i });
  }

  return triangles
    .filter(t => t.a < n && t.b < n && t.c < n)
    .map(t => [t.a, t.b, t.c]);
};
