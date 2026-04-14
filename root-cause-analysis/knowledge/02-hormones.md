# 02 — Hormones: The Chemical Processing Layer

Root growth direction is governed not by a nervous system but by hormone gradients. Each root tip makes local decisions based on the concentrations and ratios of several plant hormones (phytohormones) that interact in a complex, cross-talking network [Leyser2018, Kurepa2022].

The key insight: **it's the ratio between hormones, not their absolute levels, that drives behavior.** The same concentration of auxin that promotes growth in a stem inhibits growth in a root. And the interaction between hormones changes depending on tissue type, developmental stage, and environmental conditions [Leyser2018].

---

## The Major Players

### Auxin (IAA — indole-3-acetic acid)

**Role:** The primary growth-direction hormone. Often called the "master regulator" of root development [Kurepa2022].

**What it does in roots:**
- Promotes root elongation at low concentrations, inhibits it at high concentrations
- Promotes lateral root formation
- Asymmetric distribution drives gravitropism and several other tropisms
- Transported directionally (polar auxin transport) by PIN transporter proteins on cell membranes

**Signaling mechanism:** Works through a repression-release mechanism. Auxin acts as "molecular glue" that strengthens interaction between receptor proteins (TIR1/AFB) and growth-inhibitor proteins (AUX/IAA). This leads to degradation of the inhibitors, which de-represses transcriptional response activators called Auxin Response Factors (ARFs) [Kurepa2022].

**Key detail:** Auxin signaling contains a built-in negative feedback loop — auxin induces expression of its own inhibitors (AUX/IAA proteins), creating self-limiting oscillatory dynamics [Kurepa2022].

**Confidence:** [confidence: established]

---

### Cytokinin (CTK)

**Role:** Generally opposes auxin in roots. Promotes shoot growth, inhibits root growth.

**What it does in roots:**
- Inhibits root elongation and lateral root emergence
- At the root meristem, antagonizes auxin to control the boundary between cell division and cell differentiation
- Causes degradation of PIN1 auxin transport proteins, disrupting auxin gradients

**Interaction with auxin:** Both antagonistic and synergistic effects, depending on context. Cytokinin regulates auxin biosynthesis rate; auxin degrades cytokinin by inducing cytokinin oxidase (CKX) enzymes. During root development, the antagonism is dominant: auxin encourages root production while cytokinin inhibits it and reverses auxin's effects [Leyser2018, Kurepa2022].

**Key role in hydrotropism:** Asymmetrical cytokinin distribution causes degradation of PIN1 proteins, suppressing gravitropism so the hydrotropic response can dominate [Wikipedia_Hydrotropism]. This makes cytokinin a "switch" between tropism modes.

**Confidence:** [confidence: established]

---

### Abscisic Acid (ABA)

**Role:** The "stress hormone." Surges under drought, osmotic stress, and other adverse conditions.

**What it does in roots:**
- Primary driver of hydrotropism (directs root growth toward water)
- Under osmotic stress, modulates auxin transporter levels and localization, reducing root auxin concentrations
- Induces lateral root growth through PYL8 receptor proteins
- Represses PIN1 expression, modifying auxin transport patterns

**Interaction with auxin:** ABA up-regulates expression of ABI4, which represses PIN1 expression, directly interfering with auxin transport. However, auxin can inhibit ABI4 in return, creating a regulatory tug-of-war [Leyser2018].

**Key detail:** The interplay of ABA, auxin, cytokinin, and ethylene under osmotic stress is tissue-specific — different cell layers in the same root respond differently to the same stress signal. PIN1 (expressed in vascular tissue) and PIN2 (expressed in outer cell layers) respond differently to the same osmotic stress [Rowe2016].

**Confidence:** [confidence: established]

---

### Ethylene

**Role:** Involved in stress responses, root hair development, and modulating auxin transport.

**What it does in roots:**
- Induces expression of PIN3 and PIN7, which reduce local auxin accumulation at lateral root initiation sites, decreasing lateral root formation [Leyser2018]
- Promotes adventitious root growth (sometimes synergistically with other hormones)
- Interacts with ABA in complex ways under stress

