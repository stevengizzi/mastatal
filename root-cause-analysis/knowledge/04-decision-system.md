# 04 — The Decision System: Multi-Input Arbitration

> **Prerequisites:** Read `00-foundations.md` and `01-tropisms.md` first.

The central question of this project: **how does a root tip integrate multiple competing tropisms into a single growth direction?**

The honest answer: we don't fully know. This is one of the biggest open questions in root biology [Lucini2021]. But based on all the evidence gathered in the other knowledge files, we can now sketch a credible architecture — the "bracket model" — that captures the known competition structure.

---

## The Bracket Model: A Competition Hierarchy

Your instinct about a "sports bracket" was right. Tropisms don't all compete equally in one big free-for-all. They're organized into **tiers** and **sub-competitions**, with the winners of each tier competing against each other.

### The Two Major Signal Channels

The most fundamental structural insight from the tropism research is that the characterized tropisms operate through **two largely separate molecular systems**:

**Channel A — The Auxin/PIN System (Cholodny-Went)**
Used by: Gravitropism, Phototropism, Thigmotropism, and the execution phase of Halotropism.
How it works: Asymmetric redistribution of PIN auxin transport proteins creates an auxin gradient → differential cell elongation → bending.
Shared resource: They all compete for the same PIN proteins on the same cell membranes.

**Channel B — The ABA/Stress System (Non-Cholodny-Went)**
Used by: Hydrotropism, and the activation/sensing phase of Halotropism.
How it works: ABA signaling drives differential growth through a pathway that doesn't rely on asymmetric auxin distribution.

Halotropism is the hybrid — it uses Channel B for sensing/activation but Channel A for bending execution.

### The Tier Hierarchy

Based on everything we know about when tropisms override each other, the priority system looks roughly like this:

```
TIER 1 — DEFAULT CARRIER SIGNAL (always on)
└── Gravitropism
    Always running. The baseline around which everything else operates.
    The "ground truth" that all other tropisms must override to take effect.

TIER 2 — STRESS OVERRIDES (activated by significant environmental stress)
├── Hydrotropism (via ABA — Channel B)
│   Can FULLY disable gravitropism by degrading statoliths
│   Activates under severe drought
│   Also appears to suppress phototropism via shared MIZ1/GNOM pathway
│
└── Halotropism (hybrid — Channel B activation, Channel A execution)
    Can suppress gravitropism by degrading amyloplasts AND internalizing PIN2
    Activates in response to sodium gradients
    Requires ABA signaling for directional sensing

TIER 3 — MOMENTARY OVERRIDES (activated on contact)
└── Thigmotropism (via ethylene suppression + Channel A)
    Temporarily immobilizes statoliths (doesn't destroy them)
    Suppresses gravitropism only while contact is maintained
    Gravitropism reasserts when contact is lost

TIER 4 — MODULATORS (adjusts other tropisms' set points)
└── Phototropism (via Channel A)
    Typically too weak to override gravitropism on Earth
    Adjusts the gravitropic set-point angle
    Shares PIN machinery with gravitropism — competes at the molecular level
    May be partially suppressed when hydrotropism is active

TIER 5 — UNCHARACTERIZED (unknown priority)
├── Chemotropism
├── Thermotropism
├── Magnetotropism
├── Electrotropism
├── Oxytropism
└── Phonotropism
```

### How the "bracket" plays out

**Under normal, well-watered conditions:**
Gravitropism dominates. Phototropism makes minor adjustments to the angle. Thigmotropism handles individual obstacles but always hands back to gravitropism afterward. The root grows generally downward with local wobbles. On the mixing console: gravity fader at 80%, photo at 10%, thigmo activates momentarily when obstacles are hit, everything else near zero.

**Under moderate drought:**
ABA levels rise. Hydrotropism begins activating. Cytokinin starts degrading PIN1, weakening gravitropism's auxin redistribution. The root starts favoring water-seeking over depth-seeking. On the console: gravity fader drops to 50%, hydro rises to 40%.

**Under severe drought:**
ABA triggers statolith degradation. Gravitropism goes nearly offline. Hydrotropism takes over as the primary directional signal. The root may grow laterally or even upward to reach moisture. On the console: gravity fader at 10%, hydro at 80%.

