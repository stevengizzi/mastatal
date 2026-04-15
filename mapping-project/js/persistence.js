// ── localStorage availability check ──────────────────────────────────────
App.storageAvailable = false;
try {
  localStorage.setItem('_mastatal_test', '1');
  localStorage.removeItem('_mastatal_test');
  App.storageAvailable = true;
} catch(e) {}

// ── Storage keys ──────────────────────────────────────────────────────────
App.KEYS = {
  site:         'mastatal_site',
  interior:     'mastatal_interior',
  vaIdx:        'mastatal_va_idx',
  measurements: 'mastatal_measurements',
  elevUnit:     'mastatal_elev_unit',
  mapRotation:  'mastatal_map_rotation',
};

// ── Save indicator ────────────────────────────────────────────────────────
App.flashSaved = function() {
  const dot = document.getElementById('savedDot');
  if (!dot) return;
  dot.style.opacity = '1';
  clearTimeout(App.savedFlashTimer);
  App.savedFlashTimer = setTimeout(() => { dot.style.opacity = '0'; }, 1500);
};

// ── Auto-save to localStorage ─────────────────────────────────────────────
App.autoSave = function() {
  if (!App.storageAvailable) return;
  try {
    localStorage.setItem(App.KEYS.site,         JSON.stringify(App.SITE));
    localStorage.setItem(App.KEYS.interior,     JSON.stringify(App.INTERIOR));
    localStorage.setItem(App.KEYS.vaIdx,        String(App.VA_IDX));
    localStorage.setItem(App.KEYS.measurements, JSON.stringify(App.measurements));
    localStorage.setItem(App.KEYS.elevUnit,     App.elevUnit);
    localStorage.setItem(App.KEYS.mapRotation,  String(App.mapRotation));
    App.flashSaved();
  } catch(e) {}
};

App.debouncedSaveRotation = function() {
  clearTimeout(App.rotSaveTimer);
  App.rotSaveTimer = setTimeout(App.autoSave, 600);
};

// ── Load from localStorage ────────────────────────────────────────────────
App.loadFromStorage = function() {
  if (!App.storageAvailable) return false;
  try {
    const siteRaw = localStorage.getItem(App.KEYS.site);
    if (!siteRaw) return false;
    const loadedSite = JSON.parse(siteRaw);
    if (!Array.isArray(loadedSite) || loadedSite.length < 3) return false;

    App.SITE.length = 0;
    loadedSite.forEach(n => App.SITE.push(n));

    const intRaw = localStorage.getItem(App.KEYS.interior);
    App.INTERIOR.length = 0;
    if (intRaw) {
      const loadedInt = JSON.parse(intRaw);
      if (Array.isArray(loadedInt)) loadedInt.forEach(n => App.INTERIOR.push(n));
    }

    const vaRaw = localStorage.getItem(App.KEYS.vaIdx);
    if (vaRaw !== null) App.VA_IDX = parseInt(vaRaw, 10) || 0;

    const measRaw = localStorage.getItem(App.KEYS.measurements);
    if (measRaw) {
      const loadedMeas = JSON.parse(measRaw);
      if (Array.isArray(loadedMeas)) {
        App.measurements.length = 0;
        loadedMeas.forEach(m => App.measurements.push(m));
      }
    }

    const unitRaw = localStorage.getItem(App.KEYS.elevUnit);
    if (unitRaw === 'ft' || unitRaw === 'm') App.elevUnit = unitRaw;

    const rotRaw = localStorage.getItem(App.KEYS.mapRotation);
    if (rotRaw !== null) App.mapRotation = parseFloat(rotRaw) || 0;

    return true;
  } catch(e) { return false; }
};
