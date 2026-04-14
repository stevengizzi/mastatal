# Spec 01 — "Root Cause Analysis: A Field Guide to How Roots Think"

**Priority:** Must-do
**Format:** Illustrated poster (hand-drawn on large poster board, or digital for projection)
**Estimated time:** 3-5 hours for layout + drawing; 1-2 hours prep if digital
**Audience:** PDC classmates, mixed backgrounds, not scientists

---

## Concept

A single visual that maps the root tip's complete "decision architecture" — all inputs, the processing layer, and the output. The organizing metaphor is a **mixing console** (or signal flow diagram): each tropism is a channel with a fader, the hormones are the bus routing, and the master output is the growth direction vector.

The poster should be comprehensible at a glance (the overall structure) but reward close reading (the details of each tropism, the hormone interactions).

---

## Visual Layout (Top to Bottom)

### Header
**"ROOT CAUSE ANALYSIS"** — large title
Subtitle: *"A Field Guide to How Roots Think"*

### Section 1: The Inputs (top third)
Eleven tropism "channels" arranged in a row (or arc), each with:
- **Icon** representing the stimulus (arrow for gravity, water droplet for moisture, sun for light, etc.)
- **Name** (Gravitropism, Hydrotropism, etc.)
- **Direction** (positive/negative — toward or away)
- **Sensor status** (known / partially known / unknown) — could use a simple color code:
  - Green = sensor identified
  - Yellow = partially characterized
  - Red = unknown
- **Fader position** metaphor — how strong this signal typically is relative to others (gravity high, phonotropism very low)

Group the eleven into three tiers:
1. **Well understood** (3): Gravitropism, Phototropism, Hydrotropism
2. **Partially characterized** (2): Thigmotropism, Halotropism
3. **Poorly understood / speculative** (6): Chemo, Thermo, Magneto, Electro, Oxy, Phono

### Section 2: The Processing Layer (middle third)
This is the heart of the poster. Show the hormone network as a signal routing diagram:

- **Auxin** as the primary bus — thick line, central position
- **Cytokinin** as the counter-signal — opposing arrows showing antagonism
- **ABA** as the stress override — connecting specifically to hydrotropism input
- **Ethylene** as a modulator
- Show the key interactions:
  - Auxin ←→ Cytokinin antagonism (with note: "ratio matters more than absolute levels")
  - ABA → degrades PIN1 → suppresses auxin transport
  - Cytokinin → degrades PIN1 → suppresses gravitropism
  - Drought → degrades amyloplasts → disables gravity sensor entirely

Include a callout: **"No brain. No nerves. Chemistry, not computation."** (Or more precisely: "Distributed analog computation via molecular gradients.")

### Section 3: The Output (bottom third)
A single root tip diagram showing:
- The four zones (root cap, meristematic, transition, elongation)
- Where sensing happens (root cap for gravity; elongation zone for water)
- Where bending happens (elongation zone — differential cell growth)
- The growth direction vector as a bold arrow
- A note: **"Stochastic search with directional bias"** — the output isn't deterministic

### Footer
- Key insight in large text: *"You can't direct roots. You can tune the landscape they navigate."*
- Source attribution
- Project context (PDC 2026, Rancho Mastatal)

---

## Color Scheme

Keep it simple for hand-drawing:
- **Black** for structure and text
- **Green** for the root/plant elements
- **Blue** for water-related signals
- **Red/orange** for stress signals (ABA, salt)
- **Yellow** for light-related signals
- **Brown** for soil/mechanical signals

If digital, use the same palette but cleaner.

---

## Materials Needed (Hand-Drawn)

- Large poster board (ideally 24" x 36" or similar)
- Fine-tip black markers for text and structure
- Colored markers (green, blue, red, yellow, brown minimum)
- Pencil for layout draft
- Ruler/straightedge for the mixing console metaphor

---

## Materials Needed (Digital/Projected)

- Could be built as a single-page SVG, HTML, or high-res image
- Advantage: cleaner, zoomable, editable
- Disadvantage: loses the hand-made quality that fits the PDC context

---

## Content Sources

All content comes from the `knowledge/` files:
- Tropism details: `01-tropisms.md` (summary table at bottom)
- Hormone interactions: `02-hormones.md`
- Root tip anatomy: `03-root-tip-architecture.md`
- Decision system / arbitration: `04-decision-system.md`
- The "stochastic search" framing: `08-stochasticity.md`

---

## Presentation Notes

When talking through this poster with the group:
1. Start at the top: "A root tip is receiving at least eleven different directional signals from its environment..."
2. Move to the middle: "It processes these signals through a hormone network that works like chemistry, not like a brain..."
3. End at the bottom: "And the output isn't a deterministic path — it's a biased random walk. Which means as permaculture designers, our job isn't to tell roots where to go. It's to shape the gradient landscape they're navigating."
4. Invite questions / discussion about implications for planting design at the ranch.
