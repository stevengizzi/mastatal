// ── Node placement / deletion ─────────────────────────────────────────────
App.addNodeAt = function(clientX, clientY) {
  const { svgX, svgY } = App.clientToSvgCoords(clientX, clientY);
  const { x: ux, y: uy } = App.unrotatePoint(svgX, svgY);
  const edgeIdx = App.nearestEdgeTo(ux, uy);
  const { lat, lon } = App.svgCoordsToLatLon(ux, uy);
  const elev = (App.SITE[edgeIdx].elev + App.SITE[(edgeIdx + 1) % App.SITE.length].elev) / 2;

  const usedLabels = new Set(App.SITE.map(s => s.label));
  let n = App.SITE.length + 1;
  while (usedLabels.has(`P${n}`)) n++;

  App.measurements = App.measurements.map(([a, b]) => [a > edgeIdx ? a+1 : a, b > edgeIdx ? b+1 : b]);
  App.selNodes = App.selNodes.map(i => i > edgeIdx ? i+1 : i);
  if (App.selectedNodeIdx !== null && App.selectedNodeIdx > edgeIdx) App.selectedNodeIdx++;
  if (App.VA_IDX > edgeIdx) App.VA_IDX++;

  App.SITE.splice(edgeIdx + 1, 0, { label: `P${n}`, lat, lon, elev });
  App.recompute(); App.render(); App.renderStats(); App.updateSubLine(); App.autoSave();
};

App.deleteNode = function(idx) {
  if (App.SITE.length <= 3) return;
  App.measurements = App.measurements
    .filter(([a, b]) => a !== idx && b !== idx)
    .map(([a, b]) => [a > idx ? a-1 : a, b > idx ? b-1 : b]);
  App.selNodes = App.selNodes.filter(i => i !== idx).map(i => i > idx ? i-1 : i);
  if (App.VA_IDX === idx) App.VA_IDX = 0; else if (App.VA_IDX > idx) App.VA_IDX--;
  App.SITE.splice(idx, 1);
  App.selectedNodeIdx = null; App.editOriginal = null; App.deleteConfirmPending = false;
  App.hideEditPanel();
  App.recompute(); App.render(); App.renderStats(); App.updateSubLine(); App.autoSave();
};

// ── Interior point placement / deletion ───────────────────────────────────
App.addInteriorPointAt = function(clientX, clientY) {
  const { svgX, svgY } = App.clientToSvgCoords(clientX, clientY);
  const { x: ux, y: uy } = App.unrotatePoint(svgX, svgY);
  const { lat, lon } = App.svgCoordsToLatLon(ux, uy);

  const usedLabels = new Set(App.INTERIOR.map(s => s.label));
  let n = 1;
  while (usedLabels.has(`I${n}`)) n++;

  const allElevs = [...App.SITE.map(s => s.elev), ...App.INTERIOR.map(s => s.elev)];
  const defaultElev = allElevs.reduce((a, b) => a + b, 0) / allElevs.length;

  App.INTERIOR.push({ label: `I${n}`, lat, lon, elev: parseFloat(defaultElev.toFixed(2)) });
  const newIdx = App.INTERIOR.length - 1;

  App.recompute();
  App.render();
  App.renderStats();
  App.showInteriorEditPanel(newIdx);
  App.autoSave();
};

App.deleteInteriorPoint = function(idx) {
  const iCode = -(idx + 1);
  App.measurements = App.measurements
    .filter(([a, b]) => a !== iCode && b !== iCode)
    .map(([a, b]) => {
      const adjA = a < 0 && -(a+1) > idx ? a + 1 : a;
      const adjB = b < 0 && -(b+1) > idx ? b + 1 : b;
      return [adjA, adjB];
    });
  App.selNodes = App.selNodes
    .filter(i => i !== iCode)
    .map(i => (i < 0 && -(i+1) > idx) ? i + 1 : i);

  App.INTERIOR.splice(idx, 1);
  App.selectedInteriorIdx = null; App.interiorEditOriginal = null; App.deleteInteriorConfirmPending = false;
  App.hideEditPanel();
  App.recompute(); App.render(); App.renderStats(); App.updateSubLine(); App.autoSave();
};

