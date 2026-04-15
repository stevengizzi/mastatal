// ── UI state helpers ──────────────────────────────────────────────────────
App.updateHint = function() {
  const hint = document.getElementById('hint');
  if (App.measureMode && App.selNodes.length === 1) {
    hint.textContent = `${App.labelByIdx(App.selNodes[0])} selected — tap second node`;
    hint.style.display = 'inline-block';
  } else if (App.addNodeMode) {
    hint.textContent = 'Click map to place node on nearest edge · click "+ Node" or Esc to cancel';
    hint.style.display = 'inline-block';
  } else if (App.addInteriorMode) {
    hint.textContent = 'Click/tap to place interior point · click "+ Interior" or Esc to cancel';
    hint.style.display = 'inline-block';
  } else {
    hint.style.display = 'none';
  }
};

App.updateClearBtn = function() {
  const btn = document.getElementById('btnClear');
  btn.style.display = App.measurements.length > 0 ? 'inline-block' : 'none';
  if (App.measurements.length > 0) btn.textContent = `Clear (${App.measurements.length})`;
};

App.updateAddNodeBtn = function() {
  const btn = document.getElementById('btnAddNode');
  btn.className = 'btn btn-add-node' + (App.addNodeMode ? ' active' : '');
  btn.textContent = App.addNodeMode ? '✦ Adding' : '+ Node';
};

App.updateAddInteriorBtn = function() {
  const btn = document.getElementById('btnAddInterior');
  btn.className = 'btn btn-add-interior' + (App.addInteriorMode ? ' active' : '');
  btn.textContent = App.addInteriorMode ? '✦ Interior' : '+ Interior';
};

// ── Layer toggles ─────────────────────────────────────────────────────────
document.getElementById('togLen').addEventListener('change', (e) => {
  App.showLen = e.target.checked; e.target.parentElement.className = App.showLen ? 'on' : 'off'; App.render();
});
document.getElementById('togElev').addEventListener('change', (e) => {
  App.showElev = e.target.checked; e.target.parentElement.className = App.showElev ? 'on' : 'off'; App.render();
});
document.getElementById('togLabels').addEventListener('change', (e) => {
  App.showLabels = e.target.checked; e.target.parentElement.className = App.showLabels ? 'on' : 'off'; App.render();
});
document.getElementById('togInterior').addEventListener('change', (e) => {
  App.showInterior = e.target.checked; e.target.parentElement.className = App.showInterior ? 'on' : 'off'; App.render();
});
document.getElementById('togContours').addEventListener('change', (e) => {
  App.showContours = e.target.checked; e.target.parentElement.className = App.showContours ? 'on' : 'off';
  const clLabel = document.getElementById('togContourLabelsLabel');
  if (clLabel) clLabel.style.opacity = App.showContours ? '' : '0.35';
  App.render();
});
document.getElementById('togContourLabels').addEventListener('change', (e) => {
  App.showContourLabels = e.target.checked; e.target.parentElement.className = App.showContourLabels ? 'on' : 'off'; App.render();
});
document.getElementById('togHighLow').addEventListener('change', (e) => {
  App.showHighLow = e.target.checked; e.target.parentElement.className = App.showHighLow ? 'on' : 'off'; App.render();
});
document.getElementById('togAngles').addEventListener('change', (e) => {
  App.showAngles = e.target.checked; e.target.parentElement.className = App.showAngles ? 'on' : 'off'; App.render();
});

// ── Measure mode ──────────────────────────────────────────────────────────
document.getElementById('btnMeasure').addEventListener('click', () => {
  App.measureMode = !App.measureMode;
  if (App.measureMode) {
    App.addNodeMode = false; App.updateAddNodeBtn();
    App.addInteriorMode = false; App.updateAddInteriorBtn();
    App.hideEditPanel(); App.selectedNodeIdx = null; App.selectedInteriorIdx = null;
  }
  App.selNodes = [];
  const btn = document.getElementById('btnMeasure');
  btn.className = 'btn btn-measure' + (App.measureMode ? ' active' : '');
  btn.textContent = App.measureMode ? '✦ Measuring' : '◇ Measure';
  App.updateHint(); App.render();
});

document.getElementById('btnClear').addEventListener('click', () => {
  App.measurements = []; App.selNodes = []; App.render(); App.updateClearBtn(); App.updateHint(); App.autoSave();
});

// ── Add node mode ─────────────────────────────────────────────────────────
document.getElementById('btnAddNode').addEventListener('click', () => {
  App.addNodeMode = !App.addNodeMode;
  if (App.addNodeMode) {
    App.measureMode = false; App.selNodes = [];
    App.addInteriorMode = false; App.updateAddInteriorBtn();
    document.getElementById('btnMeasure').className = 'btn btn-measure';
    document.getElementById('btnMeasure').textContent = '◇ Measure';
    App.hideEditPanel(); App.selectedNodeIdx = null; App.selectedInteriorIdx = null;
    App.mapWrap.style.cursor = 'crosshair';
  } else {
    App.mapWrap.style.cursor = '';
  }
  App.updateAddNodeBtn(); App.updateHint(); App.render();
});

