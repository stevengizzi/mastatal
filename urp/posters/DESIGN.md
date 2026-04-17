# Poster Design Spec — Gizzi URP / PDC 2026

Shared design anchor for the two-poster presentation by Steven & Jessie at the PDC Day 12 final presentations, April 2026.

## The pair

**Poster A — Jessie.** *The Renter's Zones: Where the Practice Happens.* A spatial / zone-based view of the urban renter permaculture design, showing what each of Zones 0–5 can contain in an Atlanta ITP rental context.

**Poster B — Steven.** *Closing the Loops: How Sustainable Life Flows.* A systems / loop-based view, showing how energy, water, waste, and transport systems close loops across the concentric circles of local sourcing.

The pair reads: *"Here's where it happens (A) and here's how it flows (B)."* Together they answer the PDC's typical "what would you do in your context" question more completely than either could alone.

## Physical format

- **Size:** 18" × 24" portrait orientation. Both posters.
- **Target medium:** printed at 300 DPI on matte or semi-gloss poster paper (FedEx Office, Staples, VistaPrint all handle this for ~$15-45 each).
- **Export:** HTML → PDF via Chrome headless (`chrome --headless --print-to-pdf=output.pdf --no-pdf-header-footer input.html`) or via browser Print → Save as PDF.
- **Bleed:** design to a 17.75" × 23.75" safe area inside the 18" × 24" trim (effectively 0.125" safe margin); background colors and any edge-touching elements extend to the full 18 × 24. For safety, leave 0.5" margin on critical text from the trim edge.
- **Color mode:** design in RGB (`#hex`); printer will convert to CMYK. Avoid pure 100% saturated colors that shift dramatically in CMYK — the palette below has already been softened slightly to survive conversion.

## Shared visual grammar

The pair should *read* as from the same family without looking identical. Hence "complementary but each has its own voice."

### Color palette (shared)

Inherit the existing `closing-the-loops.html` palette with minor adjustments for print:

```
/* Neutrals */
--bg:        #FFFFFF    /* paper white */
--bg-card:   #F5F4F0    /* warm off-white for card backgrounds */
--ink:       #1A1A1A    /* primary text */
--ink-mid:   #6B6A65    /* secondary text */
--ink-light: #9C9A92    /* tertiary / caption text */
--rule:      #E3E2DC    /* hairline rules and card borders */

/* Accent palette — use sparingly, one per section */
--teal-bg:   #E1F5EE   --teal-ink:   #085041   /* ecology / natural */
--blue-bg:   #E6F1FB   --blue-ink:   #0C447C   /* water / infrastructure */
--amber-bg:  #FAEEDA   --amber-ink:  #633806   /* energy / warmth */
--coral-bg:  #FAECE7   --coral-ink:  #712B13   /* waste / fire / action */
--purple-bg: #EEEDFE   --purple-ink: #3C3489   /* philosophy / meta */
--green:     #0F6E56                            /* transport / living */
```

**Poster A (zones)** leans on teal + green + amber — earth-and-growth tones.
**Poster B (loops)** uses all five accents, each mapped to one loop (amber=energy, blue=water, coral=waste, green=transport, purple=philosophy).

Do **not** use dark-mode variants in print-destined posters. Light background only.

### Typography

- **Body:** system sans (Inter, Helvetica Neue, system-ui fallback). 11-12pt body.
- **Headings:** same sans family, weight 600. Title 36-44pt, section 18-20pt, card title 13-14pt.
- **No serifs.** Keep the register modern / technical. A single serif display font for the main title is acceptable if preferred, but not required.
- **Line-height:** 1.45-1.55 for body. Slightly tighter (1.3) for headings.

### Structural grammar

Both posters share:

- **Header band (top 2-2.5" of 24" height):** poster title + subtitle + attribution.
- **Shared epigraph box** (right below the header): the Transition-ethic frame. ~0.75" tall. Same text on both posters:
  > *Earth care. People care. Fair share.* And: **Transition** — the ethic that governs the journey between where you are and where you want to be. You start where you are, with what you have, and design each move to bring you closer.
- **Main content area (~18" of the 24" height):** different on each poster.
- **Shared footer band (bottom ~1.25"):** attribution, ethics icons, key sources (2 columns, 9pt). Same structure, filtered content per poster.

### Handshake paragraphs

Each poster carries a **small sidebar or inset block (~150 words)** explicitly pointing to the other poster. These paragraphs are the glue that makes the pair legible.

**On Poster A (Jessie's), place near the Zone 4–5 content:**

> **The companion view.** This poster shows *where* the practice happens — which zone of the renter's life each yield, relationship, and loop belongs to. The companion poster (*Closing the Loops*) shows *how* the practice flows — how energy, water, waste, and transport close loops across those same zones and across the concentric circles of local sourcing. Together they map the whole system: space and flow.

**On Poster B (Steven's), place near the dependency-radius content:**

> **The companion view.** This poster shows *how* the practice flows — how energy, water, waste, and transport close loops across the household, the cooperative ring, and the city. The companion poster (*The Renter's Zones*) shows *where* the practice happens — which zone of the renter's life each yield, relationship, and loop lives in. Together they map the whole system: flow and space.

## Asymmetry budget

The two posters are allowed to differ meaningfully on these axes:

- **Poster A is more spatial / diagrammatic.** Jessie's zones are inherently geographic; a zone-map illustration at the center (even a schematic one — nested rectangles, concentric rings, or an isometric sketch) carries a lot of the argument. Text is shorter per element; diagrams carry the load.
- **Poster B is more analytical / flow-based.** Steven's loops are process-shaped; tables, directional arrows, and timeline bands do the work. More text density per section is acceptable.
- **Poster A prioritizes yield clarity:** what do you *get* from each zone? Poster B prioritizes systems clarity: what *flows* through each loop?
- **Poster A baby-compatibility is explicit** (Jessie's zone content already carries baby-compatibility ratings from `02-systems-design.md`). Poster B can reference baby-compatibility once but shouldn't make it a theme.

## Content boundaries

To prevent duplication, here's who owns what:

| Topic | Poster A (Zones) | Poster B (Loops) |
|---|---|---|
| Transition ethic | Shared epigraph | Shared epigraph |
| Zone 0–5 map | **Full treatment** | Not shown |
| Five household systems (food/water/energy/waste/transport) | Brief yield mention per zone | **Full treatment** |
| Dependency radius / 5 circles | Light reference | **Full treatment** |
| DIY engineering (solar heater, kotatsu, etc.) | Not shown | **Full treatment** |
| Atlanta org ecosystem | Zone 3–5 placements | Per-loop placements |
| Community / village blueprint | Zone 3–5 anchor | Brief reference only |
| Timeline | Month 1 → Year 5 per zone | Month 1 → Year 5 per system |
| Baby compatibility | **Explicit per zone** | Single passing note |
| AI as sovereignty tool | Brief meta box | **Full meta box** (already in draft) |
| Portability vs. investment | **Explicit per zone** | Brief reference in timeline |
| Sources / footer | Filtered to zone content | Filtered to loops content |

## CSS skeleton for print (shared)

Both posters should open with the same CSS declaration. Starting point:

```css
@page { size: 18in 24in; margin: 0; }
@media print { body { margin: 0; } }
html, body { 
  width: 18in; height: 24in; margin: 0; padding: 0;
  background: var(--bg);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
body { 
  font-family: -apple-system, 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  color: var(--ink);
  font-size: 11pt;
  line-height: 1.5;
}
.poster { width: 18in; height: 24in; padding: 0.75in 0.6in; }
```

The `print-color-adjust: exact` is critical — without it, browsers strip background colors when printing.

## Export workflow

```bash
# Chrome headless (cleanest output, best typography):
google-chrome --headless --disable-gpu \
  --print-to-pdf=zones.pdf \
  --no-pdf-header-footer \
  --print-to-pdf-no-header \
  file:///path/to/zones.html

# Or: open in Chrome, Print → Save as PDF → 
#   Paper size: custom 18 × 24 inches, Margins: None, Background graphics: ON
```

Verify PDF output by zooming to 100% in a PDF viewer — text should be crisp at that zoom; no pixelation means you've got 300+ DPI equivalent.

## Review checklist before printing

- [ ] All text ≥ 9pt, body text ≥ 11pt (readable at arm's length)
- [ ] No color-only information (colorblind-safe: use shape/label too)
- [ ] All accent colors have sufficient contrast with their background (4.5:1 minimum)
- [ ] Handshake paragraph present on each poster, pointing to the other
- [ ] Shared header/footer structure consistent across pair
- [ ] Transition-ethic epigraph identical (word for word) on both
- [ ] Both posters display at 18×24 with nothing clipped at edges
- [ ] Colors render in print preview without major shifts (run a test print of one 8.5×11 page first if possible)
- [ ] Sources footer on both posters; no broken/orphan source refs
- [ ] Attribution consistent: "Steven & Jessie Gizzi | PDC 2026 | Rancho Mastatal, Costa Rica | April 2026"

## File naming

- `posters/zones.html` — Jessie's poster
- `posters/closing-the-loops.html` — Steven's poster (rebuilding in place — the existing file becomes the new version; keep the old as a git history reference)
- `posters/DESIGN.md` — this file

## If something goes wrong

- **Text too small at 18×24:** increase base font to 12pt, accept less content. Better to cut than crowd.
- **Colors look muddy in print proof:** increase saturation on accents by 10-15% in the `--*-bg` swatches.
- **Content doesn't fit:** first move content to the companion poster per the boundary table above; only then cut.
- **FedEx/Staples rejects the file:** export at 300 DPI as PDF, not PNG; confirm 18×24 inches is the page size, not the image size.