// ── Boundary node click / edit ────────────────────────────────────────────
App.handleNodeClick = function(idx) {
  if (App.measureMode) {
    if (App.selNodes.length === 0) {
      App.selNodes = [idx];
    } else if (App.selNodes.length === 1) {
      if (App.selNodes[0] === idx) {
        App.selNodes = [];
      } else {
        const pair = [App.selNodes[0], idx];
        const exists = App.measurements.some(m =>
          (m[0]===pair[0]&&m[1]===pair[1]) || (m[0]===pair[1]&&m[1]===pair[0])
        );
        if (!exists) { App.measurements.push(pair); App.autoSave(); }
        App.selNodes = [];
      }
    } else {
      App.selNodes = [idx];
    }
    App.render(); App.updateHint(); App.updateClearBtn();
    return;
  }
  if (App.selectedNodeIdx === idx) { App.cancelEdit(); return; }
  App.showEditPanel(idx);
  App.render();
};

App.showEditPanel = function(idx) {
  if (App.selectedInteriorIdx !== null) {
    App.selectedInteriorIdx = null; App.interiorEditOriginal = null; App.deleteInteriorConfirmPending = false;
  }
  App.selectedNodeIdx = idx;
  App.editOriginal = { ...App.SITE[idx] };
  App.deleteConfirmPending = false;

  const s = App.SITE[idx];
  const elevDisplayVal = App.elevUnit === 'ft' ? Math.round(App.m2ft(s.elev)) : parseFloat(s.elev.toFixed(1));
  const elevStep = App.elevUnit === 'ft' ? 1 : 0.1;
  const elevFieldLabel = App.elevUnit === 'ft' ? 'Elevation (ft)' : 'Elevation (m)';
  const elevHint = App.elevUnit === 'ft' ? `${s.elev.toFixed(1)} m` : `${Math.round(App.m2ft(s.elev))} ft`;
  const panel = document.getElementById('editPanel');
  panel.style.display = 'block';
  panel.innerHTML = `
    <div class="edit-panel-title">Edit Node — ${s.label}</div>
    <div class="edit-fields">
      <div class="edit-field">
        <span class="edit-field-label">Label</span>
        <input type="text" id="ei-label" value="${s.label}">
      </div>
      <div class="edit-field">
        <span class="edit-field-label">${elevFieldLabel}</span>
        <input type="number" id="ei-elev" value="${elevDisplayVal}" step="${elevStep}">
        <span class="edit-elev-hint" id="ei-elev-hint">${elevHint}</span>
      </div>
      <div class="edit-field">
        <span class="edit-field-label">Latitude (°)</span>
        <input type="number" id="ei-lat" value="${s.lat}" step="0.00001">
      </div>
      <div class="edit-field">
        <span class="edit-field-label">Longitude (°)</span>
        <input type="number" id="ei-lon" value="${s.lon}" step="0.00001">
      </div>
    </div>
    <div class="edit-actions">
      <button class="btn btn-save" id="ei-save">Save</button>
      <button class="btn btn-cancel" id="ei-cancel">Cancel</button>
      <button class="btn btn-delete" id="ei-delete">Delete Node</button>
    </div>
  `;
  document.getElementById('ei-save').addEventListener('click', App.saveEdit);
  document.getElementById('ei-cancel').addEventListener('click', App.cancelEdit);
  document.getElementById('ei-delete').addEventListener('click', App.handleDeleteClick);
  const liveUpdate = () => App.applyEditInputs();
  document.getElementById('ei-label').addEventListener('input', liveUpdate);
  document.getElementById('ei-lat').addEventListener('input', liveUpdate);
  document.getElementById('ei-lon').addEventListener('input', liveUpdate);
  document.getElementById('ei-elev').addEventListener('input', () => {
    const v = parseFloat(document.getElementById('ei-elev').value);
    if (!isNaN(v)) {
      const hint = App.elevUnit === 'ft' ? App.ft2m(v).toFixed(1) + ' m' : Math.round(App.m2ft(v)) + ' ft';
      document.getElementById('ei-elev-hint').textContent = hint;
    }
    liveUpdate();
  });
};