// ── Add interior mode ─────────────────────────────────────────────────────
document.getElementById('btnAddInterior').addEventListener('click', () => {
  App.addInteriorMode = !App.addInteriorMode;
  if (App.addInteriorMode) {
    App.measureMode = false; App.selNodes = [];
    App.addNodeMode = false; App.updateAddNodeBtn();
    document.getElementById('btnMeasure').className = 'btn btn-measure';
    document.getElementById('btnMeasure').textContent = '◇ Measure';
    App.hideEditPanel(); App.selectedNodeIdx = null; App.selectedInteriorIdx = null;
    App.mapWrap.style.cursor = 'crosshair';
  } else {
    App.mapWrap.style.cursor = '';
  }
  App.updateAddInteriorBtn(); App.updateHint(); App.render();
});

// Escape exits placement modes
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (App.addInteriorMode) {
    App.addInteriorMode = false; App.updateAddInteriorBtn(); App.updateHint();
    App.mapWrap.style.cursor = ''; App.render();
  } else if (App.addNodeMode) {
    App.addNodeMode = false; App.updateAddNodeBtn(); App.updateHint();
    App.mapWrap.style.cursor = ''; App.render();
  }
});

// ── Unit toggle ───────────────────────────────────────────────────────────
document.getElementById('btnUnitFt').addEventListener('click', () => {
  if (App.elevUnit === 'ft') return;
  App.elevUnit = 'ft';
  document.getElementById('btnUnitFt').classList.add('active');
  document.getElementById('btnUnitM').classList.remove('active');
  if (App.selectedNodeIdx !== null) App.showEditPanel(App.selectedNodeIdx);
  else if (App.selectedInteriorIdx !== null) App.showInteriorEditPanel(App.selectedInteriorIdx);
  App.updateSubLine(); App.render(); App.renderStats(); App.autoSave();
});
document.getElementById('btnUnitM').addEventListener('click', () => {
  if (App.elevUnit === 'm') return;
  App.elevUnit = 'm';
  document.getElementById('btnUnitM').classList.add('active');
  document.getElementById('btnUnitFt').classList.remove('active');
  if (App.selectedNodeIdx !== null) App.showEditPanel(App.selectedNodeIdx);
  else if (App.selectedInteriorIdx !== null) App.showInteriorEditPanel(App.selectedInteriorIdx);
  App.updateSubLine(); App.render(); App.renderStats(); App.autoSave();
});

// ── Scale bar mode toggle ─────────────────────────────────────────────────
document.getElementById('btnScaleBar').addEventListener('click', () => {
  if (App.scaleBarMode === 'bar') return;
  App.scaleBarMode = 'bar';
  document.getElementById('btnScaleBar').classList.add('active');
  document.getElementById('btnScaleRatio').classList.remove('active');
  App.render();
});
document.getElementById('btnScaleRatio').addEventListener('click', () => {
  if (App.scaleBarMode === 'ratio') return;
  App.scaleBarMode = 'ratio';
  document.getElementById('btnScaleRatio').classList.add('active');
  document.getElementById('btnScaleBar').classList.remove('active');
  App.render();
});

// ── Layers dropdown ───────────────────────────────────────────────────────
document.getElementById('btnLayers').addEventListener('click', (e) => {
  e.stopPropagation();
  const group = document.getElementById('layersGroup');
  const isOpen = group.classList.toggle('layers-open');
  document.getElementById('btnLayers').textContent = isOpen ? '☰ Layers ▾' : '☰ Layers';
});

document.addEventListener('click', (e) => {
  const group = document.getElementById('layersGroup');
  if (!group.classList.contains('layers-open')) return;
  const clickedInside = group.contains(e.target) || document.getElementById('btnLayers').contains(e.target);
  if (!clickedInside) {
    group.classList.remove('layers-open');
    document.getElementById('btnLayers').textContent = '☰ Layers';
  }
});

// ── Fullscreen ────────────────────────────────────────────────────────────
App.enterFullscreen = function() {
  const t = document.documentElement;
  if      (t.requestFullscreen)       t.requestFullscreen();
  else if (t.webkitRequestFullscreen) t.webkitRequestFullscreen();
  else if (t.mozRequestFullScreen)    t.mozRequestFullScreen();
  else if (t.msRequestFullscreen)     t.msRequestFullscreen();
};

App.exitFullscreen = function() {
  if      (document.exitFullscreen)       document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if (document.mozCancelFullScreen)  document.mozCancelFullScreen();
  else if (document.msExitFullscreen)     document.msExitFullscreen();
};

App.onFullscreenChange = function() {
  App.isFullscreen = !!(
    document.fullscreenElement       ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement    ||
    document.msFullscreenElement
  );
  document.body.classList.toggle('fs-mode', App.isFullscreen);
  if (!App.isFullscreen) {
    App.toolbarCollapsed = false;
    document.body.classList.remove('toolbar-collapsed');
  }
  const btn = document.getElementById('btnFullscreen');
  if (btn) btn.classList.toggle('active', App.isFullscreen);
  if (!App.isFullscreen) App.render();
};

