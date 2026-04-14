# 04 — The Decision System: Multi-Input Arbitration

The central question of this project: **how does a root tip integrate multiple competing tropisms into a single growth direction?**

The short answer: we don't fully know. This is one of the biggest open questions in root biology [Lucini2021]. But we can characterize the system's architecture and several of its known behaviors.

---

## The Mixing Console Metaphor

Each tropism is an input signal. Each signal has a strength (determined by the magnitude of the stimulus) and a direction (determined by the gradient). The root tip must produce a single output: a growth direction.

The metaphor of a mixing console is useful:
- **Each tropism is a channel fader** — it can be strong or weak depending on the stimulus
- **Hormones are the bus routing** — they determine how signals combine, compete, and override each other
- **The master output is the growth vector** — the actual direction the root grows

But unlike a mixing console, the routing isn't fixed. The plant can dynamically reconfigure which channels dominate.

---

## Known Arbitration Behaviors

### 1. Gravitropism is the default dominant signal

On Earth, gravity is the primary determinant of root growth direction, overruling most other tropisms under normal conditions [Vandenbrink2020]. This makes sense — gravity is constant, unidirectional, and reliable. It's the "carrier signal" on which other modulations are layered.

### 2. Tropisms can suppress each other's sensors

This is the most remarkable finding. When a competing tropism needs to override gravitropism, the plant doesn't just amplify the competing signal — it actively degrades the gravitropism sensor:

- **Hydrotropism under severe drought:** The plant degrades starch-filled amyloplasts in the root cap, literally disassembling the gravity sensor so the root can prioritize water-finding [Gilroy2008_CurrentBio].
- **Halotropism (salt avoidance):** Also degrades amyloplasts, but possibly through a different molecular pathway [Vandenbrink2020].
- **Thigmotropism (touch):** Suppresses gravitropism through a mechanism that does NOT involve starch degradation — a third pathway for gravitropism attenuation [Gilroy2008_CurrentBio].

This means there are at least three different molecular mechanisms for turning down the "gravity channel," deployed by different competing tropisms. [confidence: established]

### 3. The vector hypothesis

Researchers have proposed that the actual degree of root bending depends on a vector sum of competing tropistic responses. For example, the phototropic and gravitropic responses combine as vectors to determine the final growth angle [Lucini2021].

However, more studies are needed to verify this model at different stimulus magnitudes. It's not clear whether simple vector addition is sufficient, or whether the interactions are more complex (e.g., nonlinear, threshold-dependent) [Lucini2021]. [confidence: inferred]

### 4. Shared molecular machinery creates coupling

Multiple tropisms converge on the same downstream molecular components (PIN transporters, auxin response factors, Ca2+ signaling). This means tropism signals don't just add up independently — they compete for the same limited molecular machinery [Vandenbrink2020].

For example, if gravitropism is using PIN2 to create an auxin gradient, and thigmotropism is trying to use the same PIN2 for a different gradient, the two signals must compete at the molecular level. [confidence: inferred]

### 5. Tissue-specific responses

The same stress can produce different hormone responses in different cell layers of the root. Under osmotic stress, PIN1 (in vascular tissue) and PIN2 (in outer cell layers) respond differently [Rowe2016]. This means the "decision" isn't made by the whole root tip uniformly — different tissues may be "voting" differently and the collective behavior emerges from their interaction. [confidence: established]

---

## The Feedback Loop Problem

The decision system is not one-shot. It's a continuous feedback loop:

1. Root tip is at position X, experiencing stimulus field S
2. Hormone redistribution drives differential growth, changing root shape
3. New shape puts root tip at position X', experiencing modified stimulus field S'
4. Repeat

This was formally modeled in a 2020 PNAS paper [Goriely2020] that captured gravitropic, phototropic, nutational, and thigmotropic responses within a single mathematical framework. The key insight: tropism is a multiscale dynamic process where stimulus → hormone transport → tissue deformation → shape change → new stimulus, and the whole cycle repeats continuously.

Additionally, roots modify their own environment as they grow:
- **Water depletion zones** — absorbing water creates local dry zones, changing moisture gradients
- **Nutrient depletion** — absorbing nutrients changes the chemotropic landscape
- **Exudate secretion** — root chemicals change soil chemistry, attracting microbes, repelling competitors
- **Oxygen consumption** — root respiration depletes local O2
- **Soil compaction** — physical growth changes soil structure

These environmental feedback loops mean that even a perfectly understood decision system would be difficult to predict, because the "inputs" are constantly being modified by the "outputs." [confidence: established]

---

## What's Missing

The biggest gap: **we don't know the relative strengths of tropisms or their masking thresholds.** We know hydrotropism can override gravitropism under severe drought. But at what drought threshold does the switch happen? How does the magnitude of a moisture gradient compare to the magnitude of a nutrient gradient in determining growth direction? These quantitative relationships are largely unmeasured [Lucini2021].

We also don't know whether tropism interactions are:
- **Additive** (vector sum)
- **Competitive** (winner-take-all with suppression of losers)
- **Hierarchical** (fixed priority ordering)
- **Contextual** (priority depends on plant's current state)
- **Some combination** (most likely)

Current evidence suggests contextual and competitive elements (the amyloplast degradation mechanism is clearly competitive/suppressive), but a unified model doesn't exist yet [confidence: inferred].
