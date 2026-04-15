// ── JSON Export ───────────────────────────────────────────────────────────
App.exportData = function() {
  App.recompute();
  const { interval } = App.computeContourLevels(App.globalMinE, App.globalMaxE);
  const payload = {
    metadata: {
      exportDate: new Date().toISOString().slice(0, 10),
      elevUnit: App.elevUnit,
      mapRotation: App.mapRotation,
      contourInterval: interval,
    },
    VA_IDX: App.VA_IDX,
    SITE:         App.SITE.map(n => ({ ...n })),
    INTERIOR:     App.INTERIOR.map(n => ({ ...n })),
    measurements: App.measurements.map(m => [...m]),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `mastatal-site-data-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ── JSON Import ───────────────────────────────────────────────────────────
App.importData = function(file) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!Array.isArray(data.SITE) || data.SITE.length < 3) {
        alert('Import failed: SITE must be an array of at least 3 nodes with lat/lon/elev/label fields.');
        return;
      }
      const valid = data.SITE.every(n =>
        typeof n.lat === 'number' && typeof n.lon === 'number' &&
        typeof n.elev === 'number' && typeof n.label === 'string'
      );
      if (!valid) {
        alert('Import failed: one or more SITE nodes are missing lat, lon, elev, or label.');
        return;
      }

      App.SITE.length = 0;
      data.SITE.forEach(n => App.SITE.push({ ...n }));

      App.INTERIOR.length = 0;
      if (Array.isArray(data.INTERIOR)) data.INTERIOR.forEach(n => App.INTERIOR.push({ ...n }));

      if (typeof data.VA_IDX === 'number') App.VA_IDX = Math.max(0, Math.min(data.VA_IDX, App.SITE.length - 1));

      App.measurements.length = 0;
      if (Array.isArray(data.measurements)) data.measurements.forEach(m => App.measurements.push(m));

      if (data.metadata) {
        if (data.metadata.elevUnit === 'ft' || data.metadata.elevUnit === 'm') {
          App.elevUnit = data.metadata.elevUnit;
          document.getElementById('btnUnitFt').classList.toggle('active', App.elevUnit === 'ft');
          document.getElementById('btnUnitM').classList.toggle('active', App.elevUnit === 'm');
        }
        if (typeof data.metadata.mapRotation === 'number') App.mapRotation = data.metadata.mapRotation;
      }

      App.autoSave();
      App.recompute(); App.render(); App.renderStats(); App.updateSubLine(); App.updateClearBtn();

      const hintEl = document.getElementById('hint');
      hintEl.textContent = `Imported ${App.SITE.length} boundary node${App.SITE.length !== 1 ? 's' : ''}, ${App.INTERIOR.length} interior point${App.INTERIOR.length !== 1 ? 's' : ''}.`;
      hintEl.style.display     = 'inline-block';
      hintEl.style.color       = '#7db860';
      hintEl.style.background  = '#1a2a1a';
      hintEl.style.borderColor = '#2a4a2a';
      setTimeout(() => {
        hintEl.style.display = 'none';
        hintEl.style.color = hintEl.style.background = hintEl.style.borderColor = '';
      }, 3000);
    } catch(err) {
      alert('Import failed: could not parse JSON file.');
    }
  };
  reader.readAsText(file);
};

// ── Data panel controls ───────────────────────────────────────────────────
document.getElementById('dataToggle').addEventListener('click', () => {
  const open = document.getElementById('dataBody').classList.toggle('open');
  document.getElementById('dataToggle').textContent =
    open ? '▾ Data — export / import / reset' : '▸ Data — export / import / reset';
});

document.getElementById('btnExport').addEventListener('click', App.exportData);

document.getElementById('btnImport').addEventListener('click', () => {
  document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) App.importData(file);
  e.target.value = '';
});

document.getElementById('btnReset').addEventListener('click', () => {
  if (confirm('Reset all data to original defaults? This will erase all changes.')) {
    if (App.storageAvailable) {
      try { Object.values(App.KEYS).forEach(k => localStorage.removeItem(k)); } catch(e) {}
    }
    location.reload();
  }
});