App.applyEditInputs = function() {
  const idx = App.selectedNodeIdx;
  if (idx === null) return;
  const label = document.getElementById('ei-label').value.trim() || App.editOriginal.label;
  const lat = parseFloat(document.getElementById('ei-lat').value);
  const lon = parseFloat(document.getElementById('ei-lon').value);
  const elevInput = parseFloat(document.getElementById('ei-elev').value);
  if (isNaN(lat) || isNaN(lon) || isNaN(elevInput)) return;
  const elev = App.elevUnit === 'ft' ? App.ft2m(elevInput) : elevInput;
  App.SITE[idx] = { label, lat, lon, elev };
  App.recompute(); App.render(); App.renderStats();
};

App.saveEdit = function() {
  App.applyEditInputs();
  App.editOriginal = null; App.selectedNodeIdx = null; App.deleteConfirmPending = false;
  App.hideEditPanel(); App.render(); App.renderStats(); App.autoSave();
};

App.cancelEdit = function() {
  if (App.selectedNodeIdx !== null && App.editOriginal !== null) {
    App.SITE[App.selectedNodeIdx] = { ...App.editOriginal };
  }
  App.selectedNodeIdx = null; App.editOriginal = null; App.deleteConfirmPending = false;
  App.hideEditPanel(); App.recompute(); App.render(); App.renderStats();
};

App.handleDeleteClick = function() {
  if (App.SITE.length <= 3) {
    const btn = document.getElementById('ei-delete');
    if (btn) { btn.textContent = 'Min 3 nodes'; btn.disabled = true; }
    return;
  }
  if (!App.deleteConfirmPending) {
    App.deleteConfirmPending = true;
    const btn = document.getElementById('ei-delete');
    if (btn) { btn.textContent = 'Confirm Delete?'; btn.classList.add('confirm'); }
    return;
  }
  App.deleteNode(App.selectedNodeIdx);
};

App.hideEditPanel = function() {
  const panel = document.getElementById('editPanel');
  panel.style.display = 'none';
  panel.innerHTML = '';
};

// ── Interior point click / edit ───────────────────────────────────────────
App.handleInteriorClick = function(idx) {
  if (App.measureMode) {
    const iCode = -(idx + 1);
    if (App.selNodes.length === 0) {
      App.selNodes = [iCode];
    } else if (App.selNodes.length === 1) {
      if (App.selNodes[0] === iCode) {
        App.selNodes = [];
      } else {
        const a = App.selNodes[0], b = iCode;
        const exists = App.measurements.some(m =>
          (m[0]===a&&m[1]===b) || (m[0]===b&&m[1]===a)
        );
        if (!exists) { App.measurements.push([a, b]); App.autoSave(); }
        App.selNodes = [];
      }
    } else {
      App.selNodes = [iCode];
    }
    App.render(); App.updateHint(); App.updateClearBtn();
    return;
  }
  if (App.selectedInteriorIdx === idx) { App.cancelInteriorEdit(); return; }
  App.showInteriorEditPanel(idx);
  App.render();
};

