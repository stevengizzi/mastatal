App.renderHudCompass = function() {
  const needle = document.getElementById('compassNeedle');
  if (needle) needle.setAttribute('transform', `rotate(${-App.mapRotation})`);
  const rotLabel = document.getElementById('compassRotLabel');
  if (rotLabel) {
    const rotNorm = ((App.mapRotation % 360) + 360) % 360;
    const label = rotNorm < 1 ? 'N' : rotNorm <= 180 ? `${Math.round(rotNorm)}°E` : `${Math.round(360-rotNorm)}°W`;
    rotLabel.textContent = label;
  }
};

App.renderHudLegend = function() {
  const minEl = document.getElementById('hudLegendMin');
  const maxEl = document.getElementById('hudLegendMax');
  if (minEl) minEl.textContent = App.dispElevVal(App.globalMinE) + App.elevSuffix();
  if (maxEl) maxEl.textContent = App.dispElevVal(App.globalMaxE) + App.elevSuffix();
};

App.renderHudScale = function() {
  const scaleSvg = document.getElementById('hudScaleSvg');
  const ratioDiv = document.getElementById('hudRatioText');
  if (!scaleSvg || !ratioDiv) return;
  if (App.scaleBarMode === 'ratio') {
    scaleSvg.style.display = 'none';
    ratioDiv.style.display = 'block';
    ratioDiv.textContent = `Scale 1:${App.roundedRatio(App.currentRatio())}`;
    ratioDiv.onclick = (e) => { e.stopPropagation(); App.startInlineScaleEdit(ratioDiv, 'ratio'); };
    return;
  }
  ratioDiv.style.display = 'none';
  scaleSvg.style.display = 'block';
  const rect = App.mapWrap.getBoundingClientRect();
  const screenPxPerSvgUnit = rect.width > 0 ? rect.width / App.vbW : 1;
  const bpx = Math.max(20, Math.round(App.scaleMeterVal * App.sc * screenPxPerSvgUnit));
  scaleSvg.setAttribute('width', bpx + 'px');
  scaleSvg.setAttribute('height', '22px');
  scaleSvg.setAttribute('viewBox', `0 -6 ${bpx} 22`);
  scaleSvg.innerHTML = '';
  const el = App.el;
  el('rect', {x:0, y:-2, width:bpx, height:4, fill:'#2a352a', rx:1}, scaleSvg);
  el('rect', {x:0, y:-2, width:bpx/2, height:4, fill:'#4a6a3a', rx:1}, scaleSvg);
  el('line', {x1:0, y1:-6, x2:0, y2:6, stroke:'#4a6a3a', 'stroke-width':1}, scaleSvg);
  el('line', {x1:bpx, y1:-6, x2:bpx, y2:6, stroke:'#4a6a3a', 'stroke-width':1}, scaleSvg);
  const scaleLbl = `${Number.isInteger(App.scaleMeterVal) ? App.scaleMeterVal : App.scaleMeterVal.toFixed(1)}m / ${Math.round(App.m2ft(App.scaleMeterVal))}ft`;
  const scaleTxt = el('text', {x:bpx/2, y:-10, 'text-anchor':'middle', fill:'#607a50', 'font-size':9, 'font-family':"'Courier New',monospace", textContent:scaleLbl, style:'cursor:pointer'}, scaleSvg);
  scaleTxt.addEventListener('click', (e) => { e.stopPropagation(); App.startInlineScaleEdit(scaleTxt, 'bar'); });
};