**Confidence:** [confidence: established]

---

### Gibberellic Acid (GA)

**Role:** Primarily a growth promoter. Interacts with auxin and cytokinin.

**What it does in roots:**
- Promotes root elongation
- Antagonistic with cytokinin in many developmental processes including root elongation and cell differentiation [Weiss2007]
- May be asymmetrically altered in gravistimulated roots, though its role there is poorly understood [Vandenbrink2020]

**Confidence:** [confidence: established] for general role; [confidence: inferred] for role in tropisms.

---

### Other Hormones

**Jasmonic Acid (JA)** — involved in defense responses and wound signaling. Interacts with auxin in stress responses [Leyser2018].

**Brassinosteroids (BR)** — promote cell elongation. Interact with auxin via the TMK receptor pathway [Leyser2018].

**Strigolactones (SL)** — regulate branching. Auxin from the shoot promotes strigolactone production in the root, which then feeds back to inhibit branching. Acts as a "second messenger" for auxin [Leyser2018].

**Salicylic Acid (SA)** — primarily involved in pathogen defense [Leyser2018].

---

## Secondary Messengers

Beyond the hormones themselves, several secondary signaling molecules are involved in tropism responses:

- **Calcium (Ca2+)** — Asymmetrically distributed in gravistimulated roots. Involved in thigmotropism signaling. May constitute a hub for interaction of related tropism signaling pathways [Vandenbrink2020].
- **Reactive Oxygen Species (ROS)** — Asymmetrically altered in gravistimulated roots. Role poorly understood [Vandenbrink2020].
- **Nitric Oxide (NO)** — Similar to ROS: asymmetric distribution observed, function unclear [Vandenbrink2020].
- **pH changes** — Altered asymmetrically in the elongation zone during gravitropism [Vandenbrink2020].
- **Flavonoids** — Part of the dynamic sensing and signaling system that mediates root bending [Lucini2021].

---

## The Hormone Network — Key Principles

1. **Cross-talk is the rule, not the exception.** Hormone signaling pathways constantly interact, forming a complex regulatory network [Leyser2018]. Although the molecular backbones of individual pathways have been identified, the mechanisms underlying their interactions are largely unknown [SYAC1_2020].

2. **Context dependence.** The same hormone can have opposite effects depending on tissue type, concentration, and what other hormones are present. Auxin promotes growth in stems but inhibits it in roots (at high concentration). The auxin-cytokinin interaction can be antagonistic or synergistic depending on developmental context [Kurepa2022].

3. **Feedback loops everywhere.** Auxin induces its own inhibitors. ABA represses auxin transport, but auxin can repress ABA signaling. Cytokinin degrades auxin transporters, but auxin degrades cytokinin. These feedback loops create oscillatory dynamics and emergent behaviors that are difficult to predict from individual pathway analysis [Rowe2016].

4. **The ratio matters more than absolute levels.** The auxin-to-cytokinin ratio is a primary determinant of whether a cell divides, elongates, or differentiates. Environmental stresses shift these ratios, and the plant's response is determined by the new ratio, not by any single hormone level [Kurepa2022].

---

## Hormone-Based vs. Neural Processing

In animals, a nerve signal is an electrical impulse traveling at meters per second along dedicated channels (axons). The signal is fast, point-to-point, and processed by a central organ (the brain).

Plants have no equivalent. Instead [NatGeo_PlantsTalk]:
- Signals travel through movement of chemicals in vascular tubes — "more like plumbing" than wiring
- There is no central processor — computation is distributed across every cell in the root tip
- "Decisions" emerge from hormone concentration gradients, not from centralized integration
- Each cell independently grows faster or slower based on local hormone levels; the collective effect of millions of cells doing this produces bending

This makes root growth more analogous to analog computing or slime mold pathfinding than to neural network processing. The "intelligence" is in the chemistry, not in any dedicated information-processing organ [confidence: inferred].