App.showInteriorEditPanel = function(idx) {
  if (App.selectedNodeIdx !== null) {
    App.selectedNodeIdx = null; App.editOriginal = null; App.deleteConfirmPending = false;
  }
  App.selectedInteriorIdx = idx;
  App.interiorEditOriginal = { ...App.INTERIOR[idx] };
  App.deleteInteriorConfirmPending = false;

  const s = App.INTERIOR[idx];
  const elevDisplayVal = App.elevUnit === 'ft' ? Math.round(App.m2ft(s.elev)) : parseFloat(s.elev.toFixed(1));
  const elevStep = App.elevUnit === 'ft' ? 1 : 0.1;
  const elevFieldLabel = App.elevUnit === 'ft' ? 'Elevation (ft)' : 'Elevation (m)';
  const elevHint = App.elevUnit === 'ft' ? `${s.elev.toFixed(1)} m` : `${Math.round(App.m2ft(s.elev))} ft`;

  const panel = document.getElementById('editPanel');
  panel.style.display = 'block';
  panel.innerHTML = `
    <div class="edit-panel-title">Edit Interior Point — ${s.label}</div>
    <div class="edit-fields">
      <div class="edit-field">
        <span class="edit-field-label">Label</span>
        <input type="text" id="ei-label" value="${s.label}">
      </div>
      <div class="edit-field">
        <span class="edit-field-label">${elevFieldLabel}</span>
        <input type="number" id="ei-elev" value="${elevDisplayVal}" step="${elevStep}">
        <span class="edit-elev-hint" id="ei-elev-hint">${elevHint}</span>
      </div>
      <div class="edit-field">
        <span class="edit-field-label">Latitude (°)</span>
        <input type="number" id="ei-lat" value="${s.lat}" step="0.00001">
      </div>
      <div class="edit-field">
        <span class="edit-field-label">Longitude (°)</span>
        <input type="number" id="ei-lon" value="${s.lon}" step="0.00001">
      </div>
    </div>
    <div class="edit-actions">
      <button class="btn btn-save" id="ei-save">Save</button>
      <button class="btn btn-cancel" id="ei-cancel">Cancel</button>
      <button class="btn btn-delete" id="ei-delete">Delete Point</button>
    </div>
  `;
  document.getElementById('ei-save').addEventListener('click', App.saveInteriorEdit);
  document.getElementById('ei-cancel').addEventListener('click', App.cancelInteriorEdit);
  document.getElementById('ei-delete').addEventListener('click', App.handleInteriorDeleteClick);
  const liveUpdate = () => App.applyInteriorEditInputs();
  document.getElementById('ei-label').addEventListener('input', liveUpdate);
  document.getElementById('ei-lat').addEventListener('input', liveUpdate);
  document.getElementById('ei-lon').addEventListener('input', liveUpdate);
  document.getElementById('ei-elev').addEventListener('input', () => {
    const v = parseFloat(document.getElementById('ei-elev').value);
    if (!isNaN(v)) {
      const hint = App.elevUnit === 'ft' ? App.ft2m(v).toFixed(1) + ' m' : Math.round(App.m2ft(v)) + ' ft';
      document.getElementById('ei-elev-hint').textContent = hint;
    }
    liveUpdate();
  });
};

App.applyInteriorEditInputs = function() {
  const idx = App.selectedInteriorIdx;
  if (idx === null) return;
  const label = document.getElementById('ei-label').value.trim() || App.interiorEditOriginal.label;
  const lat = parseFloat(document.getElementById('ei-lat').value);
  const lon = parseFloat(document.getElementById('ei-lon').value);
  const elevInput = parseFloat(document.getElementById('ei-elev').value);
  if (isNaN(lat) || isNaN(lon) || isNaN(elevInput)) return;
  const elev = App.elevUnit === 'ft' ? App.ft2m(elevInput) : elevInput;
  App.INTERIOR[idx] = { label, lat, lon, elev };
  App.recompute(); App.render(); App.renderStats();
};

App.saveInteriorEdit = function() {
  App.applyInteriorEditInputs();
  App.interiorEditOriginal = null; App.selectedInteriorIdx = null; App.deleteInteriorConfirmPending = false;
  App.hideEditPanel(); App.render(); App.renderStats(); App.autoSave();
};

App.cancelInteriorEdit = function() {
  if (App.selectedInteriorIdx !== null && App.interiorEditOriginal !== null) {
    App.INTERIOR[App.selectedInteriorIdx] = { ...App.interiorEditOriginal };
  }
  App.selectedInteriorIdx = null; App.interiorEditOriginal = null; App.deleteInteriorConfirmPending = false;
  App.hideEditPanel(); App.recompute(); App.render(); App.renderStats();
};

App.handleInteriorDeleteClick = function() {
  if (!App.deleteInteriorConfirmPending) {
    App.deleteInteriorConfirmPending = true;
    const btn = document.getElementById('ei-delete');
    if (btn) { btn.textContent = 'Confirm Delete?'; btn.classList.add('confirm'); }
    return;
  }
  App.deleteInteriorPoint(App.selectedInteriorIdx);
};

// ── Edge info ─────────────────────────────────────────────────────────────
App.showEdgeInfo = function(i) {
  const info = document.getElementById('edgeInfo'), e = App.edges[i];
  info.innerHTML = `<strong style="color:#7db860">${App.SITE[i].label} → ${App.SITE[(i+1)%App.SITE.length].label}:</strong> ${e.distM.toFixed(1)}m (${e.distFt.toFixed(0)}ft) · Bearing ${e.bearing.toFixed(0)}°`;
  info.style.display = 'block';
};

App.hideEdgeInfo = function() { document.getElementById('edgeInfo').style.display = 'none'; };

App.showEdgeTooltip = function(i) {
  App.activeTooltip = { type: 'edge', idx: i };
  App.render();
  App.showEdgeInfo(i);
};
