App.computeContourLevels = function(minElev, maxElev) {
  const range = maxElev - minElev;
  if (range < 0.01) return { interval: 0, levels: [] };
  let interval;
  if (range < 5) interval = 0.5;
  else if (range < 15) interval = 1;
  else if (range < 50) interval = 2;
  else interval = 5;
  const firstLevel = Math.ceil(minElev / interval) * interval;
  const levels = [];
  for (let lev = firstLevel; lev <= maxElev + 1e-9; lev += interval) {
    levels.push(parseFloat(lev.toFixed(4)));
  }
  return { interval, levels };
};

App.extractContourSegments = function(allPts, triangles, level) {
  const segs = [];
  for (const [ai, bi, ci] of triangles) {
    const verts = [
      { x: allPts[ai].sx, y: allPts[ai].sy, e: allPts[ai].elev },
      { x: allPts[bi].sx, y: allPts[bi].sy, e: allPts[bi].elev },
      { x: allPts[ci].sx, y: allPts[ci].sy, e: allPts[ci].elev }
    ];
    const crossings = [];
    for (let i = 0; i < 3; i++) {
      const v0 = verts[i], v1 = verts[(i+1)%3];
      if ((v0.e < level) !== (v1.e < level)) {
        const t = (level - v0.e) / (v1.e - v0.e);
        crossings.push({ x: v0.x + t*(v1.x-v0.x), y: v0.y + t*(v1.y-v0.y) });
      }
    }
    if (crossings.length === 2) segs.push(crossings);
  }
  return segs;
};

App.chainSegments = function(segs) {
  const EPS = 0.5;
  const remaining = segs.map(([p1, p2]) => [{ ...p1 }, { ...p2 }]);
  const chains = [];
  while (remaining.length > 0) {
    const chain = [...remaining.shift()];
    let extended = true;
    while (extended) {
      extended = false;
      for (let i = 0; i < remaining.length; i++) {
        const [p1, p2] = remaining[i];
        const tail = chain[chain.length - 1];
        const head = chain[0];
        if (Math.hypot(p1.x-tail.x, p1.y-tail.y) < EPS) {
          chain.push(p2); remaining.splice(i,1); extended = true; break;
        } else if (Math.hypot(p2.x-tail.x, p2.y-tail.y) < EPS) {
          chain.push(p1); remaining.splice(i,1); extended = true; break;
        } else if (Math.hypot(p1.x-head.x, p1.y-head.y) < EPS) {
          chain.unshift(p2); remaining.splice(i,1); extended = true; break;
        } else if (Math.hypot(p2.x-head.x, p2.y-head.y) < EPS) {
          chain.unshift(p1); remaining.splice(i,1); extended = true; break;
        }
      }
    }
    chains.push(chain);
  }
  return chains;
};
