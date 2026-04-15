// ── View helpers ──────────────────────────────────────────────────────────
App.updateViewBox = function() {
  App.vbW = App.BASE_W / App.zoom;
  App.vbH = App.BASE_H / App.zoom;
  const maxPanX = App.BASE_W * (1 - 1/App.zoom);
  const maxPanY = App.BASE_H * (1 - 1/App.zoom);
  App.vbX = Math.max(-App.BASE_W*0.3, Math.min(App.vbX, maxPanX + App.BASE_W*0.3));
  App.vbY = Math.max(-App.BASE_H*0.3, Math.min(App.vbY, maxPanY + App.BASE_H*0.3));
  App.svgEl.setAttribute('viewBox', `${App.vbX} ${App.vbY} ${App.vbW} ${App.vbH}`);
  document.getElementById('zoomPct').textContent = Math.round(App.zoom * 100) + '%';
  App.renderHudScale();
};

App.setZoom = function(newZoom, centerX, centerY) {
  const clamped = Math.max(App.MIN_ZOOM, Math.min(App.MAX_ZOOM, newZoom));
  if (clamped === App.zoom) return;
  const cx = centerX !== undefined ? centerX : App.vbX + App.vbW/2;
  const cy = centerY !== undefined ? centerY : App.vbY + App.vbH/2;
  const ratio = App.zoom / clamped;
  App.vbX = cx - (cx - App.vbX) * ratio;
  App.vbY = cy - (cy - App.vbY) * ratio;
  App.zoom = clamped;
  App.updateViewBox();
};

App.resetView = function() { App.zoom = 1; App.vbX = 0; App.vbY = 0; App.updateViewBox(); };

// ── Wheel zoom ────────────────────────────────────────────────────────────
App.mapWrap.addEventListener('wheel', (e) => {
  e.preventDefault();
  const rect = App.svgEl.getBoundingClientRect();
  const mx = (e.clientX - rect.left) / rect.width;
  const my = (e.clientY - rect.top) / rect.height;
  const cx = App.vbX + mx * App.vbW, cy = App.vbY + my * App.vbH;
  const steps = Math.max(0.5, Math.min(3, Math.abs(e.deltaY) / 100));
  const factor = e.deltaY > 0 ? Math.pow(0.95, steps) : Math.pow(1.05, steps);
  App.setZoom(App.zoom * factor, cx, cy);
}, { passive: false });

// ── Touch (pinch-zoom + rotate + pan) ────────────────────────────────────
App.mapWrap.addEventListener('touchstart', (e) => {
  if (App.activeTooltip && e.touches.length === 1) {
    App.activeTooltip = null;
    App.render();
  }
  if (e.touches.length === 2) {
    App.isPinching = true;
    const t = e.touches;
    App.lastTouchDist = Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    App.lastTouchCenter = { x: (t[0].clientX + t[1].clientX)/2, y: (t[0].clientY + t[1].clientY)/2 };
    App.lastTouchAngle = null;
  } else if (e.touches.length === 1 && !App.isPinching) {
    App.dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY, vbX: App.vbX, vbY: App.vbY };
    App.wasDragged = false;
  }
}, { passive: true });

App.mapWrap.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2 && App.isPinching) {
    e.preventDefault();
    const t = e.touches;
    const dist = Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const center = { x: (t[0].clientX + t[1].clientX)/2, y: (t[0].clientY + t[1].clientY)/2 };
    const rect = App.svgEl.getBoundingClientRect();
    const mx = (center.x - rect.left) / rect.width;
    const my = (center.y - rect.top) / rect.height;
    const cx = App.vbX + mx * App.vbW, cy = App.vbY + my * App.vbH;
    const rawFactor = dist / App.lastTouchDist;
    const factor = Math.max(0.97, Math.min(1.03, rawFactor));
    App.setZoom(App.zoom * factor, cx, cy);
    const angle = Math.atan2(t[0].clientY - t[1].clientY, t[0].clientX - t[1].clientX) * 180 / Math.PI;
    if (App.lastTouchAngle !== null) {
      let delta = angle - App.lastTouchAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      App.mapRotation += delta;
      App.render();
    }
    App.lastTouchAngle = angle;
    App.lastTouchDist = dist;
    App.lastTouchCenter = center;
    App.debouncedSaveRotation();
  } else if (e.touches.length === 1 && App.dragStart && !App.isPinching) {
    e.preventDefault();
    const dx = e.touches[0].clientX - App.dragStart.x;
    const dy = e.touches[0].clientY - App.dragStart.y;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) App.wasDragged = true;
    const rect = App.svgEl.getBoundingClientRect();
    App.vbX = App.dragStart.vbX - dx * (App.vbW / rect.width);
    App.vbY = App.dragStart.vbY - dy * (App.vbH / rect.height);
    App.updateViewBox();
  }
}, { passive: false });

App.mapWrap.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) { App.isPinching = false; App.lastTouchAngle = null; }
  if (e.touches.length === 0) {
    if (!App.wasDragged && App.addNodeMode && App.dragStart) {
      const touch = e.changedTouches[0];
      App.addNodeAt(touch.clientX, touch.clientY);
    } else if (!App.wasDragged && App.addInteriorMode && App.dragStart) {
      const touch = e.changedTouches[0];
      App.addInteriorPointAt(touch.clientX, touch.clientY);
    }
    App.dragStart = null;
    App.wasDragged = false;
  }
});

// ── Mouse drag / pan ──────────────────────────────────────────────────────
App.mapWrap.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return;
  if (App.compassDragActive) return;
  if (e.target.closest && e.target.closest('#hudCompass')) return;
  App.dragStart = { x: e.clientX, y: e.clientY, vbX: App.vbX, vbY: App.vbY };
  App.wasDragged = false;
  if (!App.addNodeMode && !App.addInteriorMode) App.mapWrap.style.cursor = 'grabbing';
});

window.addEventListener('mousemove', (e) => {
  if (App.compassDragActive) {
    const angle = App.angleFromCompassCenter(e.clientX, e.clientY);
    let delta = angle - App.compassDragStartAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    App.mapRotation = App.compassDragStartRot + delta;
    App.render();
    App.debouncedSaveRotation();
    return;
  }
  if (!App.dragStart) return;
  const dx = e.clientX - App.dragStart.x, dy = e.clientY - App.dragStart.y;
  if (Math.abs(dx) > 5 || Math.abs(dy) > 5) App.wasDragged = true;
  const rect = App.svgEl.getBoundingClientRect();
  App.vbX = App.dragStart.vbX - dx * (App.vbW / rect.width);
  App.vbY = App.dragStart.vbY - dy * (App.vbH / rect.height);
  App.updateViewBox();
});

window.addEventListener('mouseup', () => {
  if (App.compassDragActive) {
    App.compassDragActive = false;
    const compassEl = document.getElementById('hudCompass');
    if (compassEl) compassEl.style.cursor = 'grab';
    return;
  }
  App.dragStart = null;
  if (!App.addNodeMode && !App.addInteriorMode) App.mapWrap.style.cursor = '';
});

// ── Zoom buttons ──────────────────────────────────────────────────────────
document.getElementById('zoomIn').addEventListener('click',  () => App.setZoom(App.zoom * 1.1));
document.getElementById('zoomOut').addEventListener('click', () => App.setZoom(App.zoom / 1.1));
document.getElementById('resetView').addEventListener('click', App.resetView);
