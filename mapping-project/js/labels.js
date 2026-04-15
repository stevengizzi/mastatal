App.getLabelZoomDetail = function() {
  if (!App.showElev) return 'name';
  if (App.zoom >= 1.5) return 'full';
  return 'elev';
};

App.labelBbox = function(sx, sy, dx, dy, anchor, txt, fsize) {
  const cw = (fsize || 10.5) * 0.62;
  const w = txt.length * cw, h = 13;
  let lx = sx + dx;
  if (anchor === 'middle') lx -= w / 2;
  else if (anchor === 'end') lx -= w;
  return { x: lx - 2, y: sy + dy - h - 1, w: w + 4, h: h + 2 };
};

App.bboxOverlap = function(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
};

App.resolveNodeLabels = function() {
  const showMarkers = App.showElev && App.zoom >= 1.5;
  const pcx = App.ps.reduce((s, p) => s + p.sx, 0) / App.ps.length;
  const pcy = App.ps.reduce((s, p) => s + p.sy, 0) / App.ps.length;

  const items = App.SITE.map((s, i) => {
    const isH = App.showHighLow && i === App.hiIdx;
    const isL = App.showHighLow && i === App.loIdx;
    const base = App.labelOffsets[i];
    let text = '';
    if (App.showLabels) text = s.label;
    if (App.showElev) {
      const elevStr = App.dispElevVal(s.elev) + App.elevSuffix();
      const marker = showMarkers ? (isH ? ' ▲' : isL ? ' ▼' : '') : '';
      text = text ? `${text} ${elevStr}${marker}` : `${elevStr}${marker}`;
    }
    if (i === App.VA_IDX && text) text = text + ' ◈';
    return { i, sx: App.ps[i].sx, sy: App.ps[i].sy, dx: base.dx, dy: base.dy, a: base.a, text, shortened: false };
  });

  const boxOf = (it) => App.labelBbox(it.sx, it.sy, it.dx, it.dy, it.a, it.text);

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (!App.bboxOverlap(boxOf(items[i]), boxOf(items[j]))) continue;
      const djx = items[j].sx - pcx, djy = items[j].sy - pcy;
      const dlen = Math.sqrt(djx * djx + djy * djy) || 1;
      const nx = djx / dlen, ny = djy / dlen;
      const attempts = [
        { dx: Math.round(nx * 28), dy: Math.round(ny * 28), a: nx > 0.4 ? 'start' : nx < -0.4 ? 'end' : 'middle' },
        { dx: Math.round(-nx * 22), dy: Math.round(-ny * 22), a: nx > 0.4 ? 'end' : nx < -0.4 ? 'start' : 'middle' },
        { dx: 0, dy: -24, a: 'middle' },
        { dx: 0, dy: 24, a: 'middle' },
        { dx: Math.round(nx * 36), dy: Math.round(ny * 36), a: nx > 0.4 ? 'start' : nx < -0.4 ? 'end' : 'middle' },
      ];
      let resolved = false;
      for (const att of attempts) {
        const old = { dx: items[j].dx, dy: items[j].dy, a: items[j].a };
        Object.assign(items[j], att);
        if (!App.bboxOverlap(boxOf(items[i]), boxOf(items[j]))) { resolved = true; break; }
        Object.assign(items[j], old);
      }
      if (!resolved && (App.showLabels || App.showElev)) {
        const base = App.labelOffsets[j];
        const shortText = App.showLabels ? App.SITE[j].label : (App.dispElevVal(App.SITE[j].elev) + App.elevSuffix());
        items[j].shortened = true;
        items[j].text = shortText;
        items[j].dx = base.dx; items[j].dy = base.dy; items[j].a = base.a;
      }
    }
  }
  return items;
};