document.getElementById('btnToolbarCollapse').addEventListener('click', () => {
  App.toolbarCollapsed = !App.toolbarCollapsed;
  document.body.classList.toggle('toolbar-collapsed', App.toolbarCollapsed);
});

document.addEventListener('fullscreenchange',       App.onFullscreenChange);
document.addEventListener('webkitfullscreenchange', App.onFullscreenChange);
document.addEventListener('mozfullscreenchange',    App.onFullscreenChange);
document.addEventListener('MSFullscreenChange',     App.onFullscreenChange);

document.getElementById('btnFullscreen').addEventListener('click', () => {
  if (App.isFullscreen) App.exitFullscreen(); else App.enterFullscreen();
});

// ── Compass drag rotation ─────────────────────────────────────────────────
App.getCompassCenterScreen = function() {
  const compassEl = document.getElementById('hudCompass');
  if (!compassEl) return null;
  const r = compassEl.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};

App.angleFromCompassCenter = function(clientX, clientY) {
  const c = App.getCompassCenterScreen();
  if (!c) return 0;
  return Math.atan2(clientX - c.x, -(clientY - c.y)) * 180 / Math.PI;
};

App.initCompassHandlers = function() {
  const compassEl = document.getElementById('hudCompass');
  if (!compassEl) return;
  compassEl.addEventListener('mousedown', (e) => {
    e.stopPropagation(); e.preventDefault();
    App.compassDragActive = true;
    App.compassDragStartAngle = App.angleFromCompassCenter(e.clientX, e.clientY);
    App.compassDragStartRot = App.mapRotation;
    compassEl.style.cursor = 'grabbing';
  });
  compassEl.addEventListener('dblclick', (e) => { e.stopPropagation(); App.mapRotation = 0; App.render(); App.autoSave(); });
  compassEl.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      e.stopPropagation();
      App.compassDragActive = true;
      App.compassDragStartAngle = App.angleFromCompassCenter(e.touches[0].clientX, e.touches[0].clientY);
      App.compassDragStartRot = App.mapRotation;
    }
  }, { passive: true });
  compassEl.addEventListener('touchmove', (e) => {
    if (App.compassDragActive && e.touches.length === 1) {
      e.preventDefault(); e.stopPropagation();
      const angle = App.angleFromCompassCenter(e.touches[0].clientX, e.touches[0].clientY);
      let delta = angle - App.compassDragStartAngle;
      if (delta > 180) delta -= 360; if (delta < -180) delta += 360;
      App.mapRotation = App.compassDragStartRot + delta;
      App.renderHudCompass();
      App.render();
      App.debouncedSaveRotation();
    }
  }, { passive: false });
  compassEl.addEventListener('touchend', (e) => {
    if (App.compassDragActive) { e.stopPropagation(); App.compassDragActive = false; compassEl.style.cursor = 'grab'; }
  });
};

// ── Inline scale editing ──────────────────────────────────────────────────
App.startInlineScaleEdit = function(textEl, mode) {
  if (App.scaleInlineActive) return;
  App.scaleInlineActive = true;
  const rect = textEl.getBoundingClientRect();
  const inp = document.getElementById('scaleInlineInput');
  inp.style.left   = rect.left + 'px';
  inp.style.top    = rect.top + 'px';
  inp.style.width  = Math.max(rect.width + 20, 60) + 'px';
  inp.style.height = Math.max(rect.height + 4, 18) + 'px';
  if (mode === 'bar') {
    inp.value = Number.isInteger(App.scaleMeterVal) ? App.scaleMeterVal : parseFloat(App.scaleMeterVal.toFixed(1));
    inp.min = 1; inp.max = 500; inp.step = 1;
  } else {
    inp.value = App.roundedRatio(App.currentRatio());
    inp.min = 50; inp.max = 5000; inp.step = 10;
  }
  inp.style.display = 'block';
  requestAnimationFrame(() => { inp.focus(); inp.select(); });

  const confirm = () => {
    if (!App.scaleInlineActive) return;
    App.scaleInlineActive = false;
    inp.style.display = 'none';
    inp.onblur = null; inp.oninput = null; inp.onkeydown = null;
    const v = parseFloat(inp.value);
    if (!isNaN(v) && v > 0) {
      if (mode === 'bar') { App.scaleMeterVal = Math.max(1, Math.min(500, v)); }
      else { App.setZoom(App.zoomForRatio(Math.max(50, Math.min(5000, Math.round(v))))); }
      App.render();
    }
  };
  const cancel = () => {
    App.scaleInlineActive = false;
    inp.style.display = 'none';
    inp.onblur = null; inp.oninput = null; inp.onkeydown = null;
  };
  inp.onkeydown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); confirm(); }
    if (e.key === 'Escape') { e.preventDefault(); cancel(); }
  };
  inp.oninput = mode === 'bar' ? () => {
    const v = parseFloat(inp.value);
    if (!isNaN(v) && v > 0) { App.scaleMeterVal = Math.max(1, Math.min(500, v)); App.render(); }
  } : null;
  inp.onblur = confirm;
};
