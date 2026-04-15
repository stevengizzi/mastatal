// ── SVG element helper ────────────────────────────────────────────────────
App.el = function(tag, attrs, parent) {
  const e = document.createElementNS(App.NS, tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'textContent') e.textContent = v; else e.setAttribute(k, v);
  }
  if (parent) parent.appendChild(e);
  return e;
};

// ── Sub-render: terrain fill ──────────────────────────────────────────────
App.renderBackground = function(mapG, pathStr) {
  App.el('path', { d: pathStr, fill: 'url(#tg)' }, mapG);
};

// ── Sub-render: contour lines + labels ───────────────────────────────────
App.renderContours = function(mapG, nodeLabelBBoxes, edgeLblBBoxes) {
  if (!App.showContours) return;
  const el = App.el;
  const allPts = [
    ...App.ps.map((p, i) => ({ sx: p.sx, sy: p.sy, elev: App.SITE[i].elev })),
    ...App.ips.map((p, i) => ({ sx: p.sx, sy: p.sy, elev: App.INTERIOR[i].elev }))
  ];
  if (allPts.length < 3) return;
  const { interval, levels } = App.computeContourLevels(App.globalMinE, App.globalMaxE);
  if (levels.length === 0) return;
  const triangles = App.bowyerWatson(allPts.map(p => ({ x: p.sx, y: p.sy })));
  if (triangles.length === 0) return;

  const contourG = el('g', { 'clip-path': 'url(#siteClip)', style: 'pointer-events:none' }, mapG);
  const placedContourLabelBBoxes = [];

  levels.forEach((lev, li) => {
    const segs = App.extractContourSegments(allPts, triangles, lev);
    if (segs.length === 0) return;
    const chains = App.chainSegments(segs);
    const stepFromFirst = Math.round((lev - levels[0]) / interval);
    const isIndex = stepFromFirst % 5 === 0;
    const stroke = isIndex ? '#8a9a80' : '#4a6a50';
    const sw = isIndex ? 1.2 : 0.7;
    const op = isIndex ? 0.60 : 0.35;
    for (const chain of chains) {
      const d = chain.map((p, i) => `${i===0?'M':'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join('');
      el('path', { d, fill:'none', stroke, 'stroke-width':sw, opacity:op, 'stroke-linecap':'round', 'stroke-linejoin':'round' }, contourG);
    }

    if (!isIndex || !App.showContourLabels) return;
    const lTxt = App.dispElevVal(lev) + App.elevSuffix();
    const lFsz = 7.5;
    const lW = lTxt.length * lFsz * 0.6 + 4;
    const lH = lFsz + 4;

    const arcLenOf = (ch) => ch.reduce((sum, pt, k) =>
      k === 0 ? 0 : sum + Math.hypot(pt.x - ch[k-1].x, pt.y - ch[k-1].y), 0);

    const tryPlaceAt = (ch, fracAlong) => {
      const total = arcLenOf(ch);
      if (total < 20) return false;
      const target = total * fracAlong;
      let accumulated = 0, idx = 1;
      for (let k = 1; k < ch.length; k++) {
        accumulated += Math.hypot(ch[k].x - ch[k-1].x, ch[k].y - ch[k-1].y);
        if (accumulated >= target) { idx = k; break; }
      }
      for (let offset = 0; offset <= Math.min(4, Math.floor(ch.length / 4)); offset++) {
        for (const dir of [0, 1, -1]) {
          const mid = Math.max(1, Math.min(ch.length - 2, idx + dir * offset));
          const p0 = ch[mid - 1], p1 = ch[mid + 1] || ch[mid];
          const px = (p0.x + p1.x) / 2, py = (p0.y + p1.y) / 2;
          let ang = Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
          if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
          const bbox = { x: px - lW / 2, y: py - lH / 2, w: lW, h: lH };
          const collides = nodeLabelBBoxes.some(nb => App.bboxOverlap(nb, bbox)) ||
                           edgeLblBBoxes.some(eb => App.bboxOverlap(eb, bbox)) ||
                           placedContourLabelBBoxes.some(pb => App.bboxOverlap(pb, bbox));
          if (collides) continue;
          placedContourLabelBBoxes.push(bbox);
          const grp = el('g', { transform: `rotate(${ang.toFixed(1)},${px.toFixed(1)},${py.toFixed(1)})`, style: 'pointer-events:none' }, contourG);
          el('rect', { x: (px - lW / 2).toFixed(1), y: (py - lH / 2).toFixed(1), width: lW.toFixed(1), height: lH.toFixed(1), fill: '#111511' }, grp);
          el('text', { x: px.toFixed(1), y: py.toFixed(1), 'text-anchor': 'middle', 'dominant-baseline': 'middle', fill: '#8a9a80', 'font-size': lFsz, 'font-family': "'Courier New',monospace", textContent: lTxt }, grp);
          return true;
        }
      }
      return false;
    };

    const sortedChains = [...chains].sort((a, b) => arcLenOf(b) - arcLenOf(a));
    for (const ch of sortedChains) {
      const total = arcLenOf(ch);
      if (total < 20) continue;
      if (total > 100 / App.zoom) {
        tryPlaceAt(ch, 0.25);
        tryPlaceAt(ch, 0.75);
      } else {
        tryPlaceAt(ch, 0.5);
      }
    }
  });
};

// ── Sub-render: boundary polygon stroke ──────────────────────────────────
App.renderBoundary = function(mapG, pathStr) {
  App.el('path', { d: pathStr, fill:'none', stroke:'#5a9040', 'stroke-width':'2.5', 'stroke-linejoin':'round' }, mapG);
};

// ── Sub-render: measurement lines ────────────────────────────────────────
App.renderMeasurementLines = function(mapG) {
  const el = App.el;
  App.measurements.forEach(([a, b]) => {
    const svgA = App.svgByIdx(a), svgB = App.svgByIdx(b);
    if (!svgA || !svgB) return;
    const dm = App.distBetween(a, b);
    const mx = (svgA.sx+svgB.sx)/2, my = (svgA.sy+svgB.sy)/2;
    const lblTxt = App.dispDistVal(dm) + App.distSuffix();
    const lblW = lblTxt.length * 6 + 12;
    el('line', {x1:svgA.sx, y1:svgA.sy, x2:svgB.sx, y2:svgB.sy, stroke:'#d0a030', 'stroke-width':'1.5', 'stroke-dasharray':'6,4', opacity:'0.8'}, mapG);
    el('rect', {x:mx-lblW/2, y:my-10, width:lblW, height:16, rx:3, fill:'#1a1a10', 'fill-opacity':'.92', stroke:'#3a3020', 'stroke-width':'.5'}, mapG);
    el('text', {x:mx, y:my+2, 'text-anchor':'middle', 'dominant-baseline':'middle', fill:'#d0a030', 'font-size':10, 'font-weight':700, 'font-family':"'Courier New',monospace", textContent:lblTxt, style:'pointer-events:none'}, mapG);
  });

  // Measure mode — ring around selected node
  if (App.measureMode && App.selNodes.length === 1) {
    const sp = App.svgByIdx(App.selNodes[0]);
    if (sp) el('circle', {cx:sp.sx, cy:sp.sy, r:14, fill:'none', stroke:'#d0a030', 'stroke-width':2, 'stroke-dasharray':'4,3', opacity:'.7'}, mapG);
  }
};

// ── Sub-render: edge labels + hit areas ──────────────────────────────────
App.renderEdgeLabels = function(mapG, nodeLabelBBoxes) {
  const el = App.el;
  App.edges.forEach((e, i) => {
    const mx = (e.from.sx+e.to.sx)/2, my = (e.from.sy+e.to.sy)/2;
    const dx = e.to.sx-e.from.sx, dy = e.to.sy-e.from.sy;
    let a = Math.atan2(dy, dx)*180/Math.PI;
    if (a > 90) a -= 180; if (a < -90) a += 180;
    const ln = Math.sqrt(dx*dx+dy*dy), nx = -dy/ln*16, ny = dx/ln*16;
    const hit = el('line', {x1:e.from.sx, y1:e.from.sy, x2:e.to.sx, y2:e.to.sy, stroke:'transparent', 'stroke-width':12, style:'cursor:pointer'}, mapG);
    hit.addEventListener('mouseenter', () => App.showEdgeInfo(i));
    hit.addEventListener('mouseleave', App.hideEdgeInfo);
    hit.addEventListener('touchstart', (ev) => { ev.stopPropagation(); App.showEdgeTooltip(i); });
    if (App.showLen && App.zoom >= 0.8) {
      const suppressThreshM = 20 / App.zoom;
      if (e.distM < suppressThreshM) return;
      const elx = mx + nx, ely = my + ny;
      const eLblTxt = App.dispDistVal(e.distM) + App.distSuffix();
      const eLblW = eLblTxt.length * 7 + 4;
      const eLblBbox = { x: elx - eLblW / 2, y: ely - 7, w: eLblW, h: 14 };
      if (nodeLabelBBoxes.some(nb => App.bboxOverlap(nb, eLblBbox))) return;
      el('text', {x:elx, y:ely, 'text-anchor':'middle', 'dominant-baseline':'middle', transform:`rotate(${a},${elx},${ely})`, fill:'#607a50', 'font-size':10, 'font-weight':400, 'font-family':"'Courier New',monospace", textContent:eLblTxt, style:'pointer-events:none'}, mapG);
    }
  });
};

// ── Sub-render: interior elevation points ────────────────────────────────
App.renderInteriorPoints = function(mapG) {
  if (!App.showInterior) return;
  const el = App.el;
  const intG = el('g', { 'clip-path': 'url(#siteClip)' }, mapG);
  App.INTERIOR.forEach((s, i) => {
    const p = App.ips[i];
    const iCode = -(i + 1);
    const isSel = App.selNodes.includes(iCode) || i === App.selectedInteriorIdx;
    const t = App.globalMaxE === App.globalMinE ? 0.5 : (s.elev - App.globalMinE) / (App.globalMaxE - App.globalMinE);
    const col = `rgb(${Math.round(40 + (1-t)*160)},${Math.round(110 + t*130)},${Math.round(40 + (1-t)*50)})`;
    const r = isSel ? 7 : 6;
    const g = el('g', { style: (App.measureMode || App.addInteriorMode || App.addNodeMode) ? 'cursor:crosshair' : 'cursor:pointer' }, intG);

    el('circle', {cx:p.sx, cy:p.sy, r:20, fill:'transparent'}, g);

    const ring = el('circle', {
      cx:p.sx, cy:p.sy, r:r+4,
      fill:'none', stroke:'#d0a030', 'stroke-width':1.5,
      opacity: isSel ? '0.65' : '0', style:'pointer-events:none'
    }, g);

    el('polygon', {
      points:`${p.sx},${p.sy-r} ${p.sx+r},${p.sy} ${p.sx},${p.sy+r} ${p.sx-r},${p.sy}`,
      fill: col, 'fill-opacity': isSel ? '0.95' : '0.85',
      stroke: isSel ? '#d0a030' : '#111511',
      'stroke-width': isSel ? 2 : 1.2
    }, g);

    let lblTxt = '';
    if (App.showLabels) lblTxt = s.label;
    if (App.showElev) { const ev = App.dispElevVal(s.elev) + App.elevSuffix(); lblTxt = lblTxt ? `${lblTxt} ${ev}` : ev; }
    const lbl = lblTxt ? el('text', {
      x: p.sx + 9, y: p.sy + 1,
      fill: '#94a488', 'font-size': 9, 'font-weight': 500,
      'font-family': "'Courier New',monospace",
      textContent: lblTxt,
      opacity: isSel ? '1' : '0',
      style: 'pointer-events:none'
    }, g) : null;

    if (lbl) {
      g.addEventListener('mouseenter', () => { ring.setAttribute('opacity', '0.65'); lbl.setAttribute('opacity', '1'); });
      g.addEventListener('mouseleave', () => { if (i !== App.selectedInteriorIdx) { ring.setAttribute('opacity', '0'); lbl.setAttribute('opacity', '0'); } });
    }

    if (!App.addInteriorMode && !App.addNodeMode) {
      g.addEventListener('click', (e) => { e.stopPropagation(); App.handleInteriorClick(i); });
      g.addEventListener('touchend', (e) => {
        e.preventDefault(); e.stopPropagation();
        App.activeTooltip = { type: 'interior', idx: i };
        App.render();
        App.handleInteriorClick(i);
      });
    }
  });
};

// ── Sub-render: boundary nodes + labels ──────────────────────────────────
App.renderBoundaryNodes = function(mapG, resolvedNodeLabels) {
  const el = App.el;
  App.ps.forEach((p, i) => {
    const s = App.SITE[i];
    const isH = App.showHighLow && i === App.hiIdx, isL = App.showHighLow && i === App.loIdx, isVA = i === App.VA_IDX;
    const isSel = App.selNodes.includes(i) || i === App.selectedNodeIdx;
    const t = App.globalMaxE === App.globalMinE ? 0.5 : (s.elev - App.globalMinE) / (App.globalMaxE - App.globalMinE);
    const col = isH ? '#e8a030' : isL ? '#3898d0' : App.eCol(t);
    const r = isH || isL ? 9 : isVA ? 7 : isSel ? 8 : 5.5;
    const lbl = resolvedNodeLabels[i];
    const g = el('g', {style: (App.measureMode || App.addNodeMode || App.addInteriorMode) ? 'cursor:crosshair' : 'cursor:pointer'}, mapG);
    el('circle', {cx:p.sx, cy:p.sy, r:18, fill:'transparent'}, g);
    el('circle', {cx:p.sx, cy:p.sy, r, fill:col, 'fill-opacity':'.8', stroke:isSel?'#d0a030':isH||isL?'#fff':'#111511', 'stroke-width':isSel?3:isH||isL?2.5:1.5}, g);
    if (lbl.text) {
      el('text', {x:p.sx+lbl.dx, y:p.sy+lbl.dy, 'text-anchor':lbl.a, fill:isH?'#e8a030':isL?'#3898d0':'#94a488', 'font-size':isH||isL?11.5:10.5, 'font-weight':isH||isL?700:600, 'font-family':"'Courier New',monospace", textContent:lbl.text, style:'pointer-events:none'}, g);
    }
    if (!App.addNodeMode && !App.addInteriorMode) {
      g.addEventListener('click', (e) => { e.stopPropagation(); App.handleNodeClick(i); });
      g.addEventListener('touchend', (e) => {
        e.preventDefault(); e.stopPropagation();
        App.activeTooltip = { type: 'node', idx: i };
        App.render();
        App.handleNodeClick(i);
      });
    }
  });
};

// ── Sub-render: interior angle arcs + labels ──────────────────────────────
App.renderAngleArcs = function(mapG, nodeLabelBBoxes) {
  if (!App.showAngles || !App.interiorAngles || App.interiorAngles.length !== App.ps.length) return;
  const el = App.el;
  const arcR = 17 / App.zoom;
  const angleLblBBoxes = [];

  App.ps.forEach((p, i) => {
    const n = App.ps.length;
    const prev = App.ps[(i - 1 + n) % n];
    const next = App.ps[(i + 1) % n];
    const v1x = prev.sx - p.sx, v1y = prev.sy - p.sy;
    const v2x = next.sx - p.sx, v2y = next.sy - p.sy;
    const len1 = Math.sqrt(v1x * v1x + v1y * v1y) || 1;
    const len2 = Math.sqrt(v2x * v2x + v2y * v2y) || 1;
    const cross = v1x * v2y - v1y * v2x;
    const isReflex = App.isCWPoly ? cross > 0 : cross < 0;

    const p1x = p.sx + arcR * v1x / len1;
    const p1y = p.sy + arcR * v1y / len1;
    const p2x = p.sx + arcR * v2x / len2;
    const p2y = p.sy + arcR * v2y / len2;

    // SVG arc flags: sweep/large depend on winding and reflex status.
    // In SVG Y-down: sweep=1 is clockwise on screen, sweep=0 is counterclockwise.
    // CW polygon interior: convex vertex → CW arc (sweep=1); reflex → CCW large arc (sweep=0).
    // CCW polygon interior: convex vertex → CCW arc (sweep=0); reflex → CW large arc (sweep=1).
    const sweepFlag = App.isCWPoly ? (isReflex ? 0 : 1) : (isReflex ? 1 : 0);
    const largeFlag = isReflex ? 1 : 0;

    el('path', {
      d: `M${p1x.toFixed(2)},${p1y.toFixed(2)} A${arcR.toFixed(2)},${arcR.toFixed(2)} 0 ${largeFlag},${sweepFlag} ${p2x.toFixed(2)},${p2y.toFixed(2)}`,
      fill: 'none', stroke: '#4a9a80', 'stroke-width': (1.2 / App.zoom).toFixed(2),
      opacity: '0.65', style: 'pointer-events:none'
    }, mapG);

    // Label position: along the interior bisector, just beyond the arc
    let bx = v1x / len1 + v2x / len2;
    let by = v1y / len1 + v2y / len2;
    const bl = Math.sqrt(bx * bx + by * by) || 1;
    bx /= bl; by /= bl;
    // For reflex vertices the simple bisector points outward — flip to point inward
    if (isReflex) { bx = -bx; by = -by; }

    const lblOff = arcR + 9 / App.zoom;
    const angleTxt = App.interiorAngles[i].toFixed(1) + '°';
    const lblFsz = Math.max(7, Math.min(10, 8.5 / App.zoom));
    const lblW = angleTxt.length * lblFsz * 0.65 + 4;
    const lblH = lblFsz + 4;

    let placed = false;
    for (const sign of [1, -1]) {
      const lx = p.sx + bx * lblOff * sign;
      const ly = p.sy + by * lblOff * sign;
      const lAnch = bx * sign > 0.3 ? 'start' : bx * sign < -0.3 ? 'end' : 'middle';
      const lbx = lAnch === 'start' ? lx : lAnch === 'end' ? lx - lblW : lx - lblW / 2;
      const lBbox = { x: lbx, y: ly - lblH / 2, w: lblW, h: lblH };
      const collides = nodeLabelBBoxes.some(nb => App.bboxOverlap(nb, lBbox)) ||
                       angleLblBBoxes.some(ab => App.bboxOverlap(ab, lBbox));
      if (!collides) {
        el('text', {
          x: lx.toFixed(2), y: ly.toFixed(2),
          'text-anchor': lAnch, 'dominant-baseline': 'middle',
          fill: '#4a9a80', 'font-size': lblFsz.toFixed(1),
          'font-family': "'Courier New',monospace",
          textContent: angleTxt, style: 'pointer-events:none',
          'paint-order': 'stroke', stroke: '#111511', 'stroke-width': (1.5 / App.zoom).toFixed(2)
        }, mapG);
        angleLblBBoxes.push(lBbox);
        placed = true;
        break;
      }
    }
    if (!placed && App.zoom >= 1.8) {
      const lx = p.sx + bx * lblOff;
      const ly = p.sy + by * lblOff;
      const lAnch = bx > 0.3 ? 'start' : bx < -0.3 ? 'end' : 'middle';
      el('text', {
        x: lx.toFixed(2), y: ly.toFixed(2),
        'text-anchor': lAnch, 'dominant-baseline': 'middle',
        fill: '#4a9a80', 'font-size': lblFsz.toFixed(1),
        'font-family': "'Courier New',monospace",
        textContent: angleTxt, style: 'pointer-events:none',
        'paint-order': 'stroke', stroke: '#111511', 'stroke-width': (1.5 / App.zoom).toFixed(2)
      }, mapG);
    }
  });
};

// ── Main render ───────────────────────────────────────────────────────────
App.render = function() {
  const el = App.el;
  App.recompute();
  const resolvedNodeLabels = App.resolveNodeLabels();
  const nodeLabelBBoxes = resolvedNodeLabels.map(it => App.labelBbox(it.sx, it.sy, it.dx, it.dy, it.a, it.text));

  // Pre-compute edge label bboxes for contour label collision avoidance
  const edgeLblBBoxes = (App.showLen && App.zoom >= 0.8) ? App.edges.map(e => {
    if (e.distM < 20 / App.zoom) return null;
    const emx = (e.from.sx + e.to.sx) / 2, emy = (e.from.sy + e.to.sy) / 2;
    const edx = e.to.sx - e.from.sx, edy = e.to.sy - e.from.sy;
    const eln = Math.sqrt(edx*edx + edy*edy) || 1;
    const elx = emx + (-edy/eln)*16, ely = emy + (edx/eln)*16;
    const eLblTxt = App.dispDistVal(e.distM) + App.distSuffix();
    const eLblW = eLblTxt.length * 7 + 4;
    return { x: elx - eLblW/2, y: ely - 7, w: eLblW, h: 14 };
  }).filter(Boolean) : [];

  App.svgEl.innerHTML = '';
  App.svgEl.setAttribute('viewBox', `${App.vbX} ${App.vbY} ${App.vbW} ${App.vbH}`);

  const pathStr = App.ps.map((p, i) => `${i?'L':'M'}${p.sx},${p.sy}`).join(' ') + 'Z';

  const defs = el('defs', {}, App.svgEl);

  const pat = el('pattern', {id:'g', width:40, height:40, patternUnits:'userSpaceOnUse'}, defs);
  el('path', {d:'M40 0L0 0 0 40', fill:'none', stroke:'#181f18', 'stroke-width':'.4'}, pat);

  const tg = el('linearGradient', {id:'tg', x1:'.3', y1:'0', x2:'.7', y2:'1'}, defs);
  el('stop', {offset:'0%', 'stop-color':'#3a5a30', 'stop-opacity':'.22'}, tg);
  el('stop', {offset:'100%', 'stop-color':'#4a3a25', 'stop-opacity':'.10'}, tg);

  const elg = el('linearGradient', {id:'el', x1:'0', y1:'0', x2:'1', y2:'0'}, defs);
  el('stop', {offset:'0%', 'stop-color':'#3898d0'}, elg);
  el('stop', {offset:'50%', 'stop-color':'#7a9a60'}, elg);
  el('stop', {offset:'100%', 'stop-color':'#e8a030'}, elg);

  const clipEl = el('clipPath', {id:'siteClip'}, defs);
  el('path', {d: pathStr}, clipEl);

  el('rect', {x:-5000, y:-5000, width:10000, height:10000, fill:'#111511'}, App.svgEl);
  el('rect', {x:-5000, y:-5000, width:10000, height:10000, fill:'url(#g)'}, App.svgEl);

  const mapG = el('g', {
    id: 'mapContent',
    transform: `rotate(${App.mapRotation},${App.BASE_W/2},${App.BASE_H/2})`
  }, App.svgEl);

  App.renderBackground(mapG, pathStr);
  App.renderContours(mapG, nodeLabelBBoxes, edgeLblBBoxes);
  App.renderBoundary(mapG, pathStr);
  App.renderMeasurementLines(mapG);
  App.renderEdgeLabels(mapG, nodeLabelBBoxes);
  App.renderInteriorPoints(mapG);
  App.renderBoundaryNodes(mapG, resolvedNodeLabels);
  App.renderAngleArcs(mapG, nodeLabelBBoxes);

  // Add-node overlay
  if (App.addNodeMode) {
    const overlay = el('rect', {x:-10000, y:-10000, width:30000, height:30000, fill:'transparent', style:'cursor:crosshair'}, mapG);
    overlay.addEventListener('click', (e) => {
      if (App.wasDragged) return;
      e.stopPropagation();
      App.addNodeAt(e.clientX, e.clientY);
    });
  }

  // Add-interior overlay
  if (App.addInteriorMode) {
    const overlay = el('rect', {x:-10000, y:-10000, width:30000, height:30000, fill:'transparent', style:'cursor:crosshair'}, mapG);
    overlay.addEventListener('click', (e) => {
      if (App.wasDragged) return;
      e.stopPropagation();
      App.addInteriorPointAt(e.clientX, e.clientY);
    });
  }

  // Mobile tooltip
  if (App.activeTooltip) {
    let tx, ty, lines = [];
    if (App.activeTooltip.type === 'node') {
      const s = App.SITE[App.activeTooltip.idx], p = App.ps[App.activeTooltip.idx];
      tx = p.sx; ty = p.sy;
      lines = [s.label, `${App.dispElevVal(s.elev)}${App.elevSuffix()}`, `${s.lat.toFixed(5)}°N`, `${Math.abs(s.lon).toFixed(5)}°W`];
    } else if (App.activeTooltip.type === 'interior') {
      const s = App.INTERIOR[App.activeTooltip.idx], p = App.ips[App.activeTooltip.idx];
      if (s && p) {
        tx = p.sx; ty = p.sy;
        lines = [s.label, `${App.dispElevVal(s.elev)}${App.elevSuffix()}`, `${s.lat.toFixed(5)}°N`, `${Math.abs(s.lon).toFixed(5)}°W`];
      }
    } else if (App.activeTooltip.type === 'edge') {
      const e = App.edges[App.activeTooltip.idx];
      tx = (e.from.sx + e.to.sx) / 2; ty = (e.from.sy + e.to.sy) / 2;
      const fromLabel = App.SITE[App.activeTooltip.idx].label;
      const toLabel = App.SITE[(App.activeTooltip.idx + 1) % App.SITE.length].label;
      lines = [`${fromLabel}→${toLabel}`, `${App.dispDistVal(e.distM)}${App.distSuffix()}`, `Bearing ${e.bearing.toFixed(0)}°`];
    }
    if (lines.length > 0) {
      const lh = 13, pad = 7, tw = Math.max(...lines.map(l => l.length)) * 6.2 + pad * 2;
      const th = lines.length * lh + pad * 2;
      const offY = -th - 16;
      const tg = el('g', {style:'pointer-events:none'}, mapG);
      el('rect', {x: tx - tw/2, y: ty + offY, width: tw, height: th, rx: 4, fill: '#1a1f1a', 'fill-opacity': '.92', stroke: '#4a6a3a', 'stroke-width': 1}, tg);
      lines.forEach((line, li) => {
        el('text', {x: tx, y: ty + offY + pad + lh * li + lh * 0.7, 'text-anchor': 'middle', fill: li === 0 ? '#7db860' : '#94a488', 'font-size': 9.5, 'font-weight': li === 0 ? 700 : 400, 'font-family': "'Courier New',monospace", textContent: line}, tg);
      });
    }
  }

  App.renderMeasurements();
  App.renderHudCompass();
  App.renderHudScale();
  App.renderHudLegend();
};

// ── Measurement panel (HTML) ──────────────────────────────────────────────
App.renderMeasurements = function() {
  const panel = document.getElementById('measPanel');
  if (App.measurements.length === 0) { panel.style.display = 'none'; return; }
  panel.style.display = 'block';
  let html = '<div class="meas-title">Measurements</div>';
  App.measurements.forEach(([a, b], mi) => {
    const ptA = App.ptByIdx(a), ptB = App.ptByIdx(b);
    if (!ptA || !ptB) return;
    const dm = App.distBetween(a, b);
    const elevDiff = ptB.elev - ptA.elev;
    const dElev = App.dispElevVal(Math.abs(elevDiff));
    const dElevStr = `Δ${elevDiff > 0 ? '+' : '-'}${dElev}${App.elevSuffix()}`;
    html += `<div class="meas-row"><span class="meas-label">${ptA.label} ↔ ${ptB.label}</span><span class="meas-val">${dm.toFixed(1)}m (${Math.round(App.m2ft(dm))}ft)<span class="meas-elev">${dElevStr}</span></span><button class="meas-del" data-idx="${mi}">✕</button></div>`;
  });
  panel.innerHTML = html;
  panel.querySelectorAll('.meas-del').forEach(btn => {
    btn.addEventListener('click', (e) => {
      App.measurements.splice(parseInt(e.target.dataset.idx), 1);
      App.render(); App.updateClearBtn(); App.autoSave();
    });
  });
};

// ── Stats panel (HTML) ────────────────────────────────────────────────────
App.renderStats = function() {
  const statsEl = document.getElementById('stats');
  statsEl.innerHTML = '';
  const hiLabel = App.SITE[App.hiIdx] ? App.SITE[App.hiIdx].label : '—';
  const loLabel = App.SITE[App.loIdx] ? App.SITE[App.loIdx].label : '—';
  const vaLabel = App.SITE[App.VA_IDX] ? App.SITE[App.VA_IDX].label : '—';
  const evsuf = App.elevSuffix();
  const { interval } = App.computeContourLevels(App.globalMinE, App.globalMaxE);
  const cInterval = interval > 0
    ? (App.elevUnit === 'ft' ? Math.round(App.m2ft(interval)) + 'ft' : interval + 'm')
    : '—';
  [
    ['Perimeter', `${App.perim.toFixed(0)}m (${Math.round(App.m2ft(App.perim))}ft)`],
    ['Area (approx)', `${App.area.toFixed(0)}m² (${(App.area/4047).toFixed(2)} ac)`],
    ['Elev. Range', `${App.dispElevVal(App.globalMinE)}–${App.dispElevVal(App.globalMaxE)}${evsuf} (Δ${App.dispElevVal(App.globalMaxE-App.globalMinE)}${evsuf})`],
    ['Highest', `${hiLabel} · ${App.dispElevVal(App.maxE)}${evsuf}`],
    ['Lowest', `${loLabel} · ${App.dispElevVal(App.minE)}${evsuf}`],
    ['Access', `${vaLabel} · vehicle`],
    ['Interior Pts', `${App.INTERIOR.length}`],
    ['Contour Int.', App.INTERIOR.length > 0 || App.SITE.length >= 3 ? cInterval : '—'],
    ['Angle Sum', (() => {
      if (!App.interiorAngles || App.interiorAngles.length === 0) return '—';
      const sum = App.interiorAngles.reduce((a, b) => a + b, 0);
      const expected = (App.SITE.length - 2) * 180;
      const diff = Math.abs(sum - expected);
      return `${sum.toFixed(0)}° (exp ${expected}°, Δ${diff.toFixed(1)}°)`;
    })()],
  ].forEach(([l, v]) => {
    const d = document.createElement('div');
    d.className = 'stat';
    d.innerHTML = `<div class="stat-label">${l}</div><div class="stat-val">${v}</div>`;
    statsEl.appendChild(d);
  });
};

// ── Sub-line update ───────────────────────────────────────────────────────
App.updateSubLine = function() {
  const iPts = App.INTERIOR.length > 0 ? ` · ${App.INTERIOR.length} interior pt${App.INTERIOR.length !== 1 ? 's' : ''}` : '';
  document.getElementById('subLine').textContent =
    `PDC Design Project · Apr 2026 · ${App.SITE.length} nodes${iPts} · Elevations: Google Earth DEM (${App.elevUnit}) · Offline`;
};