**In saline soil:**
Halotropism activates. PIN2 is internalized on the salt-facing side. Amyloplasts degrade. The root bends away from salt, overriding the gravity vector. If there's also a water gradient, both hydrotropism and halotropism are active simultaneously — they both use ABA and both suppress gravitropism, but one pulls toward water and the other pushes away from salt. How they resolve if water is near salt is unknown.

**Encountering a rock:**
Thigmotropism activates on contact. Ethylene drops, statoliths are temporarily immobilized, PIN2 redistributes to route around the obstacle. Once past the obstacle, gravitropism reasserts. Total override duration: minutes to hours. The root returns to its gravitropic set-point angle.

### The key insight: it's a mixing console with automation

Your original mixing console metaphor is good, but it needs one upgrade: **the fader positions aren't static — they change dynamically based on environmental conditions.** It's a mixing console with automation curves. Under normal conditions, the automation keeps gravity dominant. Under stress, the automation pulls gravity down and pushes hydrotropism/halotropism up. On obstacle contact, thigmotropism gets a momentary boost. The automation curves are written by the hormone network (ABA, cytokinin, ethylene), not by a central processor.

In engineering terms: there's no scheduler. There's no priority queue with explicit ordering. Instead, the priorities *emerge* from the molecular interactions. Hydrotropism overrides gravitropism not because it has higher priority in some lookup table, but because ABA signaling physically destroys the gravity sensors and degrades the auxin transporters. The priority is implemented through molecular warfare, not through a control plane.

---

## The Feedback Loop Problem

The decision system is not one-shot. It's a continuous feedback loop:

1. Root tip is at position X, experiencing stimulus field S
2. Hormone redistribution drives differential growth, changing root shape
3. New shape puts root tip at position X', experiencing a *modified* stimulus field S'
4. Repeat

This was formally modeled in a 2020 PNAS paper [Goriely2020] that captured gravitropic, phototropic, nutational, and thigmotropic responses within a single mathematical framework. The key insight: tropism is a multiscale dynamic process where stimulus → hormone transport → tissue deformation → shape change → new stimulus, repeating continuously.

Additionally, roots modify their own environment as they grow:
- **Water depletion zones** — absorbing water creates local dry zones, changing moisture gradients
- **Nutrient depletion** — absorbing nutrients changes the chemotropic landscape
- **Exudate secretion** — root chemicals change soil chemistry, attracting microbes, repelling competitors
- **Oxygen consumption** — root respiration depletes local O₂
- **Soil compaction** — physical growth changes soil structure

These environmental feedback loops mean that even a perfectly understood decision system would be difficult to predict, because the "inputs" are constantly being modified by the "outputs." [confidence: established]

---

## Does hydrotropism also disarm phototropism?

Yes, at least partially. A 2023 study found that the genes MIZ1 and GNOM, required for hydrotropism, are also required for phototropism — mutations that eliminate hydrotropism also dramatically reduce phototropism [Pang2023_JXB]. The same tissues in the elongation zone cortex control both tropisms. So when hydrotropism activates (via ABA/cytokinin) and starts dismantling the auxin transport system, phototropism is likely collateral damage — it shares enough of the downstream pathway that suppressing one suppresses the other.

This makes biological sense: under severe drought, the root needs to find water. Gravity (direction to deeper soil) and light (indicator of soil surface) are both less important than moisture when the plant is dying of thirst. Suppressing both simultaneously — which the ABA/cytokinin system appears to do — is an efficient response. [confidence: inferred]

---

## What's Still Missing

**Quantitative thresholds:** At what drought severity does hydrotropism override gravitropism? At what salt concentration does halotropism activate? How do these thresholds vary between species? Almost completely unmeasured [Lucini2021].

**Interaction rules between Tier 2 tropisms:** What happens when the root encounters both drought and salt? Both halotropism and hydrotropism are active, both suppress gravitropism, but they might pull in different directions. The resolution is unknown.

**How Tier 5 tropisms integrate:** If chemotropism, thermotropism, etc. are real, where do they plug into the bracket? Do they use Channel A (auxin/PIN), Channel B (ABA), or something else entirely?

**The tissue-level voting problem:** The same stress can produce different hormone responses in different cell layers. PIN1 (vascular) and PIN2 (outer layers) respond differently to the same osmotic stress [Rowe2016]. The "decision" isn't uniform across the root tip — different tissues may be "voting" for different directions, and the collective behavior emerges from their interaction. How this voting works is almost entirely unexplored. [confidence: established]